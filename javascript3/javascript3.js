const names = [];

function addName() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();
  
  if (name) {
    names.push(name);
    names.sort();
    nameInput.value = '';
    displayNames();
  }
}

function displayNames() {
  const nameList = document.getElementById('nameList');
  nameList.innerHTML = '';

  for (const name of names) {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameList.appendChild(listItem);
  }
}