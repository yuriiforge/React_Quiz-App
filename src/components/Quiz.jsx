import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import { shuffleArray } from "../utils/shuffleArray";
import quizCompleteImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import { TIMER_DURATION } from "../constants/timers";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [selectedAnswer, ...prevUserAnswers];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledArray = shuffleArray(QUESTIONS[activeQuestionIndex].answers);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={TIMER_DURATION}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledArray.map((ans) => (
            <li key={ans} className="answer">
              <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
