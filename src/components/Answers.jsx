import { useRef } from "react";
import { shuffleArray } from "../utils/shuffleArray";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = shuffleArray(answers);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((ans) => {
        const isSelected = selectedAnswer === ans;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onSelect(ans)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
