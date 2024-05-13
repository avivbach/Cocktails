#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "Uliel";
const char* password = "0542400393";

ESP8266WebServer server(80);

const int ledPin = D1; // Pin connected to the lightbulb

void setup() {
    pinMode(ledPin, OUTPUT);
    digitalWrite(ledPin, HIGH); // Ensure light is initially off

    Serial.begin(115200);
    delay(10);

    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP()); // Print the obtained IP address to Serial Monitor

    server.on("/", HTTP_GET, handleRoot);
    server.on("/turn-on", HTTP_GET, handleOn);
    server.on("/turn-off", HTTP_GET, handleOff);

    server.begin();
    Serial.println("HTTP server started");
}

void loop() {
    server.handleClient();
}

void handleRoot() {
    server.send(200, "text/plain", "Welcome to the ESP8266 Web Server");
}

void handleOn() {
    digitalWrite(ledPin, HIGH);
    server.send(200, "text/plain", "Lightbulb turned on");
}

void handleOff() {
    digitalWrite(ledPin, LOW);
    server.send(200, "text/plain", "Lightbulb turned off");
}
