import React from "react";
import { useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import NewDailyHabit from "./NewDailyHabit";
import NewMonthlyHabit from "./NewMonthlyHabit";
import NewWeeklyHabit from "./NewWeeklyHabit";
import NewYearlyHabit from "./NewYearlyHabit";

// Wrapper Component Screen to avoid errors. Chooses between the type of new habit
const NewHabit = ({isYearly, isMonthly, isWeekly, isDaily}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View>
            {isYearly ? <><NewYearlyHabit/></> : <></>}
            {isMonthly ? <><NewMonthlyHabit/></> : <></>}
            {isWeekly ? <><NewWeeklyHabit/></> : <></>}
            {isDaily ? <><NewDailyHabit/></> : <></>}
        </View>


    )

};




export default NewHabit;