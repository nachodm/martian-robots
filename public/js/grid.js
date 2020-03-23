"use strict";

/**
 * Grid class. 
 */
class Grid {

    /**
     * 
     * @param {*} columns Number of columns of the grid.
     * @param {*} rows Number of rows of the grid.
     */
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
    }

    /**
     * Set ups the grid according to the input parameters
     * @param {*} input 
     */
    setUpGrid(input) {
        let tempGrid = this.input.split('\n')[0];
        tempGrid = tempGrid.split(' ');
        this.grid = new Grid(tempGrid[0],tempGrid[1]);
    }

    /**
     * Checks grid layout is within the specified requirements.
     * @param {*} columns Number of columns of the grid.
     * @param {*} rows Number of rows of the grid.
     */
    checkSize(columns, rows) {
        if (columns > 50) {
            columns = 50;
        }
        else if (rows > 50) {
            rows = 50;
        }
    }
}

module.exports = Grid;