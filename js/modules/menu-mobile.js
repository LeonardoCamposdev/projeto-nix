import outsideClick from "./outside-click.js";
export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const navMenu = document.querySelector('[data-menu="list"]');
  const events = ["click", "touch"];

  function openCloseMenu() {
    navMenu.classList.add("active");
    menuBtn.classList.add("active");

    outsideClick(navMenu, events, () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  }

  menuBtn.addEventListener("click", openCloseMenu);
}
