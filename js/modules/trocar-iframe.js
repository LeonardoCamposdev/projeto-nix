export default function initTrocarIFrame() {
  const video2 = document.querySelector('[data-projeto="2"]');
  const iframeVideo = document.querySelector('[data-iframe="video"]');

  function handleClick(event) {
    // novo vídeo que você quer carregar
    const novoVideo = 'https://www.youtube.com/embed/RdJBSFpcO4M?start=1';

    // altera o src do iframe
    iframeVideo.setAttribute('src', novoVideo);
  }

  video2.addEventListener('click', handleClick);
}
