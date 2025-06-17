import './App.css';
import {useState} from 'react';

const flashcards = [
  {
    question: "Who won the 2022 FIFA World Cup?",
    answer: "Argentina",
    image: "",
    category: "Easy"
  },
  {
    question: "Which club has the most Champions League titles?",
    answer: "Real Madrid",
    image: "",
    category: "Easy"
  },
 
  {
    question: "Which country hosted the 2018 FIFA World Cup?",
    answer: "Russia",
    image: "/world.png",
    category: "Easy"
  },
  {
    question: "Who is known as 'The Egyptian King' in the Premier League?",
    answer: "Mohamed Salah",
    image: "",
    category: "Easy"
  },
  {
    question: "What club has Lionel Messi spent most of his career at?",
    answer: "Barcelona",
    image: "",
    category: "Easy"
  },
  
  {
    question: "Which nation has never missed a World Cup since 1930?",
    answer: "Brazil",
    image: "",
    category: "Medium"
  },
  {
    question: "Who was the top scorer in the 2014 World Cup?",
    answer: "James Rodríguez",
    image: "/columbia.png",
    category: "Medium"
  },
  {
    question: "Which country won Euro 2004 in a major upset?",
    answer: "Greece",
    image: "",
    category: "Medium"
  },
 
  {
    question: "Which goalkeeper has the most clean sheets in Premier League history?",
    answer: "Petr Cech",
    image: "",
    category: "Hard"
  },
   {
    question: "What year was the first FIFA World Cup held?",
    answer: "1930",
    image: "",
    category: "Hard"
  },
  {
    question: "Where was the first FIFA World Cup held?",
    answer: "Uruguay",
    image: "",
    category: "Hard"
  }
];
const App = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [started, setStarted] = useState(false);

  const currentCard = flashcards[index];

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setIsFlipped(false);
  };

 const prevCard = () => {
  if (index > 0) {
    setIndex(index - 1);
  } else {
    setIndex(flashcards.length - 1); 
  }
  setIsFlipped(false);
};

  if (!started) {
    return (
      <div className="App">
        <h1>⚽ Soccer Trivia</h1>
        <button className="start-btn" onClick={() => setStarted(true)}>Start</button>
      </div>
    );
  }
   return (
    <div className="App">
      <h1>⚽ Soccer Trivia</h1>
      <p>Flip the card to test your soccer knowledge!</p>
      <p>Card {index + 1} of {flashcards.length}</p>

     <div className={`flip-card ${currentCard.category}`} onClick={flipCard}>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            {currentCard.image && <img src={currentCard.image} alt="Hint" className="card-img" />}
            <p>{currentCard.question}</p>
          </div>
          <div className="flip-card-back">
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={prevCard}>← Previous</button>
        <button onClick={nextCard}>Next →</button>
      </div>
    </div>
  );
};
export default App;
