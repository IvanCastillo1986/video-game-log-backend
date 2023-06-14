const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Nodemon');
});

app.get("/universe", (req, res) => {
    res.send("Hello Universe")
});

module.exports = app;