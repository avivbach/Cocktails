const esp32Ip = 'http://192.168.1.175'; // Replace with your ESP32's IP

document.getElementById('turnOn').addEventListener('click', function () {
    fetch(`${esp32Ip}/light/on`, {
        method: 'POST'
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});

document.getElementById('turnOff').addEventListener('click', function () {
    fetch(`${esp32Ip}/light/off`, {
        method: 'POST'
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});