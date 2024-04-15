const btn = document.querySelector("button");

function createFrame(width, height) {
    let frame = "";
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            frame += " | ".repeat(width) + "\n";
        } else {
            frame += "|" + " . ".repeat(width - 2) + "|\n";
        }
    }
    return frame;
}

function drawFrame() {
    const a = parseInt(document.querySelector("#a").value);
    const b = parseInt(document.querySelector("#b").value);
    const frame = createFrame(a, b);
    document.getElementById("wynik").innerText = frame;
}


btn.addEventListener('click', function (){
    drawFrame();
});