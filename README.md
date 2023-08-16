## 概要
next.js × React × TypeScriptを用いた簡易コマースアプリケーション


![サンプルアプリ](https://user-images.githubusercontent.com/2387508/178550902-a7c1e47b-a322-413c-b9ad-2ffff79e041d.png)

## 使用技術
Node.js: 16.14.0
Next.js: 12.2.3
React: 18.2.0

## 環境変数
```
API_BASE_URL=http://localhost:8000
NEXT_PUBliC_API_BASE_PATH=/api/proxy
```

## サーバーサイド設定
こちらを8000ポートで起動してください
https://github.com/tochisuke221/ts-nextbook-json

## 環境設定

JSON Serverの設定と起動


こちらのリポジトリとは別のディレクトリで作業する

```
cd https://github.com/gihyo-book/ts-nextbook-json
cd ts-nextbook-json
npm ci
npm start
```

開発サーバーを起動し、http://localhost:3000/ にアクセス

```
npm run dev
```

## Storybook起動

Storybookを起動し、http://localhost:6006/ にアクセス

```
npm run storybook
```

## テスト実行

ユニットテスト実行

```
npm run test
```

## ソースコードリンター・フォーマッター

ソースコードをリンターでチェック

```
npm run lint
```

ソースコードをフォーマッターで整形

```
npm run format
```

## ディレクトリ構成

簡単にディレクトリ構成を以下に説明します。

```
├── .editorconfig
├── .env <-- 環境変数
├── .env.production <-- 本番用環境変数
├── .eslintrc.json <-- ESLint設定ファイル
├── README.md
├── jest.config.js <-- Jestの設定ファイル
├── jest.setup.js <-- テストファイルが実行される前に走る
├── next-env.d.ts
├── next.config.js <-- Next.js設定ファイル
├── package-lock.json
├── package.json
├── public
├── src
│   ├── components <-- Presentational Components
│   ├── containers <-- Container Compoments
│   ├── contexts <-- React Context
│   ├── pages <-- Next.jsのページ
│   ├── services <-- Web API Client
│   ├── themes <-- styled-componentsのテーマ
│   ├── types <-- 型定義
│   └── utils <-- 汎用関数
└── tsconfig.json
```
