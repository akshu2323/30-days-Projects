let joke = document.querySelector('.joke');
let jokeItm = document.querySelector('.btn');
let url = "https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-300";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => joke.innerHTML = (item.joke))
}

jokeItm.addEventListener('onclick', getJoke())

