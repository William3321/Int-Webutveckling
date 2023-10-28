const headerText = document.getElementById("headerText");
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener("click", function() {
    if (headerText.textContent === "Hello World") {
        headerText.textContent = "Goodbye World";
        changeTextButton.textContent = "Hello";
    } else {
        headerText.textContent = "Hello World";
        changeTextButton.textContent = "Goodbye";
    }
});