import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView, Text, useColorScheme } from "react-native";



const HabitCreationScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {height: '100%'}]}>
      <Text>Habit Creation Screen</Text>
    </SafeAreaView>
  )
}

export default HabitCreationScreen;