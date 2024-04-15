const diw = document.querySelector("#data")

diw.addEventListener("mouseover", () => {
    if (!diw.textContent) {
        diw.textContent = "Data już była ;)";
    } else {
        const data = new Date();
        diw.textContent = data;
    }
});
diw.addEventListener('mouseout', function(){
    diw.innerHTML = ``
    diw.removeEventListener();
})


