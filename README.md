# Momentum Monorepo

A monorepo containing a React frontend and Node.js backend.

## Structure

```
momentum/
├── apps/
│   ├── client/        # React + Vite frontend
│   └── server/        # Express backend
└── package.json       # Root workspace configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

Run both client and server concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Run client only (http://localhost:3000)
npm run dev:client

# Run server only (http://localhost:5000)
npm run dev:server
```

### Build

```bash
npm run build
```

### Production

```bash
npm run start:server
```

## Apps

### Client (React + Vite)

- **Location**: `apps/client`
- **Port**: 3000
- **Tech**: React 18, Vite
- **Proxy**: API requests to `/api/*` are proxied to the backend

### Server (Node.js + Express)

- **Location**: `apps/server`
- **Port**: 5000
- **Tech**: Express, CORS enabled
- **Endpoints**:
  - `GET /api/hello` - Test endpoint
  - `GET /api/health` - Health check

## Features

- ✅ npm workspaces for monorepo management
- ✅ React with Vite for fast development
- ✅ Express server with CORS
- ✅ API proxy configuration
- ✅ Concurrent dev script to run both apps
- ✅ Hot reload for both frontend and backend
