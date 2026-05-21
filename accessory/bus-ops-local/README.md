# シャトル運航ローカルサーバー（`bus-ops-local`）

GitHub Pages の時刻表とは**別物**です。運転手の運航簿（乗降）とスマホGPSを、**あなたのPC上で動く小さなサーバー**に蓄積し、地図と週次のざっくり集計で見られるようにします。

## 想定している課題との対応

| 課題 | このアプリでできること（現状） |
|------|--------------------------------|
| 学生: 乗れるか・遅延 | 運転手がメモに遅延や混雑を残せる。**学生向け自動判定は未実装**（次段で、定員・残席ルールやGPS到達推定と連携可能）。 |
| 運転手: 紙の運航簿 | Webフォームで乗降を記録し、JSONL に保存（後からCSV化しやすい形式）。 |
| 位置と乗車の可視化 | GPS を定期POST → ダッシュボードで直近軌跡を地図表示。乗降は日別集計バーで把握。 |
| GitHub Pages では無理 | **ローカルで `node` を動かす**前提。 |

## 必要なもの

- Node.js 18 以上
- （任意）ngrok アカウント — スマホから同じLAN外にアクセスする場合

## セットアップと起動

```bash
cd accessory/bus-ops-local
npm install
npm start
```

ブラウザで次を開きます。

- トップ: http://127.0.0.1:3050/
- 運転手: http://127.0.0.1:3050/driver.html
- ダッシュボード: http://127.0.0.1:3050/dashboard.html

データは `data/trips.jsonl` と `data/positions.jsonl` に追記されます（git 対象外）。

## ngrok で外部公開（運転手のスマホから）

1. 上記のとおり `npm start` でサーバーを起動したままにする。
2. 別ターミナルで:

```bash
npx ngrok http 3050
```

3. 表示された **https://xxxx.ngrok-free.app** をスマホのブラウザで開き、`/driver.html` に移動する。  
   **位置情報は HTTPS または localhost でないと取得できないことが多い**ため、LAN の生 IP（http://192.168.x.x）より ngrok の HTTPS が向いています。

注意:

- 無料 ngrok は URL が変わることがあります。本番運用なら固定ドメインや自前VPNの検討が必要です。
- このサーバーには認証が**ありません**。公開URLを知っている人は誰でも記録・閲覧できます。**試用・社内LAN限定**を推奨し、必要なら後から Basic 認証やトークンを足してください。

## API（拡張用）

| メソッド | パス | 説明 |
|---------|------|------|
| GET | `/api/health` | 生存確認 |
| POST | `/api/trips` | 運航簿1件。JSON: `routeLabel`, `legLabel`, `departedAt`, `passengersOn`, `passengersOff`, `note` |
| GET | `/api/trips` | 直近の記録一覧 |
| POST | `/api/positions` | GPS1件。JSON: `lat`, `lng`, `accuracy?`, `driverLabel?`, `busLabel?` |
| GET | `/api/positions/recent?limit=80` | 直近位置（地図用） |
| GET | `/api/stats/daily` | 直近7日の日別乗降合計 |
| GET | `/api/schedule/suggest` | 現在時刻から「次の便」のバス番号（`../Busdata/busN.csv` を参照。Type1=県体前発・Type2=上熊本発は bus.html 既定と同じ） |

### GPS が地図に出ないとき

- 運転手画面で「送信を開始」後、ダッシュボードで **再読み込み** を押す（自動更新は45秒ごと）。
- スマホは **HTTPS（ngrok）** で開く。位置拒否の場合はステータスにエラーが出ます。
- 開発者ツールの Network で `/api/positions` が **201** か確認する。

## 次の改善案（未実装）

- 学生向け「次の便に乗れるか」: 定員・現在車内人数のルールとAPI
- 認証（運転手のみ投稿、ダッシュボードは閲覧者のみ）
- SQLite への移行・CSVエクスポート画面
- 運行本数に対する「乗車率」正規化（便ごとの分母の定義）

## ライセンス

リポジトリ全体のライセンスに従います。
