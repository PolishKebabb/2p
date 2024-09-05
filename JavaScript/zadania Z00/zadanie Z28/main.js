const btn = document.querySelector("button")
const wyn = document.querySelector("#wynik")

btn.addEventListener('click', function (){
    let x1 = document.querySelector("#x1").value
    let y1 = document.querySelector("#y1").value
    let x2 = document.querySelector("#x2").value
    let y2 = document.querySelector("#y2").value
    let z1 = document.querySelector("#z1").value
    let z2 = document.querySelector("#z2").value


    let wynik = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) + Math.pow(z1 - z2, 2))


    wyn.innerHTML = `x1: ${x1}<br>
                     y1: ${y1}<br>
                     z1: ${z1}<br>
                     x2: ${x2}<br>
                     y2: ${y2}<br>
                     z2: ${z2}<br>
    Odległość między punktami wynosi ${wynik}`

})