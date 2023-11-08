function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  }
  return str;
}


document.getElementById('text').textContent = truncate(document.getElementById('text').textContent, 15);