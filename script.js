const esp32_ip = 'http://192.168.1.178';  // Replace with your ESP32's IP address

function turnOn() {
    fetch(`${esp32_ip}/turn-on`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('status').innerText = "LED is ON";
        })
        .catch(error => console.error('Error:', error));
}

function turnOff() {
    fetch(`${esp32_ip}/turn-off`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('status').innerText = "LED is OFF";
        })
        .catch(error => console.error('Error:', error));
}