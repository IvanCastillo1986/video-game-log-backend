const express = require('express');
const app = express();
const cors = require("cors");
const snesGamesController = require("./controllers/snesGamesController")

app.use(express.json());
app.use(cors())
app.use("/snesGames", snesGamesController);


app.get('/', (req, res) => {
    res.send('Welcome to Retro Video Games API!');
});

app.get("/universe", (req, res) => {
    res.send("Hello Universe")
});

module.exports = app;