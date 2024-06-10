function sendCommand(command) {
    fetch(`http://your-server-ip/api?command=${command}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert(data);
        });
}