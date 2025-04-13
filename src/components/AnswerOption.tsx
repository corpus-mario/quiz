import { StyleSheet, Pressable, Text } from "react-native";

import { useQuizContext } from "@/providers/QuizProvider";

import colors from "@/constants/colors";

type AnswerOptionProps = {
  text: string;
};

export default function AnswerOption({ text }: AnswerOptionProps) {
  const { selected, setSelected } = useQuizContext();

  const isSelected = text === selected;

  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={() => setSelected(text)}
    >
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 20,
    borderRadius: 100,
  },
  selectedContainer: {
    backgroundColor: colors.limeGreen,
  },
});
