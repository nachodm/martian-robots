var assert = require('assert');
const Robot = require('../public/js/robot');
const Grid = require('../public/js/grid');

describe('Robot testing', function() {
    it('Should check Robot gets lost if pushed towards the grid edges', function() {
        const robot = new Robot(new Grid(3, 3), {column: 1, row:1, orientation:"E"}, "FFLFFFR");
        robot.move();
        assert.equal(robot.lost, true);
    });
})
