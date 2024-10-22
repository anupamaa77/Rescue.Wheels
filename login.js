const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const signUpForm = document.getElementById("sign-up-form");
  const signInForm = document.getElementById("sign-in-form");

  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Add your validation logic here if needed
    window.location.href = "problem.html"; // Redirect to map.html
  });

  signInForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "problem.html"; // Redirect to map.html
  });
  // Add this JavaScript to your login.js

  document.getElementById("home-button").addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
