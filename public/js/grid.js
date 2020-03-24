"use strict";

/**
 * Grid class. 
 */
class Grid {

    /**
     * Grid constructor.
     * @param {*} columns Number of columns of the grid.
     * @param {*} rows Number of rows of the grid.
     */
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.checkSize(this.rows, this.columns);
        this.scent = [];
    }

    /**
     * Checks grid layout is within the specified requirements. Caps it to the maximum 50 rows or 50 columns if 
     * input was too large or wide.
     * @param {int} rows Number of rows of the grid.
     * @param {int} columns Number of columns of the grid.
     */
    checkSize(rows, columns) {
        if (rows > 50) {
            this.rows = 50;
        }
        else if (columns > 50) {
            this.columns = 50;
        }
    }
}

module.exports = Grid;