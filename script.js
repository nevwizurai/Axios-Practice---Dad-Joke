const button = document.querySelector('#buttonJoke');
button.addEventListener('click', () => {
    getDadJoke();
})

const getDadJoke = async () => {
    const headers = { headers: { Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.com/", headers);
    alert(res.data.joke);
}

