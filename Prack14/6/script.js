const blinkingText = document.getElementById('blinkingText');

setInterval(() => {
  if (blinkingText.style.visibility === 'hidden') {
    blinkingText.style.visibility = 'visible';
  } else {
    blinkingText.style.visibility = 'hidden';
  }
}, 500);
