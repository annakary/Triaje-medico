import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const DischargePatient = () => {
  const navigation = useNavigation();


  return (
    <View style={tw`flex-1 items-center justify-center relative`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Triaje Médico</Text>
      </View>
      <ScrollView>


        <View style={tw`mb-5 mt-10`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Nombre(s)</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
          />
        </View>
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Apellido Paterno</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
          />
        </View>
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Apellido Materno</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
          />
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Edad</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
          />
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>CURP</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
          />
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Fecha de Nacimiento</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
          secureTextEntry
            required
          />
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Tipo de Sangre</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}

            secureTextEntry
            required
          />
        </View>

        <View style={tw`flex flex-col items-center `}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity style={tw`w-40 mr-2 bg-[#E12D2E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center`}>
              <Text style={tw`text-white font-medium text-center text-xl`}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`ml-2  w-40 bg-[#3CA62E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center`}>
              <Text style={tw`text-white font-medium text-center text-xl`}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default DischargePatient;