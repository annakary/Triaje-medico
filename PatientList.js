import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const PatientList = () => {
  const navigation = useNavigation();


  return (
    <Text style={tw`text-white text-center text-2xl font-extrabold top-25 mt-20`}>User info</Text>

  );
};

export default PatientList;