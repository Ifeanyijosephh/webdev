 /*
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("textarea");
const submitButton = document.getElementById("submitButton"); */

document.getElementById("contactForm").addEventListener("submit", function emailSending(event) {
   // if(emailjs.send("service_nkzwax4", "template_r9khy9e", contactForm, "VKZbfOKBqBLgiCSy3")) {
     //   userName.value = "";
       // userEmail.value = "";
       // userMessage.value = "";
    // }
     event.preventDefault();
        emailjs.send("service_nkzwax4", "template_r9khy9e", contactForm, "VKZbfOKBqBLgiCSy3")
    .then(() => {
        alert("Your Message was successfully sent!");
            }, (error) => {
        alert("Failed to send!: " + JSON.stringify(error));
    });
});
