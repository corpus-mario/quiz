import { StyleSheet, Text } from "react-native";

import colors from "@/constants/colors";

export default function QuestionNumber() {
  return <Text style={styles.text}>Question 1/5</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkGreen,
    textAlign: "center",
  },
});
