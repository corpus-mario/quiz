import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const question = questions[index];
  const isFinish = index >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinish && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinish]);

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

  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem("best-score");
      if (value !== null) {
        setBestScore(Number(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveBestScore = async (value: number) => {
    try {
      await AsyncStorage.setItem("best-score", String(value));
    } catch (error) {
      console.error(error);
    }
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
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
