import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';


const EmergencyDischarge = () => {
  const navigation = useNavigation();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Lógica de búsqueda (puedes pasar searchTerm a una función de búsqueda)
    console.log(`Searching for: ${searchTerm}`);
  };


  const [selectedTriage, setSelectedTriage] = useState('');
  const triages = [
    { label: 'Elige una opción', value: '', },
    { label: 'Nivel 1 Reanimación', value: '1', color: '#E12D2E' },
    { label: 'Nivel 2 Emergencia', value: '2', color: '#F08C00' },
    { label: 'Nivel 3 Urgencia', value: '3', color: '#F6BD00' },
    { label: 'Nivel 4 No prioritario', value: '4', color: '#3CA62E' },
    { label: 'Nivel 5 No urgente', value: '5', color: '#175FA9' },
  ];

  const [paragraph, setParagraph] = useState('');

  const handleInputChange = (text) => {
    setParagraph(text);
  };
  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Alta de Paciente</Text>
      </View>
      <View style={tw` mt-5 mx-5 relative flex-row items-center`}>
        <TextInput
          style={tw`w-full  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
          placeholder="Buscar..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={tw`bg-blue-500 py-3 px-4 rounded-xl ml-auto`}>
          <Text style={tw`text-white`} >Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={tw`mb-5 mt-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>ID</Text>
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
          <Text style={tw`text-xl font-medium text-black mb-2`}>Nivel de Triaje</Text>
          <View style={tw`w-96 h-13 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedTriage(value)}
              items={triages}
              value={selectedTriage}
              placeholder={{}}
              textInputProps={{ style: { fontSize: 20, color: 'black', } }}
            />
          </View>
        </View>

        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Observaciones</Text>
          <TextInput 
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            multiline
        numberOfLines={4} // Puedes ajustar la cantidad de líneas que se muestran inicialmente
        placeholder="Escribe aquí"
        onChangeText={handleInputChange}
        value={paragraph}
        
      />
        </View>

        <View style={tw`flex flex-col items-center `}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity style={tw`w-40  mr-2 bg-[#E12D2E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center`}>
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

export default EmergencyDischarge;