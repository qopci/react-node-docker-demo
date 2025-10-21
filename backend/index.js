const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());

// Array of fun messages
const messages = [
  "🚀 Keep reaching for the stars!",
  "😎 Cool message incoming!",
  "🎯 You hit the target!",
  "💡 Fun fact: Honey never spoils!",
  "🔥 React + Node is lit!",
  "🐱 Fun fact: Cats sleep 70% of their lives!",
  "🎉 Surprise! Here's a random message!",
  "🌈 Life is colorful, just like this card!",
  "🍕 Pizza is scientifically proven to make you happy!",
  "🐶 Did you know dogs can learn over 1000 words?",
  "💤 Take a break, you deserve it!",
  "🌟 Shine bright, superstar!",
  "🎵 Music is the universal language of the soul!",
  "☕ Coffee: the fuel of developers everywhere!",
  "🍀 Good luck is on your side today!",
  "📚 Knowledge is power, keep learning!",
  "🛸 Believe in aliens, just in case!",
  "🎨 Creativity is intelligence having fun!",
  "⚡ Quick tip: Stay hydrated!",
  "🍫 Chocolate fixes almost everything!"
];

app.get("/messages", (req, res) => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  res.json({ message: randomMessage });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
