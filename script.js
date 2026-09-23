const videos = document.querySelectorAll('.video');

videos.forEach((video) => {
  // Play video on hover
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  // Pause and reset video when cursor leaves
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});