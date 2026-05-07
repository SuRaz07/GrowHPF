const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

if (localStorage.getItem("growHPFLandingVisited") !== "true") {
  window.location.href = "landingpage.html";
}

if (sessionStorage.getItem("growHPFLoggedIn") === "true" || localStorage.getItem("growHPFLoggedIn") === "true") {
  window.location.href = "index.html";
}

const params = new URLSearchParams(window.location.search);
const prefillEmail = (params.get("email") || localStorage.getItem("growHPFSignupEmail") || "").trim();
if (prefillEmail) {
  emailInput.value = prefillEmail;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.className = "message";

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
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

  message.textContent = "Login successful.";
  message.classList.add("success");

  const displayName = email.split("@")[0].replace(/[._-]+/g, " ").trim();
  const previousEmail = (localStorage.getItem("growHPFUserEmail") || "").trim().toLowerCase();

  if (previousEmail && previousEmail !== email.toLowerCase()) {
    localStorage.setItem("growHPFUserXP", "0");
  }

  if (localStorage.getItem("growHPFUserXP") === null) {
    localStorage.setItem("growHPFUserXP", "0");
  }

  sessionStorage.setItem("growHPFLoggedIn", "true");
  localStorage.setItem("growHPFLoggedIn", "true");
  const storedSignupName = (localStorage.getItem("growHPFSignupName") || "").trim();
  localStorage.setItem("growHPFUserName", storedSignupName || displayName || "User");
  localStorage.setItem("growHPFUserEmail", email);
  window.location.href = "index.html";
});
