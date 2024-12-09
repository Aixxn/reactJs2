import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Use FontAwesome for back arrow icon

export default function FAQScreen() {
  const navigation = useNavigation(); // Hook to navigate between screens

  return (
    <ImageBackground
      source={require('./image/faqs_bg.png')} // Background image
      style={styles.imageBackground}
      resizeMode="cover"
    >
      {/* Sticky Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Navigate back on press
        >
          <FontAwesome name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={require('./image/avatar-placeholder.png')} // Add your placeholder image here
          style={styles.profilePicture}
        />
        <Text style={styles.greetingText}>Hi, [Name]</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions (FAQs)</Text>

          {/* FAQ Items */}
          <View style={styles.faqItem}>
            <Text style={styles.question}>What is Aseestant?</Text>
            <Text style={styles.answer}>
              Aseestant is a mobile app powered by AI designed to assist visually impaired individuals by recognizing objects in their environment and providing descriptions through voice feedback.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>How does Aseestant work?</Text>
            <Text style={styles.answer}>
              Aseestant uses the phone’s camera to scan objects and convert the visual data into audio feedback, helping users understand their surroundings in real-time.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>Can I use Aseestant offline?</Text>
            <Text style={styles.answer}>
              No, the app requires an active internet connection to function, as the AI processing happens in the cloud.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>How do I scan an object?</Text>
            <Text style={styles.answer}>
              Simply open the app, and the camera will activate. Point your phone toward the object or area you wish to scan, and the app will provide a description via voice feedback.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>How do I navigate the app without using the touchscreen?</Text>
            <Text style={styles.answer}>
              Aseestant allows you to use physical buttons for easier navigation. You can set up the button controls in the settings.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>What should I do if the app fails to recognize an object?</Text>
            <Text style={styles.answer}>
              Ensure your camera lens is clean and the lighting is sufficient. If the issue persists, check your internet connection or restart the app.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.question}>Is there customer support available?</Text>
            <Text style={styles.answer}>
              Yes, you can reach our support team through the settings menu, where you’ll find contact details or an option to report issues.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#70B4F8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1, // Ensure the header is above other content
    elevation: 3, // Add shadow for better visibility
  },
  backButton: {
    marginRight: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingTop: 80, // Add padding to account for the sticky header
    paddingHorizontal: 20,
  },
  faqSection: {
    marginTop: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
});
