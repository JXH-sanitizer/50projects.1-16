const searchActiveBtn = document.getElementById('search-active');
const searchCalmBtn = document.getElementById('search-calm');
const searchBar = document.getElementById('bar');
const input = document.getElementById('input');

searchActiveBtn.onclick = function() {
  searchBar.style.width = '300px';
  searchActiveBtn.style.zIndex = 0;
  searchCalmBtn.style.zIndex = 1;
};
searchCalmBtn.onclick = function () {
  searchBar.style.width = '50px';
  searchActiveBtn.style.zIndex = 1;
  searchCalmBtn.style.zIndex = 0;
};
