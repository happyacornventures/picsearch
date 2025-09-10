import * as MediaLibrary from 'expo-media-library';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { processImage } from '../modules/clip-processor';
import { getCurrentTime, sayHello, sayHelloAsync } from '../modules/hello-world/src/index';

export default function Index() {
  const loadAndProcessPhotos = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      const assets = await MediaLibrary.getAssetsAsync({ mediaType: 'photo', first: 100 });
      console.log(`Found ${assets.totalCount} photos`);

      // Test processing the first photo
      if (assets.assets.length > 0) {
        try {
          const firstPhoto = assets.assets[0];
          console.log('Processing photo:', firstPhoto.uri);
          const result = await processImage(firstPhoto.uri);
          console.log('Processing result:', result);
          Alert.alert('Success', `Processed image: ${result}`);
        } catch (error) {
          console.error('Error processing image:', error);
          Alert.alert('Error', `Failed to process image: ${error}`);
        }
      }
    }
  };

  const testHelloWorld = () => {
    try {
      // Test synchronous function
      const greeting = sayHello("Expo Developer");
      console.log('Sync greeting:', greeting);
      
      // Test getting current time
      const currentTime = getCurrentTime();
      console.log('Current time from Swift:', currentTime);
      
      Alert.alert('Swift Module Test', `${greeting}\n\nTime: ${currentTime}`);
    } catch (error) {
      console.error('Error calling Swift module:', error);
      Alert.alert('Error', `Failed to call Swift module: ${error}`);
    }
  };

  const testHelloWorldAsync = async () => {
    try {
      // Test asynchronous function
      const greeting = await sayHelloAsync("Async Expo Developer");
      console.log('Async greeting:', greeting);
      Alert.alert('Async Swift Module Test', greeting);
    } catch (error) {
      console.error('Error calling async Swift module:', error);
      Alert.alert('Error', `Failed to call async Swift module: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={testHelloWorld} style={styles.button}>
        <Text style={styles.buttonText}>Test Swift Module (Sync)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={testHelloWorldAsync} style={[styles.button, styles.buttonSecondary]}>
        <Text style={styles.buttonText}>Test Swift Module (Async)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={loadAndProcessPhotos} style={[styles.button, styles.buttonPrimary]}>
        <Text style={styles.buttonText}>Load & Process Photos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#FF9500',
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
