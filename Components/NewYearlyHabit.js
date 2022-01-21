import React, {useState, } from "react";
import { StyleSheet, useColorScheme, View, TextInput, Text, TouchableOpacity, SafeAreaView, DatePickerIOSBase } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { recordHabit } from "../Models/habitModel";
import MyDateTime from "./MyDateTime";

const NewYearlyHabit = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date())
    const [repeatEvery, setRepeatEvery] = useState(0);
    const [skipYear, setSkipYears] = useState(0);


    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={{height: '100%', width: '100%'}}>
            <ScrollView style={styles.cardView} keyboardShouldPersistTaps="never">
                <TextInput placeholderTextColor={'grey'} style={[isDarkMode ? styles.darkInput : styles.lightInput, styles.inCommonInput]} placeholder="Enter Yearly Goal" value={name} onChangeText={setName}/>
                <TextInput placeholderTextColor={'grey'} multiline={true} style={[isDarkMode ? styles.darkInput : styles.lightInput, styles.inCommonInput, styles.detailsInput]} placeholder="Details (Optional)" value={description} onChangeText={setDescription}/>
                <MyDateTime />
                {/* <TextInput placeholderTextColor={'grey'} style={[isDarkMode ? styles.darkInput : styles.lightMode, styles.inCommonInput]} placeholder="Repeat every X years" onChangeText={setRepeatEvery} keyboardType="numeric" /> */}
                
            </ScrollView>
            <TouchableOpacity mode="contained" style={styles.darkButtonStyle} onPress={() => {
                recordHabit(name, description, date);
                

            }} />
        </SafeAreaView>
        
        
        
    )

};

const styles = StyleSheet.create({
    cardView: {
        textAlign: 'center',
        alignContent: 'center',
        margin: 8,
        height: "90%"
    },

    darkButtonStyle: {
        height: "10%", 
        marginBottom: 56, 
        width: "80%", 
        marginLeft: "auto", 
        marginRight: "auto",
        borderRadius: 20,
        backgroundColor: '#59B7A6'
    },

    inCommonInput: {
        borderRadius: 10,
        fontSize: 24,
        padding: 8,
        marginTop: 4,
        marginBottom: 4,
    },

    detailsInput: {
        height: "60%",
    },

    darkInput: {
        color: "white",
        width: "100%",
        borderWidth: 3,
        borderColor: "#2b2b2b",
    },

    lightInput: {
        color: "black",
        width: "100%",
        borderWidth: 3,
        borderColor: "#2b2b2b",
    },
})



export default NewYearlyHabit;