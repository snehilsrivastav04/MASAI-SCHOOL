// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get references to form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.getElementById('registration-form');

    // Function to validate the name field
    function validateName() {
        const nameValue = nameInput.value.trim();
        const nameError = document.getElementById('name-error');
        if (nameValue === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    // Function to validate the email field
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    // Function to validate the password field
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        const passwordError = document.getElementById('password-error');
        if (passwordValue.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    // Attach event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // Attach event listener to the form for final validation on submit
    form.addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();
        
        // Prevent form submission if any validation fails
        if (document.querySelector('.error-message[style*="display: block"]')) {
            event.preventDefault();
        }
    });
});
