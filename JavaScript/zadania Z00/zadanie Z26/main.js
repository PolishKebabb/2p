const btn = document.querySelector("button")
const wyn = document.querySelector("#wynik")

btn.addEventListener('click', function (){
    let x1 = document.querySelector("#x1").value
    let y1 = document.querySelector("#y1").value
    let x2 = document.querySelector("#x2").value
    let y2 = document.querySelector("#y2").value

    let wynik = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))

    wyn.innerHTML = `Wynik wynosi ${wynik}`

})