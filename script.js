function explodeHeart() {
  const heart = document.getElementById("heart");
  heart.classList.add("explode");

  setTimeout(() => {
    heart.style.display = "none";
  }, 500);

  setTimeout(() => {
    heart.classList.remove("explode");
    heart.style.display = "block";
  }, 10000);
}
