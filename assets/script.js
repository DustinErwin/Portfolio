const myPic = document.querySelector(".img-me-pix");
const projects = document.querySelector("#skills");
const tools = document.querySelector("#tools");
let imgLoaded = false;
let blinker = setInterval(blink, 7000);

function blink() {
  myPic.setAttribute("src", "./assets/images/dustinBlink.png");
  setTimeout(function () {
    myPic.setAttribute("src", "./assets/images/dustinOpen.png");
  }, 300);
}

blink();

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
function moveElements() {
  if (scrollY >= 400) {
    projects.classList.add("skills");
  }
  if (scrollY >= 800) {
    tools.classList.add("tools");
  }
  console.log(window.scrollY);
}

window.addEventListener("wheel", moveElements);

myPic.addEventListener("click", imgChange);
