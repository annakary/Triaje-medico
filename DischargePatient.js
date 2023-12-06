import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const DischargePatient = () => {
  const navigation = useNavigation();
  const [patientData, setPatientData] = useState({
    name: '',
    lastname: '',
    age: '',
    curp: '',
    date_of_birth: '',
    blood_type: '',
  });

  const handleInputChange = (field, value) => {
    setPatientData({
      ...patientData,
      [field]: value,
    });
  };

  const apiUrl = 'https://ns02.cloud/api/patients';

  //validaciones

  const validateForm = () => {
    if (!patientData.name || !patientData.lastname || !patientData.curp) {
      Alert.alert('Campos Requeridos', 'Nombre, apellidos y CURP son campos obligatorios');
      return false;
    }
    // Validar el formato del CURP
    const curpRegex = /^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9A-Z]{2}$/;
    if (!curpRegex.test(patientData.curp)) {
      Alert.alert('Formato de CURP incorrecto', 'El CURP debe tener un formato válido');
      return false;
    }

    // Validar el tipo de sangre
    const validBloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
    if (!validBloodTypes.includes(patientData.blood_type)) {
      Alert.alert('Tipo de Sangre Incorrecto', 'El tipo de sangre debe ser O+, O-, A+, A-, B+, B-, AB+ o AB-');
      return false;
    }

    // Validar que el nombre y apellidos solo contengan letras
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(patientData.name) || !nameRegex.test(patientData.lastname)) {
      Alert.alert('Nombre y Apellidos Incorrectos', 'El nombre y los apellidos solo pueden contener letras');
      return false;
    }

    // Validar que la edad sea un número
    const ageRegex = /^[0-9]+$/;
    if (!ageRegex.test(patientData.age)) {
      Alert.alert('Edad Incorrecta', 'La edad debe ser un número');
      return false;
    }

    // Validar el formato de la fecha de nacimiento
    const dateOfBirthRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateOfBirthRegex.test(patientData.date_of_birth)) {
      Alert.alert('Formato de Fecha de Nacimiento incorrecto', 'La fecha de nacimiento debe tener el formato "AAAA-MM-DD"');
      return false;
    }
    return true; // El formulario es válido
  };

  const savePatientData = () => {
    if (validateForm()) {
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      })
        .then((response) => response.json())
        .then((data) => {
          Alert.alert('Éxito', 'Paciente guardado exitosamente');
        })
        .catch((error) => {
          Alert.alert('Error', 'Este paciente ya existe');
        });
    }
  };

  // Evento para el botón "Guardar"
  const handleSaveButtonPress = () => {
    savePatientData();
  };

  // Evento para el botón "Cancelar"
  const handleCancelButtonPress = () => {
  };

  return (
    <View style={tw`flex-1 items-center justify-center relative bg-white`}>
      <View style={tw`bg-[#102536] w-full top-0 `}>
        <Text style={tw`text-white  text-3xl tracking-widest	pl-5  bottom-5 mt-10`}>Alta de Paciente</Text>
      </View>
      <ScrollView>
        {/* Nombre */}
        <View style={tw`mb-5 mt-10`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Nombre(s)</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            value={patientData.name}
            onChangeText={(text) => handleInputChange('name', text)}
            required
          />
        </View>

        {/* Apellidos */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Apellidos</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            value={patientData.lastname}
            onChangeText={(text) => handleInputChange('lastname', text)}
            required
          />
        </View>

        {/* Edad */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Edad</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            value={patientData.age}
            onChangeText={(text) => handleInputChange('age', text)}
            required
          />
        </View>

        {/* CURP */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>CURP</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            value={patientData.curp}
            onChangeText={(text) => handleInputChange('curp', text)}
            required
          />
        </View>

        {/* Fecha de Nacimiento */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Fecha de Nacimiento</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            value={patientData.date_of_birth}
            onChangeText={(text) => handleInputChange('date_of_birth', text)}
            required
          />
        </View>

        {/* Tipo de Sangre */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-xl font-medium text-black mb-2`}>Tipo de Sangre</Text>
          <TextInput
            style={tw`w-96 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg p-2.5`}
            value={patientData.blood_type}
            onChangeText={(text) => handleInputChange('blood_type', text)}
            required
          />
        </View>

        {/* Botones */}
        <View style={tw`flex flex-col items-center `}>
          <View style={tw`flex flex-row`}>
            <TouchableOpacity
              onPress={handleCancelButtonPress} // Asigna el evento para el botón "Cancelar"
              style={tw`w-40 mr-2 bg-[#E12D2E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center`}
            >
              <Text style={tw`text-white font-medium text-center text-xl`}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSaveButtonPress} // Asigna el evento para el botón "Guardar"
              style={tw`ml-2  w-40 bg-[#3CA62E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center`}
            >
              <Text style={tw`text-white font-medium text-center text-xl`}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DischargePatient;