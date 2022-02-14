const card = document.querySelector(".card");
const cardFront = document.querySelector(".cardFront");
const cardback = document.querySelector(".cardBack");

const txt1 = document.querySelector(".txt1");
const txt2 = document.querySelector(".txt2");
const txt3 = document.querySelector(".txt3");

card.addEventListener("click", (e) => {
  card.classList.add("rotate");
  setTimeout(() => {
    cardFront.classList.add("hidden");
    cardback.classList.remove("hidden");
  }, 400);
});

setTimeout(() => {
  txt1.classList.remove("hide");
  txt1.classList.add("fadeIn");
}, 500);

setTimeout(() => {
  txt2.classList.remove("hide");
  txt2.classList.add("fadeIn");
}, 2500);

setTimeout(() => {
  txt3.classList.remove("hide");
  txt3.classList.add("fadeIn");
}, 5000);

setTimeout(() => {
  window.scroll({ behavior: "smooth", top: 1000 });
}, 8000);
