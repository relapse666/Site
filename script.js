const enter = document.getElementById("enter");

enter.addEventListener("click", () => {
    enter.style.opacity = "0";
    setTimeout(() => {
        enter.style.display = "none";
    }, 500);
});