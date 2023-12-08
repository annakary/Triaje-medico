import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const PatientList = () => {
  const navigation = useNavigation();

  const handlePatientInformation = (patientId) => {
    navigation.navigate('PatientInformation', { userId: patientId });
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);

  const getStatusText = (status) => {
    switch (status) {
      case 0:
      case 1:
        return 'Valoración';
      case 2:
        return 'Consulta';
      case 3:
        return 'Alta';
      case 4:
        return 'Hospitalización';
      default:
        return 'Desconocido';
    }
  };

  useEffect(() => {
    fetch('https://ns02.cloud/api/patients')
      .then((response) => response.json())
      .then((data) => {
        const filteredPatients = data.filter((patient) => {
          const fullName = `${patient.name} ${patient.lastname}`.toLowerCase();
          return fullName.includes(searchTerm.toLowerCase()) || patient.status.toString() === searchTerm.toLowerCase();
        });
        setPatients(filteredPatients);
      })
      .catch((error) => {
        console.error('Error al obtener los pacientes:', error);
      });
  }, [searchTerm]);

  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white text-3xl tracking-widest pl-5 bottom-5 mt-10`}>Lista de pacientes</Text>
      </View>
      <View style={tw`mt-5 mx-3 relative flex-row items-center`}>
        <TextInput
          style={{
            ...tw`shadow-sm border border-gray-300 text-gray-900 text-xl rounded-lg p-1.5`,
            width: Dimensions.get('window').width - 100,
          }}
          placeholder="Buscar por nombre o status..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={handlePatientInformation} style={tw`bg-blue-500 py-3 px-4 rounded-xl ml-2`}>
          <Text style={tw`text-white`}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {patients.map((patient) => (
          <TouchableOpacity
            key={patient.id}
            onPress={() => handlePatientInformation(patient.id)}
          >
            <View style={tw`w-full bg-gray-200 mt-10 pl-5 pr-45 py-5 items-center rounded-xl`}>
              <Text style={tw`text-black text-center text-2xl tracking-widest`}>
                {patient.name} {patient.lastname}
              </Text>
              <Text style={tw`text-black text-center text-lg mt-2 tracking-wider`}>
                Status: {getStatusText(patient.status)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PatientList;