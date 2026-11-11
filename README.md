# Placement Cell Portal

A frontend prototype of a college placement cell management portal, built with React, Vite and Tailwind CSS. It lets a placement-cell admin log in and browse students, companies and per-session placement statistics.

> This is a client-side prototype. There is no backend in this repository: student and company tables are populated from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) `/users` API as sample data, and edits/deletes/additions are kept only in the page's memory (not persisted).

## Features

- **Login page** with a protected route: all pages except `/login` require a `username` cookie, which is set for 1 hour after a successful login. The login check is hard-coded on the client in `src/Pages/Login.jsx` (demo only, not real authentication).
- **Home page** with institute banner content.
- **Students** table (`react-table`): ID, name, branch, email, placed status; global search, page-size selector (10/20/50/100), pagination, delete, and a link to each student's detail page.
- **Student detail** page (`/students/:studentId`) fetched from JSONPlaceholder.
- **Companies** table: company name, location, post, package, students placed; search, pagination and delete.
- **Add student** and **Add company** forms with required-field validation (UI only; entries are not saved).
- **Session 2021 / 2022 / 2023** pages showing placement statistics images.
- About Us and Contact Us pages, header navigation and footer.

## Routes

| Route | Page |
| ----- | ---- |
| `/login` | Login (public) |
| `/` | Home |
| `/students`, `/students/:studentId` | Students list / detail |
| `/companies` | Companies list |
| `/add-student`, `/add-company` | Add forms |
| `/session-2021`, `/session-2022`, `/session-2023` | Session statistics |
| `/about-us`, `/contact-us` | Info pages |

## Tech stack

- React 18 + React Router v6
- Vite 5 (`@vitejs/plugin-react`)
- Tailwind CSS (with PostCSS / Autoprefixer)
- react-table v7
- MUI (`@mui/material`, `@mui/icons-material`), react-icons, react-loading-icons, animate.css
- `js-cookie` for the login cookie (installed transitively via `react-auth-kit`)

`express`, `cors` and `mysql` are listed in `package.json` but are not used by any code in this repository.

## Getting started

Prerequisites: Node.js and npm.

```sh
npm install
npm run dev
```

Then open the local URL printed by Vite and log in.

### Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint (no ESLint config file is committed, so this may fail until one is added — needs confirmation) |
| `npm run deploy` | Build and publish to GitHub Pages with `gh-pages -d build` (needs confirmation: `gh-pages` is not in `package.json` and Vite builds to `dist/`, not `build/`) |

There is no test script.

## Configuration

No environment variables are used. The `homepage` field in `package.json` points to the GitHub Pages URL for this repo.
