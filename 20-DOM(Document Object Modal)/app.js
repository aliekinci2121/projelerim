//document Object

// vale=document.links.item(4).getAttribute('id')

// value=document.links.item(4).getAttribute('class')
// value=document.links.item(4).classList[3]

// value=document.forms.item(1).children

// valu=document.domain
// console.log(value)



// const button=document.getElementById('todoAddButton')

// console.log(button)

//console.log(button.getAttribute('id'))
// console.log(button.className)
// console.log(button.getAttribute('class'))

// const classListesi=button.classList[3]
// console.log(classListesi)
//  const classListesi=button.classList

// classListesi.forEach(function(className){
//     console.log(classListesi)
// })

// let buttonText=button.textContent
// let buttonText2=button.innerHTML

// console.log(buttonText)
// console.log(buttonText2)

// button.innerHTML='<b>Todo Ekleyin</b>'

// const todoList=Array.from(document.getElementsByClassName('list-group-item'))
// todoList.forEach(function(todo){
//     console.log(todo.textContent)
// })

// const form=document.getElementsByTagName('form')
// console.log(form[0].name)

// const todoList=document.getElementsByTagName('li')
// console.log(todoList)

// const clearButton=document.querySelector('#todoClearButton')

// const todo=document.querySelectorAll('.list-group-item ')[0]
// //console.log(todo)

// todo.style.color='#fff'
// todo.style.backgroundColor='purple'
// todo.style.fontWeight='bold'

// const todo=document.querySelectorAll('.list-group-item')
// const todoList=document.querySelector('.list-group')

// const card=document.querySelector('.card')

// let value
// value=todoList
// value=todoList.children[0]
// value=todoList.children[3]
// value=todoList.children[todoList.children.length-1]
// value=todoList.children[3].textContent='Degister'

// value=Array.from(todoList.children)

// value.forEach(function(todo){
//     console.log(todo.textContent)
// })

// cocuktan annneye erismek
// value=todo
// let ul=todo.parentElement
// let cardBody=todo.parentElement


//kardesler arasinda gezonmek

// value=todo
// value=todo.nextElementSibling
// console.log(value)

// dinamik olarak element olusturmak
// const cardBody=document.querySelectorAll('.card-body')[1]
// const todoList=document.querySelector('.list-group')

// const link=document.createElement('a')
// link.id='goBlogWebSite'
// link.className='btn btn-dark btn-sm mt-3'
// link.href='https://app.clockify.me/tracker'
// link.target='_blank'
// link.innerHTML='Kisisel Websiteme Git'
// cardBody.appendChild(link)

// const todo=document.createElement('li')
// const todoLink=document.createElement('a')
// const i=document.createElement('i')
// todo.className='list-group-item d-flex justify-content-between'
// todo.innerHTML='Todo 5'
// todoLink.href='#'
// todoLink.className='delete-item'
// i.className='fa fa-remove'

// todoLink.appendChild(i)
// todo.appendChild(todoLink)
// todoList.append(todo)

// console.log(link)

//ELEMENT SSILME

// const todoList=document.querySelector('.list-group')
// const todos=document.querySelectorAll('.list-group-item')
// const todo1=document.querySelector('.list-group-item')
// // todos[0].remove()
// todos[1].remove()

// console.log(todos)

// todos[todos.length-1].remove()
// todo1.remove()

// todoList.removeChild(todos[0])
// todoList.removeChild(todos[todos.length-1])

// todoList.removeChild(todoList.lastElementChild)//son elementi siler

// elementlerin yer degistirmesi


const cardBody=document.querySelectorAll('.card-body')[1]

const newTitle=document.createElement('h2')

newTitle.className='card-title'
newTitle.textContent='Todo Listesi-yeni'
cardBody.replaceChild(newTitle,cardBody.childNodes[1])