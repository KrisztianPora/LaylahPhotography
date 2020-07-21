const popup = document.querySelector(".popup");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    popup.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    original.src = `./previews/medium/${originalSrc}`;
  });
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    popup.classList.remove("open");
    original.classList.remove("open");
  }
});
