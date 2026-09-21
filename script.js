const roboticsVideo = document.getElementById('roboticsVideo');

if (roboticsVideo) {
  // Play video on hover
  roboticsVideo.addEventListener('mouseenter', () => {
    roboticsVideo.play();
  });

  // Pause and reset video when cursor leaves
  roboticsVideo.addEventListener('mouseleave', () => {
    roboticsVideo.pause();
    roboticsVideo.currentTime = 0;
  });
}