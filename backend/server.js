require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Check connection
db.connect(function(err) {
    if (err) {
        console.log("Database connection failed!");
        console.log(err.message);
        return;
    }

    console.log("Connected to ShopEase database!");
});

// Start server
app.listen(3000, function() {
    console.log("Server running on port 3000");
});