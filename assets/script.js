const myPic = document.querySelector(".img-me-pix");
const projects = document.querySelector("#skills");
const tools = document.querySelector("#tools");
let imgLoaded = false;
let blinker = setInterval(blink, 7000);

//Blinks pixel image eyes
function blink() {
  myPic.setAttribute("src", "./assets/images/dustinBlink.png");
  setTimeout(function () {
    myPic.setAttribute("src", "./assets/images/dustinOpen.png");
  }, 300);
}

blink();

//Changes to real life image on click
function imgChange() {
  if (!imgLoaded) {
    myPic.setAttribute("src", "./assets/images/picMe.png");
    clearInterval(blinker);
    imgLoaded = true;
  } else {
    myPic.setAttribute("src", "./assets/images/dustinOpen.png");
    blinker = setInterval(blink, 7000);
    imgLoaded = false;
  }
}

//Adds elements to page at specific scroll Y level
function moveElements() {
  if (scrollY >= 300) {
    projects.classList.add("move-in");
  }
  if (scrollY >= 700) {
    tools.classList.add("move-in");
  }
  console.log(window.scrollY);
}

window.addEventListener("wheel", moveElements);

myPic.addEventListener("click", imgChange);
