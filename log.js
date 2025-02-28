const users = [
  { username: "sara", password: "sara123", role: "admin" },
];

// Login function
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "sara" && password === "sara123") {
    // Admin access
    localStorage.setItem("role", "admin");
    alert("Welcome ADMIN!");
    window.location.href = "admin.html";
  } else {
    // All other users have access to the user page
    localStorage.setItem("role", "user");
    alert("Welcome USER!");
    window.location.href = "user.html";
  }
}

// Add event listener for the login form submission
document.getElementById("loginForm").addEventListener("submit", login);
