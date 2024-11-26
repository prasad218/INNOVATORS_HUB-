// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user input
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Simple login validation (you can enhance this later)
    if (name && password) {
        alert("Login successful! Redirecting to Developer Page...");
        // Redirect to the Developer Page
        window.location.href = "developers.html"; 
    } else {
        alert("Please enter both name and password.");
    }
});
