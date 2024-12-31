// Add event listener to login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TO DO: Implement login functionality
    console.log(`Username: ${username}, Password: ${password}`);
});

// Add event listener to capture button
document.getElementById('capture-button').addEventListener('click', () => {
    // TO DO: Implement camera capture functionality
    console.log('Capture button clicked!');
});

// TO DO: Implement AI functionality
// Create an object to store user credentials
const users = {
"john": "password123",
"jane": "password456"
};

// Add authentication logic to the login form
loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Check if the entered credentials match
if (users[username] === password) {
console.log('Login successful!');
// TO DO: Redirect to the next page
} else {
console.log('Invalid username or password');
}
});
// Navigate to the welcome page after login
if (users[username] === password) {
console.log('Login successful!');
window.location.href = 'welcome.html';
}

// Navigate to the camera page from the welcome page
document.getElementById('next-btn').addEventListener('click', () => {
window.location.href = 'camera.html';
});
