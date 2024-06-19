function toggleLight(state) {
    fetch(`http://192.168.1.175/${state}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}