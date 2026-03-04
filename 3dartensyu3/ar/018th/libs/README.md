# 8th Wall Engine（セルフホスティング用）

## 構成

- **xr.js** … エンジンのメインスクリプト（`index.html` から読み込み）
- **xr-slam.js** … SLAM（World Effects）用チャンク（data-preload-chunks で自動読み込み）
- **xr-face.js** … Face Effects 用（未使用時は不要）
- **resources/** … ワーカー・モデル等のリソース

`index.html` の `<script src="./libs/xr.js">` でこのフォルダを参照しています。
