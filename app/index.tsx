// Index.tsx
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useRef } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const swiperRef = useRef<Swiper | null>(null); // Create a ref for the Swiper component
  const navigation = useNavigation(); // Hook to navigate to other screens

  const walkthrough = [
    {
      id: 1,
      title: " ",
      desc: "Your innovative mobile companion for independence and accessibility for the visually impaired.",
    },
    {
      id: 2,
      title: " ",
      desc: "Seamless Navigation Easily access features\ndesigned to enhance independence and simplify daily tasks.",
    },
    {
      id: 3,
      title: " ",
      desc: "Stay Connected Aseestant ensures accessibility\nthrough intuitive and user-friendly technology.",
    },
    {
      id: 4,
      title: " ",
      desc: "Embrace Independence Experience a new level of\nconfidence and freedom with Aseestant by your side!",
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={require('./image/logo.png')} // Adjust the path if necessary
        style={styles.logo}
        onError={(error) => console.log('Image loading error:', error)}
      />
      <Text style={styles.text}>Welcome to{'\n'}Aseestant!</Text>

      <Swiper
        showsPagination={true}
        dotColor="#497DD7"
        activeDotColor="#000"
        ref={swiperRef} // Attach the ref to the Swiper component
      >
        {walkthrough.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Text style={styles.text3}>{item.title}</Text>
            <Text style={styles.text3}>{item.desc}</Text>
          </View>
        ))}
      </Swiper>

      <TouchableOpacity
        onPress={() => swiperRef.current?.scrollBy(1)} // Move to the next slide
        style={styles.nextButton}
      >
        <Text style={styles.text3}>Next</Text>
      </TouchableOpacity>

      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('signin' as never)} 
        style={styles.skipButton}
      >
        <Text style={styles.text3}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 140,
    marginBottom: 50,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 0,
    color: '#497DD7',
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 14,
    color: '#090F47',
    fontWeight: '300',
    lineHeight: 20,
    textAlign: 'center',
  },
  slide: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
  },
});

export default Index;
