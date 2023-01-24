const form = document.getElementById('form');
const itemInput = document.getElementById('item');
const list = document.getElementById('list');

const saveToLocalStorage = () => {
    // save the to-do items to local storage
    const items = [];
    for (let i = 0; i < list.children.length; i++) {
      const item = list.children[i];
      const isChecked = item.querySelector('input[type=checkbox]').checked;
      const text = item.textContent;
      const nanoid = item.nanoid;
      items.push({ isChecked, nanoid, text });
    }
    localStorage.setItem('items', JSON.stringify(items));
  };

const readFromLocalStorage = () => {
  let items = localStorage.getItem('items')
  if (items.length != 0) {
     items = JSON.parse(items)
  }
  
  for(let item of items) {
    let newItem = document.createElement('li')
    newItem.innerHTML = `

    <input type="checkbox" />
    ${item.text}
    <button class="delete">Delete</button>
  `;
    newItem.setAttribute("nanoid", item.nanoid);
    list.appendChild(newItem);
    console.log('done')

  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = document.createElement('li');
  newItem.innerHTML = `

    <input type="checkbox">
    ${itemInput.value}
    <button class="delete">Delete</button>
  `;
  newItem.setAttribute("nanoid", window.nanoid());
  list.appendChild(newItem);  // append the new list item to the unordered list
  itemInput.value = '';
  saveToLocalStorage();
});

list.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    e.target.parentElement.classList.toggle('strike');
  }
  saveToLocalStorage();
});

list.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    e.target.parentElement.remove();
  }
  saveToLocalStorage();
});
