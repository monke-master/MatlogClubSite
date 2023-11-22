function showNotification(options) {
  const notificationList = document.getElementById("notification-list");
  const newNotification = document.createElement("div");
  newNotification.className = "notification";

  if (options.content instanceof HTMLElement) {
    newNotification.appendChild(options.content.cloneNode(true));
  } else {
    newNotification.innerHTML = options.content;
  }

  notificationList.appendChild(newNotification);
  newNotification.style.display = "block";
  setTimeout(() => {
    notificationList.removeChild(newNotification);
  }, 1500);
}



showNotification({ content: "Custom notification content" });


setTimeout(() => {
  const imgElement = document.createElement("img");
imgElement.src = "donbass.gif";
imgElement.alt = "Image";
showNotification({ content: imgElement });
  
}, 1500)



setTimeout(() => {
  const anotherDiv = document.createElement("div");
  const text = document.createElement("h1");
  text.innerText = "Красивый флаг";
 
  const imgElement = document.createElement("img");
  imgElement.src = "donbass.gif";
  imgElement.alt = "Image";

  anotherDiv.appendChild(text);
  anotherDiv.appendChild(imgElement);
  
  showNotification({ content: anotherDiv });
  
}, 3000)
