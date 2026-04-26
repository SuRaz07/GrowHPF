const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const message = document.getElementById("signup-message");

if (localStorage.getItem("growHPFLandingVisited") !== "true") {
  window.location.href = "landingpage.html";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.className = "message";

  const fullName = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!fullName || !email || !password || !confirmPassword) {
    message.textContent = "Please fill in all fields.";
    message.classList.add("error");
    return;
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    message.textContent = "Please enter a valid email address.";
    message.classList.add("error");
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.classList.add("error");
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.classList.add("error");
    return;
  }

  message.textContent = `Account created for ${fullName}.`;
  message.classList.add("success");

  localStorage.setItem("growHPFSignupName", fullName);
  localStorage.setItem("growHPFSignupEmail", email);

  setTimeout(() => {
    window.location.href = `login.html?email=${encodeURIComponent(email)}`;
  }, 700);
});
