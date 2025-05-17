function explodeHeart() {
  const pieces = document.querySelectorAll('.heart-piece');
  const sound = document.getElementById('boomSound');

  // Play explosion sound
  sound.currentTime = 0;
  sound.play();

  // Apply random directions and animate pieces
  pieces.forEach(piece => {
    const angle = Math.random() * 2 * Math.PI;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    piece.style.setProperty('--x', x.toFixed(2));
    piece.style.setProperty('--y', y.toFixed(2));
    piece.classList.add('explode');
  });

  // Reset after 10 seconds
  setTimeout(() => {
    pieces.forEach(piece => {
      piece.classList.remove('explode');
      piece.style.transform = 'rotate(-45deg)';
      piece.style.opacity = '1';
    });
  }, 10000);
}
