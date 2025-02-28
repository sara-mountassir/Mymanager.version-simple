

// Function to handle profile form submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // You can add validation or further processing here if needed
    if (username && email) {
        // Here you can send data to the server using AJAX, Fetch API, or other methods.
        // For now, just log the data to the console:
        console.log('Profile updated:', { username, email });

        // Show a message or notification that the profile has been updated
        alert('Profile updated successfully!');

        // Optionally, you can clear the form fields or reset the form
        document.getElementById('profileForm').reset();
    } else {
        alert('Please fill in both fields.');
    }
});
function logout() {
    document.body.style.margin = "0"; // Reset body margin
    document.body.style.padding = "0"; // Reset body padding
    document.body.style.height = "100vh"; // Ensure the body takes the full viewport height
  
    document.body.innerHTML = `
        <div style="text-align: center; color:#FFC0CB; background-color:rgb(0, 0, 0); height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0; padding: 0;">
            <h1>You have been logged out.</h1>
            <button onclick="window.location.href='login.html'" style="padding: 10px 20px; background-color:rgb(240, 146, 146); color: #fff; border: none; cursor: pointer;">Login Again</button>
        </div>
    `;
  }
  