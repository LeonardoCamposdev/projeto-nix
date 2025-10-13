export default function initMenuMobile(){

}

const menuBtn = document.querySelector('[data-menu="button"]');
const navMenu = document.querySelector('[data-menu="list"]');

function openCloseMenu(){
    navMenu.classList.toggle('active');
    this.classList.toggle('active');
}

menuBtn.addEventListener('click', openCloseMenu);