# Trello Clone

A trello clone built with Next.js 14 (TypeScript), Server Actions, React, Prisma, Stripe, Shadcn-UI, TailwindCSS and MySQL.

## Installing dependencies

- Created Next app using `npx create-next-app@latest trello-clone`. Installed TypeScript and TailwindCSS and ESLint by prompt asked by Next.js CLI.
- Installed shadcn-ui using `npx shadcn@latest init`.

## Flow

- Made a `(marketing)` folder inside `app` folder.
- Inside `marketing` folder, made a `layout.tsx` file.
- Inside `marketing` folder, made a `page.tsx` file.
- Inside `marketing` folder, made a `_components` folder.
- Inside `marketing` folder, made a `footer.tsx` file inside `_components` folder.
- Inside `marketing` folder, made a `navbar.tsx` file inside `_components` folder.
- Added `Footer` and `Navbar` components inside `layout.tsx` file.
- Added Fonts inside `fonts` folder.
- Added `Logo` component inside `logo.tsx` file.
- Added `Logo` component inside `navbar.tsx` file.
- Added `Logo` component inside `footer.tsx` file.
- Added a `public` folder inside root directory.
- Added `logo.svg` file inside `public` folder.
-
- Added `config` folder inside root directory.
- Added `site.ts` file inside `config` folder.
- Added metadata inside `layout.tsx` file.
- Added favicon to metadata inside `layout.tsx` file.
- Added `.env` inside `.gitignore` file.
- Added `.env` in root directory.
- Added `(platform)` folder inside `app` folder.
- Inside `platform` folder, made a `layout.tsx` file with `ClerkProvider` component.
- Added a `middleware.ts` file inside root directory.
- Added following folders and files inside `(platform)` folder.
  - ```bash
    /(clerk)
      /sign-in
        /[[...sign-in]]
          /page.tsx
      /sign-up
        /[[...sign-up]]
          /page.tsx
    ```
