# Trade Hub — Zerodha Clone

**Trade Hub** is a learning project that replicates core features of a retail trading platform (inspired by Zerodha). It provides user authentication, market watchlists, portfolio holdings, and dashboard for managing users.

## Demo / Screenshots

*(Replace these placeholders with GIFs or images from `/frontend/public/screenshots` or a demo link.)*

* Landing / Home
* Login / Signup
* Dashboard (portfolio, watchlist)
* Place Order modal
* Holdings & Transaction History
* Admin: Users table with pagination

---

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
2. `npm install`
3. Create `frontend/.env` (see above)
4. `npm run dev` or `npm start`

Default: app runs at `http://localhost:3000`.

**Note:** If you use CORS, ensure the backend allows the frontend origin or use a proxy in development.

---

## API Endpoints (Summary)

> This is a brief overview — consult `backend/routes` for full route details.

**Auth**

* `POST /api/auth/signup` — Register new user
* `POST /api/auth/login` — Login and receive JWT

**Users**

* `GET /api/users` — (admin) list users (supports pagination, filter)
* `GET /api/users/:id` — get user profile
* `PUT /api/users/:id` — update user
* `DELETE /api/users/:id` — delete user

**Orders / Trading (mock)**

* `POST /api/orders` — place an order (market/limit) — simulated execution
* `GET /api/orders` — list user's orders

**Portfolio / Holdings**

* `GET /api/holdings` — current user holdings
* `GET /api/transactions` — trade history

**Market / Instruments**

* `GET /api/instruments` — list of supported instruments
* `GET /api/price/:symbol` — current (simulated) price


## License

This project is released under the MIT License. See `LICENSE` for details.

---

## Contact

Maintainer: *Neha Chintawar* — replace with your contact email or GitHub handle.

---

*Thanks for checking out Trade Hub — happy hacking!*

