var liked = false

function checkAnswer() {
  liked = !liked
  if (liked) {
    document.getElementById("like").style.background = '#FF0000';
  } else {
    document.getElementById("like").style.background = '#ffffff';
  }
}