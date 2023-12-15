"use strict";

// Global Variables
const mainHeader = document.querySelector('#main-header');
const mainHeaderBtn = document.querySelector('.main-header-btn');
const subHeader = document.querySelector('#sub-header');
const subHeaderBtn = document.querySelector('.sub-header-btn');
const listItems = document.querySelectorAll('li');
const listItemsBtn = document.querySelector('.li-btn');
const textColor = document.querySelector('li[data-dbid="1"]');
const singleLiBtn = document.querySelector('.single-li-btn');
const subParagraphs = document.querySelectorAll('.sub-paragraph');
const firstSubParagraphBtn = document.querySelector('.first-sub-paragraph-btn');

// Functions
function handleMainHeaderButtonClick() {
    mainHeader.innerHTML = "JavaScript is Cool";
}
function handleSubHeadButtonClick() {
    subHeader.style.color = 'blue';
}
function handleLiButtonClick() {
    for (let i = 0; i < listItems.length; i++) {
        if(i % 2 === 0) { // if even
            listItems[i].style.color = 'grey';
        }
        // if(listItems[i].getAttribute('data-dbid') == 1) {
        //     listItems[i].style.color = 'blue';
        // }
    }
}
function handleSingleLiButtonClick() {
    textColor.style.color = 'blue';
}
function handleFirstSubParagraphButtonClick() {
    subParagraphs[0].innerText = "Mission Accomplished!";
}

// Events
// mainHeaderBtn.addEventListener('click', handleMainHeaderButtonClick);
// subHeaderBtn.addEventListener('click', handleSubHeadButtonClick);
// listItemsBtn.addEventListener('click', handleLiButtonClick);
// singleLiBtn.addEventListener('click', handleSingleLiButtonClick);
// firstSubParagraphBtn.addEventListener('click', handleFirstSubParagraphButtonClick);

// New Features

// Change the background color of an h1 element when clicked.
const h1Element = document.querySelector('h1');
h1Element.addEventListener('click', function() {
    this.style.backgroundColor = 'yellow'; // 'this' refers to the h1 element
});

// Make all paragraphs have a font size of 18px when they are double-clicked.
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('dblclick', function() {
        this.style.fontSize = '18px'; // 'this' refers to the paragraph element
    });
});

// Set all li text color to red when the mouse is hovering; reset to black when it is not.
listItems.forEach(li => {
    li.addEventListener('mouseover', function() {
        this.style.color = 'red'; // 'this' refers to the li element
    });

    li.addEventListener('mouseout', function() {
        this.style.color = 'black'; // Reset to black when the mouse is not hovering
    });
});