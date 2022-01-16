import React, { useState } from "react";
import { useColorScheme, StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import NewHabit from "../Components/NewHabit";

const CreateHabitPopup = ({createHabitPopupExists, setCreateHabitPopupExists, isYearly, isMonthly, isWeekly, isDaily}) => {
    const [translateAnimation, setTranslateAnimation] = useState(new Animated.Value(0))
    const [opacityAnimation, setOpacityAnimation] = useState(new Animated.Value(0))
    const [showHabitCreator, setShowHabitCreator] = useState(false);
    const [zIndexVal, setZIndexVal] = useState(0);



    const handleAnimation = () => {   
        let shouldSwitch = true;
        if (zIndexVal === 0) {
            shouldSwitch = false;
            setZIndexVal(1);
        }

        Animated.timing(opacityAnimation, {
            toValue: showHabitCreator ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start()

        Animated.timing(translateAnimation, {
          toValue: showHabitCreator ? 1 : 0,
          duration: 400,
          useNativeDriver: true,
        }).start(({ finished }) => {
            setShowHabitCreator(!showHabitCreator);
            if (shouldSwitch){ 
                setZIndexVal(0);
            }

        });
      };
     
      const interpolateTranslation = translateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 400],
      })
    
     const interpolateOpacity = opacityAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.0, 1.0],
      })
    
      const opacityAnimatedStyle = {
        opacity: interpolateOpacity,
      };
    
      const popupAnimatedStyle = {
        transform: [
          {
            translateY: interpolateTranslation,
          },
        ]
      }

      if (createHabitPopupExists && !showHabitCreator) {
          Animated.timing(translateAnimation, {
              toValue: 0,
              duration: 0.01,
              useNativeDriver: true,
          }).start(({finished}) => {
            Animated.timing(translateAnimation, {
                toValue: 1,
                duration: 0.01,
                useNativeDriver: true,
            }).start(({finished}) => {
                setShowHabitCreator(true);
                handleAnimation();
            })
          });
          
      }


    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };

    return (
        <View style={{height: "85%", width:"100%", position:"absolute", bottom: 0, zIndex: zIndexVal}}>
        { showHabitCreator ? <>
        
        <Animated.View style={[isDarkMode ? styles.createHabitScreen :  styles.createLightHabitScreen, opacityAnimatedStyle, popupAnimatedStyle]}>

            <TouchableOpacity style={[styles.closeButton, styles.darkMode]} onPress={() => { 
                setCreateHabitPopupExists(false);
                handleAnimation();
            }}>
                <FontAwesomeIcon style={styles.darkMode} icon={faTimes} size={30}/>
            </TouchableOpacity>
            
            <NewHabit isYearly={isYearly} isMonthly={isMonthly} isWeekly={isWeekly} isDaily={isDaily} />

        </Animated.View>

            </> : <></>}
        </View>
        
    );

}



const styles = StyleSheet.create({

    createHabitScreen: {
      height: '100%',
      backgroundColor:  '#363636',
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      width: '100%',
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.3,
      shadowRadius: 1, 
    },

    lightMode: {
        color: "#222222"
    },

    darkMode: {
        color: "black"
    },

    createLightHabitScreen: {
        height: '100%%',
        backgroundColor: 'lightgrey',
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        width: '100%',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.3,
        shadowRadius: 1, 
    },

    closeButton: {
        borderRadius: 50,
        padding: 2,
        margin: 6,
        opacity: 0.5,
        alignSelf: 'flex-start',
    },




  
  })

export default CreateHabitPopup;