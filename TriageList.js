import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const TriageList = () => {
  const navigation = useNavigation();

  const handleEmergencylist = () => {
    navigation.navigate('PatientInformation');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  useEffect(() => {
    fetch('https://ns02.cloud/api/patients')
      .then((response) => response.json())
      .then((data) => {
        const filteredPatients = data
          .filter((patient) => {
            const fullName = `${patient.name} ${patient.lastname}`.toLowerCase();
            return (
              (patient.urgency >= 1 && patient.urgency <= 5) &&
              (fullName.includes(searchTerm.toLowerCase()) || patient.urgency.toString() === searchTerm.toLowerCase()) &&
              patient.status !== 3
            );
          })
          .sort((a, b) => a.urgency - b.urgency) // Ordenar por urgencia ascendente
          .slice(0, 5); // Limitar a los primeros 5 pacientes

        setPatients(filteredPatients);
      })
      .catch((error) => {
        console.error('Error al obtener los pacientes:', error);
      });
  }, [searchTerm]);

  const handlePatientSelection = (patientId) => {
    setSelectedPatientId(patientId);
    navigation.navigate('PatientInformation', { userId: patientId });
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return '#FFD700';
      case 4:
        return 'green';
      case 5:
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white text-3xl tracking-widest pl-5 bottom-5 mt-10`}>Lista de triaje</Text>
      </View>
      <View style={tw`mt-5 mx-3 relative flex-row items-center`}>
        <TextInput
          style={{
            ...tw`shadow-sm border border-gray-300 text-gray-900 text-xl rounded-lg p-1.5`,
            width: Dimensions.get('window').width - 100,
          }}
          placeholder="Buscar por nombre o urgencia..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={handleEmergencylist} style={tw`bg-blue-500 py-3 px-4 rounded-xl ml-2`}>
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
              <Text style={tw`text-black text-center text-2xl tracking-widest`}>
                {patient.name} {patient.lastname}
              </Text>
              <View style={{ backgroundColor: getUrgencyColor(patient.urgency), ...tw`rounded-full px-3 py-1.5 mr-auto mt-2` }}>
                <Text style={tw`text-white text-center text-lg tracking-wider`}>
                  {patient.urgency}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TriageList;