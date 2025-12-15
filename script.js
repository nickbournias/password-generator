let password = "";
let passLength = 12;

window.onload = function () {
  const lengthInput = document.getElementById("lengthInput");
  const lengthDisplay = document.getElementById("lengthDisplay");

  passLength = lengthInput.value;
  lengthDisplay.innerText = passLength;

  generatePassword();
};

function outputLength() {
  const lengthInput = document.getElementById("lengthInput");
  const lengthDisplay = document.getElementById("lengthDisplay");

  passLength = lengthInput.value;
  lengthDisplay.innerText = passLength;
}

function copyText() {
  const text = document.getElementById("passwordDisplay").textContent;
  if (!text) return;

  navigator.clipboard.writeText(text);
}

function evaluateStrength(pw) {
  let score = 0;

  const hasNumbers = /[0-9]/.test(pw);
  const hasSymbols = /[^A-Za-z0-9]/.test(pw);
  const hasLetters = /[A-Za-z]/.test(pw);

  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (pw.length >= 16) score++;

  if (hasLetters) score++;
  if (hasNumbers) score++;
  if (hasSymbols) score++;

  const el = document.getElementById("passStrength");

  if (score <= 2) {
    el.innerText = "Very Weak";
    el.style.color = "darkred";
  } else if (score <= 3) {
    el.innerText = "Weak";
    el.style.color = "red";
  } else if (score <= 4) {
    el.innerText = "Medium";
    el.style.color = "orange";
  } else if (score <= 5) {
    el.innerText = "Strong";
    el.style.color = "green";
  } else {
    el.innerText = "Very Strong";
    el.style.color = "#1B5E20";
  }
}

function generatePassword() {
  const numbers = document.getElementById("switchNumbers").checked;
  const symbols = document.getElementById("switchSymbols").checked;
  const letters = document.getElementById("switchMixed").checked;

  if (!numbers && !symbols && !letters) {
    document.getElementById("passwordDisplay").innerText = "select an option!";
    document.getElementById("passStrength").innerText = "";
    return;
  }

  let pool = "";
  if (numbers) pool += "0123456789";
  if (symbols) pool += "!@#$%^&*()";
  if (letters) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  password = "";
  for (let i = 0; i < passLength; i++) {
    password += pool[Math.floor(Math.random() * pool.length)];
  }

  document.getElementById("passwordDisplay").innerText = password;
  evaluateStrength(password);
}
