import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Emergencylist = () => {
  const navigation = useNavigation();

  const handleEmergencylist = () => {
    navigation.navigate('EmergencyDischarge');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  useEffect(() => {
    fetch('https://ns02.cloud/api/patients')
      .then((response) => response.json())
      .then((data) => {
        const filteredPatients = data.filter(
          (patient) => {
            const fullName = `${patient.name} ${patient.lastname}`.toLowerCase();
            return (
              (patient.urgency === null || patient.status === 3) &&
              fullName.includes(searchTerm.toLowerCase())
            );
          }
        );
        setPatients(filteredPatients);
      })
      .catch((error) => {
        console.error('Error al obtener los pacientes:', error);
      });
  }, [searchTerm]);

  const handlePatientSelection = (patientId) => {
    setSelectedPatientId(patientId);
    navigation.navigate('EmergencyDischarge', { userId: patientId });
  };

  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white text-3xl tracking-widest pl-5 bottom-5 mt-10`}>Alta de Urgencia</Text>
      </View>
      <View style={tw`mt-5 mx-3 relative flex-row items-center`}>
        <TextInput
          style={tw`w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
          placeholder="Buscar..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={handleEmergencylist} style={tw`bg-blue-500 py-3 px-4 rounded-xl ml-auto`}>
          <Text style={tw`text-white`}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {patients.map((patient) => (
          <TouchableOpacity
            key={patient.id}
            onPress={() => handlePatientSelection(patient.id)}
          >
            <View style={tw`w-full bg-gray-200 mt-10 pl-5 pr-45 py-5 items-center rounded-xl`}>
              <Text style={tw`text-black text-left text-2xl tracking-widest`}>
                {patient.name} {patient.lastname}
              </Text>
              <View style={tw`bg-green-600 rounded-3xl px-2 mr-auto top-1`}>
                <Text style={tw`text-white text-left text-lg tracking-wider`}>
                  {patient.urgency === null ? 'Validación' : 'Status'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Emergencylist;