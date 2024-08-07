import React, { useState, useEffect } from 'react';
import Garden from './components/Garden';
import QuestionPanel from './components/QuestionPanel';
import RewardAnimation from './components/RewardAnimation';
import questions from './data/questions.json';
import './App.css';

const rewardItems = [
  '🦄', '🌈', '🎀', '🧚', '🦋', '🌺', '🍭', '🎠', '🌟', '🧁',
  '🐱', '🐶', '🦄', '🎈', '🎁', '👑', '🧸', '🪄', '🌻', '🍦',
    '👗', '👠', '🩰', '👒', '👜', '💄', '💍', '🎨', '📚', '🎵',
  '🎤', '🎭', '🌸', '🌼', '💫', '👸', '🧜‍♀️', '🌷', '🎻', '📔',
  '🍒', '🌕', '🏰', '👓', '🕶', '🐞', '🌈', '🍓', '🎠', '🌟',
  '🌿', '🍄', '👽', '👟', '🧶', '🕯', '🛍', '🖼', '🧵', '🛳',
  '🌱', '🏞', '🪁', '🪀', '🧩', '🚀', '🎈', '🎏', '🎀', '🧚'
];

function App() {
  const [score, setScore] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentReward, setCurrentReward] = useState(null);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  const getRandomQuestion = () => {
    return questions[Math.floor(Math.random() * questions.length)];
  };

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    const newReward = rewardItems[Math.floor(Math.random() * rewardItems.length)];
    setCurrentReward(newReward);
    setShowReward(true);
    setTimeout(() => {
      setShowReward(false);
      setCurrentQuestion(getRandomQuestion());
    }, 2000);
  };

  return (
    <div className="enchanted-english-garden">
      <Garden score={score} />
      {currentQuestion && (
        <QuestionPanel 
          question={currentQuestion} 
          onCorrectAnswer={handleCorrectAnswer} 
        />
      )}
      {showReward && <RewardAnimation item={currentReward} />}
    </div>
  );
}

export default App;