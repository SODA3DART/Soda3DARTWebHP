/**
 * シャトル運航簿ローカルサーバー
 * - 運転手: 乗降記録（運航簿相当）+ スマホGPSの定期送信
 * - 事務/確認: 直近位置の地図表示・週次の乗車件数サマリ
 *
 * 起動: npm start
 * 公開: npx ngrok http 3050  （README参照）
 */

const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = Number(process.env.PORT) || 3050;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const TRIPS_FILE = path.join(DATA_DIR, 'trips.jsonl');
const POSITIONS_FILE = path.join(DATA_DIR, 'positions.jsonl');
/** 公開時刻表（bus.html と同じ CSV）。無ければ suggest API は null を返す */
const BUS_CSV_PATH = path.join(ROOT, '..', 'Busdata', 'busN.csv');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  for (const f of [TRIPS_FILE, POSITIONS_FILE]) {
    if (!fs.existsSync(f)) fs.writeFileSync(f, '', 'utf8');
  }
}

function readJsonLines(filePath, maxLines = 5000) {
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split('\n').filter(Boolean);
  const slice = lines.length > maxLines ? lines.slice(-maxLines) : lines;
  const out = [];
  for (const line of slice) {
    try {
      out.push(JSON.parse(line));
    } catch (_) {
      /* skip bad line */
    }
  }
  return out;
}

function appendJsonLine(filePath, obj) {
  fs.appendFileSync(filePath, JSON.stringify(obj) + '\n', 'utf8');
}

function parseIso(d) {
  const t = Date.parse(d);
  return Number.isNaN(t) ? null : t;
}

function timeToMinutes(hhmm) {
  const s = String(hhmm || '').trim();
  const m = /^(\d{1,2}):(\d{2})$/.exec(s);
  if (!m) return null;
  const h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

/** CSV: Busnumber, 9停の時刻..., type — bus.html と同じ参照列（Type1→列1 県体前、Type2→列2 上熊本） */
function loadBusScheduleFromCsv() {
  if (!fs.existsSync(BUS_CSV_PATH)) return [];
  let raw;
  try {
    raw = fs.readFileSync(BUS_CSV_PATH, 'utf8');
  } catch (_) {
    return [];
  }
  const lines = raw.split(/\r?\n/).filter((l) => l.trim());
  const buses = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < 11) continue;
    const busNumber = parseInt(cols[0].trim(), 10);
    const type = parseInt(cols[cols.length - 1].trim(), 10);
    if (!Number.isFinite(busNumber) || !Number.isFinite(type) || (type !== 1 && type !== 2)) continue;
    const timeCells = cols.slice(1, 10).map((c) => c.trim());
    buses.push({ busNumber, type, timeCells });
  }
  return buses;
}

function getNextBusForType(buses, type, columnIndex) {
  const now = new Date();
  const nowM = now.getHours() * 60 + now.getMinutes();
  const list = buses.filter((b) => b.type === type);
  const idx = columnIndex - 1;
  if (idx < 0 || idx > 8) return null;

  for (const b of list) {
    const cell = b.timeCells[idx];
    const busM = timeToMinutes(cell);
    if (busM == null) continue;
    if (busM > nowM) {
      return {
        busNumber: b.busNumber,
        departureTime: cell,
        minutesUntil: busM - nowM,
        columnIndex
      };
    }
  }

  for (const b of list) {
    const cell = b.timeCells[idx];
    const busM = timeToMinutes(cell);
    if (busM == null) continue;
    const lateBy = nowM - busM;
    if (lateBy >= 0 && lateBy <= 5) {
      return {
        busNumber: b.busNumber,
        departureTime: cell,
        minutesUntil: -lateBy,
        delayed: true,
        columnIndex
      };
    }
  }
  return null;
}

const app = express();
app.use(express.json({ limit: '256kb' }));

/** Safari が API を 304 でキャッシュして空のままになるのを防ぐ */
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(express.static(path.join(ROOT, 'public')));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'bus-ops-local', time: new Date().toISOString() });
});

