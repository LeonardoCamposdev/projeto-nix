export function initAnimacaoScrollLeft() {
  const animacao = document.querySelectorAll('[data-anime="scroll-left"]');
  const animacaoespecial1 = document.querySelectorAll('[data-anime="scroll-left-especial-1"]');
  const animacaoespecial2 = document.querySelectorAll('[data-anime="scroll-left-especial-2"]');

  const windowMetade = window.innerHeight * 0.8;
  function animaScroll() {
    animacao.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });

    animacaoespecial1.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });

    animacaoespecial2.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

export function initAnimacaoScrollRight() {
  const animacao = document.querySelectorAll('[data-anime="scroll-right"]');
  const windowMetade = window.innerHeight * 0.8;
  function animaScroll() {
    animacao.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

export function initAnimacaoScrollUp() {
  const animacao = document.querySelectorAll('[data-anime="scroll-up"]');
  const windowMetade = window.innerHeight * 0.7;
  function animaScroll() {
    animacao.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

export function initAnimacaoScrollDown() {
  const animacao = document.querySelectorAll('[data-anime="scroll-down"]');
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    animacao.forEach((item) => {
      const distanciaTopo = item.getBoundingClientRect().top - windowMetade;
      if (distanciaTopo < 0) {
        item.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
