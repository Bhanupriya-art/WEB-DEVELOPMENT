function sayHello() {
    // Show "Say Hi" in h2 with id="message"
    document.getElementById("message").textContent = "Say Hi";

    // Change content of headings
    document.getElementById("h1").innerHTML = "Hello World";
    document.getElementById("h2").innerHTML = "Hello Priya";
    document.getElementById("h3").innerHTML = "Hello Bhanu";
    document.getElementById("h4").innerHTML = "Hello Rana";
    document.getElementById("h5").innerHTML = "Hello Developer";
    document.getElementById("h6").innerHTML = "Hello Learner";

    // Change colors after 2 seconds
    setTimeout(function () {
        document.getElementById("h1").style.color = "red";
        document.getElementById("h2").style.color = "blue";
        document.getElementById("h3").style.color = "green";
        document.getElementById("h4").style.color = "orange";
        document.getElementById("h5").style.color = "purple";
        document.getElementById("h6").style.color = "brown";
    }, 2000);
}
