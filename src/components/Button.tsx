import {
  StyleSheet,
  Pressable,
  Text,
  View,
  PressableProps,
} from "react-native";

type ButtonProps = {
  text: string;
  rightIcon?: React.ReactNode;
} & PressableProps;

import colors from "@/constants/colors";

export default function Button({ text, rightIcon, ...rest }: ButtonProps) {
  return (
    <Pressable {...rest} style={styles.container}>
      <Text style={styles.text}>{text}</Text>

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGreen,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
