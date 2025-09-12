import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import from the built JavaScript module
import { getCurrentTime, sayHello } from '../modules/hello-world/dist/index';

export default function Index() {
  const testHelloWorld = () => {
    try {
      const greeting = sayHello("Expo Developer");
      const currentTime = getCurrentTime();
      
      Alert.alert('Swift Module Test', `${greeting}\n\nTime: ${currentTime}`);
    } catch (error) {
      console.error('Error calling Swift module:', error);
      Alert.alert('Error', `Failed to call Swift module: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={testHelloWorld} style={styles.button}>
        <Text style={styles.buttonText}>Test Swift Module</Text>
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
  },
  button: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
