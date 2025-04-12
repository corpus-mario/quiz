import { StyleSheet, Pressable, Text } from "react-native";

type AnswerOptionProps = {
  text: string;
};

export default function AnswerOption({ text }: AnswerOptionProps) {
  return (
    <Pressable style={styles.container}>
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
});
