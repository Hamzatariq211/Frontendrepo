const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
   console.log('Connected to MongoDB');
}).catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
   res.send('API is running...');
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});