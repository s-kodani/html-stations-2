// eslint-disable-next-line no-unused-vars
function displayList() {
  const fruitsEl = document.getElementById('fruits');
  const newUlElement = document.createElement('ul');

  Array.from(fruitsEl.children).forEach((fruit) => {
    const newLi = document.createElement('li');
    newLi.innerText = fruit.innerText;
    newUlElement.appendChild(newLi);
  });

  fruitsEl.innerHTML = '';
  fruitsEl.append(newUlElement);
}
