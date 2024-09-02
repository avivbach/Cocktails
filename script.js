
const esp32_ip = 'http://192.168.1.178';

function margarita() {
    fetch(`${esp32_ip}/margarita`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('status').innerText = "LED is ON";
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('status').innerText = "Error: Unable to turn on LED";
        });
}

function turnOff() {
    fetch(`${esp32_ip}/turn-off`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('status').innerText = "LED is OFF";
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('status').innerText = "Error: Unable to turn off LED";
        });
}
