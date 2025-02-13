const proverbElement = document.getElementById('proverb');

const fetchProverb = async () => {
  try {
    const response = await fetch('https://api-ninjas.com/api/quotes?category=proverb', { 
      headers: { 'X-Api-Key': 'YOUR_API_KEY' } // Replace with your actual API key
    });
    const data = await response.json();
    // Assuming the API returns an array of quotes:
    proverbElement.textContent = data[0].quote; 
  } catch (error) {
    console.error("Couldn't fetch proverb:", error);
    proverbElement.textContent = 'Error fetching proverb. Please try again later.';
  }
};

fetchProverb(); 
