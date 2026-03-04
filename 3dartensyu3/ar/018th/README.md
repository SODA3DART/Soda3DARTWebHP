# 8th Wall OSS - マーカーレス6DoF AR

mindAR.js から 8th Wall に移行した、SLAM を用いたマーカーレス 6DoF AR のベースコードです。

## ディレクトリ構成

```
018th/
├── index.html      # メインHTML（A-Frame + 8th Wall xrweb）
├── app.js          # タップ配置ロジック（hitTest 使用）
├── libs/           # 8th Wall エンジン（xr-standalone.zip の内容）
│   ├── xrweb.js    # 要配置
│   └── README.md
├── models/         # 3Dモデル用（任意）
└── README.md
```

## セットアップ

### 1. エンジンの配置

[8th Wall Engine](https://github.com/8thwall/engine) から **xr-standalone.zip** をダウンロードし、解凍して `libs/` に配置してください。詳細は `libs/README.md` を参照。

### 2. 技術スタック

- **HTML / Vanilla JavaScript**
- **A-Frame** (8-Frame 1.3.0)
- **8th Wall XR Engine** (`xrweb` コンポーネント、SLAM)
- **XR Extras** (ロード画面・エラーハンドリング・タップリセンタ)

### 3. 実装内容

- `xrweb` コンポーネントで SLAM（World Effects）を有効化
- 床面の検出は `XR8.XrController.hitTest()` で実施
- タップ位置に実寸の `a-box` を配置（空間固定 = 6DoF）
- 初期オブジェクトも実寸大で配置

## ローカルテスト時の注意

- **HTTPS 必須**: カメラ利用のため、`https://` または `localhost` で実行してください
- **推奨**: Vercel、GitHub Pages、`npx serve` などで配信
- **動作確認**: スマートフォンのブラウザで開き、地面をゆっくりスキャンしてからタップしてください

## 起動例

```bash
# 例: npx serve で配信（HTTPS は別途設定が必要な場合あり）
npx serve .
```
