//PROMISE

//Asenkron yapilarini senkrona cevirnek icin kullaniyilir.
//Callbeck'lerin alternatividir

let check = true;

// const promise1=new Promise((resolve,reject)=>{
//     if(check){
//         resolve('Promise basarili')
//     }else{
//         reject('Promise basarisiz')
//     }
// })
// console.log(promise1)

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//            resolve('Promise de herhangi bir sikinti yok')
//         }else{
//             reject('sikinti buyuk...')
//         }
//     })
// }
// createPromise()
// .then((resolve)=>{
//     console.log(resolve)
// })
// .catch((errror)=>{
//     console.log(errror)
// })
// .finally(()=>console.log('Promise her zaman calisir'))

// PRMISELERI + XMLHTTPREQUEST

//promise.all
function readStudent(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch (error) {
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
  });
}
// readStudent("students.json")
// .then((date)=>console.log(date))
// .catch((error)=>console.log(error))

function getUser(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch (error) {
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
  });
}
function getCommetByUserID(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch (error) {
      reject(error);
    }
    xhr.open("GET", url);
    xhr.send();
  });
}
// getUser("https://jsonplaceholder.typicode.com/users/3")
//   .then((data) => {
//     console.log(data);
//     return getCommetByUserID(`https://jsonplaceholder.typicode.com/users/${data.id}`)
//   })
//   .then((res)=>console.log(res))
//   .catch((error) => console.log(error))
//   .finally("Herzaman calisir");

const p1=Promise.resolve('Birinci Promise basarili')
const p2=Promise.resolve('Ikinci Promise basarili')
const p3=new Promise((resolve,reject)=>{
    resolve('Ucuncu promise basarili')
})
const p4=Promise.reject('Bir hata olustu arkadas....')
Promise.all([p1,p2,p3,p4])
.then((res)=>{
    // console.log(res)
    for(let value of res){
        console.log(value)
    }
})
.catch((err)=> console.log(err))