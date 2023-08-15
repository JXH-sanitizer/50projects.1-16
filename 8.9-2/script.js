const insertPad = document.querySelector('.insert')
window.addEventListener('keydown',function(event){
  insertPad.innerHTML = 
    '<span class="code">' + event.key + '</span> ' + '<span class="text">event.key</span>' + '<br>'
  + '<span class="code">' + event.keyCode + '</span> ' + '<span class="text">event.keyCode</span>' + '<br>'
  + '<span class="code">' + event.code + '</span> ' + '<span class="text">event.code</span>' + '<br>';
  event.preventDefault();
})