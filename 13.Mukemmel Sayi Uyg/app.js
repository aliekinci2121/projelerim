//Mükkemmel sayi Uygulamasi

// 6-28-496

//6=1,2,3,6=bolen sayilarinin toplami=12=>6*2

isPerfectNumber(28)

function isPerfectNumber(number){
    let toplam=0
    for(let i=2;i<=number/2;i++){
        if(number%i==0){
            toplam+=i
        }
    }
    toplam+=1+number

    if(toplam==number*2){
        console.log('mukemmel sayidir....')
    }else{
        console.log('Mükemmel sayi degildir....')
    }
}