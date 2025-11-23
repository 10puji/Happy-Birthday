// --- 2. Form Validation Logic (MODIFIED) ---

// The required answers, normalized to lowercase for flexible checking
const CORRECT_ANSWERS = {
    q1: 'june 21, 2024',
    q2: 'central park',
    q3: 'may 10, 2006'
};

const form = document.getElementById('login-form');
const messageElement = document.getElementById('message');

// Target URL for redirection upon successful login
const REDIRECT_URL = "https://lancerco.my.canva.site/hey-nana-i-love-you-sooooooo-much";

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    const q1Answer = document.getElementById('q1').value.trim().toLowerCase();
    const q2Answer = document.getElementById('q2').value.trim().toLowerCase();
    const q3Answer = document.getElementById('q3').value.trim().toLowerCase();
    
    // Normalize user date formats by removing commas/spaces and checking for a simpler match
    const normalizeDate = (date) => date.replace(/[^a-z0-9]/g, '');

    // Check if all answers are correct
    const isQ1Correct = q1Answer === CORRECT_ANSWERS.q1 || normalizeDate(q1Answer) === normalizeDate(CORRECT_ANSWERS.q1);
    const isQ2Correct = q2Answer === CORRECT_ANSWERS.q2;
    const isQ3Correct = q3Answer === CORRECT_ANSWERS.q3 || normalizeDate(q3Answer) === normalizeDate(CORRECT_ANSWERS.q3);

    if (isQ1Correct && isQ2Correct && isQ3Correct) {
        // Success
        messageElement.textContent = 'Login Successful! Redirecting...';
        messageElement.className = 'success';
        console.log('Login Successful! Redirecting to:', REDIRECT_URL);
        
        // --- ADDED REDIRECT LOGIC ---
        // Redirect the user to the specified URL
        window.location.href = REDIRECT_URL; 
        
    } else {
        messageElement.textContent = 'One or more answers are incorrect. Please try again.';
        messageElement.className = 'error';
        console.log('Login Failed: Incorrect answers.');
    }
    
    // Show the message
    messageElement.classList.remove('hidden');
});