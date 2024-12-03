import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import {  useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();


  const handleContinue = () => {
    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/; // Simple regex for 10-digit phone number validation

    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
      return;
    }

    // Perform sign-in logic here
    console.log('Phone number:', phoneNumber);

    navigation.navigate('success' as never);
    };

  return (
    
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
        source={require('./image/white_logo.png')} // Adjust the path if necessary
        style={styles.image}
        onError={(error: any) => console.log('Image loading error:', error)}
      />
      <Text style={styles.text1}>Aseestant</Text>
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="+63 |"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10} // Restrict to 10 digits
        />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Add some padding on the sides
  },
  logoContainer: {
    marginBottom: 90,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  image: {
    width: 500,
    height: 150,
    resizeMode: 'contain',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    textAlign: 'left', // Align the text to the left
  },
  continueButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    shadowOpacity: 5.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%', // Full width for the button
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  text1: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text for better alignment

  },
});


export default SignInScreen;
