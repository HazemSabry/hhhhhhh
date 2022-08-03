window.onload = function () {
  document
    .querySelector(".img-container--1")
    .classList.remove("img-container-flow-1");
  document
    .querySelector(".img-container--2")
    .classList.remove("img-container-flow-2");
  document
    .querySelector(".img-container--3")
    .classList.remove("img-container-flow-3");
  document
    .querySelector(".img-container--4")
    .classList.remove("img-container-flow-4");
};

setTimeout(() => {
  document.querySelectorAll(".img-container").forEach((element) => {
    element.classList.remove("img-container-loading");
    element.classList.add("img-container-static");
  });
}, 4000);

cards.forEach(function (card) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  const imgContainerEL = document.createElement("div");
  imgContainerEL.classList.add("card-img-container");
  const detailsContainer = document.createElement("div");
  cardEl.appendChild(imgContainerEL);
  cardEl.appendChild(detailsContainer);
  const imageEl = document.createElement("img");
  imageEl.src = card.img;
  imageEl.classList.add("imge");
  const nameEl = document.createElement("h4");
  nameEl.textContent = card.name;
  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = card.description;
  imgContainerEL.appendChild(imageEl);
  detailsContainer.appendChild(nameEl);
  detailsContainer.appendChild(descriptionEl);
  document.querySelector(".cards").appendChild(cardEl);
});
