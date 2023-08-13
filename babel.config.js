module.exports = {
  presets: [ 
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],



  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
