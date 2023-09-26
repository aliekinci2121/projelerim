// //OOP GIRIS

// class Insan {
//   // 1-Ozellikler
//   // 2-yapici MediaStreamAudioDestinationNode
//   // 3-Function
//   constructor(isim, soyisim, yas, maas) {
//     //yapici metoto anlamaina gelmektedir
//     this.isim = isim;
//     this.soyisim = soyisim;
//     this.yas = yas;
//     this.maas = maas;
//   }
//   bilgigeleriGoster() {
//     console.log(
//       `isim: ${this.isim} soyisim: ${this.soyisim} yas: ${this.yas} maas: ${this.maas}`
//     );
//   }
// }
// const insan1 = new Insan('Ali','Ekinci',35,1000); //nesne olusturmak
// const insan2=new Insan('Betul','Cinar',24,7500)
// insan1.bilgigeleriGoster()
// insan2.bilgigeleriGoster()


class Insan{
    constructor(isim,soyisim,yas, maas){
        this.isim=isim
        this.soyisim=soyisim
        this.yas=yas
        this.maas=maas

    }
    bilgileriGoster(){
        console.log(`isim: ${this.isim} soyisim: ${this.soyisim} yas: ${this.yas} maas: ${this.maas}`)
    }
}
const insan1=new Insan('Ali','Ekinci',35,1000)
const insan2=new Insan('Ebru','Yidiz',27,7500)
insan1.bilgileriGoster()
insan2.bilgileriGoster()
