// jest.config.js
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '.(ts|tsx)$': require.resolve('ts-jest/dist'),
    '.(js|jsx)$': require.resolve('babel-jest'), // jest's default
    "^.+\\.css$": "jest-transform-css",
  },
};
