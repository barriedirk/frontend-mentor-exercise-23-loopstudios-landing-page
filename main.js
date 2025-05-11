const $ = (selector) => document.querySelector(selector);

(async () => {
  const $btnNav = $("#header__nav-button-toggle");
  const $btnNavSpan = $(".header__nav-button span");
  const $btnNavParent = $btnNav.parentNode;

  $btnNav.addEventListener("click", (evt) => {
    evt.preventDefault();

    const isExpanded = $btnNav.getAttribute("aria-expanded") === "true";

    $btnNav.setAttribute("aria-expanded", !isExpanded);
    $btnNavSpan.textContent = isExpanded ? "Close menu" : "Open menu";

    if (isExpanded) {
      document.body.classList.remove("no-scroll-mobile");
      $btnNavParent.classList.remove("is-open");
    } else {
      document.body.classList.add("no-scroll-mobile");
      $btnNavParent.classList.add("is-open");
    }
  });
})();
