"use strict";

const config = require("./config")
const express = require('express');
const path = require("path");
const fs = require('fs');
const Open = require('open');
const app = express();
const Game = require('./public/js/game');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.render("martianrobots", {results: undefined});
});

app.post('/play', (request, response) => {
    let thisGame = new Game(fs.readFileSync('input.txt').toString().split("\n"));
    thisGame.executeGame((err) => {
        if (err) {
            console.log("something went terribly wrong :(");
        }
        else {
            console.log("OUTPUT:")
            thisGame.robots.forEach(robot => {
                if (robot.lost) {
                    console.log(robot.position.column + " " + robot.position.row + " " + robot.position.orientation + " LOST" );
                }    
                else {
                    console.log(robot.position.column + " " + robot.position.row + " " + robot.position.orientation);
                }
            });
            response.render("martianrobots", {results: thisGame.robots});
        }
    });
});

app.listen(config.port, (err) => {
    if (err) {
        console.log("Error al iniciar el servidor.");
    }
    else {
        console.log(`Servidor iniciado en el puerto ${config.port}`);
        Open(`localhost:${config.port}`, {app: 'firefox'});
    }
});