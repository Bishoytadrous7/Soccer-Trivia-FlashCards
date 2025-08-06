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
  },
  {
    question: "Who won the 2010 FIFA World Cup?",
    answer: "Spain",
    image: "",
    category: "Easy"
  },
  {
    question: "Which country has won the most African Cup of Nations titles?",
    answer: "Egypt",
    image: "",
    category: "Medium"
  },
  {
    question: "Who scored the 'Hand of God' goal?",
    answer: "Diego Maradona",
    image: "",
    category: "Easy"
  },
  {
    question: "Which club did Cristiano Ronaldo join in 2018?",
    answer: "Juventus",
    image: "",
    category: "Easy"
  },
  {
    question: "Which country won the 1998 FIFA World Cup?",
    answer: "France",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the all-time top scorer in the UEFA Champions League?",
    answer: "Cristiano Ronaldo",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country hosted the 2002 FIFA World Cup?",
    answer: "South Korea and Japan",
    image: "",
    category: "Medium"
  },
  {
    question: "Who won the Ballon d'Or in 2021?",
    answer: "Lionel Messi",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country has won the most Copa America titles?",
    answer: "Uruguay",
    image: "",
    category: "Hard"
  },
  {
    question: "Who is the youngest player to score in a World Cup final?",
    answer: "Pelé",
    image: "",
    category: "Hard"
  },
  {
    question: "Which club has the most Premier League titles?",
    answer: "Manchester United",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the Golden Boot at the 2018 FIFA World Cup?",
    answer: "Harry Kane",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the first ever European Championship (Euro)?",
    answer: "Soviet Union",
    image: "",
    category: "Hard"
  },
  {
    question: "Who is the only goalkeeper to have won the Ballon d'Or?",
    answer: "Lev Yashin",
    image: "",
    category: "Hard"
  },
  {
    question: "Which player has the most assists in Premier League history?",
    answer: "Ryan Giggs",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 2006 FIFA World Cup?",
    answer: "Italy",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the all-time top scorer for the French national team?",
    answer: "Olivier Giroud",
    image: "",
    category: "Medium"
  },
  {
    question: "Which club is known as 'The Old Lady'?",
    answer: "Juventus",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the UEFA Euro 2016?",
    answer: "Portugal",
    image: "",
    category: "Easy"
  },
  {
    question: "Which African player won the Premier League Golden Boot in 2019?",
    answer: "Pierre-Emerick Aubameyang",
    image: "",
    category: "Medium"
  },
  {
    question: "Who scored the fastest goal in World Cup history?",
    answer: "Hakan Şükür",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country has appeared in three World Cup finals but never won?",
    answer: "Netherlands",
    image: "",
    category: "Medium"
  },
  {
    question: "Who is the only player to win the Champions League with three different clubs?",
    answer: "Clarence Seedorf",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country won the Women's World Cup in 2019?",
    answer: "United States",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the youngest player to play in a World Cup?",
    answer: "Norman Whiteside",
    image: "",
    category: "Hard"
  },
  {
    question: "Which club has the most Bundesliga titles?",
    answer: "Bayern Munich",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the Golden Glove at the 2014 FIFA World Cup?",
    answer: "Manuel Neuer",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 1992 UEFA European Championship?",
    answer: "Denmark",
    image: "",
    category: "Hard"
  },
  {
    question: "Who is the only player to score a hat-trick in a World Cup final?",
    answer: "Geoff Hurst",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country has the most Olympic gold medals in football?",
    answer: "Hungary",
    image: "",
    category: "Medium"
  },
  {
    question: "Who is the all-time top scorer in the Champions League?",
    answer: "Cristiano Ronaldo",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country has won the most Copa América titles?",
    answer: "Uruguay",
    image: "",
    category: "Medium"
  },
  {
    question: "Which team did Zinedine Zidane headbutt a player against in the 2006 World Cup Final?",
    answer: "Italy",
    image: "",
    category: "Medium"
  },
  {
    question: "Which Premier League club is nicknamed 'The Gunners'?",
    answer: "Arsenal",
    image: "",
    category: "Easy"
  },
  {
    question: "What is the name of the French player who won the Ballon d'Or in 1998?",
    answer: "Zinedine Zidane",
    image: "",
    category: "Medium"
  },
  {
    question: "Which club does Erling Haaland play for as of 2025?",
    answer: "Manchester City",
    image: "",
    category: "Easy"
  },
  {
    question: "Which African country reached the semi-finals of the 2022 World Cup?",
    answer: "Morocco",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country has won the most World Cups?",
    answer: "Brazil",
    image: "",
    category: "Easy"
  },
  {
    question: "Which country won the 1998 World Cup?",
    answer: "France",
    image: "",
    category: "Easy"
  },
  {
    question: "Which country has hosted the World Cup the most times?",
    answer: "Mexico",
    image: "",
    category: "Medium"
  },
  {
    question: "What club is known for its yellow wall fans?",
    answer: "Borussia Dortmund",
    image: "",
    category: "Medium"
  },
  {
    question: "Who was the youngest player to score in a World Cup?",
    answer: "Pelé",
    image: "",
    category: "Hard"
  },
  {
    question: "Which stadium is home to Manchester United?",
    answer: "Old Trafford",
    image: "",
    category: "Easy"
  },
  {
    question: "Which nation did David Beckham captain?",
    answer: "England",
    image: "",
    category: "Easy"
  },
  {
    question: "What was the score in the 2014 World Cup semi-final between Brazil and Germany?",
    answer: "7-1",
    image: "",
    category: "Medium"
  },
  {
    question: "Which Italian club has black and white stripes?",
    answer: "Juventus",
    image: "",
    category: "Easy"
  },
  {
    question: "Which country won the first UEFA Nations League?",
    answer: "Portugal",
    image: "",
    category: "Medium"
  },
  {
    question: "Which manager has won the most Champions League titles?",
    answer: "Carlo Ancelotti",
    image: "",
    category: "Hard"
  },
  {
    question: "Who scored the winning penalty for Italy in Euro 2020?",
    answer: "Jorginho",
    image: "",
    category: "Hard"
  },
  {
    question: "Which club plays at Anfield?",
    answer: "Liverpool",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the youngest Ballon d'Or winner?",
    answer: "Ronaldo Nazario",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country hosted the 2002 World Cup along with Japan?",
    answer: "South Korea",
    image: "",
    category: "Hard"
  },
  {
    question: "Which African player won the Ballon d'Or in 1995?",
    answer: "George Weah",
    image: "",
    category: "Hard"
  },
  {
    question: "What club is known as the 'Red Devils'?",
    answer: "Manchester United",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the all-time top scorer for Barcelona?",
    answer: "Lionel Messi",
    image: "",
    category: "Easy"
  },
  {
    question: "Which MLS team signed Lionel Messi in 2023?",
    answer: "Inter Miami",
    image: "",
    category: "Easy"
  },
  {
    question: "What is the nickname of the Brazilian national team?",
    answer: "Seleção",
    image: "",
    category: "Medium"
  },
  {
    question: "Which national team is known as the 'Three Lions'?",
    answer: "England",
    image: "",
    category: "Easy"
  },
  {
    question: "Which Ballon d'Or winner played for AC Milan and Barcelona?",
    answer: "Ronaldinho",
    image: "",
    category: "Medium"
  },
  {
    question: "Who won the Golden Boot in the 2022 World Cup?",
    answer: "Kylian Mbappé",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country hosted the 1994 World Cup?",
    answer: "USA",
    image: "",
    category: "Medium"
  },
  {
    question: "Which German striker is known as 'Der Bomber'?",
    answer: "Gerd Müller",
    image: "",
    category: "Hard"
  },
  {
    question: "Which African country hosted the 2010 World Cup?",
    answer: "South Africa",
    image: "",
    category: "Medium"
  },
  {
    question: "Which club did Neymar join after Barcelona?",
    answer: "Paris Saint-Germain",
    image: "",
    category: "Easy"
  },
  {
    question: "Who scored the winning goal in the 2010 World Cup final?",
    answer: "Andrés Iniesta",
    image: "",
    category: "Medium"
  },
  {
    question: "Which team did José Mourinho win his first Champions League with?",
    answer: "Porto",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country won the 1986 FIFA World Cup?",
    answer: "Argentina",
    image: "",
    category: "Medium"
  },
  {
    question: "Who is the all-time top scorer for the German national team?",
    answer: "Miroslav Klose",
    image: "",
    category: "Medium"
  },
  {
    question: "Which club is nicknamed 'The Blues'?",
    answer: "Chelsea",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the Ballon d'Or in 2007?",
    answer: "Kaká",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 1970 FIFA World Cup?",
    answer: "Brazil",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the only player to win World Cup, Champions League, and Ballon d'Or in the same year?",
    answer: "Sir Bobby Charlton",
    image: "",
    category: "Hard"
  },
  {
    question: "Which club has the most La Liga titles?",
    answer: "Real Madrid",
    image: "",
    category: "Easy"
  },
  {
    question: "Who scored the most goals in a single World Cup tournament?",
    answer: "Just Fontaine",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country won the 2015 Women's World Cup?",
    answer: "United States",
    image: "",
    category: "Easy"
  },
  {
    question: "Which club is known as 'The Citizens'?",
    answer: "Manchester City",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the Golden Boot at the 2010 FIFA World Cup?",
    answer: "Thomas Müller",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 1982 FIFA World Cup?",
    answer: "Italy",
    image: "",
    category: "Easy"
  },
  {
    question: "Which club has the most Serie A titles?",
    answer: "Juventus",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the youngest player to win the Ballon d'Or?",
    answer: "Ronaldo Nazario",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 2004 Copa America?",
    answer: "Brazil",
    image: "",
    category: "Medium"
  },
  {
    question: "Who scored the fastest hat-trick in Premier League history?",
    answer: "Sadio Mané",
    image: "",
    category: "Hard"
  },
  {
    question: "Which country won the 1966 FIFA World Cup?",
    answer: "England",
    image: "",
    category: "Easy"
  },
  {
    question: "Who is the only player to win the Champions League as both player and manager with the same club?",
    answer: "Pep Guardiola",
    image: "",
    category: "Medium"
  },
  {
    question: "Which club is known as 'The Rossoneri'?",
    answer: "AC Milan",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the Ballon d'Or in 2005?",
    answer: "Ronaldinho",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 1996 UEFA European Championship?",
    answer: "Germany",
    image: "",
    category: "Medium"
  },
  {
    question: "Who is the all-time top scorer for the Italian national team?",
    answer: "Luigi Riva",
    image: "",
    category: "Hard"
  },
  {
    question: "Which club is nicknamed 'The Reds'?",
    answer: "Liverpool",
    image: "",
    category: "Easy"
  },
  {
    question: "Who won the Golden Ball at the 2018 FIFA World Cup?",
    answer: "Luka Modrić",
    image: "",
    category: "Medium"
  },
  {
    question: "Which country won the 2000 UEFA European Championship?",
    answer: "France",
    image: "",
    category: "Easy"
  },
  {
    question: "Which country won the 1978 FIFA World Cup?",
    answer: "Argentina",
    image: "",
    category: "Easy"
  },

];
const categoryColors = {
  Easy: '#e0f7fa',   
  Medium: '#ffd54f',  
  Hard: '#d32f2f'     
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
