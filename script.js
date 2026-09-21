const roboticsVideo = document.getElementById('robotics-video');

if (roboticsVideo) {
  roboticsVideo.addEventListener('mouseenter', () => {
    roboticsVideo.play();
  });

  roboticsVideo.addEventListener('mouseleave', () => {
    roboticsVideo.pause();
    // Optional: Reset to beginning when leaving
    roboticsVideo.currentTime = 0; 
  });
}