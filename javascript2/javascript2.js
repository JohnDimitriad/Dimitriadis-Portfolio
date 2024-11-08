const colorHistory = [];

function chooseColor(color) {
  const message = document.getElementById('message');
  const colorHistoryList = document.getElementById('colorHistoryList');

  message.style.color = color;
  message.textContent = "Hello World!";

  colorHistory.push(color);

  const historyItem = document.createElement('li');
  historyItem.textContent = color;
  colorHistoryList.appendChild(historyItem);
}