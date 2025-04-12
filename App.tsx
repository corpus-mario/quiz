import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import QuizScreen from "@/app/QuizScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <QuizScreen />
    </SafeAreaProvider>
  );
}
