const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Static headlines
const headlines = [
  "Discover why this is the best spot in 2025!",
  "Top reasons customers love this business!",
  "How this local gem is making waves in 2025!",
  "Why everyone’s talking about this business now!",
  "Your go-to destination for excellence in 2025!",
  "See why locals rate this place 5 stars in 2025!",
  "What makes this business stand out in your city?",
  "The secret behind this local favorite’s success!",
  "2025's must-visit spot for foodies and shoppers!",
  "How this brand became the talk of the town!",
  "10 reasons why customers trust this business!",
  "This hidden gem is changing the game in 2025!",
  "Why you’ll fall in love with this local hotspot!",
  "Explore what makes this business so unique!",
  "The ultimate destination for your needs in 2025!"
]


// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];

  res.json({
    rating: 4.3,
    reviews: 127,
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`
  });
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];

  res.json({
    headline: randomHeadline
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
