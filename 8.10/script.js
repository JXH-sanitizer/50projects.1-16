const divList = document.querySelectorAll('.faq');
const allBtn = document.querySelectorAll('.trans')
for (let button of allBtn) {
  button.addEventListener('click', changeStyle);
  function changeStyle(event) {
    const parent = event.target.parentNode;
    if (parent.classList.length == 2) {
      parent.classList.remove('active');
      button.innerHTML = ''
    } else {
      parent.classList.add('active');
      button.innerHTML = ''
    }
  }
};