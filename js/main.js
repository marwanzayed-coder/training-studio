let divider = document.getElementById("divider"),
  ulEle = document.querySelector(".links .link ul");

divider.addEventListener("click", () => {
  divider.classList.toggle("open");
  if (divider.classList.contains("open")) {
    ulEle.style.display = "flex";
  } else {
    let matchMedia = window.matchMedia("(max-width: 992px)");
    if (matchMedia.matches) {
      ulEle.style.display = "none";
    } else {
      ulEle.style.display = "flex";
    }
  }
});
