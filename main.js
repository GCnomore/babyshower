const card = document.querySelector(".card");
const cardImg = document.querySelector(".cardImg");
const cardFront = document.querySelector(".cardFront");
const cardback = document.querySelector(".cardBack");
const next = document.querySelector(".bgContainer");

const txt1 = document.querySelector(".txt1");
const txt2 = document.querySelector(".txt2");
const txt3 = document.querySelector(".txt3");

setTimeout(() => {
  card.classList.remove("hide");
}, 1000);
setTimeout(() => {
  card.classList.add("fadeIn");
}, 1100);

card.addEventListener("click", (e) => {
  console.log("click");
  card.classList.remove("fadeIn");
  card.classList.add("fadeOut");
  setTimeout(() => {
    next.classList.remove("hidden");
    next.classList.add("fadeIn");
  }, 1000);
});
