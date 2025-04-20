module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-navigation|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-native-community/.*)',
  ],
  setupFiles: [
    '<rootDir>/jest.setup.js',
    '@testing-library/jest-native/extend-expect'
  ],  
};
