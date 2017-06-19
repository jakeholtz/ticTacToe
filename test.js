var assert = require('assert');
var ticTacToe = require('./ticTacToe.js');

describe('Tic Tac Toe', function() {
  var spaces = ticTacToe.top[1].length + ticTacToe.mid[1].length + ticTacToe.top[1].length;
  it('should return have 9 spaces on board', function() {
    assert.equal(9, spaces);
  });
});
