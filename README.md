This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

// To get started with this project run in terminal:

````bash
npx create-next-app .

# then

npm install prisma typescript tsx @types/node --save-dev

// Then initialize the prisma database:

npx prisma init

// Create a DATABASE_URL and DIRECT_URL in the .env file:
// Copy the data from supabase via route supabase/connect => Transaction_pooler and Session_pooler

// Then create a new database schema and run the following command:

npx prisma db push
# or
npx prisma migrate dev --name init

# to clean up db
npx prisma migrate reset

## Setup shadcn ui-kit

npx shadcn@latest init

// configure the shadcn in tailwind.config.ts and components.json

// install first shadcn package "button"

npx shadcn@latest add button


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
