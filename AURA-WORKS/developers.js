// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user input
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Simple login validation
    if (name && password) {
        alert("Login successful! Redirecting to Developer Page...");
        
        // Hide the login form and show the developer page
        document.getElementById("login-page").style.display = "none";
        document.getElementById("developer-page").style.display = "block";
    } else {
        alert("Please enter both name and password.");
    }
});

// Event listener for the "Go to Our Main Site" button
document.getElementById("go-to-our-site").addEventListener("click", function() {
    // Redirecting to the provided main site
    window.location.href = "https://innovatorshub11.wixsite.com/local-event-discover";
});
