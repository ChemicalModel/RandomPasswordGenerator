var generateBtn = document.querySelector("#generate");

// Begins user question to generate random password
function generatePassword() {
  let charset = "";

  // Confirmation prompts
  const useLowercase = confirm("Do you want to include lowercase letters?");
  const useUppercase = confirm("Do you want to include uppercase letters?");
  const useNumbers = confirm("Do you want to include numbers?");
  const useSymbols = confirm("Do you want to include symbols?");
  
  // Asks for password length
  let passwordLength;
  do {
    passwordLength = parseInt(prompt("How many characters would you like your password to be? (Enter a number between 8 and 128)"));
    
    //Checks to see if number entered is within acceptance range
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
    }
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  
  //Character types
  if (useLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumbers) {
    charset += "0123456789";
  }
  if (useSymbols) {
    charset += "!@#$%^&*()_+";
  }
  
  //Displays alert if no character types were chosen
  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
    alert("Please choose at least one character type.");
    return "";
  }
  //Empty string to store password
  let password = "";

  //!THE RANDOMIZER!//
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  //Gives password
  return password;
}

//Places password in specified area, in this case its in the "textarea"
function writePassword() {
  const passwordElement = document.getElementById("password");
  const password = generatePassword();
  passwordElement.value = password;
}
//Event listener to begin generation once the Generate Password button is clicked.
generateBtn.addEventListener("click", writePassword);




