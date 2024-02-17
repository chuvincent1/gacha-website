const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(document.querySelector("#logo").innerText);
document.querySelector("#logo").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iterations += 1/3;
    }, 30);
}