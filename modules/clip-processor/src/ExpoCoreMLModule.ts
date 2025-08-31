import { requireNativeModule } from 'expo-modules-core';

// Load the ClipProcessor native module
const ClipProcessorModule = requireNativeModule('ClipProcessor');

export async function processImage(imageUri: string): Promise<string> {
  return await ClipProcessorModule.processImage(imageUri);
}

export default ClipProcessorModule;
