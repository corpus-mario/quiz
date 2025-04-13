import { StyleSheet, Text } from "react-native";

import { useQuizContext } from "@/providers/QuizProvider";

import colors from "@/constants/colors";

export default function QuestionNumber() {
  const { index, totalQuestions } = useQuizContext();

  return (
    <Text style={styles.text}>
      Question {index + 1}/{totalQuestions}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkGreen,
    textAlign: "center",
  },
});
