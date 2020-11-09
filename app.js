const jokeContaner = document.getElementById('display-joke');
const newJokeButton = document.getElementById('get-joke');

async function getJoke(url) {
    try {
        const request = await fetch(url);
        const response = await request.json();
        return Promise.all(response.value);
    } catch(error) {
        console.log(error.status);
        jokeContaner.textContent = `Error getting new Jokes, please check your server and try again`;
    }
}

newJokeButton.addEventListener('click', () => {
    getJoke('https://api.chucknorris.io/jokes/random')
    .then(data => jokeContaner.innerHTML = data.join(''));
})
