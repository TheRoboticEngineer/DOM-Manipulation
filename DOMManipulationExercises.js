// Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.
document.getElementById('container');
// Select the section with an id of container using querySelector.
document.querySelector('#container'); // Use # to identify ids 
// Select all of the list items with a class of “second”.
 document.getElementsByClassName('second');
// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third')
// Give the section with an id of container the text “Hello!”.
let newWord = document.querySelector('#container');
newWord.innerText = 'Hello!';
// Add the class main to the div with a class of footer.
let footer = document.querySelector('.footer') //Classes are denoted with . 
footer.classList.add('main');
// Remove the class main on the div with a class of footer.
footer.classList.remove('main')
// Create a new li element.
document.createElement('li')
// Give the li the text “four”.
let newLi = document.createElement('li');
newLi.innerText = 'four'
// Append the li to the ul element.
let newList = document.querySelector("ul");
newList.appendChild(newLi);
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let liInsideOl = document.querySelectorAll('li ol');
for (let i = 0; i < liInsideOl.length; i ++ ){
    liInsideOl[i].style.backgroundColor = 'green';
}
// Remove the div with a class of footer
footer.remove();


