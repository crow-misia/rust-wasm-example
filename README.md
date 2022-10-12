# rust-wasm-example

## 準備

1. rustのインストール
1.1. Windowsの場合、chocolatey経由で rustup と openssl をインストールする

```
choco install rustup openssl
```

1.2. Linux/macOSの場合
```
curl https://sh.rustup.rs -sSf | sh
```

2. wasm-packのインストール

```
cargo install wasm-pack
```

3. cargo-generateのインストール

```
cargo install cargo-generate
```

4. Node.jsのインストール

## プロジェクト作成

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-project
cd my-project
```

## ビルド

```
wasm-pack build
```

## テスト

```
wasm-pack test --headless --firefox
```

## Webページ内に展開

1. Node.jsのパッケージインストール (初回のみ)
```
cd my-project
npm init wasm-app www
cd www
npm install -y
```

2. wasmのモジュールを、nodeのモジュールとしてリンクする

```
cd my-project/pkg
npm link
cd ../www
npm link mandelbrot
```


3. サーバ起動

```
npm run start
```

http://localhost:8080/ にアクセス

