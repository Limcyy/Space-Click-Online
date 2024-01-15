const clickButton = document.querySelector(".clickButton")
const PointText = document.querySelector(".points")
const TimeText = document.querySelector(".Time")
clickButton.addEventListener("click", changePosition)
let RandomScaleLeft = Math.round(Math.random()*300);
let RandomScaleTop = Math.round(Math.random()*300);
clickButton.style.left = "50px"
clickButton.style.top = "50px"
const maxHeight = window.innerHeight - 100 ;
const maxWidth = window.innerWidth - 100 ;
let points = 0
let seconds = 20

setInterval(function() {
    window.location.href = "scores.html"
}, 20000)


function changePosition() {
    points++
    patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { PointsPlayer2: points }).then((data) => {

 });
    RandomScaleLeft = Math.round(Math.random()* maxWidth);
    RandomScaleTop = Math.round(Math.random()* maxHeight);
    clickButton.style.left = RandomScaleLeft + "px"
    clickButton.style.top = RandomScaleTop + "px"
    PointText.innerHTML = points
    

}

function time() {
    seconds = seconds - 1
    TimeText.innerHTML = seconds + "s left"
}

setInterval(time, 1000)



async function patchData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  
  
  async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

