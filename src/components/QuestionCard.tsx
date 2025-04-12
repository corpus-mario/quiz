import { View } from "react-native";

import Card from "@/components/Card";
import AnswerOption from "./AnswerOption";

export default function QuestionCard() {
  return (
    <Card title="What is React Native?">
      <View style={{ gap: 12 }}>
        <AnswerOption text="This is an option" />
        <AnswerOption text="This is an option" />
        <AnswerOption text="This is an option" />
        <AnswerOption text="This is an option" />
      </View>
    </Card>
  );
}
