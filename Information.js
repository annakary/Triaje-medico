import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Information = () => {
  const navigation = useNavigation();


  return (
    <View style={tw`flex-1 items-center justify-center relative`}>
      <View style={tw`bg-[#102536] w-full top-0  `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Información</Text>
      </View>
      <ScrollView>
        <View>
          <Image style={tw`top-5`} source={require('./assets/bg-nivel-1.png')} />
          <Text style={tw`text-white font-medium left-2 bottom-12  text-3xl tracking-widest`}>Nivel</Text>
          <Text style={tw`text-white font-bold left-20 bottom-24  text-6xl tracking-widest`}> 1</Text>
          <Text style={tw`text-white font-bold left-45 bottom-38  text-2xl tracking-widest`}>REANIMACIÓN</Text>
          <Text style={tw`text-white font-normal left-46 bottom-40  text-xl tracking-wide`}>Atención Inmediata</Text>

        </View>
        <View style={tw`mt--35`}>
          <Image style={tw`top-5`} source={require('./assets/bg-nivel-2.png')} />
          <Text style={tw`text-white font-medium left-2 bottom-12  text-3xl tracking-widest`}>Nivel</Text>
          <Text style={tw`text-white font-bold left-20 bottom-24  text-6xl tracking-widest`}> 2</Text>
          <Text style={tw`text-white font-bold left-45 bottom-38  text-2xl tracking-widest`}>EMERGENCIA</Text>
          <Text style={tw`text-white font-normal left-42 bottom-40  text-xl tracking-wide`}>Hasta 15 min de espera</Text>

        </View>
        <View style={tw`mt--35`}>
          <Image style={tw`top-5`} source={require('./assets/bg-nivel-3.png')} />
          <Text style={tw`text-white font-medium left-2 bottom-12  text-3xl tracking-widest`}>Nivel</Text>
          <Text style={tw`text-white font-bold left-20 bottom-24  text-6xl tracking-widest`}> 3</Text>
          <Text style={tw`text-white font-bold left-45 bottom-38  text-2xl tracking-widest`}>URGENCIA</Text>
          <Text style={tw`text-white font-normal left-42 bottom-40  text-xl tracking-wide`}>Hasta 30 min de espera</Text>

        </View>
        <View style={tw`mt--35`}> 
          <Image style={tw`top-5`} source={require('./assets/bg-nivel-4.png')} />
          <Text style={tw`text-white font-medium left-2 bottom-12  text-3xl tracking-widest`}>Nivel</Text>
          <Text style={tw`text-white font-bold left-20 bottom-24  text-6xl tracking-widest`}> 4</Text>
          <Text style={tw`text-white font-bold left-45 bottom-38  text-2xl tracking-widest`}>PRIORITARIO</Text>
          <Text style={tw`text-white font-normal left-42 bottom-40  text-xl tracking-wide`}>Hasta 60 min de espera</Text>

        </View>
        <View style={tw`mt--35`}>
          <Image style={tw`top-5`} source={require('./assets/bg-nivel-5.png')} />
          <Text style={tw`text-white font-medium left-2 bottom-12  text-3xl tracking-widest`}>Nivel</Text>
          <Text style={tw`text-white font-bold left-20 bottom-24  text-6xl tracking-widest`}> 5</Text>
          <Text style={tw`text-white font-bold left-45 bottom-38  text-2xl tracking-widest`}>NO URGENTE</Text>
          <Text style={tw`text-white font-normal left-42 bottom-40  text-xl tracking-wide`}>Hasta 120 min de espera</Text>

        </View>

      </ScrollView>
    </View>
  );
};

export default Information;