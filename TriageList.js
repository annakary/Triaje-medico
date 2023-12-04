import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const TriageList = () => {
  const navigation = useNavigation();


  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Lista de Triaje</Text>
      </View>
      <View style={tw` mt-5 relative flex-row items-center`}>
        <Text style={tw`text-xl font-medium text-black mb-2 mr-2`}>Filtrar</Text>
        <TextInput
          style={tw`w-80 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          required
        />
      </View>
      <ScrollView style={tw`w-full px-5`}>

        <View style={tw`w-full bg-gray-200  top-10 rounded-xl flex-row `}>
          <Image style={tw`mr-3`} source={require('./assets/triaje-1.png')} />
          <View>
            <Text style={tw`text-black mt-5 text-3xl tracking-widest`}>Carlos Martinez</Text>
            <Text style={tw`text-black text-lg tracking-widest mb-2`}>Accidente automovilístico</Text>
          </View>
        </View>


        <View style={tw`w-full bg-gray-200 mt-5 	top-10  rounded-xl flex-row`}>
          <Image style={tw`mr-3 `} source={require('./assets/triaje-2.png')} />
           <View>
            <Text style={tw`text-black text-3xl mt-5 tracking-widest`}>Carlos Martinez</Text>
            <Text style={tw`text-black text-lg tracking-widest mb-2`}>Accidente automovilístico</Text>
          </View>
        </View>



        <View style={tw`w-full bg-gray-200 mt-5	top-10   rounded-xl flex-row`}>
          <Image style={tw`mr-3 `} source={require('./assets/triaje-3.png')} />
          <View>
            <Text style={tw`text-black text-3xl mt-5 tracking-widest`}>Carlos Martinez</Text>
            <Text style={tw`text-black text-lg tracking-widest mb-2`}>Accidente automovilístico</Text>
          </View>
        </View>



        <View style={tw`w-full bg-gray-200 mt-5	top-10   rounded-xl flex-row`}>
          <Image style={tw`mr-3 `} source={require('./assets/triaje-4.png')} />
          <View>
            <Text style={tw`text-black text-3xl mt-5 tracking-widest`}>Carlos Martinez</Text>
            <Text style={tw`text-black text-lg tracking-widest mb-2`}>Accidente automovilístico</Text>
          </View>
        </View>

        <View style={tw`w-full bg-gray-200 mt-5	top-10   rounded-xl flex-row`}>
          <Image style={tw`mr-3`} source={require('./assets/triaje-5.png')} />
          <View>
            <Text style={tw`text-black text-3xl mt-5 tracking-widest`}>Carlos Martinez</Text>
            <Text style={tw`text-black text-lg tracking-widest mb-2`}>Accidente automovilístico</Text>
          </View>
        </View>


      </ScrollView>




    </View>

  );
};

export default TriageList;