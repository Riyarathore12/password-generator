const passwordBox = document.getElementById("password");
const length = document.getElementById("length");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
  let characters = "";
  if (upper.checked) characters += upperCase;
  if (lower.checked) characters += lowerCase;
  if (number.checked) characters += numbers;
  if (symbol.checked) characters += symbols;

  let pass = "";
  for (let i = 0; i < length.value; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordBox.value = pass;
}

// Generate when button clicked
generateBtn.addEventListener("click", generatePassword);

// Copy to clipboard
copyBtn.addEventListener("click", () => {
  if (passwordBox.value === "") return;
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied!");
});
