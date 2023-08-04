window.onload = function () {
  const allLi = document.getElementsByTagName("li");
  let active = 0;
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].onclick = function () {
      allLi[i].classList.add("expanding");
      if (active != i) {
        allLi[active].classList.remove("expanding");
        active = i;
      };
    }
  }
}
