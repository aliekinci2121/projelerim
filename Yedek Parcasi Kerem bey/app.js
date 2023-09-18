const carParts = ["Kaporta5", "Ak3ü", "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];

//1.parca isimlerini uyuk harflere cevirilecek fonksiyon

function convertToUpperCase(parts) {
    return parts.map(part => part.toUpperCase());
  }
const upperCaseParts=convertToUpperCase(carParts)
console.log(upperCaseParts)

//2. Perca isimlerinden sayilari cikaratacak funksiyon

function removeNumbers(parts) {
    return parts.map(part => part.replace(/[0-9]/g, ''));
  }
  const withhoutNumbersParts=removeNumbers(carParts)
  console.log(withhoutNumbersParts)

//3. Her parca isimlerini tersine cevirecek fonksiyon

// function reverseParts(parts) {
//     return parts.replace()
//   }
//   const reversedParts = reverseParts(carParts);
// console.log(reverseParts)
// funksiyon seknde yaptim ama hepsorun olurstu tam calisamadi ben de norma yaptimm
let reversedParts=carParts.reverse()
console.log(reversedParts)


//4. her parcanin bassina KEREMAG_ ekleyecek fonksiyon

function addPrefix(parts){
    return parts.map(part=> 'KEREMAG_'+part)
}
const prefixedParts=addPrefix(carParts)
console.log(prefixedParts)

//Her parcanin sonuna tarih ekleyecek fonksiyon

function addDate(parts) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); // Tarih ve saat bilgisi
  
    return parts.map(part => part + '_' + formattedDate);
  }
  const finalParts = addDate(carParts);

  console.log(finalParts);