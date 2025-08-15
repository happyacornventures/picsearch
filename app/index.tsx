import * as MediaLibrary from 'expo-media-library';
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const loadAllPhotos = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      const assets = await MediaLibrary.getAssetsAsync({ mediaType: 'photo', first: 100 });
      console.log(`Found ${assets.totalCount} photos`);
      console.log('First 100 photos:', assets.assets);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={loadAllPhotos} style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 8 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Load All Photos</Text>
      </TouchableOpacity>
    </View>
  );
}
