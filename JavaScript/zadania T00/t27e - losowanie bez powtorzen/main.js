let tab = [];

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
            tab.push(Math.floor(Math.random() * 100));
    }
}
console.log(tab);

for (let i = 0; i < 7; i++) {
        document.write(tab.join("  "));
}
