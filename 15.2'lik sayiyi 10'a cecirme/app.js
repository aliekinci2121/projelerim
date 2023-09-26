//Binary To Decimal conversion

let binary='1101011'
function convertBinaryToDecimal(binary){
    toplam=0
    ust=0

    for(let i=binary.length-1;i>=0;i--){
        toplam+=Number(binary.charAt(i))*Math.pow(2,ust)
        ust++
        }
        console.log('sonuc;' + toplam)
}
convertBinaryToDecimal(binary)