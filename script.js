const webSocket = new WebSocket("ws://192.168.1.217:443");

webSocket.onopen = function (event) {
    console.log("WebSocket connection established");
};

webSocket.onmessage = function (event) {
    console.log("Message received:", event.data);
    // Handle incoming messages from ESP8266 here
    // You can update UI or perform actions based on received messages
};

webSocket.onclose = function (event) {
    console.log("WebSocket connection closed");
};

const url = 'https://48ff-77-127-173-136.ngrok-free.app'; // Replace with your ngrok URL or domain

function turnOn() {
    fetch(url + '/turn-on', { method: 'POST' })
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

function turnOff() {
    fetch(url + '/turn-off', { method: 'POST' })
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

function toggleOptions(event, cocktailName) {
    let clickedOptions = event.currentTarget.querySelector(".options");

    if (clickedOptions.style.display === "block") {
    } else {
        // Close options for all items
        let allOptions = document.querySelectorAll(".options");
        allOptions.forEach(function (options) {
            options.style.display = "none";
        });

        clickedOptions.style.display = "block";
        console.log("Selected cocktail: " + cocktailName);
        // Additional logic for handling the selection
    }

    event.stopPropagation();
}

var orders = document.querySelectorAll(".cocktailOrder");
orders.forEach(function (element) {
    element.addEventListener("click", orderThis);
});

function orderThis(event) {
    alert(event.currentTarget.getAttribute("id"));
    var cocktailName = event.currentTarget.getAttribute("id");
    window.location.href =
        "https://nereyamantzur.github.io/CocktailApp/" + cocktailName + ".html";
}

// Function to send command to ESP8266 via WebSocket
function sendCommand(command) {
    webSocket.send(command); // Send command to ESP8266
}
