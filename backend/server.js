const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const classroomsRouter = require('./routes/classrooms');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/classrooms', classroomsRouter);

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("\n -> Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });


const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`\n -> Server running on port ${PORT}`);
});
