export type Question = {
  title: string;
  options: string[];
  correctAnswer: string;
};

export type TQuizContext = {
  totalQuestions: number;
  index: number;
  question: Question | undefined;
  selected: string;
  setSelected: (option: string) => void;
  handleNext: () => void;
  score: number;
};
