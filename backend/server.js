require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const port = Number(process.env.PORT) || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Portfolio API listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start the portfolio API:', error.message);
    process.exitCode = 1;
  });