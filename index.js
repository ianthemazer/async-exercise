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

// PART TWO
//Part 2.1 New Deck
const deck_url = 'https://deckofcardsapi.com/api/deck/new/';

async function fetchNewDeck() {
    let response = await fetch(deck_url);
    let data = await response.json();
    console.log(`New deck created with ID: ${data.deck_id}`);
    return deckID = data.deck_id;
}

// Part 2.2 Draw a Card
async function drawCard(deckId) {
    let draw_url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    let response = await fetch(draw_url);
    let data = await response.json();
    let card = data.cards[0];
    console.log(`Drew card: ${card.value} of ${card.suit}`);
    return card;
}

// Part 2.3 Draw Multiple Cards
async function drawMultiCards(deckId) {
    let draw_url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`
    let response = await fetch(draw_url);
    let data = await response.json();
    for (let i = 0; i < data.cards.length; i++) {
        console.log(`Drew card: ${data.cards[i].value} of ${data.cards[i].suit}`);
    }
}

// Part 2.4 Shuffle and Re-Draw
async function shuffleDraw2(deckId) {
    let shuffle_url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
    let response = await fetch(shuffle_url);
    let data = await response.json();
    for (let i = 0; i < 2; i++) {
        drawCard(deckId);
    }
}

// Part 2.5 Array of Cards
async function shuffle(deckID) {
    let shuffle_url = `https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`;
    let response = await fetch(shuffle_url);
    let data = await response.json();
}

async function drawRandomCards(deckID, count) {
    let cards = [];
    shuffle(deckID);
    for (let i = 0; i < count; i++) {
        let card = await drawCard(deckID);
        cards.push(card);
    }
    console.log(cards);
}