const pics = [
  'url("https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp")',
  'url("https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png")',
];

function getRandomPicture() {
  const randomIndex = Math.floor(Math.random() * pics.length);
  return pics[randomIndex];
}

const containerDivs = document.querySelector(".container-body");
const containerReset = Array.from(
  document.querySelector(".container-footer").children
);

const divContainerAllElements = Array.from(containerDivs.children);

let count = 0,
  shipcount = 0;
// reset function
const resetSetup=()=>{ divContainerAllElements.forEach((e) => {
  e.style.backgroundImage = "";
 
});
count = 0;
shipcount = 0;
}
divContainerAllElements.forEach((divElem) => {
 
  divElem.addEventListener("click", () => {
   
    const img=getRandomPicture();
    if (!divElem.style.backgroundImage) {
      divElem.style.backgroundImage =img; 
      if (img === pics[1]) shipcount++;
      divElem.style.backgroundSize = "cover";
      
      count++;
    }
    if (shipcount === 5) {
      alert("You win the game");
      resetSetup();
    }
    if (count >= 8) {
      alert("You have lose the game");
      resetSetup();
    }
   
  });
 
  //}
});

// we have to work on reset button  and make count to 0.
  containerReset[0].addEventListener("click", () => {
  resetSetup();
});
