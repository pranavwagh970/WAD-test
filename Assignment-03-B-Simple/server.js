const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;
const MONGO_URL = 'mongodb://127.0.0.1:27017/wad_crud_db';

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error.message);
  });
