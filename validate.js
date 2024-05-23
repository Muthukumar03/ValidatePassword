function validatePassword(password) {
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasDigit = /[0-9]/;
    
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    if (!hasUpperCase.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }

    if (!hasLowerCase.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }

    if (!hasDigit.test(password)) {
      return "Password must contain at least one digit.";
    }
    
    return "Password is valid.";
  }
  
  console.log(validatePassword("Pass123")); 
  console.log(validatePassword("password1")); 
  console.log(validatePassword("PASSWORD1")); 
  console.log(validatePassword("Password1"));
