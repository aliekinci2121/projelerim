//BENZIN ISTASYONU


/*
1-Dizel :24.53
2-Benzin :22.25
3-LPG : 11.1


Gelen Müsterilerden alacagimiz bilgiler
1-yakit tipi
2- yüklenecek yakit litresi

*/

let dizel=24.53,benzin=22.25,lpg=11.13
const yeniSatir='\r\n'


 const yakitMetni='1-Dizel'+yeniSatir
 + '2-Benzin'+yeniSatir
 + '3-LPD' +yeniSatir
 + 'Yakit türünüzü seciniz'

 let yakitTipi=prompt(yakitMetni)
 if(yakitTipi=='1' || yakitTipi=='2'  || yakitTipi=='3'){
let yakitLitresi=Number(prompt('Yakit litresini giriniz:'))
let bakiye=Number(prompt('Bakiyenize giriniz'))
    
     if(yakit=='1'){
        //DIZELL
        let odenecekTutar=dizel*yakitLitresi
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterli
            bakiye=bakiye-odenecekTutar
            alert('Yakit alma islemi basarili' + yeniSatir
            +'Kalan Bakiye:'+ bakiye)
        }else{
            //bakiyeniz yetersiz
            alert('Bakiyeniz Yeterli degil'+yeniSatir
            +'Odencek tutar'+ odenecekTutar
            +'Bakiyei:' + bakiye+yeniSatir
            +'Eksik Tutar'+ (odenecekTutar-bakiye))
        }
     }
     else if(yakitTipi=='2'){
        //benzin
        let odenecekTutar=benzin*yakitLitresi
        if(odenecekTutar<bakiye){
            //bakiyeniz yyeterlidir
            alert('bakiyeniz yeterli'+ yeniSatir
            + 'Kalan Bakiyeniz:' + bakiye)
        }else{
            //bakiyeniz yeterli degildir
            alert('Bakiyeniz yeterli degildir'+yeniSatir
            +'Odenecek Tutar:' + odenecekTutar+yeniSatir
            +'Eksik Tutar:'+(odenecekTutar-bakiye))
        }
     }
     else if(yakitTipi=='3'){
        //LPG
        let odenecekTutar=lpg*yakitLitresi
        if(odenecekTutar<bakiye){
            //bakiyeniz yeterlidie
            alert('bakiyeniz yeterlidir'+ yeniSatir
            +'Kalan bakiyeniz:' +bakiye)
        }
        else{
            //bakiyeniz yeterli degill
            alert('bakiyeniz yeterli degil...' +yeniSatir
            + ' Odeenecek tutar:'+ odenecekTutar+yeniSatir
            +'Bakiyeniz'+ bakiye+yeniSatir
            +'Eksik tutar' +(odenecekTutar-bakiye))
        }
     }
 }else{
    alert('Lütfen gecerli bir yazi tipi giriniz!!')
 }
 
