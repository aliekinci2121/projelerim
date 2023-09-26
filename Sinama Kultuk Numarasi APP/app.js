const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const select = document.querySelector("#movie");
const seats=document.querySelectorAll(".seat:not(.reserved)")

getFromLocalStorage()
calculateTotal()

container.addEventListener("click", function (e) {
  // console.log(e.target)
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    /**Burada rezerve edilen klaslara takildigi zaman calismasin */
    // console.log(e.target)
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});
select.addEventListener("change", function (e) {
  calculateTotal();
});
function calculateTotal() {
  const selectedSeats = container.querySelectorAll(".seat.selected");

//   console.log(seats)
//   console.log(selectedSeats)
const selectedSeatsArr=[]
const seatsArr=[]

selectedSeats.forEach(function(seat){
    selectedSeatsArr.push(seat)
})

seats.forEach(function(seat){
    seatsArr.push(seat)
})

let selectedSeatIndex=selectedSeatsArr.map(function(seat){
    return seatsArr.indexOf(seat)
})
console.log(selectedSeatIndex)
 
  let selectedSeatCount = selectedSeats.length;
  // console.log(selectedSeatCount) /** sectigimiz koltuklarin sayilarini bize hesaplar */
  let price = select.value;
  // console.log(price)
  count.innerText =
    selectedSeatCount; /* secilenler span bolumundeki 'count' id sine yazilr*/
  amount.innerText=selectedSeatCount *price; /* ekrana ne kadar para odemen gerektigiyle ilgilihesaplama yapiyor */

  saveToLocalStorage(selectedSeatIndex)
}
function getFromLocalStorage(){
  const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"))
  
  if(selectedSeats!==null && selectedSeats.length>0){
    seats.forEach(function(seat,index){
        if(selectedSeats.indexOf(index) >-1){
            seat.classList.add("selected")
        }
    })
  }


  const selectedMovieIndex=localStorage.getItem("selectedMovieIndex")

  if(selectedMovieIndex!=null){
    select.selectedIndex=selectedMovieIndex
  }
}
function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeats",JSON.stringify(indexs))
    localStorage.setItem("selectedMovieIndex",select.selectedIndex)
}
