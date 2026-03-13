# Developer Profile Aggregator (MERN)

Full-stack MERN platform that aggregates developer stats from GitHub, LeetCode, YouTube, LinkedIn, Twitter, and Sololearn into one dashboard.

## Project Structure

```
dev-profile-aggregator
├── client
│   ├── src/components
│   ├── src/pages
│   ├── src/services
│   └── ...
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── services
│   └── server.js
└── README.md
```

## Setup

1. Install root tools:

```bash
npm install
```

2. Install server dependencies:

```bash
npm install --prefix server
```

3. Install client dependencies:

```bash
npm install --prefix client
```

4. Configure environment variables:

- copy `server/.env.example` to `server/.env`
- copy `client/.env.example` to `client/.env`
- set a valid `YOUTUBE_API_KEY` in `server/.env` (YouTube Data API v3)

5. Start full stack:

```bash
npm run dev
```

- API: `http://localhost:5001`
- Client: `http://localhost:5173`

## Auth & Routes

- First screen is login (`/login`)
- Students:
  - register from login page
  - routed to `/student`
  - can add/edit all six platform details and view leaderboard
- Admin:
  - routed to `/admin`
  - can manage all student records

Default admin (auto-created at backend startup if no admin exists):

- email: `admin@devprofile.local`
- password: `admin12345`

## Implemented Features

- MERN CRUD for developer profiles
- API integrations:
  - GitHub
  - LeetCode
  - YouTube
- Manual DB fields:
  - LinkedIn
  - Twitter
  - Sololearn
- Verify Profile button (autofetch + prefill)
- Unified dashboard with six platform cards
- GitHub contribution streak graph
- Dev Score formula:
  - `(GitHub Repos x 2) + (LeetCode Solved x 3) + (YouTube Videos x 1)`
- Leaderboard API + UI
- Public Dev Card generator with share + SVG download
- Admin dashboard for create/edit/delete profiles
