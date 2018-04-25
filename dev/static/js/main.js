window.onload = function() {

  var op;
  var mathRes;
  var i = 0;
  var play = document.querySelector('#play');
  var start = document.querySelector('#start');
  var game = document.querySelector('#game');
  var input = document.querySelector('input[name=input]');
  var question = document.querySelector('#question');
  var submit = document.querySelector('#submit');
  var answer = document.querySelector('#answer');
  var answerText = document.querySelector('#answerText');
  var placeholder = input.placeholder;
  var arrAnsw = [];

  play.addEventListener('click', function() {
    start.classList.add('hide');
    game.classList.remove('hide');
    input.value = '';
    showQuest();
  });

  input.addEventListener('focus', function() {
    this.placeholder = '';
  });
  input.addEventListener('blur', function() {
    this.placeholder = placeholder;
  });
  input.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
      theGame();
      submit.classList.remove('btn--active');
    }
  });
  input.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
      submit.classList.add('btn--active');
    }
  });

  submit.addEventListener('click', theGame);

  function theGame() {
    i++;
    console.log('i = ' + i);

    if (i < 10) {
      getAnsw();
      showQuest();
    } else {
      getAnsw();
      submit.disabled = true;
      input.disabled = true;
      answer.classList.remove('hide');
      answerText.innerHTML = arrAnsw;
    };
  };

  function getAnsw() {
    var userInp = input.value;
    console.log(userInp);

    if (userInp == mathRes) {
      arrAnsw.push(userInp);
      console.log('good');
      console.log(arrAnsw);
    } else {
      arrAnsw.push('<span class="box__answ--wrong">' + userInp + '</span>');
      console.log('you don\'t know how to do it');
    };
  };

  function showQuest() {
    var x = getRandom(1,20);
    var y = getRandom(1,20);
    op = getRandomOp();
    mathRes = mathOp(x,y);
    question.innerHTML = x + ' ' + op + ' ' + y;
    input.value = '';

    console.log(mathRes);
  };

  function getRandom(min,max) {
    return Math.floor(Math.random() * ((++max) - min)) + min;
  };

  function getRandomOp() {
    var arr = ['+', '-', '*'];
    return arr[getRandom(0,2)];
  };

  function mathOp (x, y) {
    var res;

    if (op == '*') {
      res = x * y;
    } else if (op == '+') {
      res = x + y;
    } else if (op == '-') {
      res = x - y;
    } else {
      res = 'something go wrong!'
    }

    return res;
  };
};


