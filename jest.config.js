module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Transforma arquivos JS, JSX, TS, TSX
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-navigation|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-native-community/.*)',
  ],
  setupFiles: [
    'formdata-polyfill', // Garantir que o polyfill seja carregado antes dos testes
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',  // Se necessário
  ],
};