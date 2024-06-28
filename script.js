function toggleLight(state) {
    fetch(`http://192.168.97.31/${state}`)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}