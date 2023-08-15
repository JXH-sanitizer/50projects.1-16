const glasses = document.querySelectorAll('.glass');
for (let index = 0; index < glasses.length; index++) {
  glasses[index].addEventListener('click',function() {
    let lastBottleIndex = index;
    if (glasses[lastBottleIndex].classList.contains('active') && !glasses[lastBottleIndex].nextElementSibling.classList.contains('active')) {
      glasses[lastBottleIndex].classList.remove('active')
    } else {
      glasses[lastBottleIndex].classList.add('active')
    }
    for (let i = 0; i < glasses.length; i++) {
      if (i < lastBottleIndex) {
        glasses[i].classList.add('active')
      } else if (i > lastBottleIndex){
        glasses[i].classList.remove('active')
      }
    }
    const activeBottlesNum = document.querySelectorAll('.active').length;
    console.log(document.querySelectorAll('.active'));
    const haveDrunkText = document.querySelector('.box .bottle .full h4');
    const haveDrunk = document.querySelector('.box .bottle .full');
    requestAnimationFrame(function () {
      haveDrunkText.textContent = 100 * activeBottlesNum / 8 + '%';
      haveDrunk.style.height = 440 * activeBottlesNum / 8 + 'px';
    });
    const empty = document.querySelector('.bottle .empty');
    empty.style.top = 440 / 2 - 55 * activeBottlesNum /2 + 'px';
    const emptyText = document.querySelector('.bottle .empty h4');
    emptyText.textContent = (2 - activeBottlesNum * 0.25) + 'L';
  })
}