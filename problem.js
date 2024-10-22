// problem.js
const problemForm = document.getElementById("problemForm");

problemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById("name").value;
  const vehicleType = document.getElementById("vehicle-type").value;
  const message = document.getElementById("message").value;

  // Redirect to map.html
  window.location.href = "map.html";
});

document.getElementById("home-button").addEventListener("click", function () {
  window.location.href = "index.html";
});
