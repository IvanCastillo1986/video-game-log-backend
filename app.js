const express = require('express');
const app = express();
const cors = require("cors");
const pcGamesController = require("./controllers/pcController")
const gamesController = require("./controllers/gamesController")

app.use(express.json());
app.use(cors())
app.use("/games", gamesController);
app.use("/pcGames", pcGamesController);



app.get('/', (req, res) => {
    res.send('Welcome to Retro Video Games API!');
});

app.get("/universe", (req, res) => {
    res.send("Hello Universe")
});

module.exports = app;