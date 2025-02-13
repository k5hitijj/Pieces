const proverbElement = document.getElementById('proverb');

const fetchProverb = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random?tags=wisdom'); // Fetching quotes tagged with "wisdom"
    const data = await response.json();
    proverbElement.textContent = data.content; 
  } catch (error) {
    console.error("Couldn't fetch proverb:", error);
    proverbElement.textContent = 'Error fetching proverb. Please try again later.';
  }
};

fetchProverb(); 
