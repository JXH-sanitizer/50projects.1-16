const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const allLi = document.getElementsByTagName('li');
let active = 0;
nextBtn.onclick = function() {
  active++;
  allLi[active].classList.add('active');
  active++;
  allLi[active].classList.add('active');
  if (active == 6) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  };
  if (active == 0) {
    prevBtn.disabled = true
  } else {
    prevBtn.disabled = false;    
  }
}
prevBtn.onclick = function() {
  allLi[active].classList.remove('active');
  active--;
  allLi[active].classList.remove('active');
  active--;
  if (active == 6) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  };
  if (active == 0) {
    prevBtn.disabled = true
  } else {
    prevBtn.disabled = false;
  }
};
