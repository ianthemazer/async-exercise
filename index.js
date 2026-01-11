const joke_url = ' https://official-joke-api.appspot.com/random_joke';
const multi_joke_url = ' https://official-joke-api.appspot.com/random_ten';
const general_jokes_url = ' https://official-joke-api.appspot.com/jokes/general/ten';
const prog_jokes_url = ' https://official-joke-api.appspot.com/jokes/programming/ten';
const knock_jokes_url = ' https://official-joke-api.appspot.com/jokes/knock-knock/ten';

// Part 1.1 Random Joke
async function fetchJoke() {
    let response = await fetch(joke_url);
    let data = await response.json();
    console.log(`${data.setup} - ${data.punchline}`);
}

// Part 1.2 Multiple Jokes
async function fetchMultipleJokes() {
    let response = await fetch(multi_joke_url);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        console.log(`${data[i].setup} - ${data[i].punchline}`);
    }
}

// Part 1.3 Jokes by Type
async function fetchJokesByType(jokeType) {
    if (jokeType !== 'general' && jokeType !== 'programming' && jokeType !== 'knock-knock') {
        console.log('Invalid joke type. Please choose from "general", "programming", or "knock-knock".');
        return;
    }
    if (jokeType === 'general') {
        let response = await fetch(general_jokes_url);
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].setup} - ${data[i].punchline}`);
        }
    }
    if (jokeType === 'programming') {
        let response = await fetch(prog_jokes_url);
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].setup} - ${data[i].punchline}`);
        }
    }
    if (jokeType === 'knock-knock') {
        let response = await fetch(knock_jokes_url);
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].setup} - ${data[i].punchline}`);
        }
    }
}

// Part 1.4 Multiple Requests
Promise.all([fetchJoke(), fetchJoke(), fetchJoke(), fetchJoke()])
    .then((results) => {
        return results;
    })
    .catch((error) => {
        console.error('Error fetching jokes:', error);
    });

// Part 1.5 Helper Function
async function getJokes(num) {
    for (let i = 0; i < num; i++) {
        let response = await fetch(joke_url);
        let data = await response.json();
        console.log(`${data.setup} - ${data.punchline}`);
    }
}
getJokes(5);