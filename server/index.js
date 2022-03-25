const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

app.get("/api/compliment", (req, res) => {
  const fortunes = ["A light heart carries you through all the hard times.", "All your hard work will soon pay off.", "Don’t let your limitations overshadow your talents.", "Have a beautiful day.", "Swimming is easy. Stay floating is hard."];
})

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));


  let randomIndex = Math.floor(Math.random() * fortunes.lenth);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
