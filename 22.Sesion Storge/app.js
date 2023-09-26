//Session Strorge

// Deger Eklme

// sessionStorage.setItem('350','Ali')
// sessionStorage.setItem('216','Yasin')
// sessionStorage.setItem('154','Bilal')


// //Deger silmek

// sessionStorage.removeItem('154')

// let value=sessionStorage.getItem('350')
// console.log(value)


// let names=['Ali','Enes','Kübra','Adem','Aysenur']

// sessionStorage.setItem('names',JSON.stringify(names))
// let value=JSON.parse(sessionStorage.getItem('names'))

// value.forEach(function(name){
//     console.log(name)
// })

//Local strorage

localStorage.setItem('Motion1','Push up')
localStorage.setItem('Motion2','Barfx')
localStorage.setItem('Motion3','Burpee')
localStorage.setItem('Motion4','Squat')


//degeri almak

// let value=localStorage.getItem('Motion1')
//console.log(value)

//deger silme

localStorage.removeItem('mation4')


//tümünü sil

 localStorage.clear()

let motions=['push up','Barfix','Burpee','Squat','Chin Up']

localStorage.setItem('motions',JSON.stringify(motions))
let value=JSON.parse(localStorage.getItem('motions'))

value.forEach(function(motio){
    console.log(motio)
})