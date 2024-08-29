# Next.js完結のApplication template

## 使用技術

- Next.js v14
- Auth.js
- Tailwind
- Radix.UI
- shadcn
- Lucide
- Drizzle orm
- Postgres
- React hook form
- zod
- prettier
- eslint
- husky

## 始め方
```
pnpm install
```
### 環境変数
```
copy sample.env.local .env
// 以下のコマンドで生成したsecretをAUTH_SECRETに設定
openssl rand -base64 33
```
で生成したものを`AUTH_SECRET`に設定
### DB
```
docker compose up -d
// migrationファイルの生成
pnpm run drizzle:generate
// migration
pnpm run drizzle:migrate
// studioが見れる
pnpm drizzle-kit studio --port 3003 --verbose
```
