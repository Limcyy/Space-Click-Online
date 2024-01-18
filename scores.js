const score2 = document.querySelector(".score2")
const score1 = document.querySelector(".score1")
const resetButton = document.querySelector(".resetButton")

resetButton.addEventListener("click", reset)

setTimeout(function reset() {
  patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { Starting: "" }).then((data) => {

  });
  patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { player1: "" }).then((data) => {

  });
  patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { player2: "" }).then((data) => {

  });
  patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { PointsPlayer1: "" }).then((data) => {

  });
  patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { PointsPlayer2: "" }).then((data) => {

  });

  console.log("hoj")
   
}, 5000)

getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
  if (data.PointsPlayer1 > data.PointsPlayer2) {
    score1.innerHTML = data.player1 + " WON - " + data.PointsPlayer1
    score2.innerHTML = data.player2 + " LOST - " + data.PointsPlayer2
  }
  else {
    score1.innerHTML = data.player2 + " WON - " + data.PointsPlayer2
    score2.innerHTML = data.player1 + " LOST  - " + data.PointsPlayer1
  }
});


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


