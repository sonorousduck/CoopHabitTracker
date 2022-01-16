import React, { useState } from "react";
import { SafeAreaView, Text, TouchableWithoutFeedback, useColorScheme } from "react-native";
import MyFAB from "../Components/MyFAB";

import { Colors } from "react-native/Libraries/NewAppScreen";


const SettingsScreen = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  
};

  return (
    <TouchableWithoutFeedback style={{height: "100%"}} onPress={() => setPressed(!pressed)}>
      <SafeAreaView style={[backgroundStyle, {height: '100%'}]}>
        <Text>Settings Screen</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SettingsScreen;