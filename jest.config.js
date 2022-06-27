module.exports = {
  rootDir: './src',

  testMatch: ['**/?(*.|*-)+(spec|test).+(ts|tsx|js)'],
  coverageDirectory: './coverage/',
  cacheDirectory: './tmp/',
  collectCoverage: false,
  testTimeout: 300000
}
