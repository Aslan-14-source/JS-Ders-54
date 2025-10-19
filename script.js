function getUserProfile() {
    let data = JSON.parse(localStorage.getItem('response'));
    const token = data.token;

    fetch('http://195.26.245.5:5965/api/clients/get-details', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('surname').innerHTML = data.surname;
        document.getElementById('email').innerHTML = data.email;
        document.getElementById('username').innerHTML = data.username;
    });
}

getUserProfile();