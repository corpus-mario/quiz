import { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";

type CardProps = {
  title: string;
};

export default function Card({
  title,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    gap: 20,
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
