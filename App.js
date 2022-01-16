/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from "./Views/Homepage"
import SettingsScreen from "./Views/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import CalendarScreen from './Views/CalendarScreen';


const Tab = createBottomTabNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <NavigationContainer style={backgroundStyle}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, color: 'white' },
          headerShown: false,
        }}>
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
