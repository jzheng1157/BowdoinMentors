
var users = JSON.parse(localStorage.getItem('Users')) || [];

function alertworked() {
    alert("Success!")
}

function mentorClick() {
    alert("Your mentor has been notified!");
}

function displayReachedOut() {
    alert("Your mentor has been pooped!")
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
 * Registers the user based on the four fields.
 * Validates that the fields are not empty and passwords match.
 * Method stores user data in local storage.
 */
function registration() {
    users = JSON.parse(localStorage.getItem('Users')) || [];
    var mentorRadioButton = document.getElementById('mentor');
    var menteeRadioButton = document.getElementById('mentee');   

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userEmail = document.getElementById("email").value; 
    var password = document.getElementById("psw").value;

    var userData;
    var userType;

    if (checkRegistration()) {
        userData = {
            FirstName: firstName,
            LastName: lastName,
            Email: userEmail,
            Password: password,
            UserType :userType
        };

        users.push(userData);
        setCurrentUser(userData);
        localStorage.setItem('Users', JSON.stringify(users));

        if (mentorRadioButton.checked) {
            userType = "Mentor";
        } else if (menteeRadioButton.checked) {
            userType = "Mentee";
        }

        alert("Success! User account created.");
        navigateToPage(userType);
    }
}

/**
 * Checks validity of registration fields. Returns false if fields are empty,
 * email already exists, email does not follow correct guidelines, or passwords
 * do not match.
 * 
 * @returns boolean depending on validity of registration
 */
function checkRegistration() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userEmail = document.getElementById("email").value; 
    var password = document.getElementById("psw").value;
    var passRepeat = document.getElementById("psw-repeat").value;

    if (
        !isEmpty(firstName) && 
        !isEmpty(lastName) &&
        !isEmpty(userEmail) &&
        !isEmpty(password) &&
        !isEmpty(passRepeat)) {

        let emailRegex = new RegExp("^(.+)@(.+)$");

        users = JSON.parse(localStorage.getItem('Users')) || [];
        const userExists = this.users.find( (user) => {
            return user.Email == userEmail;
        });

        // Registration validation
        if (userExists != undefined) {
            alert("Error: Account with this email already exists!");
            return false;
        }
        else if (!emailRegex.test(userEmail)) {
            alert("Incorrect email format! Please try again.");
            return false;
        }
        else if (password != passRepeat) {
            alert("Passwords do not match! Please try again.");
            return false;
        }
        else {
            return true;
        }

    }
    else {
        alert("Registration fields not complete.");
        return false;
    }
}

function checkName() {
    let name = document.getElementById("name").value;

    let nameRegex = new RegExp("^(.+)@(.+)$");

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

// function getCurrentUser() {
//     let curUser = localStorage.getItem("CurrentUser");
//     document.querySelector('#div_id_for_display').innerHTML = curUser.Name;
// }

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