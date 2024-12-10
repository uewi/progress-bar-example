const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  scrollProgress.style.width = `
    ${
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100
    }%`;

  document.querySelector('.numbers').innerText = `
  progress percent: ${scrollProgress.style.width}
  progress width: ${
    (parseInt(scrollProgress.style.width) *
      document.documentElement.clientWidth) /
    100
  }
  client width: ${document.documentElement.clientWidth} 
  scroll height: ${document.documentElement.scrollHeight}
  client height: ${document.documentElement.clientHeight} 
  scroll top: ${document.documentElement.scrollTop}`;
});
