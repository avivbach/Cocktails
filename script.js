// WebSocket connection to ESP8266 server
const webSocket = new WebSocket("ws://<ESP8266_IP>:81");

webSocket.onopen = function (event) {
    console.log("WebSocket connection established");
};

webSocket.onmessage = function (event) {
    console.log("Message received:", event.data);
    // Additional logic for handling messages from ESP8266
};

webSocket.onclose = function (event) {
    console.log("WebSocket connection closed");
};

function toggleOptions(event, cocktailName) {
    let clickedOptions = event.currentTarget.querySelector(".options");

    if (clickedOptions.style.display === "block") {
        clickedOptions.style.display = "none"; // Close options if already open
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
    var cocktailName = event.currentTarget.getAttribute("id");
    console.log("Ordering cocktail: " + cocktailName);
    // Send a message to ESP8266 to order the selected cocktail
    webSocket.send(cocktailName);

    // Redirect to the cocktail page
    window.location.href = "https://nereyamantzur.github.io/CocktailApp/" + cocktailName + ".html";
}
