const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];

// Gelir ve giderleri ayirin
const income=incomeStatement[0]
const exepenses=incomeStatement.slice(1)

//Giderler listesinden sadece sayilari alin ve topölamini hesapalayiniz...
let totalExpense=0
for(let i=0;i<exepenses.length;i++){
   if(typeof exepenses[i]==="number"){
    totalExpense+=exepenses[i]
   }
}

//Kalan parayi hesaplamak

const remainingMoney=income-totalExpense

//sirketin butceye destek katkisini hesplayin(gelirin%20'si)

const companyContribution=income*0.2

console.log("Aylik Gelur:"+income) 
console.log("Aylik Giderler"+totalExpense)
console.log("Kalan Para"+remainingMoney)
console.log("Sirket Katkisi"+companyContribution)