import { StyleSheet, Text } from "react-native";

import colors from "@/constants/colors";

export default function Timer() {
  return <Text style={styles.text}>20 sec</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.darkGreen,
    fontWeight: "bold",
    textAlign: "center",
  },
});
