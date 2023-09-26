//DERS ORTALAMASINI BULMA

// let vize1=Number(prompt('vize1 notunuzu giriniz:'))
// let vize2=Number(prompt('vize 2 notunuzu aliniz:'))

// let finalNotu=Number(prompt('final notunuzu aliniz:'))

// let ortalama =Number(vize1*0.3+ vize2*0.3+finalNotu*0.4)

// if(ortalama>=60){
//     alert('tebrikler dersten gectiniz')
//     console.log('tebrikler dersten gectiniz' + ortalama)
// }
// else{
//     alert('Kaldiniz gecmis olsun')
//     console.log('kaldiniz gecmis olsun'+ ortalama)
// }
// let isim=prompt('isminizigiriniz:')
// console.log(isim

let ad=prompt('Isminizi giriniz:')
let tckn=prompt('tc numaranizi giriniz:')
// kontrolEt(ad,tckn)
// function kontrolEt(ad,tckn){
//        if(ad!=''){
//          if(tckn.length==11){
//             console.log('Isim ve tckn problemsiz girildi')
//          }else{
//             console.log('Lütfen tckn nizi eksizsiz bir sekilde giriniz')
//          }
//        }else{
//         console.log('Lütfen isim alanini bos birakmayiniz')
//        }

// }
kontrolEt2(ad,tckn)
function kontrolEt2(ad,tckn){
    if(ad!=''){
         if(tckn.length==11){
            console.log('idim ve tckn problemsiz girildi')
         }else{
            console.log('Lütfen tc nizi 11 karekter olarak giriniz')
        }       
    }
    if(tckn.length!=11){
        console.log('lütfen tckninizi 11 olarak giriniz')
        
    }else{
        console.log('Lütfen isim alanini bos birakmayiniz!!!')
    }
    
}
