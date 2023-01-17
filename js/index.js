const cards = document.querySelectorAll(".cards__item");
const hoverText = document.querySelectorAll(".cards__hoverSubtext");
const subtext = document.querySelectorAll(".cards__subtext");
const disabledQuestion = document.querySelector(".disabled__question");
cards.forEach((card) => {
  if (card.classList.contains("disabled")) {
    disabledQuestion.innerHTML = "Печалька, с курой закончился";
    disabledQuestion.style.color = "#FFFF66"
  }
  card.addEventListener("click", () => {
    card.classList.toggle("pink-border");
    if (card.classList.contains("pink-border")) {
      card.addEventListener("mouseover", () => {
        hoverText.forEach((item) => {
          item.style.display = "block";
        });
        subtext.forEach((item) => {
          item.style.display = "none";
        });
      });
      card.addEventListener("mouseout", () => {
        hoverText.forEach((item) => {
          item.style.display = "none";
        });
        subtext.forEach((item) => {
          item.style.display = "block";
        });
      });
    } else {
      card.addEventListener("mouseover", () => {
        hoverText.forEach((item) => {
          item.style.display = "none";
        });
        subtext.forEach((item) => {
          item.style.display = "block";
        });
      });
    }
  });
});
