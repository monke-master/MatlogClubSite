function checkAnswer() {
    var answer = prompt("Желаете пройти регистрацию на сайте?");
  
    if (answer.toLowerCase() === "да") {
      document.getElementById("message").innerHTML = "А мы нет!";
      document.getElementById("message").style.display = "block";
    } else {
      document.getElementById("message").innerHTML = "И хорошо!";
      document.getElementById("message").style.display = "block";
    }

  }