const btn = document.querySelector("button")
const n = parseInt(document.querySelector("#kolumny").value);

btn.addEventListener('click', function (){
    const container = document.querySelector("body");
    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = (i + j) % 2 === 0 ? "white" : "black";
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
})