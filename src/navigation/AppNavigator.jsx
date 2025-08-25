import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
// import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MapScreen from '../screens/MapScreen'

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

function Maintabs() {
  console.log('HomeScreen:', HomeScreen);
  console.log('ProfileScreen:', ProfileScreen);
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Profile" component={ProfileScreen} />
      <tab.Screen name="Map" component={MapScreen} />

    </tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Main" component={Maintabs} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
