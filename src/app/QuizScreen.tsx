import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import QuestionNumber from "@/components/QuestionNumber";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";
import Timer from "@/components/Timer";
import Button from "@/components/Button";

import { useQuizContext } from "@/providers/QuizProvider";

import colors from "@/constants/colors";

export default function QuizScreen() {
  const { question, handleNext } = useQuizContext();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {question ? <QuestionNumber /> : <View />}

        {question ? (
          <View style={{ gap: 12 }}>
            <QuestionCard question={question} />
            <Timer />
          </View>
        ) : (
          <ResultCard />
        )}

        <Button
          text={question ? "Next" : "Restart"}
          rightIcon={
            <Ionicons name="arrow-forward-outline" size={24} color="white" />
          }
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.lightGreen,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
});
