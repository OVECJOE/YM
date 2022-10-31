require('dotenv').config()
require('./config/db_connection').connect()

const express = require('express')
const cors = require('cors')
const adminRouter = require('./routes/adminRouter')
const cookieSession = require('cookie-session')

const app = express();

// get cookie secret from env
COOKIE_SECRET = process.env.COOKIE_SECRET

// setup middleware
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({
  secret: COOKIE_SECRET
}))

// Setup routes
app.use('/api/admin', adminRouter);

app.get('*', (req, res) => {
  res.status(404).send({
    error: 'Route not found!'
  });
})

module.exports = app;