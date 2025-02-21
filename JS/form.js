// For signup
function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('signupText').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('loginText').style.display = 'none';
}

// For login
function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signupText').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loginText').style.display = 'block';
}

// Signup Form Validation
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('signnameError').textContent = '';
    document.getElementById('signemailError').textContent = '';
    document.getElementById('new-password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
    document.getElementById('sPhoneError').textContent = '';
    document.getElementById('termsCheckError').textContent = '';

    // Get input values
    const name = document.getElementById('signname').value;
    const email = document.getElementById('signemail').value;
    const pw = document.getElementById('new-password').value;
    const cpw = document.getElementById('current-password').value;
    const phone = document.getElementById('sphone').value;
    const termsAccepted = document.getElementById('termsCheck').checked;

    // Regular Expressions for validation
    const nameRegex = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegex = /^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/;

    let isValid = true;

    // Validate Name
    if (name.trim() === '') {
        document.getElementById('signnameError').textContent = 'Name is required.';
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById('signnameError').textContent = 'Please enter a valid name.';
        isValid = false;
    }

    // Validate Email
    if (email.trim() === '') {
        document.getElementById('signemailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('signemailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate Password
    if (pw.trim() === '') {
        document.getElementById('new-password-error').textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(pw)) {
        document.getElementById('new-password-error').textContent = 'Password must be at least 8 characters long, contain at least one number and one uppercase letter.';
        isValid = false;
    }

    // Validate Confirm Password
    if (cpw.trim() === '') {
        document.getElementById('confirm-password-error').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (cpw !== pw) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        isValid = false;
    } 

    // Validate Phone Number
    if (phone.trim() === '') {
        document.getElementById('sPhoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('sPhoneError').textContent = 'Please enter a valid phone number (e.g., (123) 456-7890 or 123-456-7890).';
        isValid = false;
    }

    // Checkbox validation
    if (!termsAccepted) {
        document.getElementById('termsCheckError').textContent = 'You must accept the terms and conditions.';
        isValid = false;
    }

    if (isValid) {
        console.log('Form is valid!');
        alert('Form submitted successfully!');
    } else {
        console.log('Form is invalid!');
    }
});

// Signup Form Disappering Error Msg
document.getElementById('signname').addEventListener('input', function () {
    document.getElementById('signnameError').textContent = '';
});
document.getElementById('signemail').addEventListener('input', function () {
    document.getElementById('signemailError').textContent = '';
});
document.getElementById('new-password').addEventListener('input', function () {
    document.getElementById('new-password-error').textContent = '';
});
document.getElementById('current-password').addEventListener('input', function () {
    document.getElementById('confirm-password-error').textContent = '';
});
document.getElementById('sphone').addEventListener('input', function () {
    document.getElementById('sPhoneError').textContent = '';
});
document.getElementById('termsCheck').addEventListener('change', function () {
    document.getElementById('termsCheckError').textContent = '';
});


// Login Form Validation
document.getElementById('myLoginForm').addEventListener('submit', function (event){
    event.preventDefault();
    document.getElementById('loginNameError').textContent = '';
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';

    const liName = document.getElementById("loginName").value;
    const liEmail = document.getElementById("loginEmail").value;
    const liPw = document.getElementById("loginPassword").value;

    const liNameRegex = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/;
    const liEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const liPasswordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate Name
    if (liName.trim() === '') {
        document.getElementById('loginNameError').textContent = 'Name is required.';
        isValid = false;
    } else if (!liNameRegex.test(liName)) {
        document.getElementById('loginNameError').textContent = 'Invalid Name.';
        isValid = false;
    }

    // Validate Email
    if (liEmail.trim() === '') {
        document.getElementById('loginEmailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!liEmailRegex.test(liEmail)) {
        document.getElementById('loginEmailError').textContent = 'Invalid Email.';
        isValid = false;
    }

    // Validate Password
    if (liPw.trim() === '') {
        document.getElementById('loginPasswordError').textContent = 'Password is required.';
        isValid = false;
    } else if (!liPasswordRegex.test(liPw)) {
        document.getElementById('loginPasswordError').textContent = 'Invalid Password.';
        isValid = false;
    }

    if (isValid) {
        console.log('Form is valid!');
        alert('Form submitted successfully!');
    } else {
        console.log('Form is invalid!');
    }

})

// Login Form Disappering Error Msg
document.getElementById('loginName').addEventListener('input', function () {
    document.getElementById('loginNameError').textContent = '';
});
document.getElementById('loginEmail').addEventListener('input', function () {
    document.getElementById('loginEmailError').textContent = '';
});
document.getElementById('loginPassword').addEventListener('input', function () {
    document.getElementById('loginPasswordError').textContent = '';
});