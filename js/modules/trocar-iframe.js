export function initTrocarIframe1() {
  const video1 = document.querySelector('[data-projeto="1"]');
  const video2 = document.querySelector('[data-projeto="2"]');
  const video3 = document.querySelector('[data-projeto="3"]');
  const video4 = document.querySelector('[data-projeto="4"]');
  video1.classList.add("ativo-teste");

  const iframeVideo = document.querySelector('[data-iframe="video"]');
  const spanTitulo = document.querySelector(".spanTitulo-projeto");
  const spanDescricao = document.querySelector(".spanDescricao-projeto");

  function handleClick() {
    const novoVideo = "https://www.youtube.com/embed/JynGuQx4a1Y?start=3";
    iframeVideo.setAttribute("src", novoVideo);
    video1.classList.add("ativo-teste");
    video2.classList.remove("ativo-teste");
    video3.classList.remove("ativo-teste");
    video4.classList.remove("ativo-teste");

    spanTitulo.innerText = "Projeto Um";
    spanDescricao.innerText = "SEO e Marketing";
  }

  video1.addEventListener("click", handleClick);
}

export function initTrocarIframe2() {
  const video1 = document.querySelector('[data-projeto="1"]');
  const video2 = document.querySelector('[data-projeto="2"]');
  const video3 = document.querySelector('[data-projeto="3"]');
  const video4 = document.querySelector('[data-projeto="4"]');

  const iframeVideo = document.querySelector('[data-iframe="video"]');
  const spanTitulo = document.querySelector(".spanTitulo-projeto");
  const spanDescricao = document.querySelector(".spanDescricao-projeto");

  function handleClick() {
    const novoVideo = "https://www.youtube.com/embed/RdJBSFpcO4M?start=1";
    iframeVideo.setAttribute("src", novoVideo);
    video1.classList.remove("ativo-teste");
    video2.classList.add("ativo-teste");
    video3.classList.remove("ativo-teste");
    video4.classList.remove("ativo-teste");

    spanTitulo.innerText = "Projeto Dois";
    spanDescricao.innerText = "Publicidade e Marketing";
  }

  video2.addEventListener("click", handleClick);
}

export function initTrocarIframe3() {
  const video1 = document.querySelector('[data-projeto="1"]');
  const video2 = document.querySelector('[data-projeto="2"]');
  const video3 = document.querySelector('[data-projeto="3"]');
  const video4 = document.querySelector('[data-projeto="4"]');

  const iframeVideo = document.querySelector('[data-iframe="video"]');
  const spanTitulo = document.querySelector(".spanTitulo-projeto");
  const spanDescricao = document.querySelector(".spanDescricao-projeto");

  function handleClick() {
    // novo vídeo que você quer carregar
    const novoVideo = "https://www.youtube.com/embed/ZlfAjbQiL78?start=11";
    iframeVideo.setAttribute("src", novoVideo);
    video1.classList.remove("ativo-teste");
    video2.classList.remove("ativo-teste");
    video3.classList.add("ativo-teste");
    video4.classList.remove("ativo-teste");

    spanTitulo.innerText = "Projeto Três";
    spanDescricao.innerText = "Marketing Digital";
  }

  video3.addEventListener("click", handleClick);
}

export function initTrocarIframe4() {
  const video1 = document.querySelector('[data-projeto="1"]');
  const video2 = document.querySelector('[data-projeto="2"]');
  const video3 = document.querySelector('[data-projeto="3"]');
  const video4 = document.querySelector('[data-projeto="4"]');

  const iframeVideo = document.querySelector('[data-iframe="video"]');
  const spanTitulo = document.querySelector(".spanTitulo-projeto");
  const spanDescricao = document.querySelector(".spanDescricao-projeto");

  function handleClick() {
    const novoVideo = "https://www.youtube.com/embed/mx1WseE7-0Y";
    iframeVideo.setAttribute("src", novoVideo);
    video1.classList.remove("ativo-teste");
    video2.classList.remove("ativo-teste");
    video3.classList.remove("ativo-teste");
    video4.classList.add("ativo-teste");

    spanTitulo.innerText = "Projeto Quatro";
    spanDescricao.innerText = "SEO e Publicidade";
  }

  video4.addEventListener("click", handleClick);
}
