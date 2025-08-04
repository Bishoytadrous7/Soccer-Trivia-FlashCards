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
const categoryColors = {
  Easy: '#fbfbfbff',
  Medium: '#74c774ff',
  Hard: '#3f7935ff'
};
const App = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [started, setStarted] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [shuffledCards, setShuffledCards] = useState(flashcards);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

const cleanText = (text) => {
  return text
    .toLowerCase()
    .trim();
};

  const currentCard = shuffledCards[index];

  const flipCard = () => setIsFlipped(!isFlipped);

  const nextCard = () => {
    if (index < shuffledCards.length - 1) {
    setIndex(index + 1);
    setIsFlipped(false);
    setUserGuess("");
    setFeedback("");
    }
  };

 const prevCard = () => {
  if (index > 0) {
  setIndex(index - 1);
  setIsFlipped(false);
  setUserGuess("");
  setFeedback("");
  }
};
const shuffleCards = () => {
  const newOrder = [...shuffledCards];
  for (let i = newOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
  }
  setShuffledCards(newOrder);
  setIndex(0);
  setIsFlipped(false);
  setUserGuess('');
  setFeedback('');
};
const markAsMastered = () => {
  const updatedCards = [...shuffledCards];
  const masteredCard = updatedCards.splice(index, 1)[0];

  setMasteredCards([...masteredCards, masteredCard]);
  setShuffledCards(updatedCards);

  if (updatedCards.length === 0) {
    setIndex(0);
  } else if (index >= updatedCards.length) {
    setIndex(updatedCards.length - 1);
  }

  setIsFlipped(false);
  setUserGuess('');
  setFeedback('');
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
      <p>Card {index + 1} of {shuffledCards.length}</p>
      <p>🔥 Current Streak: {currentStreak} | 🏆 Longest Streak: {longestStreak}</p>
      <p className="category-label" style={{ color: categoryColors[currentCard.category] }}>
        Difficulty: {currentCard.category}
      </p>
      <div
        className={`flip-card ${currentCard.category.toLowerCase()}`}
        onClick={() => {
        if (isFlipped) flipCard(); 
        }}

      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front"
            style={{ backgroundColor: categoryColors[currentCard.category] }}>
            
            {currentCard.image && <img src={currentCard.image} alt="Hint" className="card-img" />}
            <p>{currentCard.question}</p>
            {!isFlipped && (
              <div className ="guess-form">
                <input 
                type = "text"
                value = {userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Enter your guess"
                className="guess-input"
                />
                <button 
             onClick={() => {
              const guess = cleanText(userGuess);
              const correct = cleanText(currentCard.answer);
              if (guess.includes(correct) || correct.includes(guess)) {
                setFeedback("✅ Correct!");
                setIsFlipped(true);
                const newStreak = currentStreak + 1;
                setCurrentStreak(newStreak);
                if (newStreak > longestStreak) {
                  setLongestStreak(newStreak);
                }
              } else {
                setFeedback("❌ Incorrect, try again!");
                setCurrentStreak(0);
              }
            }}
            className="submit-btn">Submit</button>
            <p className ="feedback"> {feedback} </p>
            </div>
            )}
          </div>
          <div className="flip-card-back" >
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={prevCard} disabled = {index ==0}>← Previous</button>
        <button onClick={nextCard} disabled = {index == shuffledCards.length - 1}>Next →</button>
        <button onClick={shuffleCards}>🔀 Shuffle</button>
        <button onClick={markAsMastered} className="master-btn">✅ Mark as Mastered </button>
      </div>
    </div>
  );
};
export default App;
