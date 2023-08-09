const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');

leftDiv.addEventListener('mouseenter',function() {
  leftDiv.classList.add('hover-active');
  rightDiv.classList.add('hover-close')
});
leftDiv.addEventListener('mouseleave', function () {
  leftDiv.classList.remove('hover-active');
  rightDiv.classList.remove('hover-close')
});
rightDiv.addEventListener('mouseenter', function () {
  rightDiv.classList.add('hover-active');
  leftDiv.classList.add('hover-close')
});
rightDiv.addEventListener('mouseleave', function () {
  rightDiv.classList.remove('hover-active');
  leftDiv.classList.remove('hover-close')
});