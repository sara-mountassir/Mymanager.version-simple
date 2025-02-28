// Function to show the content based on the section clicked
function showContent(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
      section.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
      activeSection.classList.add('active');
  }

  const links = document.querySelectorAll('#menu a');
  links.forEach(link => {
      link.classList.remove('active');
  });

  const activeLink = document.querySelector(`#menu a[href="#${sectionId}"]`);
  if (activeLink) {
      activeLink.classList.add('active');
  }
}

// Function to log the user out (Example: Redirect to login page)
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
  

// Function to generate a chart (optional, depending on the data you want to visualize)
window.onload = function() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const userChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'My Activity',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
};
