const webSocket = new WebSocket("wss://YOUR_ESP8266_IP_ADDRESS:443");

webSocket.onopen = function (event) {
    console.log("WebSocket connection established");
};

webSocket.onmessage = function (event) {
    console.log("Message received:", event.data);
    // Optionally, handle received messages here
};

webSocket.onclose = function (event) {
    console.log("WebSocket connection closed");
};

function turnOn() {
    webSocket.send("turn-on");
}

function turnOff() {
    webSocket.send("turn-off");
}

// Add any additional WebSocket message handlers or event listeners as needed
