import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './signin';
import SuccessScreen from './success';
import Camera from './camera';

type RootStackParamList = {
  SignIn: undefined;
  Success: { phoneNumber: string };
  Camera: undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }} 
        />
        <Stack.Screen 
          name="Success" 
          component={SuccessScreen} 
          options={{ title: 'success' }} 
        />  
        <Stack.Screen 
          name="Camera" 
          component={Camera} 
          options={{ title: 'Camera' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
