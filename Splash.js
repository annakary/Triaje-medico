import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import tw from 'twrnc';

const Splash = () => {
  const animation = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 190,
          duration: 2000, // Ajusta la duración según tu preferencia
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: -50,
          duration: 0, // Puedes ajustar esto a 0 si quieres evitar un retraso entre repeticiones
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [animation]);

  return (
    <View style={tw`flex-1 justify-center items-center relative`}>
      <Image style={tw`top-10`} source={require('./assets/LogoSplash.png')} />
      <View style={styles.loaderContainer}>
        <Animated.View
          style={[
            styles.loaderLine,
            { left: animation },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    width: 250,
    height: 5,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#ddd',
    margin: 100,
    borderRadius: 20,
  },
  loaderLine: {
    position: 'absolute',
    height: 5,
    width: '40%',
    backgroundColor: 'black',
    borderRadius: 20,
  },
});

export default Splash;
