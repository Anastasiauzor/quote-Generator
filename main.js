//Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [
  {
    "quote": "Being angry never solves anything.",
    "author": "Catherine Pulsifer"
  },
  {
    "quote": "Get busy living or get busy dying.",
    "author": "Stephen King",

  },

  {
    "quote": "Fortune favours the brave.",
    "author": "Virgil"
  },
  {
    "quote": "If life were predictable it would cease to be life, and be without flavor.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
    "author": "Ernest Hemingway",

  },
  {
    "quote": "I've gotten more out of alcohol than alcohol has taken out of me.",
    "author": "Winston Churchill",

  },
  {
    "quote": "Nature takes away any faculty that is not used.",
    "author": "William R. Inge"
  },
  {
    "quote": "Be kind whenever possible. It is always possible.",
    "author": "Dalai Lama"
  },
  {
    "quote": "Genius is patience.",
    "author": "Isaac Newton"
  },
  {
    "quote": "Think how hard physics would be if particles could think.",
    "author": "Murray Gell-Mann"
  }

];
btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
})
