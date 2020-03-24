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
        this.checkSize(this.columns, this.rows);
    }

    /**
     * Checks grid layout is within the specified requirements.
     * @param {*} columns Number of columns of the grid.
     * @param {*} rows Number of rows of the grid.
     */
    checkSize(columns, rows) {
        if (columns > 50) {
            this.columns = 50;
        }
        else if (rows > 50) {
            this.rows = 50;
        }
    }
}

module.exports = Grid;