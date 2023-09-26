// PARAMETRESIZ METHODLAR

// function yazdir(){
//     console.log('Ali')
// }
// yazdir()

//PARAMETRELI METOHODLAR

// function write(firesName,lastName){
//      console.log(firesName+' '+ lastName)
// }
// write('Ali','Ekinci')
// write('Enes','Bayram')

// cube(5)

// function cube(sayi){
//     console.log(sayi*sayi*sayi)
// }

// let yas = Number(prompt(" Yasiniz giriniz"));
// kontrolEt(yas);

// function kontrolEt(yas) {
//   if (yas > 18) {
//     console.log("Ehliyet alabilirsiniz...");
//   } else {
//     console.log("ehliyet alamazsiniz");
//   }
// }

//¨! RETURNN--- geriye döndürmek 

let donenDeger=cube(2)
kareAl(donenDeger)

function kareAl(sayi){
    let sonuc=sayi*sayi
    console.log(sonuc)
}
function cube(sayi){
    let sonuc=sayi*sayi*sayi 
    //console.log(sonuc)
    return sonuc
}


