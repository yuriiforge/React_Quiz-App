const AnswerItem = ({ index, question, answer }) => {
  let cssClass = "user-answer";

  if (answer === null) {
    cssClass += " skipped";
  } else if (answer === question.correctAnswer) {
    cssClass += " correct";
  } else {
    cssClass += " wrong";
  }

  return (
    <li>
      <h3>{index + 1}</h3>
      <p className="question">{question.text}</p>
      <p className={cssClass}>{answer ?? "Skipped"}</p>
    </li>
  );
};

export default AnswerItem;
