class MigrosBase {
  indirimOrani = 20;
  constructor(isim, soyisim, kartVarmi, urunler) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.kartVarmi = kartVarmi;
    this.urunler = urunler;
  }
  hesapla() {
    let odenecekTutar = 0;
    if (this.urunleriKontrolEt(this.urunler)) {
      //Sepetim Dolu
      if (this.kartVarmi) {
        // Monay karti vardir
        this.urunler.forEach((urun) => {
          odenecekTutar += (urun.fiyat * (100 - this.indirimOrani)) / 100;
        });
      } else {
        //Monay karti yoktur
        this.urunler.forEach((urun) => {
          odenecekTutar += urun.fiyat;
        });
      }
    } else {
      alert("En az bir tane urun satin almalisiniz");
    }
    return odenecekTutar;
  }
  urunleriKontrolEt(urunler) {
    if (urunler != null && urunler.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
