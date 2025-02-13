const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The mind is everything. What you think you become. - Buddha",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
];

const proverbElement = document.getElementById('proverb');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  proverbElement.textContent = quotes[randomIndex];
}

getRandomQuote(); // Display a quote on load
