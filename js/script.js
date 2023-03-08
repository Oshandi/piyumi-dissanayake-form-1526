//Declare variables
const form = document.getElementById('form');

const submitButton = document.getElementById("submit-button");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageTextarea = document.getElementById("message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Method declaration
function validateForm(event) {
    
    event.preventDefault();

    const formData = {};
    const errors = [];

    //Removing whitespace
    const fullNameValue = fullNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageTextarea.value.trim();

    //Full name validation
    if (fullNameValue !== "") {
        formData.fullname = fullNameValue;
    } else {
        alert("Please enter your full name!");
        errors.push("Full name is missing.");
    }

    //Email validation
    if (emailValue !== "") {
        if (emailRegex.test(emailValue)) {
          formData.email = emailValue;
        } else {
          alert("Please enter a valid email!");
          errors.push("Invalid email.");
        }
      } else {
        alert("Please enter your email!");
        errors.push("Email is missing.");
      }

      //Message validation
      if (messageValue !== "") {
        formData.message = messageValue;
      } else {
        alert("Please enter your message!");
        errors.push("Message name is missing.");
      }

      //Validation of Errors array and FormData object
      if (errors.length > 0) {
        console.error("Form submission failed:", errors);
      } else {
        alert("Form submitted successfully!");
        console.log("Form submitted successfully:", formData);
        fullNameInput.value = "";
        emailInput.value = "";
        messageTextarea.value = "";
      }
    
  };
  
// Registering form to "click" event
submitButton.addEventListener('click', validateForm);

