import { View, Text } from "react-native";

import Card from "@/components/Card";

import { useQuizContext } from "@/providers/QuizProvider";

export default function ResultCard() {
  const { score, totalQuestions } = useQuizContext();

  return (
    <Card title="Well done!">
      <View style={{ gap: 12 }}>
        <Text>
          Correct answer: {score}/{totalQuestions}
        </Text>
        <Text>Best score: 5</Text>
      </View>
    </Card>
  );
}
