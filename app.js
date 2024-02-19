//Logo animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("#logo").onmouseover = (event) => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
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
    iterations += 1 / 3;
  }, 30);
};

//image popup
let images = document.querySelectorAll("img");
let popup = document.getElementById("popup");
let fullImg = document.getElementById("full-image");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openImage(img.src);
  });
});

//Closes popup if click or hit escape key
if (close != null) {
  close.addEventListener("click", () => (popup.style.display = "none"));
}
document.onkeydown = function (e) {
  if (e.key == "Escape") {
    popup.style.display = "none";
  }
};

function openImage(photo) {
  popup.style.display = "flex";
  fullImg.src = photo;
}
