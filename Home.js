import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Home = () => {
  const navigation = useNavigation();

//   const openSidebar = () => {
//     navigation.navigate('ClassesScreen');
//     // Lógica para mostrar la barra lateral
//   };

//   const handleLogout = () => {
//     navigation.navigate('SubscriptionScreen');
//   };

  return (
    <View style={tw`flex-1 bg-[#1C1C1C]`}>
      {/* Barra de navegación */}
      <View style={tw`bg-[#1C1C1C]`}>
        {/* Botones */}
        <View style={tw`flex-row justify-between items-center p-4`}>
          <TouchableOpacity onPress={openSidebar} style={tw`flex-1`}>
            <Text style={tw`text-white text-xl`}>Abrir Sidebar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={tw`flex-1 items-end`}>
            <Text style={tw`text-white text-xl`}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
        {/* Línea separadora */}
        <View style={tw`bg-white h-1`} />
      </View>

      <ScrollView>
        <View style={tw`bg-[#1C1C1C] justify-center items-center`}>
          <View style={tw`flex flex-row items-center p-4`}>
            <View style={tw`flex items-center`}>
              <Image
                source={require('./assets/logo-gym.png')}
                style={tw`bottom 25`}
              />
            </View>
            
            <View style={tw`flex items-center ml-4`}>
              <Text style={tw`text-white text-center text-5xl font-extrabold`}>
                65 días
              </Text>
            </View>
          </View>
        </View>

        {/* Línea separadora */}
        <View style={tw`bg-white h-1`} />
        
        {/* Imagen 1: Hombros */}
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Hombros.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Hombros
          </Text>
        </View>

        {/* Imagen 2: Espalda */}
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Espalda.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Espalda
          </Text>
        </View>

        {/* Imagen 3: Bíceps */}
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Biceps.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Bíceps
          </Text>
        </View>

        {/* Imagen 4: Pecho */}
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Pecho.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Pecho
          </Text>
        </View>

        {/* Imagen 5: Pierna */}
        <View style={tw`justify-center items-center mt-6`}>
          <View style={tw`overflow-hidden rounded-xl`}>
            <Image
              source={require('./assets/Pierna.png')}
              style={tw`w-80 h-40 rounded-xl`}
            />
          </View>
          <Text style={tw`text-white text-center mt-2 text-lg`}>
            Pierna
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;