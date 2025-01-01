const welcomeScreen = document.getElementById('welcome-screen');
const signInScreen = document.getElementById('sign-in-screen');
const mainScreen = document.getElementById('main-screen');
const signInBtn = document.getElementById('sign-in-btn');
const logInBtn = document.getElementById('log-in-btn');
const signInForm = document.getElementById('sign-in-form');
const camera = document.getElementById('camera');
const aiBtn = document.getElementById('ai-btn');

// State
let isListening = true;

// Navigation
signInBtn.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  signInScreen.classList.remove('hidden');
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('You have signed into Be My Eyes AI');
  signInScreen.classList.add('hidden');
  mainScreen.classList.remove('hidden');
  startCamera();
});

// Camera Access
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    camera.srcObject = stream;
  } catch (error) {
    alert('Error accessing the camera. Please allow camera permissions.');
  }
}

// AI Interaction
aiBtn.addEventListener('click', () => {
  if (isListening) {
    aiBtn.textContent = 'AI Speaking';
    aiBtn.classList.remove('listening');
    aiBtn.classList.add('speaking');
    setTimeout(() => {
      aiBtn.textContent = 'AI Listening';
      aiBtn.classList.remove('speaking');
      aiBtn.classList.add('listening');
    }, 3000); // Simulates AI response delay
  }
});
