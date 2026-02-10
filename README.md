# Personal Website (Next.js)

This project is now migrated to **Next.js (App Router)** so you can deploy cleanly to GitHub + Vercel.

## Stack

- Next.js 16
- React 19
- CSS variables + global stylesheet
- Data-driven content model with nested items

## Requirements

- Node.js `20.9.0` or newer

## Run locally

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000`

Build and run production locally:

```bash
npm run build
npm run start
```

## Content editing

Edit your website content in:

- `/Users/nic619/Library/CloudStorage/Dropbox/Mac (2)/Documents/Projects/personal-website/src/site-data.js`

Any item can contain nested `children` recursively.

For `profile.actions`, you can optionally set a custom icon:

```js
{ label: "GitHub", url: "https://github.com/NIC619", icon: "/icons/github.svg" }
```

If `icon` is omitted, the site auto-loads the favicon from the link domain. `mailto:` uses `/icons/email.svg`.

## Theme presets

Top bar theme switcher includes:

- `Editorial`
- `Editorial Soft`
- `Bookish Modern` (default for first-time visitors)
- `Humanist Editorial`
- `Paper`
- `Technical`

Theme choice is stored in `localStorage` as `site-theme`.

## Project structure

- `/Users/nic619/Library/CloudStorage/Dropbox/Mac (2)/Documents/Projects/personal-website/app/layout.js`: app layout + metadata
- `/Users/nic619/Library/CloudStorage/Dropbox/Mac (2)/Documents/Projects/personal-website/app/page.js`: page UI + recursive rendering
- `/Users/nic619/Library/CloudStorage/Dropbox/Mac (2)/Documents/Projects/personal-website/app/globals.css`: design tokens + all styles
- `/Users/nic619/Library/CloudStorage/Dropbox/Mac (2)/Documents/Projects/personal-website/src/site-data.js`: editable profile/sections data
- `/Users/nic619/Library/CloudStorage/Dropbox/Mac (2)/Documents/Projects/personal-website/public/pfp.png`: profile image asset

## Deploy to GitHub + Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New Project** and import the GitHub repo.
3. Framework preset should auto-detect as **Next.js**.
4. Click **Deploy**.

For future updates, push to your default branch and Vercel will auto-redeploy.
