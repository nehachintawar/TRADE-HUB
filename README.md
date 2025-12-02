# Trade Hub — Zerodha Clone

**Trade Hub** is a learning project that replicates core features of a retail trading platform (inspired by Zerodha). It provides user authentication, market watchlists, portfolio holdings, and dashboard for managing users.

## Key Features

* User dashboard: watchlist, market snapshot, portfolio holdings
* Mock order placement: Market / Limit orders (simulated)
* Holdings view: current positions with P&L calculations
* Transaction history: list of executed (mock) trades
* Responsive UI 

---

## Tech Stack

* Frontend: React (Create React App compatible)
* Backend: Node.js, Express
* Database: MongoDB (Mongoose)
* Dev tools: nodemon, axios

---

## Project Structure (example)

```
trade-hub/
├─ backend/
│  ├─ model/
│  ├─ schemas/
│  ├─ index.js
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ landing page/
│  │  ├─ index.css
│  │  ├─ index.js
│  └─ package.json
├─ dashboard/
│  ├─ src/
│  │  ├─ components
│  │  ├─ data
│  │  ├─ indes.css
|  |  ├─ indes.js
│  └─ package.json
└─ README.md
```

---

## Prerequisites

* Node.js v16+ (recommend v18+)
* npm or yarn
* MongoDB Atlas account 

---

## Environment Variables

Create a `.env` file in both `backend/` and `frontend/` (if needed) with the following example values:

**backend/.env**

```
PORT=3000
MONGO_URL=mongodb+srv://chintawarneha59_db_user:nehachintawar@cluster0.silzlsk.mongodb.net/?appName=Cluster0

```

**frontend/.env** (if using runtime env vars)

```
Mongo_url=http://localhost:3000/api
```

---

## Local Setup (Development)

### Backend

1. `cd backend`
2. `npm install`
3. Create `backend/.env` (see above)
4. `npm run dev` or `npm start` (uses nodemon in dev)

Default: server runs at `http://localhost:5000`.

### Frontend

1. `cd frontend`
2. `cd dashboard`
3. `npm install`
4. Create `frontend/.env` (see above)
5. `npm run dev` or `npm start`

Default: app runs at `http://localhost:3000`.

**Note:** If you use CORS, ensure the backend allows the frontend origin or use a proxy in development.

---




*Thanks for checking out Trade Hub — happy hacking!*

