window.onload = function() {
  const cap = document.querySelector('.cap');
  const box = document.querySelector('.box');
  let start = 0;
  const end = 100;
  const timeInterval = setInterval(function() {
    start++;
    cap.textContent = start + '%';
    if (start == 100) {
      clearInterval(timeInterval);
    }
  },50);
  cap.style.opacity = 0;
  box.style.filter = 'blur(0px)';
}