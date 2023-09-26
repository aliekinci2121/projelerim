//BEDEN KITLE ENDEKSI
//Vücut kitle indeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle (kg/m²) hesaplanır.
// 1-18 5 kg/m² ‘nin altındaki sonuçlar: İdeal kilonun altında
// 2-18, 5 kg/m² ile 24, 9 ,kg/m² arasındaki sonuçlar: İdeal kiloda
// 3-25 kg/m² ile 29, 9 kg/m² arasındaki sonuçlar: İdeal kilonun üstünde
// 4-30 kg/m² ile 39, 9 kg/m² arasındaki sonuçlar: İdeal kilonun çok üstünde (obez
// 5-40 kg/m² üzerindeki sonuçlar: İdeal kilonun çok üstünde (morbid obez)

let kilo=Number(prompt('Kilolunuzu giriniz:'))

let boyUzunlugu=Number(prompt('Boyunuzu metre cinsinden gitriniz:'))

let sonuc=kilo/(boyUzunlugu*2)

if(sonuc<18.5){
    console.log('İdeal kilonun altında'+sonuc)

}else if(sonuc>=18.5 && sonuc<=24.9){
    console.log('İdeal kiloda'+sonuc)
}else if(sonuc>=25 && sonuc<=29.9){
    console.log('İdeal kilonun üstünde'+sonuc)
}else if(sonuc<=30 && sonuc<=39.9){
    console.log('İdeal kilonun çok üstünde (obez)'+sonuc)
}else if(sonuc>=40 ){
    console.log('İdeal kilonun çok üstünde (morbid obez)'+sonuc)
}



