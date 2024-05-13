let url= 'https://a256-77-127-173-136.ngrok-free.app'
        function turnOn() {
            fetch(url+'/turn-on', { method: 'POST' })
                .then(response => console.log(response))
                .catch(error => console.error(error));
        }

        function turnOff() {
            fetch(url+'/turn-off', { method: 'POST' })
                .then(response => console.log(response))
                .catch(error => console.error(error));
        }