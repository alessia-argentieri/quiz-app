export type Question = {
  question: string;
  choices: string[];
  answer: number;
};

export const data: Record<string, Question[]> = {
  questions: [
    {
      question:
        "What is the name of the main antagonist in the Shakespeare play Othello?",
      choices: ["Cassio", "King Claudius", "Iago", "Mercutio"],
      answer: 2,
    },
    {
      question:
        "What element is denoted by the chemical symbol Sn in the periodic table?",
      choices: ["Selenium", "Tin", "Scandium", "Titanium"],
      answer: 1,
    },
    {
      question: "What is the hottest planet in our solar system?",
      choices: ["Venus", "Mercury", "Mars", "Jupiter"],
      answer: 0,
    },
    {
      question:
        "Which surrealist artist is famous for painting melting clocks?",
      choices: [
        "Salvador Dalí",
        "Edgar Degas",
        "Amedeo Modigliani",
        "René Magritte",
      ],
      answer: 0,
    },
    {
      question: "Where is the video game Bioshock set?",
      choices: [
        "Southern California",
        "Night City",
        "New Austin and West Elizabeth",
        "Rapture",
      ],
      answer: 3,
    },
    {
      question:
        "Which two football national teams have won the Euro most times?",
      choices: [
        "Italy and Spain",
        "Germany and Spain",
        "France and Spain",
        "Germany and France",
      ],
      answer: 1,
    },
    {
      question: "Which of the following countries do not border Hungary?",
      choices: [
        "Slovakia and Ukraine",
        "Cratia and Serbia",
        "Bosnia and Czech Republich",
        "Austria and Slovenia",
      ],
      answer: 2,
    },
    {
      question: "When was the Magna Carta issued?",
      choices: ["1155", "1065", "1345", "1215"],
      answer: 3,
    },
    {
      question: "What is the largest bird in the world by wingspan?",
      choices: ["Albatross", "Eagle", "Falcon", "Flamingo"],
      answer: 0,
    },
    {
      question: "What is the Sun mostly made of?",
      choices: [
        "Hydrogen (about 70%) and nitrogen (about 28%)",
        "Helium (about 70%) and neon (about 28%)",
        "Hydrogen (about 70%) and helium (about 28%)",
        "Nitrogen (about 70%) and oxygen (about 28%)",
      ],
      answer: 2,
    },
  ],
};
