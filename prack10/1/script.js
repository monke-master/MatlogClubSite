var answer = ""

function generateCaptcha() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var captcha = '';
  for (var i = 0; i < 5; i++) {
    captcha += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  answer = captcha;
  document.getElementById('captcha').innerText = captcha;
}

function checkAnswer() {
  
  var userInput = document.getElementById('answer').value;

  if (userInput === answer) {
    alert('Проходите.');
    document.getElementById('send').style.display = 'block';
  } else if (!userInput) {
    alert('Пустой ввод!');
    document.getElementById('send').style.display = 'none';
    generateMathCaptcha();
  }
  else {
    alert('Неправильный ответ. Вот ты и попался, робот!');
    document.getElementById('send').style.display = 'none';
    generateMathCaptcha();
  }
}

function generateMathCaptcha() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  var sum = num1 + num2;
  answer = sum.toString();
  document.getElementById('captcha').innerText = num1 + ' + ' + num2 + ' =';
}
generateCaptcha();