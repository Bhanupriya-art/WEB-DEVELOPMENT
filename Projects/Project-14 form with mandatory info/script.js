document.getElementById("applicationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById("course").value;
    const messageBox = document.getElementById("message")
    if (!name || !email || !phone || !gender || !course) {
        messageBox.style.color = "red";
        messageBox.innerText = "Please fill in all required fields.";
        return;
    }
    messageBox.style.color = "green";
    messageBox.innerText = "Form submitted successfully!";
    this.reset();
});
