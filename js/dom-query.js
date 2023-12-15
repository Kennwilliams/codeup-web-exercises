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
mainHeaderBtn.addEventListener('click', handleMainHeaderButtonClick);
subHeaderBtn.addEventListener('click', handleSubHeadButtonClick);
listItemsBtn.addEventListener('click', handleLiButtonClick);
singleLiBtn.addEventListener('click', handleSingleLiButtonClick);
firstSubParagraphBtn.addEventListener('click', handleFirstSubParagraphButtonClick);