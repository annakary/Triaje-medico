import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Home from './Home';
import Information from './Information';
import PatientInformation from './PatientInformation';
import PatientList from './PatientList';
import DischargePatient from './DischargePatient';
import EmergencyDicharge from './EmergencyDicharge';
import TriageList from './TriageList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="EmergencyDicharge" component={EmergencyDicharge}/>
      <Stack.Screen name="Information" component={Information}/>
      <Stack.Screen name="PatientInformation" component={PatientInformation}/>
      <Stack.Screen name="PatientList" component={PatientList}/>
      <Stack.Screen name="DischargePatient" component={DischargePatient}/>
      <Stack.Screen name="TriageList" component={DischargePatient}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


