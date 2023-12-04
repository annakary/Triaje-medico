import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const PatientList = () => {
  const navigation = useNavigation();

  const handlePatientInformation = () => {
    navigation.navigate('PatientInformation');
  };


  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Alta de Paciente</Text>
      </View>
      <View style={tw` mt-5 relative flex-row items-center`}>
        <Text style={tw`text-xl font-medium text-black mb-2 mr-2`}>Buscar</Text>
        <TextInput
          style={tw`w-80 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          required
        />
      </View>
      <ScrollView>
      <TouchableOpacity onPress={handlePatientInformation}>
 <View style={tw`w-full bg-gray-200 mt-10	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Validación</Text>
          </View>
        </View>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={handlePatientInformation}>
      <View style={tw`w-full bg-gray-200 mt-3	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>

       <TouchableOpacity onPress={handlePatientInformation}>
      <View style={tw`w-full bg-gray-200 mt-3	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={handlePatientInformation}>
      <View style={tw`w-full bg-gray-200 mt-3	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={handlePatientInformation}>
      <View style={tw`w-full bg-gray-200 mt-3	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={handlePatientInformation}>
      <View style={tw`w-full bg-gray-200 mt-3	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={handlePatientInformation}>
      <View style={tw`w-full bg-gray-200 mt-3	 pl-5 pr-45 py-5  items-center rounded-xl`}>
          <Text style={tw`text-black text-left text-2xl tracking-widest`}>Carlos Martinez</Text>
          <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
          <Text style={tw`text-white text-left text-lg tracking-wider`}>Status</Text>
          </View>
        </View>
      </TouchableOpacity>
       


      </ScrollView>
    </View>
  );
};

export default PatientList;