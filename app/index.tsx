import * as MediaLibrary from 'expo-media-library';
import { Text, View } from "react-native";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
