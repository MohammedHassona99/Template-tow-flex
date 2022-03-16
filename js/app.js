let scrollBtn = document.querySelector(".scroll-to-top");

window.onscroll = function () {
  this.scrollY >= 500
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
};
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
