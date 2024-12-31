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
console.log("JavaScript is working!");
