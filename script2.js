document.addEventListener("DOMContentLoaded", () => {
  // Reference elements
  const authContainer = document.getElementById("auth-container");
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");
  const resetPasswordBox = document.getElementById("reset-password-box");
  const dashboardContainer = document.getElementById("dashboard-container");

  // Form buttons and links
  const showRegisterLink = document.getElementById("show-register");
  const showLoginRegisterLink = document.getElementById("show-login-register");
  const showResetPasswordLink = document.getElementById("show-reset-password");
  const showLoginResetLink = document.getElementById("show-login-reset");

  // Forms
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const resetPasswordForm = document.getElementById("reset-password-form");

  // Event Listeners for toggling forms
  showRegisterLink.addEventListener("click", () => {
    loginBox.style.display = "none";
    registerBox.style.display = "block";
    resetPasswordBox.style.display = "none";
  });

  showLoginRegisterLink.addEventListener("click", () => {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
    resetPasswordBox.style.display = "none";
  });

  showResetPasswordLink.addEventListener("click", () => {
    loginBox.style.display = "none";
    registerBox.style.display = "none";
    resetPasswordBox.style.display = "block";
  });

  showLoginResetLink.addEventListener("click", () => {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
    resetPasswordBox.style.display = "none";
  });

  // Handle Login Form Submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple demo authentication logic (replace with real backend validation)
    if (email === "alina.raza2017@gmail.com" && password === "12345") {
      alert("Login successful!");
      authContainer.style.display = "none"; // Hide authentication container
      dashboardContainer.style.display = "block"; // Show dashboard
    } else {
      alert("Invalid email or password. Try again.");
    }
  });

  // Handle Registration Form Submission
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user input
    const regEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (regPassword === confirmPassword) {
      alert(`Registration successful for ${regEmail}!`);
      loginBox.style.display = "block"; // Redirect to login after registration
      registerBox.style.display = "none";
    } else {
      alert("Passwords do not match. Try again.");
    }
  });

  // Handle Reset Password Form Submission
  resetPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user input
    const resetEmail = document.getElementById("reset-email").value;

    // Simple reset password flow (replace with real backend implementation)
    alert(`Password reset instructions sent to ${resetEmail}!`);
    resetPasswordBox.style.display = "none";
    loginBox.style.display = "block"; // Redirect to login after reset
  });
});



// Sidebar Menu Highlight
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
    });
});


// Reference elements
const notificationButton = document.getElementById('notifications');
const notificationCount = document.getElementById('notification-count');
const notificationDropdown = document.getElementById('notification-dropdown');

// Toggle dropdown visibility and reset notification count
notificationButton.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click from propagating to the document
  // Toggle dropdown visibility
  if (notificationDropdown.style.display === 'block') {
    notificationDropdown.style.display = 'none';
  } else {
    notificationDropdown.style.display = 'block';

    // Reset notification count
    notificationCount.textContent = '';
    notificationCount.style.display = 'none';
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  notificationDropdown.style.display = 'none';
});



