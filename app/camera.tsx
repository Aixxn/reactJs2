import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import {  useNavigation } from '@react-navigation/native';


export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      {/* Hamburger Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
        <Icon name="bars" size={30} color="white" />
      </TouchableOpacity>

      {/* Overlay and Side Navigation Menu */}
      {menuVisible && (
        <>
          {/* Transparent Overlay */}
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setMenuVisible(false)} // Close menu when tapping outside
          />

          {/* Side Navigation Menu */}
          <View style={styles.sideMenu}>
  {/* Profile Section */}
  <View style={styles.profileSection}>
        <Image
        source={require('./image/avatar-placeholder.png')} // Path to your image file
        style={styles.profilePicture}
             />
        <Text style={styles.userName}>[Your Name]</Text>
        <Text style={styles.userInfo}>User +6391111111</Text>
          </View>
          {/* Menu Items */}
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('settings' as never)}>
              <Icon name="cog" size={20} color="white" style={styles.menuIcon} />
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('faq' as never)}>
              <Icon name="question-circle" size={20} color="white" style={styles.menuIcon} />
              <Text style={styles.menuText}>FAQs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setMenuVisible(false)}>
              <Icon name="times" size={20} color="white" style={styles.menuIcon} />
              <Text style={styles.menuText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* Camera View */}
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    zIndex: 1,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#4C6ED7', // Blue background
    padding: 20,
    zIndex: 2,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  userInfo: {
    fontSize: 14,
    color: 'white',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff33', // Semi-transparent white
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: 'white',
  },
});
