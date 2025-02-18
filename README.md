# React Native Project

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Clone the Repository

```sh
git clone <your-repository-url>
cd <your-project-folder>
```

### Step 2: Install Dependencies

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

### Step 3: Start Metro

Metro is the JavaScript build tool for React Native. To start the Metro dev server, run the following command:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 4: Build and Run Your App

With Metro running, open a new terminal and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

For iOS, remember to install CocoaPods dependencies before running the app:

```sh
bundle install  # Install CocoaPods itself
bundle exec pod install  # Install native dependencies
```

Then, run:

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, your app should now be running in an emulator or on a connected device.

## Configuration

This project requires a `config.ts` file to store API keys and base URLs. Since this file contains sensitive data, it should not be committed to version control.

### Step 1: Create a `config.ts` file

In the `src/` directory, create a new file named `config.ts` and add the following content:

```ts
export const CONFIG = {
  API_KEY: 'YOUR_API_KEY_HERE',
  BASE_URL: 'http://www.omdbapi.com',
};
```

### Step 2: Add `config.ts` to `.gitignore`

To prevent committing sensitive data, open your `.gitignore` file and add:

```
src/config.ts
```

### Step 3: Using the Configuration in Your Code

You can now import and use the configuration in your app:

```ts
import { CONFIG } from './config';

console.log(CONFIG.API_KEY, CONFIG.BASE_URL);
```

## Modify Your App

Open `App.tsx` and make changes. Your app will automatically update when saved, thanks to [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

To force a reload:
- **Android**: Press <kbd>R</kbd> twice or open the **Dev Menu** (`Ctrl + M` on Windows/Linux, `Cmd + M` on macOS).
- **iOS**: Press <kbd>R</kbd> in the iOS Simulator.

## Troubleshooting

If you run into issues, check the [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

## Learn More

- [React Native Website](https://reactnative.dev)
- [Environment Setup](https://reactnative.dev/docs/environment-setup)
- [Learn the Basics](https://reactnative.dev/docs/getting-started)
- [React Native Blog](https://reactnative.dev/blog)
- [React Native GitHub](https://github.com/facebook/react-native)

## Congratulations! 🎉

You've successfully set up and configured your React Native app! 🚀

