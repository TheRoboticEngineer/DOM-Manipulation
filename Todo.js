const form = document.getElementById('form');
const itemInput = document.getElementById('item');
const list = document.getElementById('list');
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const saveToLocalStorage = () => {
    // save the to-do items to local storage
    const items = [];
    for (let i = 0; i < list.children.length; i++) {
      const item = list.children[i];
      const isChecked = item.querySelector('input[type=checkbox]').checked;
      const text = item.textContent;
      items.push({ isChecked, text });
    }
    localStorage.setItem('items', JSON.stringify(items));
  };

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = document.createElement('li');
  newItem.setAttribute("id", uuidv4())
  newItem.innerHTML = `

    <input type="checkbox">
    ${itemInput.value}
    <button class="delete">Delete</button>
  `;
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
