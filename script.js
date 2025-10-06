document.querySelectorAll('.youtube-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const videoId = wrapper.getAttribute('data-video-id');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '315px';
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
}); 