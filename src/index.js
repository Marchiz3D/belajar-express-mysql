require('dotenv').config();
const express = require('express');
const router = require('./routes/users.js');
const requestLogs = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();
const PORT = process.env.PORT || 5000;

// app.method(path, handler);

app.use(requestLogs);
app.use(express.json());

// Middleware untuk uplaod file (multer)
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('File berhasil diunggah');
});
app.use('/images', express.static('public/images'));

app.use('/users', router);

// Handler error
app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}...`);
})