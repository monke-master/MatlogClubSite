const listItems = document.querySelectorAll('.selectable-list li');

listItems.forEach(item => {
  item.addEventListener('click', function(event) {
    if (!event.ctrlKey && !event.metaKey) {
      listItems.forEach(li => {
        li.classList.remove('selected');
      });
    }
    this.classList.toggle('selected');
  });

  item.addEventListener('mousedown', function(event) {
    event.preventDefault();
  });
});
