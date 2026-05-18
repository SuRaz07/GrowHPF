const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const message = document.getElementById("signup-message");

if (localStorage.getItem("Think GrowLandingVisited") !== "true") {
  window.location.href = "../../Landing%20page/landingpage.html";
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

  localStorage.setItem("Think GrowSignupName", fullName);
  localStorage.setItem("Think GrowSignupEmail", email);

  setTimeout(() => {
    window.location.href = `login.html?email=${encodeURIComponent(email)}`;
  }, 700);
});

// --- Domain preview: show which domains are unused (reads localStorage.Think GrowUsedDomains)
(function renderUnusedDomains(){
  const allDomains = [
    'observe',
    'understand',
    'Think',
    'Decide',
    'perfrom',
    'Experience',
    'Repeat'
  ];

  let used = [];
  try {
    const raw = localStorage.getItem('Think GrowUsedDomains');
    if (raw) used = JSON.parse(raw);
  } catch(e){ used = []; }

  const unused = allDomains.filter(d => !used.includes(d));

  const listEl = document.getElementById('unused-list');
  const nameEl = document.getElementById('domain-name');
  const bubbleEl = document.getElementById('domain-bubble');

  if (!listEl || !nameEl || !bubbleEl) return;

  // Render list
  listEl.innerHTML = '';
  if (unused.length === 0) {
    nameEl.textContent = 'All domains used';
    const li = document.createElement('li');
    li.textContent = '—';
    listEl.appendChild(li);
    bubbleEl.style.background = '#e6eef5';
    return;
  }

  nameEl.textContent = unused[0];
  // color mapping for bubble (simple)
  const colorMap = {
    observe: '#fb8466',
    understand: '#8ad2c6',
    Think: '#f2c27e',
    Decide: '#9ec4e6',
    perfrom: '#c8f0c6',
    Experience: '#f0a9bc',
    Repeat: '#d1d5db'
  };
  bubbleEl.style.background = colorMap[unused[0]] || '#fb8466';

  unused.forEach(d => {
    const li = document.createElement('li');
    li.textContent = d;
    listEl.appendChild(li);
  });
})();

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

  // --- Password strength hint
  const pwd = document.getElementById('password');
  const pwdHint = document.getElementById('password-hint');
  if (pwd && pwdHint) {
    pwd.addEventListener('input', () => {
      const v = pwd.value || '';
      let score = 0;
      if (v.length >= 8) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      const labels = ['Very weak', 'Weak', 'Okay', 'Good', 'Strong'];
      const colors = ['#b91c1c', '#f97316', '#f59e0b', '#10b981', '#065f46'];
      const label = labels[score] || '';
      pwdHint.textContent = label;
      pwdHint.style.color = colors[score] || 'var(--gray)';
    });
  }
