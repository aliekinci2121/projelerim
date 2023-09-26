// ASYNC AWEIT


// async function hello(){
//     return 'Hello World'
// }
//console.log(hello())

// hello()
// .then((res)=>console.log(res))

// document.querySelector("#butun").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>response.json())
//     .then((post)=>{
//         //console.log(post)
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response)=>response.json())
//         .then((commeent)=>console.log(commeent))
//     })

// })

//Async ile yapilisi
document.querySelector("#buttun").addEventListener("click", async ()=>{
    const post=await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    // const post=await responsePost.json()
    const comment= await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    // const Comment=await responseComments.json()

    console.log(post,comment)
})