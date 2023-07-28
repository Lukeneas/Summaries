const active = "active";

function initOpenDl() {
  const h2 = document.querySelectorAll("h2");

  if (h2) {
    function openDl(e) {
      const h = e.target;
      const hSon = h.nextElementSibling;
      hSon.classList.toggle(active);
      h.classList.toggle(active);
    }

    h2.forEach((h) => {
      h.addEventListener("click", openDl);
    });
  }
}
initOpenDl();

function initOpenContent() {
  const h1 = document.querySelectorAll("h1");

  function openContent(e) {
    e.target.parentElement.classList.toggle(active);
  }

  h1.forEach((h) => {
    h.addEventListener("click", openContent);
  });
}
initOpenContent();
