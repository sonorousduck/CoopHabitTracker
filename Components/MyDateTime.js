import React, { useState } from 'react'
import { Text, StyleSheet, useColorScheme, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { Colors } from "react-native/Libraries/NewAppScreen";



export default ({date, setDate}) => {
//   const [date, setDate] = useState(new Date())
  const isDarkMode = useColorScheme() === 'dark';
  const [open, setOpen] = useState(false)


  return (
    <>
    <View placeholderTextColor={'grey'} style={[isDarkMode ? styles.darkInput : styles.lightInput, styles.inCommonInput, styles.detailsInput]} title={date.toDateString()} onStartShouldSetResponder={() => setOpen(true)}>
        <Text style={[isDarkMode ? styles.darkText : styles.lightText]}>{date.toDateString()}</Text>
    </View>

      <DatePicker
        modal
        mode='date'
        textColor='white'

        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({

    darkText: {
        color: "white",
        width: "100%",
        fontSize: 24,
    },

    lightText: {
        color: "black",
        width: "100%",
        fontSize: 24,
    },

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