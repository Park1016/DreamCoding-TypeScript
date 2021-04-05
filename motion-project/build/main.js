"use strict";
const body = document.querySelector('body');
const input = document.querySelector('input');
const headButtons = document.querySelector('.headButtons');
const imgBtn = document.querySelector('.imgBtn');
const videoBtn = document.querySelector('.videoBtn');
const noteBtn = document.querySelector('.noteBtn');
const taskBtn = document.querySelector('.taskBtn');
const section2 = document.querySelector('.section2');
const modal = document.querySelector('.modal');
const imageVideo = document.querySelector('.imageVideo');
const noteTask = document.querySelector('.noteTask');
const addBtn = document.querySelector('.addBtn');
const undo = document.querySelector('.fa-times');

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

function onAddBtn(){

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
    if(target.classList.contains('fa-times')){
        onUndo(e);
    }
    else if(target.classList.contains('addBtn')){
        onAddBtn(e);
    }
});

input.addEventListener('keypress', (e)=>{
    const target = e.target;
    if(e.key === 'Enter'){
        console.log('hi');
    }
})

