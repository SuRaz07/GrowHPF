const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

if (localStorage.getItem("Think GrowLandingVisited") !== "true") {
  window.location.href = "../../Landing%20page/landingpage.html";
}

if (sessionStorage.getItem("Think GrowLoggedIn") === "true" || localStorage.getItem("Think GrowLoggedIn") === "true") {
  window.location.href = "../../index.html";
}

const params = new URLSearchParams(window.location.search);
const prefillEmail = (params.get("email") || localStorage.getItem("Think GrowSignupEmail") || "").trim();
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
  const previousEmail = (localStorage.getItem("Think GrowUserEmail") || "").trim().toLowerCase();

  if (previousEmail && previousEmail !== email.toLowerCase()) {
    localStorage.setItem("Think GrowUserXP", "0");
  }

  if (localStorage.getItem("Think GrowUserXP") === null) {
    localStorage.setItem("Think GrowUserXP", "0");
  }

  sessionStorage.setItem("Think GrowLoggedIn", "true");
  localStorage.setItem("Think GrowLoggedIn", "true");
  const storedSignupName = (localStorage.getItem("Think GrowSignupName") || "").trim();
  localStorage.setItem("Think GrowUserName", storedSignupName || displayName || "User");
  localStorage.setItem("Think GrowUserEmail", email);
  window.location.href = "../../index.html";
});

  // --- Show / hide password toggle
  document.querySelectorAll('.show-password-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      const newType = input.type === 'password' ? 'text' : 'password';
      input.type = newType;
      btn.innerHTML = newType === 'password'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 10.6A3 3 0 0012 15a3 3 0 003-3 3 3 0 00-.4-1.5"/><path d="M7.5 7.5C4.7 9.2 2.8 12 2 12c0 0 3.5 7 10 7 1.2 0 2.4-.2 3.5-.6"/><path d="M14.2 5.2C15.6 5.6 17 6.4 18 7.2"/></svg>';
      btn.setAttribute('aria-label', newType === 'password' ? 'Show password' : 'Hide password');
    });
  });
