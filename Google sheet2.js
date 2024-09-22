// Mocked credentials for login simulation
const validUsername = "admin";
const validPassword = "123456";

// JavaScript form validation and login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.display = "block";
    } else if (username !== validUsername || password !== validPassword) {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        // Simulate successful login
        alert("Login successful! your status id is= 123456 Redirecting...");
        window.location.href = "message.html"; // Simulated redirection after login
    }
});
