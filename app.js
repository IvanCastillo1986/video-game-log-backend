const express = require('express');
const app = express();
const cors = require("cors");
const gamesController = require("./controllers/gamesController");
const usersController = require("./controllers/usersController");

app.use(express.json());
app.use(cors());
app.use("/games", gamesController);
app.use("/users", usersController);



app.get('/', (req, res) => {
    res.send('Welcome to Retro Video Games API!');
});

app.get("/universe", (req, res) => {
    res.send("Hello Universe")
});

module.exports = app;