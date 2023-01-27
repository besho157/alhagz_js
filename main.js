// const onecard = document.getElementsByClassName("onecard")[0];
// onecard.onclick = function () {
//   onecard.classList.add("active");
//   const nextSibling = onecard.nextElementSibling;
//   nextSibling.classList.remove("active");
// };

const cards = document.getElementById("cards");
const divs = cards.getElementsByTagName("div");

function orderAndShapeCards(activeCardIndex) {

  [...divs].forEach((div, index) => {

    div.classList = "";
    
    let leftElementIndex = (activeCardIndex + 3) % 4;
    let rightElementIndex = (activeCardIndex + 1) % 4;
    let smallElementIndex = (activeCardIndex + 2) % 4;

    if (index === activeCardIndex) {
      div.classList.add("active-card");
    }
    if (index === leftElementIndex) {
      div.classList.add("mid-left");
    }
    if (index === rightElementIndex) {
      div.classList.add("mid-right");
    }
    if (index === smallElementIndex) {
      div.classList.add("small");
    }
  });

}

orderAndShapeCards(1)