import { SafeAreaProvider } from "react-native-safe-area-context";

import QuizProvider from "@/providers/QuizProvider";
import QuizScreen from "@/app/QuizScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
    </SafeAreaProvider>
  );
}
