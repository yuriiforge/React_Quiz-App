import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import { calculateQuizStats } from "../utils/calculateQuizStats";
import AnswerItem from "./AnswerItem";

const Summary = ({ userAnswers }) => {
  const { skippedShare, correctShare, wrongShare } = calculateQuizStats(
    userAnswers,
    QUESTIONS
  );

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => (
          <AnswerItem
            key={index}
            index={index}
            question={QUESTIONS[index]}
            answer={answer}
          />
        ))}
      </ol>
    </div>
  );
};

export default Summary;
