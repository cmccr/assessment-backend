module.exports = {
    getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
                     "Cool shirt!",
                     "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
},

    getFortune: (req, res) => {
        const fortunes = ["A feather in the hand is better than a bird in the air.",
        "A lifetime friend shall soon be made.",
        "Do not make extra work for yourself.",
        "A hunch is creativity trying to tell you something.",
        "Chance favors those in motion.",
     ];

     let randomIndex = Math.floor(Math.random() * fortunes.length);
     let randomFortune = fortunes[randomIndex];

     res.status(200).send(randomFortune);
    },
}