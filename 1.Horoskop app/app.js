document.addEventListener("DOMContentLoaded", function () {
    const burcForm = document.getElementById("burcForm");
    const sonucDiv = document.getElementById("sonuc");
  
    burcForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const gun = parseInt(document.getElementById("gun").value);
      const ay = document.getElementById("ay").value.toLowerCase();
  
      const burclar = [
        { ad: "KOÇ", baslangicAy: "mart", baslangicGun: 21, bitisAy: "nisan", bitisGun: 20 },
        // Diğer burçlar buraya eklenebilir
        { ad: "BOGA", baslangicAy: "nisan", baslangicGun: 21, bitisAy: "mayis", bitisGun: 20 },
        { ad: "IKIZLER", baslangicAy: "mayis", baslangicGun: 21, bitisAy: "haziran", bitisGun: 21 },
        { ad: "YENGEC", baslangicAy: "haziran", baslangicGun: 22, bitisAy: "temmuz", bitisGun: 22 },
        { ad: "ASLAN", baslangicAy: "temmuz", baslangicGun: 23, bitisAy: "agustos", bitisGun: 23 },
        { ad: "BASAK", baslangicAy: "agustos", baslangicGun: 24, bitisAy: "eylül", bitisGun: 23 },
        { ad: "TERAZI", baslangicAy: "eylül", baslangicGun: 24, bitisAy: "ekim", bitisGun: 23 },
        { ad: "AKREP", baslangicAy: "ekim", baslangicGun: 24, bitisAy: "kasim", bitisGun: 22 },
        { ad: "YAY", baslangicAy: "mkasim", baslangicGun: 23, bitisAy: "aralik", bitisGun: 21 },
        { ad: "OGLAK", baslangicAy: "aralik", baslangicGun: 22, bitisAy: "ocak", bitisGun: 20 },
        { ad: "Kova", baslangicAy: "ocak", baslangicGun: 21, bitisAy: "subat", bitisGun: 19 },
        { ad: "BALIK", baslangicAy: "subat", baslangicGun: 20, bitisAy: "mart", bitisGun: 20 },

      ];
  
      let bulunanBurc = null;
  
      for (const burc of burclar) {
        if (
          (ay === burc.baslangicAy && gun >= burc.baslangicGun) ||
          (ay === burc.bitisAy && gun <= burc.bitisGun)
        ) {
          bulunanBurc = burc.ad;
          break;
        }
      }
  
      if (bulunanBurc) {
        sonucDiv.textContent = `Doğduğunuz tarihe göre burcunuz: ${bulunanBurc}`;
      } else {
        sonucDiv.textContent = "Geçersiz tarih bilgisi girdiniz.";
      }
    });
  });