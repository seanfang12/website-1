const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const questionInput = document.querySelector("#question");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const question = questionInput.value;

    if (name === "" || question === "") {
        formMessage.textContent = "Please enter your name and a question.";
    } else {
        formMessage.textContent = "Thanks, " + name + "! Your question was submitted.";
        form.reset();
    }
});