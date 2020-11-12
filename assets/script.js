var item = document.querySelector(".squares");

window.addEventListener("wheel", function (e) {
  document;
  if (e.deltaY > 0) item.scrollLeft = item.scrollLeft + 100;
  else item.scrollLeft -= 100;
});
