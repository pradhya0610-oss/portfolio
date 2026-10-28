const app = require('../app');
const connectDB = require('../config/db');

module.exports = async function handler(req, res) {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    return res.status(500).json({ message: 'The database is temporarily unavailable.' });
  }
};
