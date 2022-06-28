// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
    // "^.+\\.css$": "jest-transform-css",
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
};