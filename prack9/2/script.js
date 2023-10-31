function checkAnswer() {
    var answer = prompt("Желаете пройти регистрацию на сайте?");
  
    if (answer) {
      if (answer.toLowerCase() === "я главный") {
        document.getElementById("message").innerHTML = "Здравствуйте!";
        document.getElementById("message").style.display = "block";
      } else {
        document.getElementById("message").innerHTML = "Неверный пароль!";
        document.getElementById("message").style.display = "block";
      }
    } else {
      document.getElementById("message").innerHTML = "Отменено";
      document.getElementById("message").style.display = "block";
    }
    
  }