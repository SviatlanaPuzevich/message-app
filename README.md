# Message App

A simple message management application consisting of **frontend** (React + Ant Design) and **backend** (Node.js + Express + MongoDB).

## Project Structure
├─ message-back-app/ # Backend
├─ message-frontend-app/ # Frontend
├─ docker-compose.dev.yml # Dev configuration
├─ .env # Environment variables
└─ README.md

---

## Technologies

- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose
- **Frontend:** React, TypeScript, Vite, Ant Design, Axios, React Router
- **Dev:** Docker, Docker Compose

---

## Environment Variables

### Backend (`message-back-app/.env`)

```env
PORT=3000
MONGODB_URL=<your MongoDB URL>
```

- In dev, you can use local Mongo via Docker.

- In prod, you must provide a cloud MongoDB URL.

### Frontend (message-frontend-app/.env)
```env
VITE_BACKEND_URL=http://localhost:3000/api/messages
```

- Points to the backend API.

- For production, replace with your production backend URL.
## Dev Setup (Docker)

1. Start Docker:
```env
docker-compose -f docker-compose.dev.yml up --build
```

2. Services will be available at:

    Frontend: http://localhost:5173

    Backend API: http://localhost:3000/api/messages

    MongoDB: container is accessible only inside Docker network.

3. Stop the services:

```env
docker-compose -f docker-compose.dev.yml down
```
## Production Setup

1. Configure .env for backend with your cloud MongoDB URL.

2. Configure .env for frontend with your production backend API URL.

3. Build and run containers:

```env
docker build -t message-back-app ./message-back-app
docker build -t message-frontend-app ./message-frontend-app
docker run -p 3000:3000 --env-file ./message-back-app/.env message-back-app
docker run -p 80:80 --env-file ./message-frontend-app/.env message-frontend-app
```

- Backend: port 3000

- Frontend: port 80

Mongo in production is not run in a container; you must use a cloud MongoDB instance.

## API

### Message endpoints:

GET /api/messages      # Get all messages
POST /api/messages     # Create a new message


Example POST request:

{
"name": "John",
"phone": "+375291234567",
"message": "Hello!"
}

## Development Workflow

- Frontend runs via Vite with hot-reload.

- Backend runs via ts-node-dev for auto-reload on changes.


