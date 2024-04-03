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
  return <div></div>;
};

export default Quiz;
