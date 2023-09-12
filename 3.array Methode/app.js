const sayilar=[22,5,11,44,66,10,3,19,30]

const kareKokler=sayilar.map(sayi=>Math.sqrt(sayi))//map:dizi elemanilarini ir döngüye alip sirasiyla islem yapip sonuclarini yeni bir diziye atar

const kareler=sayilar.map(sayi=>sayi*sayi)

const toplam=sayilar.reduce((acc,sayi)=>acc+sayi,0)

const ortalama=toplam/sayilar.length

const enBuyuk=Math.max(...sayilar)
const enKucuk=Math.min(...sayilar)


console.log("Dizi:", sayilar);
console.log("Karekökler:", kareKokler);
console.log("Kareler:", kareler);
console.log("Toplam:", toplam);
console.log("Ortalama:", ortalama);
console.log("En Büyük Sayı:", enBuyuk);
console.log("En Küçük Sayı:", enKucuk);