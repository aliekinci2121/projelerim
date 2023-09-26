const hr=document.querySelector("#hr")
const mn=document.querySelector("#mn")
const sc=document.querySelector("#sc")


setInterval(()=>{
    const day=new Date()
    const hh=day.getHours()*30
    const mm=day.getMinutes()*6
    const ss=day.getSeconds()*6


    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform=`rotateZ(${mm}deg)`
    sc.style.transform=`rotateZ(${ss}deg)`


    //DIGITAL JS

    let hours=document.getElementById("hours")
    let minutes=document.getElementById("minutes")
    let seconds=document.getElementById("seconds")
    let ampm=document.getElementById("ampm")

    let h= new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let am=h>=12 ? "PM":"AM"

    //convert 24 hr to 12 hr
    h=h-12
    //
   


    // add zero before singel numbers

    h=(h<10)? "0"+h:h
    m=(m<10)? "0"+m:m
    s=(s<10)? "0"+s:s

    hours.innerHTML=h
    minutes.innerHTML=m
    seconds.innerHTML=s
    ampm.innerHTML=am
})