// //Haftanin günleri

// let sayi = prompt("Lütfen 1 ile 5 arasinda bir sayi giriniz!");
// switch (sayi) {
//   case "1":
//     console.log("Girilen sayi birdir");
//     break;
//   case "2":
//     console.log("girdiginiz sayi 2 dir");
//     break;
//   case "3":
//     console.log("Girdiginiz sayi 3 tür");
//     break;
//   case "4":
//     console.log("girdiginiz sayi 4 tür ");
//     break;
//   case "5":
//     console.log("girdiginiz sayi 5 tir");
//     break;

//   default:
//     console.log("Girilen sayi 1 ile 5 arasida olmalidir");
//     break;
// }


let yeniSatir='\r\n'
let metin='1-Pazartesi'+yeniSatir
+'2-Sali'+ yeniSatir
+'3-Carsamba'+yeniSatir
+'4-Persembe'+yeniSatir
+'5-Cuma'+ yeniSatir
+'6-Cumartesi'+yeniSatir
+'7-Pazar'+ yeniSatir
+'Lütfen bir secim yapiniz'


let deger=prompt(metin)
switch(deger){
    case '1':
        console.log('Pazartesi günü')
    break
    case '2':
        console.log('Sali günü')
    break
    case '3':
        console.log('Carsamba günü')
    break
    case '4':
        console.log('persembe günü')
    break
    case '5':
        console.log('Cuma günü')
    break
    case '6':
        console.log('Cumartesi')
    break
    case '7':
        console.log('Pazar')

    default:
        console.log('lütfen gecerli bir secim yapiniz')
    break

}