import * as MediaLibrary from 'expo-media-library';
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { processImage } from '../modules/clip-processor/src/ExpoCoreMLModule';

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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={loadAndProcessPhotos} style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 8 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Load & Process Photos</Text>
      </TouchableOpacity>
    </View>
  );
}
