// Sample user data for validation (only passwords are checked)
const users = [
    { username: "john", password: "john123" },
    { username: "sara", password: "sara123" },
    { username: "user", password: "user123" },
  ];
  
  // Handle form submission
  document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Retrieve form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    // Find if the username exists in the predefined list
    const user = users.find((u) => u.username === username);
  
    // If username exists, check the password
    if (user && user.password === password) {
      // Successful login
      alert(`Welcome, ${username}! Redirecting to your bill page.`);
      window.location.href = "bill.html"; // Redirect to the bill page
    } else if (user) {
      // Incorrect password but valid username
      alert("Incorrect password. Please try again.");
    } else {
      // Username doesn't exist in the list, but proceed anyway
      alert("Username accepted! Redirecting to your bill page.");
      window.location.href = "bill.html"; // Redirect to the bill page
    }
  });
 

  // Logout function
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
  