import React, { useState } from 'react'
import { Button, StyleSheet, useColorScheme } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { Colors } from "react-native/Libraries/NewAppScreen";



export default () => {
  const [date, setDate] = useState(new Date())
  const isDarkMode = useColorScheme() === 'dark';
  const [open, setOpen] = useState(false)


  return (
    <>

    <Button placeholderTextColor={'grey'} style={[isDarkMode ? styles.darkInput : styles.lightInput, styles.inCommonInput, styles.detailsInput]} title={date.toDateString()} onPress={() => setOpen(true)}/>

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