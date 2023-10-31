var isDrawing = false;

function onClick() {
  isDrawing = !isDrawing;
}


document.addEventListener("mousemove", function(event) {
  if (isDrawing) {
    var drawingElement = document.createElement("div");
    drawingElement.classList.add("drawing");
    var image = new Image();
    image.setAttribute('width', '20px');
    image.setAttribute('height', '20px');
    image.src = "heart.png";
    drawingElement.appendChild(image);
    drawingElement.style.left = event.clientX + "px";
    drawingElement.style.top = event.clientY + "px";
    document.body.appendChild(drawingElement);
  }
});
