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
// Add an event listener for the window that occurs upon a user loading the todo application
window.addEventListener('load', () => {
    // The event listener retrieves the to-do items saved in local storage using localStorage.getItem('items'). 
  const savedItems = JSON.parse(localStorage.getItem('items')) || []; // Created a new constant for saved item
    // If there are saved items, they are parsed from a JSON string using JSON.parse() function to extract what was stored.
  for (const { isChecked, text } of savedItems) { // We loop through the parse items, creating a new li element to represent it in the todo list
    const newItem = document.createElement('li');
    newItem.setAttribute("id", uuidv4());
      // Content is constructed using template literal, which also includes any items that were checked in the list, but not removed from the list,
      // the text of the item, and the accompanying delete button
    newItem.innerHTML = `
      <input type="checkbox" ${isChecked ? 'checked' : ''}> 
      ${text}
      <button class="delete">Delete</button>
    `;
      //The classList.toggle() method is used to add or remove the strike class to the li element based on the isChecked property, 
      // which determines if the item is checked or not
    newItem.classList.toggle('strike', isChecked);
      // the new li element is appended to the list using list.appendChild(newItem), which allows users to see the item on the screen
    list.appendChild(newItem);
  }
});
// TL;DR: Overall, this code ensures that the to-do items saved in local storage are displayed on the page when the page is refreshed.
