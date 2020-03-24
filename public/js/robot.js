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

    moveForward () {
        let posAux = Object.assign({}, this.position);
        switch (this.position.orientation) {
            case 'N':
                this.position.row++;
                break;
            case 'S':
                this.position.row--;
                break;
            case 'E':
                this.position.column++;
                break;
            case 'W':
                this.position.column--;
                break;
            default:
                break;
        }
        if(this.isLost(this.position)) {
            this.position = posAux;
        }
    }

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

    isLost(position){
        if(this.position.column > this.grid.columns || this.position.column < 0 || this.position.row > this.grid.rows || this.position.row < 0){
             this.lost = true;
        }
        return this.lost;
    }
}

module.exports = Robot;