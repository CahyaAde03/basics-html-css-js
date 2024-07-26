/** @format */
let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (length) => {
  //syntax pengganti function jika dengan 'function generatePassword(length){}'
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()";

  const data = lowerAlphabet + upperAlphabet + numbers + specialCharacters;
  let generator = "";
  for (let index = 0; index < length; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya: ${document.title}`)
  );
  saveButton.setAttribute("download", "Mypassword.txt");
  setTimeout(() => {
    alert("password has been saved");
  }, 1000);
};
