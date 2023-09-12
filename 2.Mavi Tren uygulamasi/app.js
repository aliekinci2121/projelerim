const maviTrenVagonlari = Array.from({ length: 10 }, (_, i) => i + 1);


const gizliVagon = Math.floor(Math.random() * 10) + 1;

let puan = 100; // Başlangıç puanı
let denemeSayisi = 0; // Deneme sayısı

// Oyun döngüsü
while (true) {
 
  const kullaniciTahmini = prompt(
    `Küçük Ahmet hangi vagonda saklanıyor? (1-10)`
  );

  // Kullanıcının tahminini kontrol edin
  if (kullaniciTahmini === null) {
    
    break;
  }

  const tahmin = parseInt(kullaniciTahmini);

  if (isNaN(tahmin) || tahmin < 1 || tahmin > 10) {
    
    alert('Geçersiz bir vagon numarası girdiniz. Lütfen 1 ile 10 arasında bir sayı girin.');
    continue;
  }

  
  denemeSayisi++;

 
  if (tahmin === gizliVagon) {
   
    alert(`Tebrikler! Küçük Ahmet'i ${denemeSayisi} denemede buldunuz.`);
    break;
  } else {
    
    const yon = tahmin < gizliVagon ? 'ön' : 'arka';
    alert(`Küçük Ahmet ${yon} vagonda değil. Tekrar deneyin.`);
    
    // Puanı düşürün
    puan -= 25;
  }

  if (puan <= 0) {
    alert('Üzgünüz, puanınız tükendi. Oyun sona erdi.');
    break;
  }
}


console.log(`Puanınız: ${puan}`);