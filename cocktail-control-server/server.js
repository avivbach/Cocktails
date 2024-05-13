const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = 3000;

// HTTPS options
const httpsOptions = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Define routes
app.get('/turn-on', (req, res) => {
    // Send HTTP request to ESP8266 to turn on the lightbulb
    // Replace 'esp8266-ip' with the IP address of your ESP8266
    https.get('http://192.168.1.125/turn-on', (response) => {
        console.log('Lightbulb turned on');
        res.send('Lightbulb turned on');
    });
});

app.get('/turn-off', (req, res) => {
    // Send HTTP request to ESP8266 to turn off the lightbulb
    // Replace 'esp8266-ip' with the IP address of your ESP8266
    https.get('http://192.168.1.125/turn-off', (response) => {
        console.log('Lightbulb turned off');
        res.send('Lightbulb turned off');
    });
});

// Start the server
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
