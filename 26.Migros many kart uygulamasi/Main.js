let mesaj=`
Migrasa hos geldiniz.
Monay kartiniz var mi?
1-Evet
2-Hayir
`
const urunler=[
     {
        urunIsmi:"Sür",
        fiyat:15
     },
     {
        urunIsmi:"bebek Bezi",
        fiyat:100
     },
     {
        urunIsmi:"Kusbasi",
        fiyat:220
     }
]
//true ve false olacaktir sonuc

let sonuc=confirm(mesaj)
let odenecekTutar

if(sonuc){
    //monay karti vardir
    let isim=prompt('Adinizi giriniz')
    let soyisim=prompt('Soyadinizi giriniz:')
    const musteri=new Musteri(isim,soyisim,sonuc,urunler)
    let odenecekTutar= musteri.hesapla()

    alert(
        `
        Müsteri Bilgileri:${isim} ${soyisim}
        Odenecek Turar: ${odenecekTutar}
        `)
}else{
    const musteri=new Musteri(null,null,sonuc,urunler)
    odenecekTutar=musteri.hesapla()
    alert(`Ödenecek Tutar:${odenecekTutar}`)

}