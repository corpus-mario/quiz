import { StyleSheet, Text } from "react-native";

import colors from "@/constants/colors";

type TimerProps = {
  time: number;
};

export default function Timer({ time }: TimerProps) {
  return <Text style={styles.text}>{time} sec</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkGreen,
    fontWeight: "bold",
    textAlign: "center",
  },
});
