const button = document.querySelector('#buttonJoke');
const p = document.querySelector('#jokeDisplay');

button.addEventListener('click', () => {
    getDadJoke();
})

const getDadJoke = async () => {
    const headers = { headers: { Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.com/", headers);
    p.textContent = res.data.joke;
}

