const heading = document.getElementById("heading");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    heading.textContent = "Hello, JavaScript!";
});