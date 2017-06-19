// TIC TAC TOE jakeholtz 6/19/2017
var ticTacToe = {};

ticTacToe.title = ( '***TIC TAC TOE***')

ticTacToe.line = (' ____');
ticTacToe.space = (' ');

ticTacToe.top = ['|_|_|_|', [null, null, null]];
ticTacToe.mid = ['|_|_|_|', [null, null, null]];
ticTacToe.bot = ['|_|_|_|', [null, null, null]];

ticTacToe.players = ['X', 'O'];
ticTacToe.turn = '(Turn: ' + ticTacToe.players[0] + ')';
ticTacToe.instructions = 'Please type the space you want to go (eg. A1). Note: columns are A - C and rows 1, 3';

ticTacToe.go = function(square) {
  this.moves = {
    A1: ticTacToe.top[1][0],
    A2: ticTacToe.mid[1][0],
    A3: ticTacToe.bot[1][0],
    B1: ticTacToe.top[1][1],
    B2: ticTacToe.mid[1][1],
    B3: ticTacToe.bot[1][1],
    C1: ticTacToe.top[1][2],
    C2: ticTacToe.mid[1][2],
    C3: ticTacToe.bot[1][2],
  }
  this.moves[square] = this.players[0];
}

ticTacToe.go('A1');
console.log(ticTacToe.title);
console.log(ticTacToe.space);
console.log(ticTacToe.line);
console.log(ticTacToe.top[0]);
console.log(ticTacToe.mid[0]);
console.log(ticTacToe.bot[0]);
console.log(ticTacToe.space);
console.log(ticTacToe.turn);
console.log(ticTacToe.space);
console.log(ticTacToe.instructions);

module.exports = ticTacToe;

//GOALS
// that redraws the board
// makes clear whose turn it is, each turn.
// Players can submit moves
   // (assume, admittedly unrealistically that both players are
   // sitting at the same keyboard).
// Win detection - detect and display who won

// Implementation instructions
//    @@@@@@@@ Create the project from scratch. Don't just clone an existing project.
  //  @@@@@@@@ configuration files for any dependencies and test framework setup.
// @@@@@@@@ You should have a reasonably thorough suite of
  // @@@@@@@@ unit tests using a real unit test framework.
// @@@@@@@@  Use the editor of your choice.
// * @@@@@@@@Init a git repo for this project.
// * @@@@@@@@ Push the repo up to github.
// * @@@@@@@@ Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * @@@@@@@@ Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.
