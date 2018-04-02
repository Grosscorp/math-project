var correctAnsw = 0;
var falseAnsw = 0;

function getRandom(min,max) {
  return Math.floor(Math.random() * ((++max) - min)) + min;
};

for (i = 0; i < 10 ; i++) {
  var x = getRandom(1,20);
  var y = getRandom(1,20);
  var op = getRandomOp();
  var input = +prompt( x + ' ' + op + ' ' + y + ' enter your number' );

  function getRandomOp() {
    var arr = ['+', '-', '*', '/'];
    return arr[getRandom(0,3)];
  };

  function mathOp (x, y) {
    var res;

    if (op == '*') {
      res = x * y;
    } else if (op == '+') {
      res = x + y;
    } else if (op == '-') {
      res = x - y;
    } else if ((op == '/') && (y != 0)) {
      res = x / y;
    } else {
      res = 'something go wrong!'
    }

    return res;
  };

  if(input.toFixed(2) === mathOp(x,y).toFixed(2)) {
    correctAnsw++;
  } else {
    falseAnsw++;
  }
};

console.log('Correct answers ' + correctAnsw + '\nMistakes ' + falseAnsw);
