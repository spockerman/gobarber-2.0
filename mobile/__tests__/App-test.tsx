/**
 * @format
 */

import 'react-native';
import 'react-native-gesture-handler/jestSetup';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('@react-native-community/async-storage', () =>
  require('@react-native-community/async-storage/jest/async-storage-mock'),
);
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
}));
jest.mock('../src/hooks', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});
jest.mock('../src/routes', () => () => null);

it('renders correctly', () => {
  renderer.create(<App />);
});
