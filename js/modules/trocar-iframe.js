export  function initTrocarIframe1() {
  const video1 = document.querySelector('[data-projeto="1"]');
  const iframeVideo = document.querySelector('[data-iframe="video"]');

  function handleClick(event) {

    const novoVideo = 'https://www.youtube.com/embed/JynGuQx4a1Y?start=3';

    iframeVideo.setAttribute('src', novoVideo);
  }

  video1.addEventListener('click', handleClick);
}

export  function initTrocarIframe2() {
  const video2 = document.querySelector('[data-projeto="2"]');
  const iframeVideo = document.querySelector('[data-iframe="video"]');
  const spanTitulo = document.querySelector('.spanTitulo-projeto');
  const spanDescricao = document.querySelector('.spanDescricao-projeto');

  function handleClick() {
    // novo vídeo que você quer carregar
    const novoVideo = 'https://www.youtube.com/embed/RdJBSFpcO4M?start=1';
    spanTitulo.innerText = 'Projeto Dois';
    spanDescricao.innerText = 'Publicidade e Marketing';

      console.log(spanDescricao)
  console.log(spanTitulo)

    iframeVideo.setAttribute('src', novoVideo);
  }

  video2.addEventListener('click', handleClick);
}

export  function initTrocarIframe3() {
  const video3 = document.querySelector('[data-projeto="3"]');
  const iframeVideo = document.querySelector('[data-iframe="video"]');

  function handleClick(event) {
    // novo vídeo que você quer carregar
  const novoVideo = 'https://www.youtube.com/embed/ZlfAjbQiL78?start=11';

    // altera o src do iframe
    iframeVideo.setAttribute('src', novoVideo);
  }

  video3.addEventListener('click', handleClick);
}

export  function initTrocarIframe4() {
  const video4 = document.querySelector('[data-projeto="4"]');
  const iframeVideo = document.querySelector('[data-iframe="video"]');

  function handleClick(event) {
    // novo vídeo que você quer carregar
  const novoVideo = 'https://www.youtube.com/embed/mx1WseE7-0Y';

    // altera o src do iframe
    iframeVideo.setAttribute('src', novoVideo);
  }

  video4.addEventListener('click', handleClick);
}

