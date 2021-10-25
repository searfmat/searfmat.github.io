window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        if(!validate()) return false;
        event.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

// Code to ensure that no forms are null or invalid

function validate() {
    const element = document.getElementById("error");

    if(document.getElementById("fname").value.length == 0) {

        element.innerHTML = "Invalid - First name cannot be blank.";

    } else if(document.getElementById("lname").value.length == 0) {

        element.innerHTML = "Invalid - Last name cannot be blank.";

    } else if(document.getElementById("email").value.length == 0) {

        element.innerHTML = "Invalid - Email cannot be blank.";

    } else if(document.getElementById("phone").value.length == 0) {

        element.innerHTML = "Invalid - Phone number cannot be blank.";

    } else if(document.getElementById("message").value.length == 0) {

        element.innerHTML = "Invalid -  Message cannot be blank.";

    } else if(!document.getElementById("phone").value.match(/^\(?([0-9]{3})\)?[-]([0-9]{3})[-]([0-9]{4})$/)) {

        element.innerHTML = "Invalid -  Phone number must be in format: 123-456-7890";

    } else if(!document.getElementById("email").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        element.innerHTML = "Invalid - Please enter a valid email.";

    } else {
        element.innerHTML = "Message sent!";
        return true;
    } return false;
  }