const clickButton = document.querySelector(".clickButton")
clickButton.addEventListener("click", changePosition)
let RandomScaleLeft = Math.round(Math.random()*300);
let RandomScaleTop = Math.round(Math.random()*300);
clickButton.style.left = "0px"
clickButton.style.top = "0px"
const maxHeight = window.innerHeight - 100 ;
const maxWidth = window.innerWidth - 100 ;
function changePosition() {
     RandomScaleLeft = Math.round(Math.random()* maxWidth);
     RandomScaleTop = Math.round(Math.random()* maxHeight);
     clickButton.style.left = RandomScaleLeft + "px"
     clickButton.style.top = RandomScaleTop + "px"

}




