//show the section and manage 'active' class from all sections and menu items
function showSection(sectionId, menuItem) {
  const sections = document.querySelectorAll(".content");
  const menuItems = document.querySelectorAll("#menu a");

  // Remove 'active' class from all sections and menu items ,This approach avoids having multiple elements marked as active at the same time
  sections.forEach((section) => section.classList.remove("active"));
  menuItems.forEach((item) => item.classList.remove("active"));

  // Add 'active' class to the clicked menu item and the corresponding section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
      targetSection.classList.add("active");
      menuItem.classList.add("active");
  } else {
      console.error(`Section with ID "${sectionId}" not found.`);
  }
}



// Functions to manage users
function toggleUserForm(show) {
  const userForm = document.getElementById("userForm");
  const addUserButton = document.getElementById("addUser");

  if (userForm && addUserButton) {
    userForm.style.display = show ? "block" : "none";
    addUserButton.style.display = show ? "none" : "block";
  }
}

function addUser(event) {
  event.preventDefault();
  const usernameInput = document.getElementById("username");
  const userTable = document.querySelector("#userTable tbody");

  if (usernameInput && userTable) {
    const username = usernameInput.value.trim();
    if (username) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${userTable.rows.length + 1}</td>
        <td>${username}</td>
        <td><button onclick="deleteUser(this)">Delete</button></td>
      `;
      userTable.appendChild(newRow);

      usernameInput.value = "";
      toggleUserForm(false);
    } else {
      alert("Username cannot be empty.");
    }
  }
}

function deleteUser(button) {
  if (button) {
    const row = button.closest("tr");
    if (row) {
      row.remove();
      updateUserTableIndices();
    }
  }
}

function updateUserTableIndices() {
  const rows = document.querySelectorAll("#userTable tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

// Functions to manage products
function toggleProductForm(show) {
  const productForm = document.getElementById("productForm");
  const addProductButton = document.getElementById("addProduct");

  if (productForm && addProductButton) {
    productForm.style.display = show ? "block" : "none";
    addProductButton.style.display = show ? "none" : "block";
  }
}

function addProduct(event) {
  event.preventDefault();
  const productNameInput = document.getElementById("productName");
  const productPriceInput = document.getElementById("productPrice");
  const productTable = document.querySelector("#productTable tbody");

  if (productNameInput && productPriceInput && productTable) {
    const productName = productNameInput.value.trim();
    const productPrice = productPriceInput.value.trim();

    if (productName && productPrice) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${productTable.rows.length + 1}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td><button onclick="deleteProduct(this)">Delete</button></td>
      `;
      productTable.appendChild(newRow);

      productNameInput.value = "";
      productPriceInput.value = "";
      toggleProductForm(false);
    } else {
      alert("Product name and price cannot be empty.");
    }
  }
}

function deleteProduct(button) {
  if (button) {
    const row = button.closest("tr");
    if (row) {
      row.remove();
      updateProductTableIndices();
    }
  }
}

function updateProductTableIndices() {
  const rows = document.querySelectorAll("#productTable tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

// Initialize admin dashboard charts
initializeChart();
function initializeChart() {
  const chartElement = document.getElementById("myChart");
  if (chartElement) {
    const ctx = chartElement.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          { label: "Revenue", data: [1200, 1900, 3000, 5000], backgroundColor: "#333" },
          { label: "Expenses", data: [800, 1000, 2000, 3500], backgroundColor: "#FFC0CB" },
        ],
      },
      options: { responsive: true },
    });
  }
}
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
