// back-end.js file

// Get the overlay element
const overlay = document.getElementById('overlay');

// Function to fade out the overlay
function fadeOutOverlay() {
    overlay.style.opacity = '0';
    // After the fade out transition, hide the overlay
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500); // Match this with the CSS transition duration
}

// Add event listener to the overlay
overlay.addEventListener('click', fadeOutOverlay);
overlay.addEventListener('touchstart', fadeOutOverlay);

// You can show the overlay initially, or based on certain conditions
overlay.style.display = 'block';
