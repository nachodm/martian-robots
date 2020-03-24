"use strict";

const Grid = require('./grid');
const Robot = require('./robot');

class Game {
    /**
     * Constructor of the game.
     * @param {Array} input Contains the game information.
     */
    constructor(input) {
        this.grid; 
        this.input = input;
        this.robots = []; 
    }


    setUpRobot(grid, input, counter) {
        let aux = input[counter].split(' ');
        //Uses regular expressions to correctly trim the characters.
        const robot = new Robot(grid, {column: parseInt(aux[0]), row: parseInt(aux[1]), orientation:aux[2].replace(/[^\d\w:/ ]/g, '')}, input[counter+1].replace(/(\r\n|\n|\r)/gm, ""), false);
        this.robots.push(robot);
    }

    /**
     * Runs the game with the specified input. Returns the callback error in the event something goes wrong.
     * @param {Function} callback Returns an error if something goes wrong.
     */
    executeGame(callback) {
        let tempGrid = this.input[0].split(' ');
        if (!isNaN(tempGrid[0]) && !isNaN(tempGrid[1])) {
            const grid = new Grid(tempGrid[0], tempGrid[1]);
            let counter = 1;
            let cont = true;
            while(cont) {
                this.setUpRobot(grid, this.input, counter);
                counter += 2;
                if (counter >= this.input.length) {
                    cont = false;
                }
            }
            for (let i = 0; i < this.robots.length; i++) {
                this.robots[i].move();
            }
            if(callback) {
                callback(null);
            }
        }
        else {
            callback("Grid dimensions must be numbers");
        }
    };
}
module.exports = Game