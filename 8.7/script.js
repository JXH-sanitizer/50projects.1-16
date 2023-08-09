const emailUpper = document.querySelector('.emailUpper');
const passUpper = document.querySelector('.passUpper');
const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#pass');
document.addEventListener('click', function (event) {
  if (event.target.contains(emailInput) && !event.target.contains(passInput)) {
    var spans = document.querySelectorAll('.emailUpper span');
    var notSpans = document.querySelectorAll('.passUpper span');
    var distance = 25;
    var delay = 50; // 定时器间隔
    spans.forEach(function (span, index) {
      setTimeout(function () {
        span.style.transform = 'translateY(-' + (distance) + 'px)';
        span.style.color = 'skyblue';
      }, index * delay);
    });
    if (passInput.value === '') {
      notSpans.forEach(function (span, index) {
        setTimeout(function () {
          span.style.transform = 'translateY(0)';
          span.style.color = 'white';
        }, index * delay);
      });
    }
  } else if (event.target.contains(passInput) && !event.target.contains(emailInput)) {
    var spans = document.querySelectorAll('.passUpper span');
    var notSpans = document.querySelectorAll('.emailUpper span');
    var distance = 25; // 上升的距离
    var delay = 50; // 定时器间隔
    spans.forEach(function (span, index) {
      setTimeout(function () {
        span.style.transform = 'translateY(-' + (distance) + 'px)';
        span.style.color = 'skyblue';
      }, index * delay);
    });
    if (emailInput.value === '') {
      notSpans.forEach(function (span, index) {
        setTimeout(function () {
          span.style.transform = 'translateY(0)';
          span.style.color = 'white';
        }, index * delay);
      });
    }
  } else {
    var spans = document.querySelectorAll('span');
    if (passInput.value === '' && emailInput.value === '') {
      spans.forEach(function (span, index) {
        setTimeout(function () {
          span.style.transform = 'translateY(0)';
        }, index * delay);
      });
    };
  };
})

const btn = document.querySelector('button');
const spans = document.querySelectorAll('span');
btn.click = function() {
  for (let index = 0; index < spans.length; index++) {
    spans[index].style.color = 'white';
  }
}