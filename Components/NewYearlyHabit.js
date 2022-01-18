import React from "react";
import { StyleSheet, useColorScheme, View, TextInput } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const NewYearlyHabit = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.cardView}>
            <TextInput autoFocus={true} style={[isDarkMode ? styles.darkInput : styles.lightInput, styles.inCommonInput]} placeholder="Enter Yearly Goal"/>
        </View>
    )

};

const styles = StyleSheet.create({
    cardView: {
        textAlign: 'center',
        alignContent: 'center',
        margin: 8,

    },

    inCommonInput: {
        borderRadius: 10,
        fontSize: 24,
        padding: 8,
    },

    darkInput: {
        color: "white",
        width: "100%",
        borderWidth: 3,
        borderColor: "#2b2b2b",


    },

    lightInput: {
        color: "black",

    },
})



export default NewYearlyHabit;