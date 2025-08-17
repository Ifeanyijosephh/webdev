
document.getElementById("contactForm").addEventListener("submit", function (event) {
     event.preventDefault();
        emailjs.send("service_nkzwax4", "template_r9khy9e", contactForm, "VKZbfOKBqBLgiCSy3")
    .then(() => {
        showSuccessMessage();
            }, (error) => {
        alert("Failed to send!: " + JSON.stringify(error));
    });
});