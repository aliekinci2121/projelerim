// function getStudens(url){
//    fetch(url)
//        .then((response)=>{
//         return response.json()
//        })
//        .then((data)=>console.log(data))
//        .catch((err)=>console.log(err))
   
// }
// getStudens("student.json")

function getData(url){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
getData("https://jsonplaceholder.typicode.com/albums")