# Portfolio API

## Run locally

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI` to a reachable MongoDB database. The example uses a local MongoDB instance.
3. From this directory, run `npm run dev` for development or `npm start` to start the API.

The API listens on port `5000` by default. Set `CLIENT_ORIGIN` to the exact origin serving the frontend when it is not `http://localhost:5173`. The frontend uses `http://localhost:5000/api` by default; set `VITE_API_URL` at frontend build time to change it.

## Endpoints

- `GET /api/health` — API health check.
- `GET /api/projects` — projects sorted by `displayOrder`, then newest first.
- `POST /api/contacts` — saves a contact message. Send JSON with `name`, `email`, and `message`; the response confirms when it has been stored.

Projects can be added to the MongoDB `projects` collection with `title`, `description`, `technologies`, `githubUrl`, `liveUrl`, and `displayOrder` fields. The current portfolio cards remain statically rendered; the projects endpoint is available for a future dynamic listing.
