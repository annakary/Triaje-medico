import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleEmergencyDicharge = () => {
    navigation.navigate('EmergencyDicharge');
  };
  const handleDischargePatient = () => {
    navigation.navigate('DischargePatient');
  };
  const handlePatientList = () => {
    navigation.navigate('PatientList');
  };
  const handleTriageList = () => {
    navigation.navigate('TriageList');
  };
  const handleInformation = () => {
    navigation.navigate('Information');
  };

  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Triaje Médico</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={handleEmergencyDicharge}>
          <View style={tw`w-full bg-gray-200	top-10 px-15 py-7  items-center rounded-xl`}>
            <Image style={tw` `} source={require('./assets/icono-urgencia.png')} />
            <Text style={tw`text-black mt-5 text-3xl tracking-widest`}>Alta de Urgencia</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDischargePatient}>
        <View style={tw`w-full bg-gray-200 mt-20	 px-15 py-7  items-center rounded-xl`}>
          <Image style={tw` `} source={require('./assets/icono-alta-paciente.png')} />
          <Text style={tw`text-black mt-5 text-3xl tracking-widest`}>Alta de Paciente</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handlePatientList}>
        <View style={tw`w-full bg-gray-200 mt-10	 px-15 py-7  items-center rounded-xl`}>
          <Image style={tw` `} source={require('./assets/icono-lista-pacientes.png')} />
          <Text style={tw`text-black mt-5 text-3xl tracking-widest`}>Lista de Pacientes</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTriageList}>
        <View style={tw`w-full bg-gray-200 mt-10	 px-15 py-7  items-center rounded-xl`}>
          <Image style={tw` `} source={require('./assets/icono-lista-triaje.png')} />
          <Text style={tw`text-black mt-5 text-3xl tracking-widest`}>Lista de Triaje</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleInformation}>
        <View style={tw`w-full bg-gray-200 mt-10  px-15 py-7  items-center rounded-xl`}>
          <Image style={tw` `} source={require('./assets/icono-info.png')} />
          <Text style={tw`text-black mt-5 text-3xl tracking-widest`}>Información</Text>
        </View>
        </TouchableOpacity>
        
      </ScrollView>




    </View>

  );
};

export default Home;