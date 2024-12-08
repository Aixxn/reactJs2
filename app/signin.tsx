import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {  useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleContinue = () => {
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./image/white_logo.png')} // Adjust the path if necessary
            style={styles.image}
            onError={(error) => console.log('Image loading error:', error)}
          />
          <Text style={styles.text1}>Aseestant</Text>
          <Text style={styles.reminder}>Please Enter your Mobile Number to Login/Sign Up</Text>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 50,
    alignItems: 'center', // Center elements inside the logo container
  },
  image: {
    width: 500,
    height: 150,
    marginTop: 200,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  reminder: {
    fontSize: 16,
    color: '#808080',
    marginTop: 20, // Adjust spacing between the image and reminder text
    textAlign: 'center', // Center-align the reminder text
    opacity: 0.8,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    textAlign: 'left',
  },
  continueButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 20,
    shadowOpacity: 1.9,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1.54,
    elevation: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 250,
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
    textAlign: 'center',
  },
});

export default SignInScreen;

