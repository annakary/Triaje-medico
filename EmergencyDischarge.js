import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const EmergencyDischarge = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Obtiene el parámetro de la ruta
  const [selectedTriage, setSelectedTriage] = useState(1); // Inicializar con un valor predeterminado (por ejemplo, 1)
  const [paragraph, setParagraph] = useState('');

  const handleInputChange = (text) => {
    setParagraph(text);
  };

  // Función para guardar los cambios y cambiar la urgencia, la observación y el status del paciente
  const handleSaveChanges = async () => {
    const userId = route.params.userId;
    console.log(`Guardando cambios para el usuario con ID: ${userId}`);
    console.log(`Triaje seleccionado: ${selectedTriage}`);
    console.log(`Observaciones: ${paragraph}`);

    // Realiza una solicitud PUT para cambiar la urgencia, la observación y el status del paciente
    try {
      const response = await fetch(`https://ns02.cloud/api/patients/${userId}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urgency: selectedTriage, first_observation: paragraph, status: 1 }),
      });

      if (response.ok) {
        console.log('Datos del paciente actualizados con éxito');
        // Navega a donde sea necesario después de guardar los cambios
        navigation.navigate('Home'); // Cambia 'Home' al destino deseado
      } else {
        console.error('Error al actualizar los datos del paciente');
      }
    } catch (error) {
      console.error('Error al enviar los datos a la API:', error);
    }
  };

  const triages = [
    { label: 'Nivel 1 Reanimación', value: 1, color: '#E12D2E' },
    { label: 'Nivel 2 Emergencia', value: 2, color: '#F08C00' },
    { label: 'Nivel 3 Urgencia', value: 3, color: '#F6BD00' },
    { label: 'Nivel 4 No prioritario', value: 4, color: '#3CA62E' },
    { label: 'Nivel 5 No urgente', value: 5, color: '#175FA9' },
  ];

  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Alta de Urgencia</Text>
      </View>

      <ScrollView>
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-5`}>Nivel de Triaje</Text>
          <View style={tw`w-96 h-13 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5 justify-center`}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedTriage(value)}
              items={triages}
              value={selectedTriage}
              placeholder={{}}
              textInputProps={{ style: { fontSize: 20, color: 'black' } }}
            />
          </View>
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Observaciones</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            multiline
            numberOfLines={4}
            placeholder="Escribe aquí"
            onChangeText={handleInputChange}
            value={paragraph}
          />
        </View>

        <View style={tw`flex flex-col items-center`}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity
              style={tw`ml-2 w-40 bg-[#3CA62E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center`}
              onPress={handleSaveChanges} // Llama a handleSaveChanges al presionar
            >
              <Text style={tw`text-white font-medium text-center text-xl`}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmergencyDischarge;