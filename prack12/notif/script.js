const notifications = [
  "Роман Дзержинский: где типовик???",
  "Андрей Зуев: жду тебя на геймдеве",
  "Ольга Эрнестовна: ни в чем себе не отказывай!",
];

const maxNotifications = 3;
let currentIndex = 0;
let countdownTimer;
let delay = 2000;

function stopCounterForTenSeconds() {
  clearInterval(countdownTimer);

  
  setTimeout(() => {
    countdownTimer = startCounter();
  }, delay);
}

function startCounter() {
  const counterElement = document.getElementById("counter");
  let timeLeft = 3;
  return setInterval(() => {
    counterElement.textContent = `Next notification in: ${timeLeft} seconds`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(countdownTimer);
      showNotification(); 
    }
  }, 1000);
}

function showNotification() {
  const notificationList = document.getElementById("notification-list");
  const counterElement = document.getElementById("counter");
  
  if (notificationList.children.length >= maxNotifications) {
    notificationList.removeChild(notificationList.firstChild);
  }

  const newNotification = document.createElement("li");
  newNotification.className = "notification";
  newNotification.textContent = notifications[currentIndex];
  notificationList.appendChild(newNotification);

  newNotification.style.display = "block";
  currentIndex = (currentIndex + 1) % notifications.length;

  newNotification.scrollIntoView({ behavior: "smooth" });

  countdownTimer = startCounter();
}

showNotification();

document.getElementById("notification-list").addEventListener("click", function(event) {
  if (event.target && event.target.matches("li.notification")) {
    stopCounterForTenSeconds();
  }
});