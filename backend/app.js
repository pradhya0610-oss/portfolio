const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  const statusCode = Number.isInteger(error.status) ? error.status : 500;
  const message =
    statusCode < 500 ? 'The request could not be processed.' : 'An unexpected server error occurred.';

  res.status(statusCode).json({ message });
});

module.exports = app;