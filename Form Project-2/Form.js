// Form.js
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');

    const messageDiv = document.getElementById("form-message");

    if (!name || !email || !phone || !feedback || !rating) {
        messageDiv.textContent = "Please fill in all fields correctly.";
        messageDiv.style.color = "red";
        return;
    }

    messageDiv.textContent = "Thank you for your feedback!";
    messageDiv.style.color = "green";

    this.reset();
});
