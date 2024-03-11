import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { BackHandler } from "react-native";

export const HomeScreen = () => {
  useEffect (()=> {
    const handleBackButton = () => true;
      BackHandler.addEventListener("hardwareBackPress", handleBackButton);
      return () => {
          BackHandler.removeEventListener(
              "hardwareBackPress",
              handleBackButton
          );
      };
  },[]);
  
  return (
    <View>
      <Text>{'HomeScreen'}</Text>
    </View>
  );
};