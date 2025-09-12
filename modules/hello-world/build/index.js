import { requireNativeModule } from 'expo-modules-core';
// Load the HelloWorld native module
const HelloWorldModule = requireNativeModule('HelloWorld');
/**
 * Synchronous function to get a greeting from Swift
 */
export function sayHello(name) {
    return HelloWorldModule.sayHello(name);
}
/**
 * Asynchronous function to get a greeting from Swift
 */
export async function sayHelloAsync(name) {
    return await HelloWorldModule.sayHelloAsync(name);
}
/**
 * Get current time from Swift
 */
export function getCurrentTime() {
    return HelloWorldModule.getCurrentTime();
}
export default HelloWorldModule;
//# sourceMappingURL=index.js.map