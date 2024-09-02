
const esp32_ip = 'http://192.168.1.178';

function margarita() {
    fetch(`${esp32_ip}/margarita`)

}

function martini() {
    fetch(`${esp32_ip}/martini`)
}

function turnOff() {
    fetch(`${esp32_ip}/turn-off`)
}
