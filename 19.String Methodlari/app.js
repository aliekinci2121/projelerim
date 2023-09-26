let kurs='Modern web Gelistirme kursu'
let tarih='2022'


// let karekter=kurs.charAt(5)//metodun icnindekikarekteri bize getirir
// console.log(karekter)

// let sonuc=kurs.concat(tarih)//iki metodu birlestirmeye yarar
// console.log(sonuc)

// let index=kurs.indexOf('n')  //charAt()'in tam tersi
// console.log(index)

//  let index=kurs.lastIndexOf('kurs')//indeof ile ayni sadece keleimeleri de alabiliri

// console.log(index)


// let cevir=kurs.toUpperCase(kurs)//metodun icindeki butün karekterleri büyük harf yapar
// console.log(cevir)

// let cevir=kurs.toLowerCase(kurs)// bütün karekterleri kücük yapar
// console.log(cevir)

// console.log(kurs.trim())// sagdan veya soldan butun bosluklari silmeye yarar

// console.log(kurs)
// console.log(kurs.slice(7,10))// indexleri dilimlenmekte yanar

// console.log(kurs.substring(0,6))//slice ile ayni anlama geliyor

// console.log(kurs)
// console.log(kurs.replace('Modern','Güncel'))// bir karekterei baska bir karekterle degistirmeye yarar

// console.log(kurs)
// let dizi=kurs.split(' ')// karekterleri diziye cevirir
// console.log(dizi)

// console.log(kurs.startsWith('m'))//indexin hangi karekterele basladigini sorgular


// console.log(kurs.endsWith('u'))// Index'i hangi karekterle bittigini sorgular

// let dizi1=[1,2,3]
// let dizi2=[1,2,3]

// if(dizi1==dizi2){
//     console.log('diziler esittir')
// }else{
//     console.log('diziler esit degildir')
// }

// let a=7
// let b=7
// if(a==b){
//     console.log('a ile b birbirine esittir')
// }else{
//     console.log('a ile b birbirine esit degildir')
// }

// Mavi Tren vagonlarını temsil eden bir dizi oluşturun.
const maviTrenVagonlari = Array.from({ length: 10 }, (_, i) => i + 1);

// Küçük Ahmet'in hangi vagonda saklandığını rastgele seçin.
const gizliVagon = Math.floor(Math.random() * 10) + 1;

let puan = 100; // Başlangıç puanı
let denemeSayisi = 0; // Deneme sayısı

// Oyun döngüsü
while (true) {
  // Kullanıcıdan vagon tahminini alın
  const kullaniciTahmini = prompt(
    `Küçük Ahmet hangi vagonda saklanıyor? (1-10)`
  );

  // Kullanıcının tahminini kontrol edin
  if (kullaniciTahmini === null) {
    // Kullanıcı iptal etti, oyunu sonlandırın
    break;
  }

  const tahmin = parseInt(kullaniciTahmini);

  if (isNaN(tahmin) || tahmin < 1 || tahmin > 10) {
    // Geçersiz tahmin, kullanıcıya uyarı verin
    alert('Geçersiz bir vagon numarası girdiniz. Lütfen 1 ile 10 arasında bir sayı girin.');
    continue;
  }

  // Deneme sayısını artır
  denemeSayisi++;

  // Kullanıcının tahminini kontrol edin
  if (tahmin === gizliVagon) {
    // Kullanıcı doğru tahmin yaptı
    alert(`Tebrikler! Küçük Ahmet'i ${denemeSayisi} denemede buldunuz.`);
    break;
  } else {
    // Yanlış tahmin
    // Kullanıcıya hangi yönde aramasını sürdürmesi gerektiğini söyleyin
    const yon = tahmin < gizliVagon ? 'ön' : 'arka';
    alert(`Küçük Ahmet ${yon} vagonda değil. Tekrar deneyin.`);
    
    // Puanı düşürün
    puan -= 25;
  }

  // Kullanıcının puanını kontrol edin
  if (puan <= 0) {
    alert('Üzgünüz, puanınız tükendi. Oyun sona erdi.');
    break;
  }
}

// Oyun sonunda puanı ekrana yazdırın
console.log(`Puanınız: ${puan}`);