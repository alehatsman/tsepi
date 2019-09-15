module.exports = {
  setupFilesAfterEnv: ['jest-expect-message'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
}
