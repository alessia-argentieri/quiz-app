import { FC, useState } from "react";
import { Question } from "../questions";

type Props = {
  questions: Question[];
};

const Quiz: FC<Props> = ({ questions }) => {
  const [index, setIndex] = useState(0); //index of Question
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[index]; //Question

  const highlightAnswer = (answerIndex: number): string | undefined => {
    if (selectedAnswer === null) {
      return undefined;
    } else if (answerIndex === question.answer) {
      return "correct";
    } else if (
      answerIndex === selectedAnswer &&
      answerIndex !== question.answer
    ) {
      return "wrong";
    }
  };

  const next = () => {
    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setSelectedAnswer(null);
    }

    if (selectedAnswer === question.answer) {
      setScore(score + 1);
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setFinished(false);
  };

  return <div></div>;
};

export default Quiz;
