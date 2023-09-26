// const clearButton=document.querySelector('#todoClearButton')

// clearButton.addEventListener('click',changeTitle)
    
// function changeTitle(e){
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.textContent)
//     console.log(e.target.className)
// }

//MOUSE EVENTLARI!

// document.addEventListener('DOMContentLoaded',run)

// function run(){
//     alert('Sayfa yüklendi')
// }

// window.addEventListener('load',run)

// function run(){
//     console.log('Sayfa yüklendi')
// }

// const cardTitle=document.querySelectorAll('.card-title')[1]

// cardTitle.addEventListener('dblclick',run)

// function run(e){
//     console.log(e.type)
// }

// const cardBody=document.querySelectorAll('.card-body')[1]

// // cardBody.addEventListener('mouseover',run)
// cardBody.addEventListener('mouseenter',run)
// function run(e){
//     console.log(e.type)
// }


//KLAVYE EVENTLARI

// document.addEventListener('keypress',run)


// function run(e){
//     // console.log(e.key)
//     // console.log(e.keyCode)
//     // console.log(e.which)

// }

// document.addEventListener('keydown',run)


// function run(e){
//     console.log(e.key)
//     // console.log(e.keyCode)
//     // console.log(e.which)
    
// }

//Keypress:harf ve sayilarda tetiklenen eeventtir

//keydown: hepsinde calisir

//keyup: tustan elinizi biraktiginiz zaman calisir

// document.addEventListener('keyup',run)


// function run(e){
//     // console.log(e.key)
//     // console.log(e.keyCode)
//     // console.log(e.which)
    
// }

// const cardTitle=document.querySelectorAll('.card-title')[0]
// const input=document.querySelector('#todoName')

// input.addEventListener('keyup',run)

// function run(e){
//    cardTitle.textContent=e.target.value
//     // console.log(e.target.value)
// }


// INPUT EVETLARI

const todo = document.querySelector("#todoName");

// todo.addEventListener("focus",run);
// todo.addEventListener("blur",run)
// todo.addEventListener("copy",run)
// todo.addEventListener("paste",run)
// todo.addEventListener("cut",run)
todo.addEventListener("select",run);

function run(e){
    console.log(e.type)
}
