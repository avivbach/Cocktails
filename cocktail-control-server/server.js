const express = require('express');
const http = require('http'); // Use 'http' module for HTTP requests
const fs = require('fs');
const app = express();
const PORT = 5500;

// Define routes
app.get('/turn-on', (req, res) => {
    // Send HTTP request to ESP8266 to turn on the lightbulb
    // Use 'http' module instead of 'https'
    http.get('http://192.168.1.125/turn-on', (response) => {
        console.log('Lightbulb turned on');
        res.send('Lightbulb turned on');
    });
});

app.get('/turn-off', (req, res) => {
    // Send HTTP request to ESP8266 to turn off the lightbulb
    // Use 'http' module instead of 'https'
    http.get('http://192.168.1.125/turn-off', (response) => {
        console.log('Lightbulb turned off');
        res.send('Lightbulb turned off');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
