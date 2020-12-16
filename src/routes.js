import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderLeft from './components/HeaderLeft';

import HomeScreen from './pages/SignOut/Home';
import CpfScreen from './pages/SignOut/Cpf';
import NameScreen from './pages/SignOut/Name';
import EmailScreen from './pages/SignOut/Email';
import SelfScreen from './pages/SignOut/Self';
import SuccessScreen from './pages/SignOut/Success';
import CameraScreen from './pages/SignOut/Camera';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            borderWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
          },
          title: false,
          headerBackTitleVisible: false,
          headerLeft: () => <HeaderLeft />
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerLeft: () => <HeaderLeft iconName="close" /> }} name="Cpf" component={CpfScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen name="Self" component={SelfScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Camera" component={CameraScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}