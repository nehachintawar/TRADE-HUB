# Trade Hub — Zerodha Clone

**Trade Hub** is a learning project that replicates core features of a retail trading platform (inspired by Zerodha). It provides user authentication, market watchlists, portfolio holdings, and dashboard for managing users.

> **Status:** Completed (MVP)

---

## Table of Contents

1. [Demo / Screenshots](#demo--screenshots)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Prerequisites](#prerequisites)
6. [Environment Variables](#environment-variables)
7. [Local Setup (Development)](#local-setup-development)

   * Backend
   * Frontend
8. [API Endpoints (Summary)](#api-endpoints-summary)
9. [Data Model (Summary)](#data-model-summary)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Contributing](#contributing)
13. [License](#license)
14. [Contact](#contact)

---

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

* Authentication: Signup / Login (JWT-based sessions)
* User dashboard: watchlist, market snapshot, portfolio holdings
* Mock order placement: Market / Limit orders (simulated)
* Holdings view: current positions with P&L calculations
* Transaction history: list of executed (mock) trades
* Admin Dashboard: users list, pagination, view/edit/delete
* Responsive UI built with Tailwind and shadcn components
* Data tables using TanStack (React Table)

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

---

## Data Model (Summary)

* `User` — name, email, passwordHash, role, watchlist
* `Order` — userId, symbol, qty, price, type, status, executedAt
* `Holding` — userId, symbol, qty, avgPrice, currentPrice
* `Transaction` — userId, orderId, symbol, qty, price, side, timestamp

---

## Testing

* Manual testing through UI for flows: signup/login, place order, view holdings, admin pagination.
* Unit tests: add Jest + Supertest for API routes (optional)

---

## Deployment

* Backend: host on Render, Heroku, Railway, or VPS. Use environment variables for `MONGO_URI` and `JWT_SECRET`.
* Frontend: Netlify, Vercel, or static host. If using client-side React, build and serve static files.
* Use a managed MongoDB (Atlas) for production.

---

## Roadmap / Next Steps

* Integrate real-time price feeds (WebSocket) or third-party market data (if permitted)
* Add order types (stop-loss, OCO)
* Improve matching and order simulation engine
* Add charts (candlestick) and historical data
* Add multi-currency and margin simulation

---

## Contributing

Contributions are welcome. Please open an issue to discuss major changes and submit pull requests for bug fixes or features. Follow existing code style and include tests where applicable.

---

## License

This project is released under the MIT License. See `LICENSE` for details.

---

## Contact

Maintainer: *Your Name* — replace with your contact email or GitHub handle.

---

*Thanks for checking out Trade Hub — happy hacking!*

