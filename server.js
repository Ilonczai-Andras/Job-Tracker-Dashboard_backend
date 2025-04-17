const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const logger = require('./src/utils/logger');
const errorHandler = require('./src/middlewares/errorHandler');

// CORS – csak engedélyezett origin
// app.use(cors({
//   origin: process.env.FRONTEND_URL,
//   credentials: true
// }));

app.use(cors());

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// API routes
app.use('/api/applications', require('./src/routes/Application'));
app.use('/api/profiles', require('./src/routes/Profile'));
app.use('/api/reminders', require('./src/routes/Reminder'));

// Logging
logger.info('API starting...');

// Global error handler
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

// Background jobs
require('./src/utils/reminderJob');
