

// JavaScript form validation and login functionality
document.getElementById('New registration').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values
    const username = document.getElementById('Name').value;
    const password = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (Name === "" || email === "") {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.display = "block";
    } else if (Name !== validUsername || email !== validemail) {
        errorMessage.textContent = "Invalid Name or Email!";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        // Simulate successful login
        alert("Login successful! your id is Student123 and pass is 123456 Redirecting...");
        window.location.href = "Check PMSSS Status.html"; // Simulated redirection after login
    }
});
