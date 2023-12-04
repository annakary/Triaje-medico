import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';

const PatientInformation = () => {

  const [paragraph, setParagraph] = useState('');

  const handleInputChange = (text) => {
    setParagraph(text);
  };

  const handleSave = () => {
    // Aquí puedes realizar alguna acción con el párrafo ingresado, como guardarlo en el estado o enviarlo a un servidor.
    console.log('Párrafo guardado:', paragraph);
  };
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0`}>
        <Text style={tw`text-white text-3xl tracking-widest pl-5 bottom-5 mt-10`}>Información del Paciente</Text>
      </View>

      <ScrollView style={tw`flex-1 mx-2`}>
        <View style={tw` bg-gray-200 mt-10  px-5 py-5 rounded-xl`}>
          <View style={tw` flex-row justify-between`}>
            <Text style={tw`text-black  font-medium text-left text-3xl tracking-widest`}>Carlos Martinez</Text>
            <TouchableOpacity style={tw`bg-green-600 rounded-3xl px-2`}>
              <Text style={tw`text-white text-center text-lg mt-1 tracking-wider`}>Validación</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={tw`text-black mt-5  text-2xl tracking-widest`}>Observaciones</Text>
          <View style={tw` bg-white mt-2  px-5 py-3 rounded-xl`}>
            <Text style={tw`text-black text-justify  text-sm tracking-widest`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius elit sed eros aliquet, eu sagittis purus luctus. Suspendisse volutpat, urna interdum pharetra luctus, dolor ipsum ultrices enim, vitae scelerisque turpis ipsum a turpis. Integer at laoreet massa, a tristique ante. Etiam dictum consectetur massa eget congue.</Text>
          </View>
          </View>

          
          <View style={tw` bg-white mt-5  px-5 py-3 rounded-xl`}>
          <Text style={tw`text-black ml-auto text-sm tracking-widest`}> Fecha 30 Nov 2023</Text>
            <Text style={tw`text-black text-justify mt-2 text-sm tracking-widest`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius elit sed eros aliquet, eu sagittis purus luctus. Suspendisse volutpat.</Text>
          </View>

          <View style={tw` bg-white mt-5  px-5 py-3 rounded-xl`}>
          <Text style={tw`text-black ml-auto text-sm tracking-widest`}> Fecha 30 Nov 2023</Text>
            <Text style={tw`text-black text-justify mt-2 text-sm tracking-widest`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius elit sed eros aliquet, eu sagittis purus luctus. Suspendisse volutpat.</Text>
          </View>

          <View>
            <Text style={tw`text-black mt-5  text-2xl tracking-widest`}>Actualización</Text>
          <View style={tw` `}>

          </View>
          <TextInput 
          style={tw`bg-white mt-2  px-5 py-3 rounded-xl text-black mt-5  text-sm tracking-widest`}
        multiline
        numberOfLines={4} // Puedes ajustar la cantidad de líneas que se muestran inicialmente
        placeholder="Escribe aquí"
        onChangeText={handleInputChange}
        value={paragraph}
        
      />
      <TouchableOpacity style={tw`bg-green-600 rounded-3xl px-2 w-4/12 ml-auto mt-2`} onPress={handleSave}>
        <Text style={tw`text-white text-center text-lg mt-1 tracking-wider`}>Añadir</Text>
      </TouchableOpacity>

      
          </View>
         

        </View>
      </ScrollView>
    </View>
  );
};

export default PatientInformation;
