import * as React from 'react';
import { useRef, useState }  from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing, Button, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';


const MyFAB = ({ wasPressed, navigation, slidOpen, setSlidOpen, isYearly, setIsYearly, isMonthly, setIsMonthly, isWeekly, setIsWeekly, isDaily, setIsDaily}) => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const [translateAnimation, setTranslateAnimation] = useState(new Animated.Value(0))
  const [opacityAnimation, setOpacityAnimation] = useState(new Animated.Value(0))
  const [shouldShow, setShouldShow] = useState(false);
  const [isX, setIsX] = useState(false);
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  
  React.useEffect(() => {
    // Do stuff when they press anywhere else
    closeMenu();

  }, [wasPressed])

  React.useEffect( 
    () => navigation.addListener('blur', () => {
      // setIsX(false);
      // setShouldShow(false);
    }
      ),
    []
  );

  const closeMenu = () => {
    if (isX){
      setIsX(false);
      handleAnimation();
    }
  }


  const handleAnimation = () => {
    const wasHidden = shouldShow;
    if (!shouldShow) setShouldShow(true);

    Animated.timing(rotateAnimation, {
      toValue: isX ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateAnimation, {
      toValue: isX ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (isX)
      setShouldShow(!isX);

    });

    Animated.timing(opacityAnimation, {
      toValue: isX ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

  };

  let interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '135deg'],
  });

  const interpolateTranslation = translateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  })

 const interpolateOpacity = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.0, 1.0],
  })

  const opacityAnimatedStyle = {
    opacity: interpolateOpacity,
  };

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],   
  };

  const popupAnimatedStyle = {
    transform: [
      {
        translateY: interpolateTranslation,
      },
    ]
  }

  return (
    <View style={styles.fabContainer}>

    <TouchableWithoutFeedback>
      <Animated.View style={[animatedStyle]}>
        { <FAB
          icon="plus" 
          onPress={() => {
            setIsX(!isX);
            handleAnimation();

          }} 
          style={{backgroundColor:'#20baa6'}}
           /> }
      </Animated.View>
    </TouchableWithoutFeedback>

    { shouldShow ? 
    <>

      <AnimatedTouchable style={[styles.commonPopup, styles.fourthPopup, opacityAnimatedStyle, popupAnimatedStyle]} onPress={() => {
        setIsX(!isX);
        handleAnimation();
        setSlidOpen(true);
        setIsYearly(true);
        setIsMonthly(false);
        setIsWeekly(false);
        setIsDaily(false);
      }}>
        <Text>Create Yearly Habit</Text> 
      </AnimatedTouchable>
      <AnimatedTouchable style={[styles.commonPopup, styles.thirdPopup, opacityAnimatedStyle, popupAnimatedStyle]} onPress={() => {
        setIsX(!isX);
        handleAnimation();
        setSlidOpen(true);

        setIsYearly(false);
        setIsMonthly(true);
        setIsWeekly(false);
        setIsDaily(false);      }}>
        <Text>Create Monthly Habit</Text> 
      </AnimatedTouchable>
      <AnimatedTouchable style={[styles.commonPopup, styles.popup, opacityAnimatedStyle, popupAnimatedStyle]} onPress={() => {
        setIsX(!isX);
        handleAnimation();
        setSlidOpen(true);

        setIsYearly(false);
        setIsMonthly(false);
        setIsWeekly(false);
        setIsDaily(true);        
        }}>
        <Text>Create Daily Habit</Text>
      </AnimatedTouchable>
      <AnimatedTouchable style={[styles.commonPopup, styles.secondPopup, opacityAnimatedStyle, popupAnimatedStyle]} onPress={() => {
        setIsX(!isX);
        handleAnimation();
        setSlidOpen(true);

        setIsYearly(false);
        setIsMonthly(false);
        setIsWeekly(true);
        setIsDaily(false);

}}>
        <Text>Create Weekly Habit</Text> 
      </AnimatedTouchable>
      

    </> : <></> }



  </View>

  );

};

const styles = StyleSheet.create({
  slideUp: {
    width: '100%',
    width: '75%',
    backgroundColor: 'red',
  },


  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  fabContainer: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  commonPopup: {
    backgroundColor: '#59B7A6',
    width: '300%',
    height: '100%',
    borderRadius: 40,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: 'center',
  },

  popup: {
    position: 'absolute',
    right: 0,
    bottom: 45,
  
  },

  secondPopup: {
    position: 'absolute',
    marginBottom: 16,
    right: 0,
    bottom: 90,
  },

  thirdPopup: {
    position: 'absolute',
    marginBottom: 16,
    right: 0,
    bottom: 150,
  },

  fourthPopup: {
    position: 'absolute',
    marginBottom: 16,
    right: 0,
    bottom: 210,
  },


})

export default MyFAB;