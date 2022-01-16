import React, { useState } from "react";
import { SafeAreaView, Text, TouchableWithoutFeedback, useColorScheme, StyleSheet, View } from "react-native";
import MyFAB from "../Components/MyFAB";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CreateHabitPopup from "./CreateHabitPopup";




const Homepage = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const [slidOpen, setSlidOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isDaily, setIsDaily] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <TouchableWithoutFeedback  onPress={() => setPressed(!pressed)}>
      <SafeAreaView style={[{ height: '100%'}, backgroundStyle]}>
        <Text>Homepage Screen</Text>
        <MyFAB navigation={navigation} wasPressed={pressed} slidOpen={slidOpen} setSlidOpen={setSlidOpen} isYearly={isYearly} setIsYearly={setIsYearly} isMonthly={isMonthly} setIsMonthly={setIsMonthly} isWeekly={isWeekly} setIsWeekly={setIsWeekly} isDaily={isDaily} setIsDaily={setIsDaily}/>
        <CreateHabitPopup createHabitPopupExists={slidOpen} setCreateHabitPopupExists={setSlidOpen} isYearly={isYearly} isMonthly={isMonthly} isWeekly={isWeekly} isDaily={isDaily}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    
  )
}



export default Homepage;