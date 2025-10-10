// 💖 Floating Hearts
const heartsContainer = document.querySelector('.hearts');
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 400);

// ⏳ Time Counter (with seconds)
const startDate = new Date('2024-10-10T07:15:00');
const timeDisplay = document.getElementById('time');
function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timeDisplay.textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds 💞`;
}
setInterval(updateTime, 1000);
updateTime();


// 🎁 Reveal Final Surprise
const revealBtn = document.getElementById('revealBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

revealBtn.addEventListener('click', () => {
  surpriseMessage.classList.add('show');
  revealBtn.style.display = 'none';

  // Optional: small heart burst
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '💖';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
      document.querySelector('.hearts').appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, i * 150);
  }
});
