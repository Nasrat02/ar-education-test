// Function to switch between lessons
function showLesson(lessonNumber) {
    // Hide all lesson scenes
    const scenes = document.querySelectorAll('.lesson-scene');
    scenes.forEach(scene => {
        scene.classList.remove('active');
    });

    // Hide all buttons' active state
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected lesson
    const selectedLesson = document.getElementById(`lesson${lessonNumber}`);
    if (selectedLesson) {
        selectedLesson.classList.add('active');
    }

    // Mark button as active
    event.target.classList.add('active');

    console.log(`Lesson ${lessonNumber} loaded`);
}

// Check browser support for WebAR
window.addEventListener('load', () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Your browser does not support camera access. Please use Chrome, Firefox, or Safari on a mobile device.');
    } else {
        console.log('Camera access available - AR ready!');
    }
});

// Log when AR.js is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Educational AR Platform loaded successfully!');
});