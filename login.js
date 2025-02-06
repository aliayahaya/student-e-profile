document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                alert('Login successful!');
                window.location.href = 'list.html'; // Redirect to profile page
            } else {
                alert('Invalid username or password!');
            }
        })
        .catch(error => console.error('Error loading user data:', error));
});
