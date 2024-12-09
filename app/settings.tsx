import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  const [engineDropdownVisible, setEngineDropdownVisible] = useState(false);
  const [voiceDropdownVisible, setVoiceDropdownVisible] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState('Default');
  const [selectedVoice, setSelectedVoice] = useState('Aaron (Default)');

  const engines = ['Default', 'Engine 1', 'Engine 2'];
  const voices = ['Aaron (Default)', 'Sophia', 'John', 'Olivia'];

  const toggleEngineDropdown = () => setEngineDropdownVisible(!engineDropdownVisible);
  const toggleVoiceDropdown = () => setVoiceDropdownVisible(!voiceDropdownVisible);

  const selectEngine = (engine: string) => {
    setSelectedEngine(engine);
    setEngineDropdownVisible(false);
  };

  const selectVoice = (voice: string) => {
    setSelectedVoice(voice);
    setVoiceDropdownVisible(false);
  };

  return (
    <ImageBackground
      source={require('./image/settings_bg.png')} // Background image
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={styles.content}>
          {/* Select Engine Dropdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Engine</Text>
            <Text style={styles.sectionsubTitle}>Text-to-speech Engine</Text>
            <TouchableOpacity style={styles.dropdown} onPress={toggleEngineDropdown}>
              <Text style={styles.dropdownText}>{selectedEngine}</Text>
              <FontAwesome name="chevron-down" size={18} color="#497DD7" />
            </TouchableOpacity>
            {engineDropdownVisible && (
              <View style={[styles.dropdownList, { zIndex: 999 }]}>
                <FlatList
                  data={engines}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.dropdownItem} onPress={() => selectEngine(item)}>
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          {/* Select Voice Dropdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Voice</Text>
            <TouchableOpacity style={styles.dropdown} onPress={toggleVoiceDropdown}>
              <Text style={styles.dropdownText}>{selectedVoice}</Text>
              <FontAwesome name="chevron-down" size={18} color="#497DD7" />
            </TouchableOpacity>
            {voiceDropdownVisible && (
              <View style={[styles.dropdownList, { zIndex: 999 }]}>
                <FlatList
                  data={voices}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.dropdownItem} onPress={() => selectVoice(item)}>
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          {/* Change Image Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Change Image</Text>
            <TouchableOpacity style={styles.imageButton}>
              <FontAwesome name="image" size={24} color="black" />
              <Text style={styles.body}>Select here</Text>
              <FontAwesome name="chevron-right" size={18} color="#497DD7" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    marginTop: 22,
    flex: 1, // Ensure the background takes up the entire screen
    justifyContent: 'center', // Optionally, adjust to center content on the background
  },
  body: {
    fontSize: 17,
    color: '#333',
    textAlign: 'left',
    marginRight: 170,
    opacity: 0.4,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Make the container slightly transparent to let the background show through
  },
  header: {
    backgroundColor: 'transparent', // Set the background to transparent
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginVertical: 12,
  },
  sectionTitle: {
    marginTop: 9,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionsubTitle: {
    marginTop: 4,
    marginLeft: 1,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 0.6, // Set the border width
    borderColor: 'black', // Set the border color (can be customized)
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownList: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    top: 60, // Position it below the dropdown
    width: '100%',
    zIndex: 999, // Ensure it's on top of other UI elements
  },
  dropdownItem: {
    paddingVertical: 12,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  imageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 0.6, // Set the border width
    borderColor: 'black',
  },
});
