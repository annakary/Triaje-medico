import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';
import tw from 'twrnc';
import RNPickerSelect from 'react-native-picker-select';
import { useRoute, useNavigation } from '@react-navigation/native';

const PatientInformation = () => {
  const route = useRoute();
  const { userId } = route.params;
  const navigation = useNavigation();

  const [patientName, setPatientName] = useState('');
  const [firstObservation, setFirstObservation] = useState('');
  const [observations, setObservations] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [newObservation, setNewObservation] = useState('');

  useEffect(() => {
    // Obtener datos del paciente
    fetch(`https://ns02.cloud/api/patients/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const patientData = data[0];
          setPatientName(`${patientData.name} ${patientData.lastname}`);
          setFirstObservation(patientData.first_observation);
        } else {
          console.error('No se encontraron datos del paciente');
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos del paciente:', error);
      });

    // Obtener todas las observaciones del paciente según su id_patient
    fetch(`https://ns02.cloud/api/observations?patient_id=${userId}`)
      .then((response) => response.json())
      .then((observationsData) => {
        // Filtrar las observaciones que coincidan con el id_patient del usuario
        const filteredObservations = observationsData.filter(
          (observation) => observation.id_patient === userId
        );
        setObservations(filteredObservations);
      })
      .catch((error) => {
        console.error('Error al obtener las observaciones del paciente:', error);
      });
  }, [userId]);

  // Función para guardar el estado seleccionado
  const handleSaveStatus = () => {
    // Realiza una solicitud fetch para enviar el estado seleccionado al servidor
    fetch(`https://ns02.cloud/api/patients/${userId}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: selectedStatus }), // Envia el estado seleccionado
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Estado guardado:', data);
        // Redirige a la pantalla "Home" después de guardar el estado
        navigation.navigate('Home'); // Asegúrate de que el nombre sea el correcto según tu configuración de navegación
      })
      .catch((error) => {
        console.error('Error al guardar el estado:', error);
      });
  };

  // Función para guardar una nueva observación
  const handleSaveObservation = () => {
    // Verifica si hay una nueva observación antes de guardar
    if (newObservation.trim() !== '') {
      // Obtiene la fecha actual
      const currentDate = new Date().toISOString();

      // Realiza una solicitud fetch para guardar la nueva observación
      fetch(`https://ns02.cloud/api/observations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_patient: userId, observation: newObservation, date: currentDate }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Observación guardada:', data);
          // Limpia el estado de la nueva observación después de guardar
          setNewObservation('');
          // Redirige a la pantalla "Home" después de guardar la observación
          navigation.navigate('Home'); // Asegúrate de que el nombre sea el correcto según tu configuración de navegación
        })
        .catch((error) => {
          console.error('Error al guardar la observación:', error);
        });
    }
  };

  const statusOptions = [
    { label: 'Valoración', value: '1' },
    { label: 'Consulta', value: '2' },
    { label: 'Alta', value: '3' },
    { label: 'Hospitalización', value: '4' },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0`}>
        <Text style={tw`text-white text-3xl tracking-widest pl-5 bottom-5 mt-10`}>Información del Paciente</Text>
      </View>

      <ScrollView style={tw`flex-1 mx-2`}>
        <View style={tw`bg-gray-200 mt-10 px-5 py-5 rounded-xl`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-black font-medium text-left text-3xl tracking-widest`}>{patientName}</Text>
          </View>

          <View style={tw`mt-5 px-5`}>
            <Text style={tw`text-black text-2xl tracking-widest`}>Primera observación</Text>
            <View style={tw`bg-white mt-2 px-5 py-3 rounded-xl`}>
              <Text style={tw`text-black text-justify text-sm tracking-widest`}>{firstObservation}</Text>
            </View>
          </View>

          {observations.map((observation) => (
            <View key={observation.id} style={tw`bg-white mt-5 px-5 py-3 rounded-xl`}>
              <Text style={tw`text-black ml-auto text-sm tracking-widest`}>Fecha {observation.date}</Text>
              <Text style={tw`text-black text-justify mt-2 text-sm tracking-widest`}>{observation.observation}</Text>
            </View>
          ))}

          <RNPickerSelect
            onValueChange={(value) => setSelectedStatus(value)}
            items={statusOptions}
            value={selectedStatus}
            placeholder={{ label: 'Seleccione un estado', value: null }}
          />

          <Button
            title="Guardar"
            color="green" // Cambia el color del botón a verde
            onPress={() => {
              handleSaveStatus();
              handleSaveObservation();
            }}
          />

          <View style={tw`bg-white mt-5 px-5 py-3 rounded-full`}>
            <TextInput
              placeholder="Escribe una observación"
              value={newObservation}
              onChangeText={(text) => setNewObservation(text)}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatientInformation;