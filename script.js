const upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolChars = ["!","@","#","$","%","^","&","*","(",")","_","+","{","}","[","]","<",">","?","/","|"];

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const passwordBox = document.getElementById("password");

  let allChars = [];

  if (includeUppercase) allChars = allChars.concat(upperCaseChars);
  if (includeLowercase) allChars = allChars.concat(lowerCaseChars);
  if (includeNumbers) allChars = allChars.concat(numberChars);
  if (includeSymbols) allChars = allChars.concat(symbolChars);

  if (allChars.length === 0) {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  passwordBox.value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  if (!passwordField.value) {
    alert("No password to copy!");
    return;
  }

  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard!");
}
