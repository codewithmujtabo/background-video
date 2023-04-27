const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsEl.forEach((starsEl, i) => {
  starsEl.addEventListener("click", () => {
    updateRating(i);
  });
});

function updateRating(i) {
  starsEl.forEach((starsEl, j) => {
    if (j < i + 1) {
      starsEl.classList.add("active");
    } else {
      starsEl.classList.remove("active");
    }
  });
  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translate(-${i * 50}px)`;
    emojiEl.style.color = colorsArray[i];
  });
}
