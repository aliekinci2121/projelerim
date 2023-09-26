// ASENKROMM PROGRAMLAMA

// 1-Timing
// 2-EVENTER
// 3-HTTP ISTEKLERINDE=> DURUMLARDA ASENKRIN OLARAK CALISIR


// console.log('Ali')

// setTimeout(()=>{
//     console.log('süre doldu ve calisti')
// },1000)

// setTimeout(()=>{
//     console.log('500Sn desonra calismaya basladi')
// },500)

// console.log('Ekinci')


// ASENKROMM PROBLEMI

//  const users=[
//      {
//          userId:5,
//          post:"Ali Post 1"
//      },
//      {
//          userId:5,
//          post:"Ali Post 2"
//      },
//      {
//          userId:5,
//          post:"Ali Post 3"
//      },
//      {
//          userId:6,
//          post:"Enes Post 1 "
//      },
//      {
//          userId:7,
//          post:"Betül Post 1"
//      }
//  ]

// //user id
// //post by user id
// //senkroma ceirmek lazimmmmm bunun icin de
// //callbac-promise-asyn aweit kullanmamiz lazimmmm
// function getUserId(callback){
//     setTimeout(() => {
//         //servise gittik cevabi aldik
//         //return 5
//         let userId=7
//         callback(userId)

//     }, 1000);
// }
// function getPostByUserId(userId){
//     //Gercek bir rest api ya istk gondereceksiniz
//     setTimeout(()=>{
//        users.forEach((user)=>{
//         if(user.userId===userId){
//             console.log(user.post)
//         }
//        })
//     },500)
// }
// getUserId(getPostByUserId)
// let userId=getUserId()
// getPostByUserId(userId)


// //CALLBACK NEDIR?
// //Callback: Bir foncksiyonu bir fonksiyona parametre gecerek asenkronu senkrona cevirir
// function getName(callback){
//      setTimeout(() => {
//         //servisten ismimi getir 
//        let name='Ali'
//         callback(name)
//      }, 1000);
// }
// function getSurname(name,callback){
//     setTimeout(() => {
//         let surname='Ekinci'//name yye goresoyismim buldu
//         callback(surname)
//     }, 500);
// }
// function getAge(name,surname,callback){
//     setTimeout(() => {
//         let age=35 //Ismi ali soyismi ekinci olaninin servisten yasini getirir
//         callback(age)
//     }, 300);
// }
// // getName(getSurname)
// getName((name)=>{
//     getSurname(name,(surname)=>{
//       getAge(name,surname,(age)=>{
//         console.log(name,surname,age)
//       })
//     })
// })
// // getName()
// // getSurname()

//ajax nedir?
function prepareURL(url,id){
    if(id===null){
        return url
    }
    return `${url}?postId=${id}`
}

function getComments(url,id){
    let newURL=prepareURL(url,id)
    const xhr=new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText))

        }
    })
    xhr.open('GET',newURL)
    xhr.send( )
}

function getData(url){
    const xhr=new XMLHttpRequest()
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText))
        }
    })
    xhr.open('GET',url)
    xhr.send()
}
// getComments("https://jsonplaceholder.typicode.com/comments",null)
getData("https://jsonplaceholder.typicode.com/users")