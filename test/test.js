var assert = require('assert');
const Grid = require('../public/js/grid');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('Should check Grid cannot be larger than 50', function() {
        const grid = new Grid(10,80);

        assert.equal(grid.rows, 50);
    });

    it('Should check Grid cannot be wider than 50', function() {
        const grid = new Grid(80, 10);

        assert.equal(grid.columns, 50);
    });
  });
});
