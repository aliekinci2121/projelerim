

// let sayilar=[0,1,2,3,4,5,6,7,8,9]

// sayilar[9]='Mehmet'
// console.log(sayilar)

//forEach

// let isimler=['yakup','Enes','Bilal','Kübra','Aysenur','Adem' ]

// let sayac=0

// while(sayac<isimler.length){
//     console.log(sayac)
//     sayac++
// }

// for(let i=0;i<isimler.length;i++){
//     console.log(isimler)
// }

// isimler.forEach((isim)=>{
//     console.log(isim)
// })


//diziin metotlari

let arabalar1=['bmw','toyota','renault','mercedes','porsche']
let arabalar2=['tofas','hundai']

// arabalar.push('opel')//dizinin sonun a ekler

// arabalar.unshift('hundai')//dizinin sonuna ekleme yapar

// arabalar.pop()//son elemani kaldirir

// arabalar.shift()//dizinin basindaki eleman siler
// arabalar.splice[0,0,'hundai']//dizinin sfirinci indexine herhanbi deger silmeden 'hundayu' ekle
// arabalar.toString()//stringe cevirir

// let stringArabalar=arabalar.join('-')// araya'-' isareti yokuyr ve diziyi sring e cevirir


// console.log(stringArabalar)

// let birlestirilmisDizi=arabalar1.concat(arabalar2)// iki diziyi birlestiriri
// console.log(birlestirilmisDizi)

//   let ayridizi=arabalar1.slice(2)//ilk iki indexi sildi
//   console.log(ayridizi)

// let tersCevirilmisDizi=arabalar1.reverse()// diziyni inindeki elamanlarinin indexlerini ters cevirir
// console.log(tersCevirilmisDizi)

// let index=arabalar1.indexOf('bmw')
// console.log(index)

let sonuc=arabalar1.includes('porsche')
console.log(sonuc)