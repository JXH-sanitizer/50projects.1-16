const closeBtn = document.querySelector('button');
const allLi = document.querySelectorAll('li');
const ulist = document.querySelector('ul');
const box = document.querySelector('.box');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2')

closeBtn.addEventListener('click', function () {
  if (closeBtn.classList.contains('to-close')) {
    box.style.width = '80px';
    ulist.classList.add('ul-close');
    line1.style.transform = 'translateY(-5px) rotate(-810deg)';
    line2.style.transform = 'translate(0) translateY(-20px) rotate(990deg)';
    for (let index = 0; index < allLi.length; index++) {
      allLi[index].classList.add('li-close');
    };
    closeBtn.classList.remove('to-close');
  } else {
    box.style.width = '387px';
    ulist.classList.remove('ul-close');
    line1.style.transform = 'translate(10px) rotate(45deg)';
    line2.style.transform = 'translate(10px) translateY(-25px) rotate(-45deg)';
    for (let index = 0; index < allLi.length; index++) {
      allLi[index].classList.remove('li-close');
    };
    closeBtn.classList.add('to-close');
  }
})