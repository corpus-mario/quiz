import { View } from "react-native";

import Card from "@/components/Card";
import AnswerOption from "@/components/AnswerOption";

import { Question } from "@/types";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card title={question.title}>
      <View style={{ gap: 12 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} text={option} />
        ))}
      </View>
    </Card>
  );
}
