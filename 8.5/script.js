window.onload = function () {
  const boxes = document.querySelectorAll('.box');;
  let height = window.scrollY + window.innerHeight;
  let num = parseInt((height - 38) / 222);
  for (let index = 0; index < num; index++) {
    boxes[index].classList.add('active');
  };
  window.onscroll = function () {
    let height = window.scrollY + window.innerHeight;
    let num = parseInt((height-38) / 222);
    for (let index = 0; index < boxes.length; index++) {
      if (index < num) {
        boxes[index].classList.add('active')
      } else {  
        boxes[index].classList.remove('active');
      }
    }
  }
}