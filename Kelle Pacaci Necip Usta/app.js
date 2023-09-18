const tiere=["kuhe","kuhe","huhn","schwein","schaf"]

// hayvanlarin bacaklarini hesaplama fonksiyonu

function berechnenAnzahlBeine(tiere){
    let gesamtAnzahlBeine=0

    for(let i=0; i<tiere.length;i++){
        const tier=tiere[i]


        switch(tier){
            case "kuhe":
                gesamtAnzahlBeine+=4
                break
            case "huhn":
                gesamtAnzahlBeine+=2
                break
            case "schwein":
                gesamtAnzahlBeine+=4
                break
            case "schaf":
                gesamtAnzahlBeine+=4
                break
            default:
                console.log(tier +"Es gibt kein Tier mit Namen")
        }
    }
    return gesamtAnzahlBeine
}
//bacak sayisini hesaplamak
const totalLegs=berechnenAnzahlBeine(tiere)
console.log("Gesamtzahl der Beine auf dem Bauernhof:"+totalLegs)