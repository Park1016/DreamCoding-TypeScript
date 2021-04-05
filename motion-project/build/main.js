"use strict";
const body = document.querySelector('body');
const input = document.querySelector('.input');
const headButtons = document.querySelector('.headButtons');
const imgBtn = document.querySelector('.imgBtn');
const videoBtn = document.querySelector('.videoBtn');
const noteBtn = document.querySelector('.noteBtn');
const taskBtn = document.querySelector('.taskBtn');
const section2 = document.querySelector('.section2');
const modal = document.querySelector('.modal');
const imageVideo = document.querySelector('.imageVideo');
const noteTask = document.querySelector('.noteTask');
const imageVideoTextArea = document.querySelector('.imageVideoTextArea');
const noteTaskTextArea = document.querySelector('.noteTaskTextArea');
const ivTitleInput = document.querySelector('.ivTitleInput');
const ivUrlInput = document.querySelector('.ivUrlInput');
const ntTitleInput = document.querySelector('.ntTitleInput');
const ntBodyInput = document.querySelector('.ntBodyInput');
const addBtn = document.querySelector('.addBtn');
const undo = document.querySelector('.fa-times');
const contents = document.querySelector('.contents');

// function
function onImgBtn(){
    noteTask.style.visibility='hidden';
    imageVideo.style.visibility='visible';
}

function onVideoBtn(){
    noteTask.style.visibility='hidden';
    imageVideo.style.visibility='visible';
}

function onNoteBtn(){
    imageVideo.style.visibility='hidden';
    noteTask.style.visibility='visible';
}

function onUndo(e){
    const target = e.target;
    target.parentNode.style.visibility='hidden';
}

function onImageVideo(){
    const ivClass =
    `
    <li class="content">
    <span class="ivContentBody">
    <img class="image"
     src='${ivUrlInput.value}'>
    </span>
    <span class="ivContentText contentText">${ivTitleInput.value}</span>
    <span class="ivContentUndo contentUndo">
        <i class="fas fa-times"></i>
    </span>
    </li>
    ` ;
    console.log(ivUrlInput.value);
    contents.insertAdjacentHTML('beforeend', ivClass);
}

function onNoteTask(){
    const ntClass =
    `
    <li class="content">
    <span class="ntContentBody"></span>
    <span class="ntContentText contentText">${ntTitleInput.value}</span>
    <span class="ntContentUndo contentUndo">
        <i class="fas fa-times"></i>
    </span>
    </li>
    ` ;
    contents.insertAdjacentHTML('beforeend', ntClass);
}

function onContentUndo(e){
    const target = e.target.parentNode;
    target.parentNode.remove();
}

function onAddBtn(e){
    const target = e.target;
    if(target.parentNode.classList.contains('imageVideo')){
        onImageVideo();
    }else{
        onNoteTask();
    }
}

// addEventListener
function onTaskBtn(){
    imageVideo.style.visibility='hidden';
    noteTask.style.visibility='visible';
}

headButtons.addEventListener('click',(e)=>{
    const target = e.target;
    switch(target){
        case imgBtn:
            onImgBtn();
            break;
        case videoBtn:
            onVideoBtn();
            break;
        case noteBtn:
            onNoteBtn();
            break;
        case taskBtn:
            onTaskBtn();
            break; 
        default:
            throw new Error('You click wrong button');
    }
})

section2.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.parentNode.classList.contains('modal')){
        if(target.classList.contains('fa-times')){
            onUndo(e);
        }
    }
    if(target.parentNode.classList.contains('contentUndo')){
        if(target.classList.contains('fa-times')){
            onContentUndo(e);
        }
    }
    if(target.classList.contains('addBtn')){
        onAddBtn(e);
    }
});



