# Soda3DARTWebHP

崇城大学芸術学部美術学科3Dアートコースのポートフォリオ・情報発信ウェブサイト。基本は静的サイト（HTML/CSS/バニラJS、GitHub Pages でホスト）で、いくつかの埋め込みミニアプリと1つのローカルNodeサーバーを含みます。

## Cursor Cloud specific instructions

このリポジトリは単一の共有バックエンドを持たない「静的サイト + ミニアプリ」のモノレポです。npm を使うのは以下の2サブプロジェクトのみで、ルートに `package.json` はありません。

### サービスと起動方法

| サービス | 場所 | 起動コマンド | ポート | 備考 |
|---------|------|-------------|--------|------|
| メイン静的サイト | リポジトリルート | `python3 -m http.server 8080` | 8080 | 多くのページが `fetch()` を使うため `file://` では壊れる。任意の静的サーバーで可 |
| シャトル運航簿 (`bus-ops-local`) | `accessory/bus-ops-local` | `npm start` (= `node server.js`) | 3050 | Express。データは `data/*.jsonl` に追記（gitignore 済み・自動生成）。`PORT` で変更可 |
| Magic 3Dゲーム (React/Vite) | `special/StudentOriginalgame/magic` | `npm run dev` | 3000 | `vite.config.ts` で `host: 0.0.0.0`, `port: 3000` 指定済み |

### 非自明な注意点

- ルートに `package.json` / lockfile はない。メインサイトはビルド不要でそのまま静的配信する。
- `bus-ops-local` には認証がない。API: `POST /api/trips`, `GET /api/trips`, `POST /api/positions`, `GET /api/stats/daily`, `GET /api/health` など（詳細は `accessory/bus-ops-local/README.md`）。
- Magic ゲームは `dist/` にビルド済み成果物がコミットされており、静的サーバー経由で `special/StudentOriginalgame/magic/dist/index.html` として再生可能。ソースから動かす場合のみ Vite dev/build が必要。README は `GEMINI_API_KEY` に言及するが、現行ゲームコードは Gemini を呼ばない（AI Studio のboilerplate残り）ので不要。
- 外部依存（ローカルでは検証不可なもの）: Kumayu Chat (`special/Chat.html`) は Azure Functions API、コンタクトフォーム (`index.html`) は EmailJS + reCAPTCHA を利用。AR/WebXR ページはカメラ用に HTTPS/localhost が必要で、一部 `.glb` アセットはこのチェックアウトに含まれない。
- lint / 自動テストの設定はリポジトリに存在しない（静的サイトのため）。
