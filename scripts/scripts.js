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
const cameraBtn = document.getElementById('camera-btn');

cameraBtn.addEventListener('click', async () => {
try {
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.getElementById('video');
video.srcObject = stream;
video.play();
} catch (error) {
console.error(error);
}
});
const imgUpload = document.getElementById('image-upload');

imgUpload.addEventListener('change', (e) => {
  const img = e.target.files[0];
  const imgTensor = tf.browser.fromPixels(img);
  // Preprocess the image tensor here
});
