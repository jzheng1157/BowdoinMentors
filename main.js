
var users = JSON.parse(localStorage.getItem('Users')) || [];

function mentorClick() {
    alert("Your mentor has been notified!");
}

function navigateToPage(userType) {
    switch (userType) {
        case "Mentor":
            window.location.href = './mentorview.html';
            break;
        case "Mentee":
            window.location.href = './studentview.html';
            break;
    }
}

function isEmpty(string) {
    return !string.trim().length;
}

/**
 * Registers the use based on the four fields.
 * Validates that the fields are not empty and passwords match.
 * Method stores user data in local storage.
 */
function registration() {
    users = JSON.parse(localStorage.getItem('Users')) || [];
    var mentorRadioButton = document.getElementById('mentor');
    var menteeRadioButton = document.getElementById('mentee');    
    var userData;
    var userType;

    if (
        !isEmpty(document.getElementById("name").value) && 
        !isEmpty(document.getElementById("email").value) &&
        !isEmpty(document.getElementById("psw").value) &&
        !isEmpty(document.getElementById("psw-repeat").value)) {

        if (document.getElementById("psw").value == document.getElementById("psw-repeat").value) {

            if (mentorRadioButton.checked) {
                userType = "Mentor";
            } else if (menteeRadioButton.checked) {
                userType = "Mentee";
            }
    
            userData = {Name: document.getElementById("name").value,
                Email: document.getElementById("email").value,
                Password: document.getElementById("psw").value,
                UserType :userType};
    
            users.push(userData);
            localStorage.setItem('Users', JSON.stringify(users));

            alert("Success! User account created.");
            window.location = './studentview.html';
        }
        else {
            alert("Passwords do not match! Please try again.");
        }

    }
    else {
        alert("Registration fields not complete.");
    }

}

/**
 * Checks the validity of user's login email and password
 */
function checkLogin() {
    users = JSON.parse(localStorage.getItem('Users'));

    let emailInput = document.getElementById("login").value;
    let passInput = document.getElementById("password").value;
    let userType;
    let curUser;

    const fieldsMatch = this.users.find( (user) => {
        userType = user.UserType;
        curUser = user;
        return user.Email === emailInput && user.Password === passInput;
        });

    if (fieldsMatch) {
        setCurrentUser(curUser);
        navigateToPage(userType);
    }
    else {
        alert("Incorrect email or password.");
    }
}

function setCurrentUser(user) {
    localStorage.setItem("CurrentUser", JSON.stringify(user));
}

/**
 * Retrieves user's password based on provided email.
 */
function getPassword() {
    users = JSON.parse(localStorage.getItem('Users'));

    let emailInput = document.getElementById("lostEmail").value;
    let retrievedPass;

    const foundPass = this.users.find( (user) => {
        retrievedPass = user.Password;
        return user.Email === emailInput;
    });

    if (foundPass) {
        alert("Your password is: " + retrievedPass);
    }
    else {
        alert("Email not found.");
    }
}