
import ExpoModulesCore

public class HelloWorldModule: Module {
  public func definition() -> ModuleDefinition {
    // Name of the module that will be used in JavaScript
    Name("HelloWorld")

    // Synchronous function that returns a greeting
    Function("sayHello") { (name: String?) -> String in
      let greeting = name ?? "World"
      return "Hello, \(greeting)! This message comes from Swift!"
    }

    // Asynchronous function example
    AsyncFunction("sayHelloAsync") { (name: String?) -> String in
      let greeting = name ?? "World"
      // Simulate some async work
      try await Task.sleep(nanoseconds: 500_000_000) // 0.5 seconds
      return "Hello, \(greeting)! This async message comes from Swift!"
    }

    // Function that returns current timestamp
    Function("getCurrentTime") { () -> String in
      let formatter = DateFormatter()
      formatter.dateStyle = .medium
      formatter.timeStyle = .medium
      return formatter.string(from: Date())
    }
  }
}
