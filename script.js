const toggleButton = document.querySelector("#toggle-exercises");
const exerciseList = document.querySelector(".exercise-list");

toggleButton.addEventListener("click", function() {
    if (exerciseList.style.display === "none") {
        exerciseList.style.display = "flex";
        toggleButton.textContent = "Hide Exercises";
    } else {
        exerciseList.style.display = "none";
        toggleButton.textContent = "Show Exercises";
    }
});