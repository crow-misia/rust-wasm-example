# rust-wasm-example

## 準備 (rust)

1. rustのインストール

https://www.rust-lang.org/ja/tools/install

2. wasm-packのインストール

```shell
cargo install wasm-pack 
```

## 準備 (node.js)

1. Node.jsのインストール

https://nodejs.org/en/download

windowsの場合、Chocolatey経由で

```shell
choco install nvm
nvm install 22
nvm use 22
```

2. pnpmのインストール

```shell
npm install -g pnpm
```

3. 依存ライブラリインストール

```shell
pnpm install
```

## ビルド

```
pnpm run build
```

## 実行 (ブラウザ起動)

```
pnpm run start
```

## テスト

```
pnpm run test
```
