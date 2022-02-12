const card = document.querySelector(".card");
const cardFront = document.querySelector(".cardFront");
const cardback = document.querySelector(".cardBack");

card.addEventListener("click", (e) => {
  card.classList.add("rotate");
  setTimeout(() => {
    cardFront.classList.add("hidden");
    cardback.classList.remove("hidden");
  }, 1000);
});
