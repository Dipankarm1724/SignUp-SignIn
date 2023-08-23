// document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const toggleButton = document.getElementById('toggle-btn');

    // Initially show the signup form and hide the signin form
    signupForm.style.display = 'block';
    signinForm.style.display = 'none';

    // Click event on the toggle button
    toggleButton.addEventListener('click', function () {
        if (signupForm.style.display === 'block') {
            // Hide the signup form and display the signin form
            signupForm.style.display = 'none';
            signinForm.style.display = 'block';
            toggleButton.textContent = "Don't have an account? Sign Up!";
        } else {
            // Hide the signin form and display the signup form
            signupForm.style.display = 'block';
            signinForm.style.display = 'none';
            toggleButton.textContent = "Already have an account? Sign In!";
        }
    });
// });
