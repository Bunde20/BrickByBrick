// server
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (Allows us to parse incoming JSON data)
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Workouts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

app.get('/', (req, res) => {
    res.send('You have connected to the backend!');
    });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
