import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {  useNavigation } from '@react-navigation/native';


const SuccessScreen = () => {
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill('1'));
  const inputRefs = useRef<(TextInput | null)[]>([]); // Array of refs for inputs

  // Handle each code input
  const handleCodeInput = (value: string, index: number) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Automatically focus the next input if available
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const code = verificationCode.join('');
    
    // Directly check if the code is '111111' (you can replace it with any correct code)
    if (code === '111111') {
      Alert.alert('Success', 'Verification successful!');
      navigation.navigate('camera' as never);
    } else {
      Alert.alert('Invalid Code', 'Please enter a valid 6-digit code.');
    }
  };

  // Handle resend code action
  const handleResendCode = () => {
    Alert.alert('Resend Code', 'A new verification code has been sent.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the Verification Code</Text>
      <Text style={styles.subtitle}>
        Please enter the 6-digit verification code sent to you.
      </Text>
      <View style={styles.codeInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={verificationCode[index]}
            onChangeText={(value) => handleCodeInput(value, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SUBMIT CODE</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>The verification code will expire in 00:59</Text>
      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
        <Text style={styles.resendButtonText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  resendButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  resendButtonText: {
    fontSize: 16,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
