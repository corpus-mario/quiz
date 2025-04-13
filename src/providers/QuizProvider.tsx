import { createContext, useContext, useState, PropsWithChildren } from "react";

import { TQuizContext } from "@/types";

import questions from "@/questions";

const QuizContext = createContext<TQuizContext>({
  totalQuestions: 0,
  index: 0,
  question: undefined,
  selected: "",
  setSelected: () => {},
  handleNext: () => {},
  score: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const question = questions[index];
  const isFinish = index >= questions.length;

  const handleNext = () => {
    if (isFinish) {
      restartQuiz();
      return;
    }

    if (selected === question.correctAnswer) {
      setScore((v) => v + 1);
    }

    setSelected("");
    setIndex((v) => v + 1);
  };

  const restartQuiz = () => {
    setIndex(0);
    setSelected("");
    setScore(0);
  };

  return (
    <QuizContext.Provider
      value={{
        totalQuestions: questions.length,
        index,
        question,
        selected,
        setSelected,
        handleNext,
        score,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
