const cards = document.getElementById("cards");
const divs = cards.getElementsByTagName(`div`);
const cardWidth = 0;
function orderAndShapeCards(activeCardIndex) {
  [...divs].forEach((div, index) => {
    div.classList = "";
    div.style.left = "";

    let leftElementIndex = (activeCardIndex + 3) % 4;
    let rightElementIndex = (activeCardIndex + 1) % 4;
    let smallElementIndex = (activeCardIndex + 2) % 4;

    if (index === activeCardIndex) {
      div.classList.add("active-card");
      div.style.marginLeft = "";
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

orderAndShapeCards(1);

let all_star = document.querySelectorAll(`span`);

all_star.forEach((star , index) => {
  star.addEventListener(`click`,() =>{
    all_star.forEach((newstar ,newindex) => {
      if (newindex <= index ) {
        newstar.classList.add(`active`)
      }
    });
  })
});