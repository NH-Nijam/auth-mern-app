const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db'); // Ensure this file is correctly set up for database connection
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const AuthRouter = require('./Routers/authRouter');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Use Auth Router
app.use('/api/auth', AuthRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
