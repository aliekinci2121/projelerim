/*
1.Bakiye Göruntuleme 
2.Para cekme
3.Para yatirma
4.cikis


ATM UYGULAMASI
*/

let yeniSatir = "\r\n";
bakiye = 1000;

let metin =
  "1-Bakiye Görüntüleme" +
  yeniSatir +
  "2-Para Cekme" +
  yeniSatir +
  "3-Para Yatirma" +
  yeniSatir +
  "4-Cikis" +
  yeniSatir +
  "lutefen bir deger giriniz!";
//alert(metin);

let secim = prompt(metin);

switch (secim) {
  case "1":
    alert("Bakiyeniz" + bakiye);
    break;
  case "2":
    let cekilecekTutar = Number(prompt("Cekeceginiz tutari giriniz:"));
    if (cekilecekTutar < bakiye) {
      //basarli
      bakiye = bakiye - cekilecekTutar;
      alert("Güncel Bakiyeniz:" + bakiye);
    } else {
      //basarisiz
      alert(
        "Bakiyenizden fazla para cekemezsiniz" +
          yeniSatir +
          "bakiyeniz:" +
          bakiye +
          " " +
          "cekilecek Tutar:" +
          cekilecekTutar
      );
    }
    break
  case "3":
    let yatirilacakTutar = Number(
      prompt("Lütfen yatiracaginiz tutari giriniz:")
    );
    bakiye = bakiye + yatirilacakTutar;
    alert("bakiyeniz:" + bakiye);
    break
  case "4":
    alert("cikis yapriniz");
    break
  default:
    alert("Lütfen 1 ila 4 arasinda bir deger giriniz");
    break
}
