const tableBtn = document.getElementById('table');
const cancelBtn = document.getElementById('cancel');
const controller = document.querySelector('.controller');
const box = document.querySelector('.box');
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

tableBtn.onclick = function() {
  box.style.transform = 'rotate(-20deg)';
  controller.style.transform = 'rotate(-90deg)';
  controller.style.position = 'fixed';
  home.style.transform = 'translate(225px)';
  about.style.transform = 'translate(250px)';
  contact.style.transform = 'translate(275px)';
};
cancelBtn.onclick = function () {
  box.style.transform = 'rotate(0)';
  controller.style.transform = 'rotate(0)';
  controller.style.position = 'absolute';
  home.style.transform = 'translate(0)';
  about.style.transform = 'translate(0)';
  contact.style.transform = 'translate(0)';
}