import React, { useState } from "react";
import { SafeAreaView, Text, TouchableWithoutFeedback, useColorScheme, StyleSheet, View } from "react-native";
import MyFAB from "../Components/MyFAB";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CreateHabitPopup from "./CreateHabitPopup";




const Homepage = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);
  const [slidOpen, setSlidOpen] = useState(false);


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <TouchableWithoutFeedback  onPress={() => setPressed(!pressed)}>
      <SafeAreaView style={[{ height: '100%'}, backgroundStyle]}>
        <Text>Homepage Screen</Text>
        <MyFAB navigation={navigation} wasPressed={pressed} slidOpen={slidOpen} setSlidOpen={setSlidOpen}/>
        <Text>Side: {slidOpen ? "Yeet" : "Neet"}</Text>
        <CreateHabitPopup createHabitPopupExists={slidOpen} setCreateHabitPopupExists={setSlidOpen}/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    
  )
}



export default Homepage;