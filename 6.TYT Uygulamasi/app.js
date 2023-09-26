/*
? SORULAR
           --4PUAN
1-TÜRKCE 40
2-MATEMATIK4
3-SOSYAL BILIMLWE 20
4-FEN BILIMLERI

---> 100 PUAN OSYM VERIYOR
--->OKUL PUANI MAX 60 VERIYOR
*/

let turceDogru,turkceYanlis=0
let matDogru,matYanlis=0
let sosyalDogru,sosyalYanlis=0
let fenDogru,fenYanlis=0
puan=0

let yeniSatir='\r\n'
let mesaj='TYT Puna hesaplamasina hos heldiniz...'+yeniSatir
+'1-Puan Hesapla'+yeniSatir
+'2-Cikis Yap'

let secim=prompt(mesaj)

switch(secim){
    case '1':
        let okulPuani=Number(prompt('Okul Puaniniza giriniz:'))
        let matDogru=Number(prompt('Matematik dogru sayisi'))
        let matYanlis=Number(prompt('matematik yanlis sayisi:'))

        let turceDogru=Number(prompt('Turkce dogru saysisi:'))
        let turkceYanlis=Number(prompt('Turkce Yanlis sayisi:'))

        let sosyalDogru=Number(prompt('sosyal dogru sayisi:'))
        let sosyalYanlis=Number(prompt('sosyal yanlis sayisi:'))

        let fenDogru=Number(prompt('Fen dogru sayisi:'))
        let fenYanlis=Number(prompt('Fen yanlis saysisi:'))

        let toplamDogruSayisi=turceDogru+matDogru+sosyalDogru+fenDogru
        let toplamYanlisSayisi=turkceYanlis+matYanlis+sosyalYanlis+fenYanlis
        
        let toplamNetSayisi=toplamDogruSayisi-(toplamYanlisSayisi)/4
        puan=toplamNetSayisi +100 +okulPuani
        alert('okul Puaniniz:'+puan)
        break
    case '2':
        alert('Uygulamadan cikis Yaptiniz...')
        break
    default:
        alert('Lütfen gecerli bir deger giriniz!!')
        break
}