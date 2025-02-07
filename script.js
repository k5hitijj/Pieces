const facts = [
    "A group of owls is called a parliament!",
    "The 'Half Dome' in Yosemite is only a quarter of the rock formation.",
    "Over 300 animal types live in Yellowstone.",
    "The Grand Canyon isn't the world's deepest canyon.", 
    "Mount Everest is tallest from sea level, but Mauna Kea is taller from its base.",
    "The Grand Canyon's layers show millions of years of geology!"
  ];
  
  const factDisplay = document.getElementById('fact-display');
  const generateBtn = document.getElementById('generate-btn');
  
  generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
  });
  