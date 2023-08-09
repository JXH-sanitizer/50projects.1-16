document.addEventListener('click',function(event) {
  let audioTag = event.target.childNodes[1];
  const audios = document.querySelectorAll('audio');
  for (let i of audios) {
    i.load();
  };
  // audioTag.controls = true;
  audioTag.play();
})