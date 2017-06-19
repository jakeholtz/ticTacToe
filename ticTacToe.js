// TIC TAC TOE jakeholtz 6/19/2017
var ticTacToe = {};

ticTacToe.title = ( 'TIC TAC TOE')
ticTacToe.players = ['person1', 'person2'];
ticTacToe.turn = '(Turn: ' + ticTacToe.players[0] + ')';

ticTacToe.line = (' _____');
ticTacToe.top = ['|_|_|_|', [null, null, null]];
ticTacToe.mid = ['|_|_|_|', [null, null, null]];
ticTacToe.bot = ['|_|_|_|', [null, null, null]];

console.log(ticTacToe.title);
console.log(ticTacToe.turn);
console.log(ticTacToe.line);
console.log(ticTacToe.top);
console.log(ticTacToe.mid);
console.log(ticTacToe.bot);

module.exports = ticTacToe;

//  _____
// |_|_|_|
// |_|_|_|
// |_|_|_|


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
// * You should have a reasonably thorough suite of
  // unit tests using a real unit test framework.
// * Use the editor of your choice.
// * @@@@@@@@Init a git repo for this project.
// * @@@@@@@@ Push the repo up to github.
// * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.
