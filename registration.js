// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the success message
    document.getElementById('successMessage').classList.remove('hidden');
});
