// kelime sayisini bulma uygulamsi
let metin ='Güzel yasamanin sirri iyi dinlenmektir'

// let harf=prompt('Lütfen bir harf giriniz:')
// let sonuc=bul(harf)
// alert('Harf Sayisi:'+ sonuc)
bul('a')
bul('e')
bul('t')

function bul(harf){
    toplam=0
    for(let i=0;i<metin.length;i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            toplam+=1

        }
    }
   // return toplam
   console.log('Harf sayisi:'+toplam)
}