/** 運航簿1件（乗降・メモ） */
app.post('/api/trips', (req, res) => {
  try {
    ensureDataDir();
    const body = req.body || {};
    const record = {
      id: `trip_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      createdAt: new Date().toISOString(),
      routeLabel: String(body.routeLabel || '').trim() || '未設定路線',
      legLabel: String(body.legLabel || '').trim(),
      departedAt: body.departedAt ? String(body.departedAt) : null,
      passengersOn: Math.max(0, parseInt(body.passengersOn, 10) || 0),
      passengersOff: Math.max(0, parseInt(body.passengersOff, 10) || 0),
      busNumber: body.busNumber != null && body.busNumber !== '' ? String(body.busNumber).trim().slice(0, 32) : '',
      note: String(body.note || '').trim().slice(0, 2000)
    };
    appendJsonLine(TRIPS_FILE, record);
    res.status(201).json({ ok: true, trip: record });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e.message || e) });
  }
});

app.get('/api/trips', (req, res) => {
  ensureDataDir();
  let rows = readJsonLines(TRIPS_FILE, 8000);
  const from = parseIso(req.query.from);
  const to = parseIso(req.query.to);
  if (from != null) {
    rows = rows.filter((r) => Date.parse(r.createdAt) >= from);
  }
  if (to != null) {
    rows = rows.filter((r) => Date.parse(r.createdAt) <= to);
  }
  rows.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  res.json({ ok: true, trips: rows.slice(0, 500) });
});

/** GPSポイント（運転手スマホから定期POST） */
app.post('/api/positions', (req, res) => {
  try {
    ensureDataDir();
    const body = req.body || {};
    const lat = Number(body.lat);
    const lng = Number(body.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      return res.status(400).json({ ok: false, error: 'lat/lng が不正です' });
    }
    if (Math.abs(lat) > 90 || Math.abs(lng) > 180) {
      return res.status(400).json({ ok: false, error: '座標範囲外です' });
    }
    const record = {
      id: `pos_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      recordedAt: body.recordedAt ? String(body.recordedAt) : new Date().toISOString(),
      receivedAt: new Date().toISOString(),
      lat,
      lng,
      accuracy: body.accuracy != null ? Number(body.accuracy) : null,
      heading: body.heading != null ? Number(body.heading) : null,
      speed: body.speed != null ? Number(body.speed) : null,
      driverLabel: String(body.driverLabel || '').trim().slice(0, 120),
      busLabel: String(body.busLabel || '').trim().slice(0, 120),
      busNumber: body.busNumber != null && body.busNumber !== '' ? String(body.busNumber).trim().slice(0, 32) : ''
    };
    appendJsonLine(POSITIONS_FILE, record);
    res.status(201).json({ ok: true, position: record });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e.message || e) });
  }
});

app.get('/api/positions/recent', (req, res) => {
  ensureDataDir();
  const limit = Math.min(200, Math.max(1, parseInt(req.query.limit, 10) || 80));
  let rows = readJsonLines(POSITIONS_FILE, 12000);
  rows.sort((a, b) => {
    const tb = Date.parse(b.recordedAt) || Date.parse(b.receivedAt) || 0;
    const ta = Date.parse(a.recordedAt) || Date.parse(a.receivedAt) || 0;
    return tb - ta;
  });
  res.json({ ok: true, positions: rows.slice(0, limit) });
});

/** 現在時刻に基づく「次の便」のバスナンバー（時刻表 CSV と bus.html の既定列と同一） */
app.get('/api/schedule/suggest', (_req, res) => {
  const buses = loadBusScheduleFromCsv();
  if (!buses.length) {
    return res.json({
      ok: true,
      csvFound: false,
      csvPath: BUS_CSV_PATH,
      type1: null,
      type2: null,
      hint: 'Busdata/busN.csv が見つかりません。リポジトリの accessory/Busdata に配置してください。'
    });
  }
  const type1 = getNextBusForType(buses, 1, 1);
  const type2 = getNextBusForType(buses, 2, 2);
  res.json({
    ok: true,
    csvFound: true,
    type1,
    type2,
    ref: { type1Column: 1, type2Column: 2, note: 'Type1=県立体育館前の列, Type2=上熊本駅の列（bus.html 既定と同じ）' }
  });
});

/** 直近7日分: 日別 乗車・降車合計（週次のざっくり把握用） */
app.get('/api/stats/daily', (_req, res) => {
  ensureDataDir();
  const rows = readJsonLines(TRIPS_FILE, 12000);
  const byDay = {};
  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  for (const r of rows) {
    const t = Date.parse(r.createdAt);
    if (Number.isNaN(t) || now - t > weekMs) continue;
    const day = new Date(t).toISOString().slice(0, 10);
    if (!byDay[day]) {
      byDay[day] = { day, trips: 0, on: 0, off: 0 };
    }
    byDay[day].trips += 1;
    byDay[day].on += r.passengersOn || 0;
    byDay[day].off += r.passengersOff || 0;
  }
  const list = Object.values(byDay).sort((a, b) => a.day.localeCompare(b.day));
  res.json({ ok: true, days: list });
});

app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ ok: false, error: 'not found' });
  }
  res.status(404).send('Not found');
});

ensureDataDir();
const server = app.listen(PORT, () => {
  console.log(`bus-ops-local: http://127.0.0.1:${PORT}`);
  console.log('  運転手画面: /driver.html');
  console.log('  ダッシュボード: /dashboard.html');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[bus-ops-local] ポート ${PORT} は既に使用中です（別の node / 前回のウィンドウが残っている可能性があります）。\n`);
    console.error('対処の例:');
    console.error('  1) 「bus-ops-local (npm start)」の cmd ウィンドウを閉じる、またはそのプロセスを終了する');
    console.error('  2) 使用中の PID を確認:  netstat -ano | findstr :' + PORT);
    console.error('     終了:  taskkill /PID <PID> /F');
    console.error('  3) 別ポートで起動（ngrok の番号も合わせる）:');
    console.error('     cmd:    set PORT=3051 && npm start');
    console.error('     PowerShell:  $env:PORT=3051; npm start\n');
    process.exit(1);
  }
  throw err;
});
