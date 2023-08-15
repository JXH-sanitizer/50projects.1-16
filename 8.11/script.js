const choicesArea = document.querySelector('textarea');
const choiceDiv = document.querySelector('.choice');
choicesArea.addEventListener('input', function (event) {
  let inputText = choicesArea.value.trim();
  choiceDiv.innerHTML = '';
  let inputArray = inputText.split(',');
  for (let i of inputArray) {
    if (i !== '') {
      const choiceText = i.trim();
      const node = document.createElement('span');
      node.textContent = choiceText;
      choiceDiv.append(node);
    }
  };
})
choicesArea.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
      let interval = setInterval(function () {
        choicesArea.blur();
        const num = document.getElementsByTagName('span');
        const random = Math.floor(Math.random() * (num.length + 1));
        for (let index = 0; index < num.length; index++) {
          if (index == random) {
            choiceDiv.children[index].classList.add('active')
          } else {
            choiceDiv.children[index].classList.remove('active')
          }
        }
      }, 20)
      setTimeout(function() {
        clearTimeout(interval);
      },3000)
  }
})