window.onload = function() {

  var op, mathRes, arrAnsw = [], i = 0, wrongAnsw = 0;
  var play = document.querySelector('#play');
  var start = document.querySelector('#start');
  var game = document.querySelector('#game');
  var input = document.querySelector('input[name=input]');
  var question = document.querySelector('#question');
  var submit = document.querySelector('#submit');
  var answer = document.querySelector('#answer');
  var answerNumber = document.querySelector('#answerNumber');
  var answerText = document.querySelector('#answerText');
  var restart = document.querySelector('#restart');
  var placeholder = input.placeholder;

  typeEffect('startText', 'Welcome Human! My name is D3P2. You can speak with me through this communication device, which in your time you call BROWSER. The Rebellion needs you! I need to send highly important message with empire secret war plans, but my com-chip was a little bit burned when I blasted out a few empires machines and one black nasty drone R2Q5. That\'s why I can not dial a wright combination of numbers, and I hope you can help me with this. Now I will show you 10 easy examples, just write the correct answer below.');

  play.addEventListener('click', function() {
    start.classList.add('hide');
    game.classList.remove('hide');
    showQuest();
  });

  restart.addEventListener('click', function() {
    restart.classList.add('hide');
    answer.classList.add('hide');
    submit.classList.remove('hide');
    i = 0;
    wrongAnsw = 0;
    arrAnsw = [];
    input.disabled = false;
    input.placeholder = placeholder;
    showQuest();
  });

  input.addEventListener('focus', function() {
    this.placeholder = '';
  });
  input.addEventListener('blur', function() {
    this.placeholder = placeholder;
  });

  input.addEventListener('keyup', function(event) {
    if (event.keyCode == 13 && input.value !== '' && !isNaN(input.value)) {
      theGame();
      submit.classList.remove('btn--active');
      input.classList.remove('box--achtung');
    } else if (event.keyCode == 13) {
      input.classList.add('box--achtung');
      submit.classList.remove('btn--active');
    };
  });
  input.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
      submit.classList.add('btn--active');
    };
  });

  submit.addEventListener('click', function() {
    if (input.value !== '' && !isNaN(input.value)) {
      theGame();
      input.classList.remove('box--achtung');
    } else {
      input.classList.add('box--achtung');
    };
  });

  function theGame() {
    i++;

    if (i < 10) {
      getAnsw();
      showQuest();
    } else {
      getAnsw();
      lastMessage();
    };
  };

  function lastMessage() {
    submit.classList.add('hide');
    input.disabled = true;
    answer.classList.remove('hide');
    restart.classList.remove('hide');
    answerNumber.innerHTML = arrAnsw.join(', ');
    answerText.innerHTML = '';

    if(wrongAnsw == 0) {
      typeEffect('answerText', 'All numbers are correct. The message was send. Thank you! The Rebellion never forget what you done for them. Let the Force be with you!');
    } else if (wrongAnsw == 1) {
      typeEffect('answerText', 'We was so close! The message was not send. Please try again. Without your help Empire will soon conquer the whole Universe!');
    } else if (wrongAnsw > 1 && wrongAnsw <= 3) {
      typeEffect('answerText', 'The message was not send. You need to practice more in Math. In future it\'s one of the most important science. Try again!');
    } else {
      typeEffect('answerText', 'The message was not send. As I can see your math module need to be checked. Try again!');
    };
  };

  function getAnsw() {
    var userInp = input.value;

    if (userInp == mathRes) {
      arrAnsw.push('<span class="answ__true">' + userInp + '</span>');
    } else {
      arrAnsw.push(question.innerHTML + ' &#8800; ' + '<span class="answ__wrong">' + userInp + '</span>');
      wrongAnsw++;
    };
  };

  function showQuest() {
    var x = getRandom(1,20);
    var y = getRandom(1,20);
    op = getRandomOp();
    mathRes = mathOp(x,y);
    question.innerHTML = x + ' ' + op + ' ' + y;
    input.value = '';
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

  function typeEffect(id, sentence) {
    var index = 0;
    var speed = 80;

    var timer = setInterval(function() {
      var char = sentence.charAt(index);
      document.getElementById(id).textContent = sentence.substr(0,index);
      if(index++ === sentence.length){
        clearInterval(timer);
      }
    }, speed);
  };
};

