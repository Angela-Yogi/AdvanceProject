import React, { useState } from 'react';

const Quiz = ({ question, correctAnswer }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    setFeedback(answer.trim() === correctAnswer ? "✅ Correct!" : "❌ Try again.");
  };

  return (
    <div className="quiz">
      <h3>{question}</h3>
      <input 
        type="text" 
        value={answer} 
        onChange={e => setAnswer(e.target.value)} 
        placeholder="Your answer"
      />
      <button onClick={checkAnswer}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Quiz;
