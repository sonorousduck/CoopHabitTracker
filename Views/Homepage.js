import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableWithoutFeedback, useColorScheme, StyleSheet, View } from "react-native";
import MyFAB from "../Components/MyFAB";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CreateHabitPopup from "./CreateHabitPopup";
import { queryYearlyHabits } from "../Models/habitModel";
import { ScrollView } from "react-native-gesture-handler";




const Homepage = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const [slidOpen, setSlidOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isDaily, setIsDaily] = useState(false);
  const [zIndexVal, setZIndexVal] = useState(1);


  const isDarkMode = useColorScheme() === 'dark';

  const [yearlyGoals, setYearlyGoals] = useState([])
  const [isLoading, setLoading] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setLoading(true);
    setYearlyGoals(queryYearlyHabits());
    setLoading(false);
  }, [])

  return (
    <TouchableWithoutFeedback style={{zIndex: zIndexVal}} onPress={() => {
      setPressed(!pressed)}}>
      <SafeAreaView style={[{ height: '100%'}, backgroundStyle]}>
        <Text style={styles.title}>Upcoming Habits</Text>



          {isLoading ? <></> : 
            yearlyGoals.map((habit, index) => {
              return (
              <View key={index}>
                <Text>{JSON.stringify(habit.name)}</Text>
              </View>
              )
          })}  

        <MyFAB navigation={navigation} wasPressed={pressed} slidOpen={slidOpen} setSlidOpen={setSlidOpen} isYearly={isYearly} setIsYearly={setIsYearly} isMonthly={isMonthly} setIsMonthly={setIsMonthly} isWeekly={isWeekly} setIsWeekly={setIsWeekly} isDaily={isDaily} setIsDaily={setIsDaily}/>
        <CreateHabitPopup createHabitPopupExists={slidOpen} setCreateHabitPopupExists={setSlidOpen} isYearly={isYearly} isMonthly={isMonthly} isWeekly={isWeekly} isDaily={isDaily}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({
  yearlyScrollView: {
    color: "white",
    width: "100%",
    borderWidth: 3,
    borderColor: "#2b2b2b",
  },

  title: {
    fontSize: 36,
    textAlign: 'center',
  },



})

export default Homepage;