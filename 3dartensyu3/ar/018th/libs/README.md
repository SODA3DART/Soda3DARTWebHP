# 8th Wall Engine（セルフホスティング用）

## セットアップ

1. [8th Wall Engine](https://github.com/8thwall/engine) リポジトリの **xr-standalone.zip** をダウンロード
2. ZIP を解凍し、含まれるファイルをこの `libs/` フォルダに配置
3. 解凍後のメインスクリプトを `xrweb.js` として配置するか、`index.html` の `<script src>` パスを実際のファイル名に合わせて変更

## 想定される構成例

```
libs/
├── xrweb.js          # エンジンのメインスクリプト
├── (その他 .wasm, .data 等のチャンクファイル)
└── README.md
```

xr-standalone.zip の解凍結果に応じて、ファイル名や配置を調整してください。
