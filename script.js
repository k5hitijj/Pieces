const proverbElement = document.getElementById('proverb');

const fetchProverb = async () => {
  try {
    const response = await fetch('https://api.example.com/proverbs'); // Replace with your actual API
    const data = await response.json();
    proverbElement.textContent = data.proverb; 
  } catch (error) {
    console.error("Couldn't fetch proverb:", error);
    proverbElement.textContent = 'Error fetching proverb. Please try again later.';
  }
};

fetchProverb(); 
