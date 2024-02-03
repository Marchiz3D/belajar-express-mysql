require('dotenv').config();
const express = require('express');
const router = require('./routes/users.js');
const requestLogs = require('./middleware/logs.js');

const app = express();
const PORT = process.env.PORT || 5000;

// app.method(path, handler);

app.use(requestLogs);
app.use(express.json());

app.use('/users', router);

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}...`);
})