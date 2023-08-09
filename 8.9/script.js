const jokeContent = document.querySelector('.jokes');
const changeBtn = document.querySelector('.change');

changeBtn.addEventListener('click', fetchJokes);

async function fetchJokes() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    const response = await fetch('https://icanhazdadjoke.com',config);
    const joke = await response.json();
    const content = joke['joke'];
    jokeContent.innerHTML = content;
  };