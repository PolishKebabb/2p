const diw = document.querySelector("#data")

diw.addEventListener('mouseover', function (){
    let data = new Date();
    diw.innerHTML = `${data.getDate()}.${data.getMonth()}.${data.getFullYear()}`;
})

diw.addEventListener('mouseout', function(){
    diw.innerHTML = ``
    diw.removeEventListener();
})


diw.addEventListener('mouseover', function (){
    diw.innerHTML = `Data już była ;)`
})