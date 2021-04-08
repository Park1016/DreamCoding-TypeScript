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
const imageModal = document.querySelector('.imageModal');
const videoModal = document.querySelector('.videoModal');
const noteModal = document.querySelector('.noteModal');
const taskModal = document.querySelector('.taskModal');
const imageVideoTextArea = document.querySelector('.imageVideoTextArea');
const noteTaskTextArea = document.querySelector('.noteTaskTextArea');
const imageTitleInput = document.querySelector('.imageTitleInput');
const videoTitleInput = document.querySelector('.videoTitleInput');
const imageUrlInput = document.querySelector('.imageUrlInput');
const videoUrlInput = document.querySelector('.videoUrlInput');
const noteTitleInput = document.querySelector('.noteTitleInput');
const taskTitleInput = document.querySelector('.taskTitleInput');
const noteBodyInput = document.querySelector('.noteBodyInput');
const taskBodyInput = document.querySelector('.taskBodyInput');
const addBtn = document.querySelector('.addBtn');
const undo = document.querySelector('.fa-times');
const contents = document.querySelector('.contents');


new Sortable(contents, {
    animation: 350
});

// function
function onImgBtn(){
    noteModal.style.visibility='hidden';
    taskModal.style.visibility='hidden';
    videoModal.style.visibility='hidden';
    imageModal.style.visibility='visible';
}

function onVideoBtn(){
    noteModal.style.visibility='hidden';
    taskModal.style.visibility='hidden';
    videoModal.style.visibility='visible';
    imageModal.style.visibility='hidden';
}

function onNoteBtn(){
    noteModal.style.visibility='visible';
    taskModal.style.visibility='hidden';
    videoModal.style.visibility='hidden';
    imageModal.style.visibility='hidden';
}

function onTaskBtn(){
    noteModal.style.visibility='hidden';
    taskModal.style.visibility='visible';
    videoModal.style.visibility='hidden';
    imageModal.style.visibility='hidden';
}

function onUndo(e){
    const target = e.target;
    target.parentNode.style.visibility='hidden';
}

function onImageModal(){
    const ivClass =
    `
    <li class="content">
        <div class="ivContentBody">
            <img class="image"
            src='${imageUrlInput.value}'>
        </div>
        <div class="ivContentText contentText">${imageTitleInput.value}</div>
        <div class="ivContentUndo contentUndo">
            <i class="fas fa-times"></i>
        </div>
    </li>
    ` ;

    contents.insertAdjacentHTML('beforeend', ivClass);
    imageUrlInput.value='';
    imageTitleInput.value='';
}

function onVideoModal(){
    const start = videoUrlInput.value.indexOf('e');
    const address = videoUrlInput.value.substring(start+2);
    const addressClass =
    `
    <li class="content">
        <div class="ivContentBody">
            <iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/${address}"
            title="YouTube video player" frameborder="0" allow="accelerometer;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="ivContentText contentText">${videoTitleInput.value}</div>
        <div class="ivContentUndo contentUndo">
            <i class="fas fa-times"></i>
        </div>
    </li>
    ` ;
    const embedClass = 
    `
    <li class="content">
        <div class="ivContentBody">
            <iframe width="100%" height="100%" 
            src="${videoUrlInput.value}"
            title="YouTube video player" frameborder="0" allow="accelerometer;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="ivContentText contentText">${videoTitleInput.value}</div>
        <div class="ivContentUndo contentUndo">
            <i class="fas fa-times"></i>
        </div>
    </li>
    ` ;
    if(videoUrlInput.value.indexOf('embed') != -1){
        contents.insertAdjacentHTML('beforeend', embedClass);
    }else{
        contents.insertAdjacentHTML('beforeend', addressClass);
    }
    videoUrlInput.value='';
    videoTitleInput.value='';
}

function onNoteModal(){
    const ntClass =
    `
    <li class="content" id="ntContent">
        <div class="bodyTextContent">    
            <div class="ntContentBody">${noteTitleInput.value}</div>
            <div class="ntContentText contentText">${noteBodyInput.value}</div>
        </div>
        <div class="ntContentUndo contentUndo">
            <i class="fas fa-times"></i>
        </div>
    </li>
    ` ;
    contents.insertAdjacentHTML('beforeend', ntClass);
    noteTitleInput.value = '';
    noteBodyInput.value='';
}

function onTaskModal(){
    const ntClass =
    `
    <li class="content" id="ntContent">
        <div class="bodyTextContent">            
            <div class="ntContentBody">${taskTitleInput.value}</div>
            <div class="ntContentText contentText">
                <input type="checkbox" id="${taskBodyInput.value}"
                name="${taskBodyInput.value}" checked>
                <label for="scales">${taskBodyInput.value}</label>               
            </div>
        </div>
        <div class="ntContentUndo contentUndo">
            <i class="fas fa-times"></i>
        </div>
    </li>
    ` ;
    contents.insertAdjacentHTML('beforeend', ntClass);  
    taskTitleInput.value = '';  
    taskBodyInput.value = '';
}

function onContentUndo(e){
    const target = e.target.parentNode;
    target.parentNode.remove();
}

function onAddBtn(e){
    const target = e.target.parentNode;
    switch(target){
        case imageModal:
            onImageModal();
            break;
        case videoModal:
            onVideoModal();
            break;
        case noteModal:
            onNoteModal();
            break;
        case taskModal:
            onTaskModal();
            break;
        default:
            throw new Error('unknown modal');
    }
}

// addEventListener
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
        e.target.parentNode.style.visibility = 'hidden';
    }
});



