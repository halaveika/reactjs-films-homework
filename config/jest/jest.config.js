
const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, '../../'),
    verbose: true,
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleNameMapper:{
      "\\.(css|less|sass|scss)$": path.join(__dirname, '__mocks__/styleMock.js'),
      "\\.(gif|ttf|eot|svg)$":  path.join(__dirname, '__mocks__/fileMock.js')},
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    }
};
