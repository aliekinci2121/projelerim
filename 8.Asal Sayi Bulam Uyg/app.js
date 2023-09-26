//ASAL SAYI BULMA UYGULAMASI
let sayi=Number(prompt('Lütfen bir sayi giriniz:'))
let sonuc=true
for(let i=2;i<=Math.floor(sayi/2);i++){
    if(sayi%i==0){
        //asal degildir
         sonuc=false
    }
}
if(sonuc){
    alert(sayi + ' asaldir')
}else{
    alert(sayi+ ' asal degildir')
}