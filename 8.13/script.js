const numbers = document.querySelectorAll('.number')

const tweetTarget = 11819;
const youtubeTarget = 9135;
const facebookTarget = 12457;
const targets = [tweetTarget, youtubeTarget, facebookTarget]
const changeTime = 3000;
// console.log(parseInt(twitterNum.innerHTML) + 1);
numbers.forEach((number, index) => {
  console.log(number.textContent)
  const interval = setInterval(function () {
    number.textContent = parseInt(number.textContent) + 8 * Math.round(targets[index] / changeTime);
    if (parseInt(number.textContent) >= targets[index]) {
      number.textContent = targets[index];
      clearInterval(interval);
    }
  }, 8);
})