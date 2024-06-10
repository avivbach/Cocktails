function sendCommand(command) {
    fetch(`http://192.168.1.215/api?command=${command}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert(data);
        });
}