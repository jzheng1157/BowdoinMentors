
var mentorRadioButton;
var menteeRadioButton;

var users = JSON.parse(localStorage.getItem('Users')) || [];

function mentorClick() {
    alert("Your mentor has been notified!");
}

function navigateToPage() {

    if (mentorRadioButton.checked) {
      window.location.href = './mentorview.html';
    } else if (menteeRadioButton.checked) {
      window.location.href = './Studentview/index.html';
    }
}

function isEmpty(string) {
    return !string.trim().length;
}

function registration() {
    var users = JSON.parse(localStorage.getItem('Users')) || [];
    mentorRadioButton = document.getElementById('mentor');
    menteeRadioButton = document.getElementById('mentee');    
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
    
            userData = [{Name:document.getElementById("name").value},
                {Email:document.getElementById("email").value},
                {Password:document.getElementById("psw").value},
                {UserType:userType}];
    
            users.push(userData);
            localStorage.setItem('Users', JSON.stringify(users));

            alert("Success! User account created.");
            window.location = './index.html';
        }
        else {
            alert("Passwords do not match! Please try again.");
        }

    }
    else {
        alert("Registration fields not complete.");
    }


    

}