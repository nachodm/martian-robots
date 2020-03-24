"use strict";
/**
 * Contains the attributes and methods related to each robot object
 */
class Robot {
    /**
     * Robot constructor
     * @param {Array} initPos Robot position (includes x and y coordinates and robot orientation)
     * @param {Array} instructionsArray Movement instructions the robot should follow
     */
    constructor(grid, position, instructionsArray) {
        this.grid = grid;
        this.position = position;
        this.instructionsArray = instructionsArray;
        this.lost = false;
    }

    /**
     * Reads the instructions array and move the robot forward or changes its orientation depending on each char.
     */
    move() {
        let counter = 0;
        do {
            if (this.instructionsArray.charAt(counter)=== 'F') {
                this.moveForward();
            }
            else {
                this.turn(this.instructionsArray.charAt(counter));
            }
            counter++;
        } while (counter < this.instructionsArray.length && !this.lost)
    }

    /**
     * Moves the robot forward taking into consideration its current orientation. Checks if it gets lost when doing so.
     */
    moveForward () {
        let posAux = Object.assign({}, this.position);
        switch (this.position.orientation) {
            case 'N':
                this.position.column++;
                break;
            case 'S':
                this.position.column--;
                break;
            case 'E':
                this.position.row--;
                break;
            case 'W':
                this.position.row++;
                break;
            default:
                break;
        }
        this.isLost(posAux);
    }

    /**
     * Turns the robot orientation according to the input parameter
     * @param {String} direction One char String that decides if robot moves left or right.
     */
    turn(direction) {
        if (direction === 'L'){
            switch (this.position.orientation) {
              case 'N':
                this.position.orientation = 'W';
                break;
              case 'S':
                this.position.orientation = 'E';
                break;
              case 'E':
                this.position.orientation = 'N';
                break;
              case 'W':
                this.position.orientation = 'S';
                break;
              default:
                break;
            }
          }
          else if (direction === 'R'){
            switch (this.position.orientation) {
                case 'N':
                    this.position.orientation = 'E';
                    break;
                case 'S':
                    this.position.orientation = 'W';
                    break;
                case 'E':
                    this.position.orientation = 'S';
                    break;
                case 'W':
                    this.position.orientation = 'N';
                    break;
                default:
                    break;
            }
          }
    }

    /**
     * Checks if a robot is out of limits.
     */
    isLost(posAux){
        if(this.position.column > this.grid.columns || this.position.column < 0 || this.position.row > this.grid.rows || this.position.row < 0){
            let coordinates = {row: this.position.row, column: this.position.column};
            if (!this.grid.scent.includes(JSON.stringify(coordinates))) {
                this.grid.scent.push(JSON.stringify(coordinates));
                this.lost = true;
            }
            this.position = posAux;
        }
    }
}

module.exports = Robot;