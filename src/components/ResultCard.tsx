import { View, Text } from "react-native";

import Card from "@/components/Card";

export default function ResultCard() {
  return (
    <Card title="Well done">
      <View style={{ gap: 12 }}>
        <Text>Correct answer: 5/5</Text>
        <Text>Best score: 5</Text>
      </View>
    </Card>
  );
}
