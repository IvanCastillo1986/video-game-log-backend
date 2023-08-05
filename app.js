const express = require('express');
const app = express();
const cors = require("cors");
const pcGamesController = require("./controllers/pcController")
const gamesController = require("./controllers/gamesController")

app.use(express.json());
app.use(cors())
app.use("/games", gamesController);
app.use("/pcGames", pcGamesController);


app.get('/calculator/:operator', (req, res) => {
    console.log(`This is req.params:`, req.params)
    console.log(`This is req.query:`, req.query)
    const sum = Number(req.query.num1) + Number(req.query.num2);
    res.send("sum is " + sum)
})

app.get('/', (req, res) => {
    res.send('Welcome to Retro Video Games API!');
});

app.get("/universe", (req, res) => {
    res.send("Hello Universe")
});

module.exports = app;