const Input = document.querySelector(".input")
const JoinButton = document.querySelector(".JoinButton")

JoinButton.addEventListener("click", join)
let InputValue = Input.value


function join() {

    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
      InputValue = Input.value
    if (InputValue == "") {
      console.log("your Name")
    }
    else if (data.player1 == "" && data.player2 == "") {
        JoinLobbyPlayer1()
        console.log("pl1")
    }
    else if (data.player1 == "" || data.player2 == "") {
        JoinLobbyPlayer2()
        console.log("pl2")
    }
    else {
        console.log("lobbu full")
    }
  });
}




function JoinLobbyPlayer1() {
     InputValue = Input.value
    patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { player1: InputValue }).then((data) => {
        window.location.href = "player1.html"
});
  
}

function JoinLobbyPlayer2() {
     InputValue = Input.value
    patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { player2: InputValue }).then((data) => {
       
            window.location.href = "player2.html"
        
});
 
}





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
  