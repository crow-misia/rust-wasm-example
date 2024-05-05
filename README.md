# rust-wasm-example

## 準備

1. rustのインストール

https://www.rust-lang.org/ja/tools/install

2. wasm-packのインストール

```
cargo install wasm-pack
```

3. cargo-generateのインストール

```
cargo install cargo-generate
```

4. Node.jsのインストール

https://nodejs.org/en/download

windowsの場合、Chocolatey経由で
```
choco install nvm
nvm install 20
nvm use 20
```

5. pnpmのインストール

```
npm install -g pnpm
```

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
wasm-pack test --headless --chrome
```

## Webページ内に展開

1. Node.jsのパッケージインストール (初回のみ)
```
cd my-project
pnpm create wasm-app www
cd www
pnpm install
```

2. サーバ起動

```
pnpm start
```

http://localhost:8080/ にアクセス

