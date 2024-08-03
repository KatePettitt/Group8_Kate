const express = require('express');
const app = express();

// Example data (replace this with a real database)
const pets = [
  { name: 'Arthi\'s Cat', description: 'A playful and curious cat.' },
  { name: 'Kate\'s Guinea Pigs', description: 'Snuggly and hungry pigs.' },
  // Add more pet data as needed
];

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = pets.filter(pet => pet.name.toLowerCase().includes(query));
  res.render('searchResults', { results });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});