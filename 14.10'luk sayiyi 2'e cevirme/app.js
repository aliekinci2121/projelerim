//Decimal To Binary Conversion

convertDecimalToBinary(10);

function convertDecimalToBinary(number) {
  binary = "";
  while (true) {
    binary += (number % 2).toString();
    number = Math.floor(number / 2);
    if (number == 1) {
      //dongu durmustur
      binary += 1;
      break;
    }
  }
  let result = reverse(binary);
  console.log("sonuc:" + result);
}

function reverse(binary) {
  let reverseBinary = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }
  return reverseBinary;
}