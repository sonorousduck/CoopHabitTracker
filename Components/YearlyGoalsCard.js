import React, { useState, useEffect } from "react";
import { StyleSheet, useColorScheme, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { queryYearlyMostRecentHabits } from "../Models/habitModel";


const GoalsCard = () => {

    const [yearlyGoals, setYearlyGoals] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [numRecentHabits, setNumRecentHabits] = useState(3);
  
    useEffect(() => {
        setLoading(true);
        setYearlyGoals(queryYearlyMostRecentHabits(numRecentHabits));
        setLoading(false);
      }, [])

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    return (
    <View style={[isDarkMode ? styles.darkCard : styles.lightCard, styles.commonCard]}>
      {isLoading ? <></> : 
            yearlyGoals.map((habit, index) => {
              return (
              <View key={index}>
                <View><Text style={styles.name}>{habit.name}</Text></View>
                <Text style={{color: 'white'}}>{habit.name}{habit.details}{habit.date.getMonth() + 1}{habit.date.getDate()}</Text>
              </View>
              )
          })}  
    </View>

    );


};


const styles = StyleSheet.create({
    name: {
      fontSize: 24,
      color: 'white',
      
    },  

    commonCard: {
      borderRadius: 10,
      borderColor: 'lightgrey',
      borderWidth: 1,
      width: "80%",
      alignSelf: "center",
      marginTop: 16,
      padding: 8,

    },

    darkCard: {

    },

    lightCard: {

    },

    darkTitle: {
      fontSize: 36,
      textAlign: 'center',
      color: 'white',
    },
  
    title: {
      fontSize: 36,
      textAlign: 'center',
    },
  
  
  
  })



export default GoalsCard;