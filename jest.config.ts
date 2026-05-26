import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  rootDir: '.',
  verbose: true,
  clearMocks: true,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^#src/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: ['<rootDir>/specs/**/*.spec.{ts,tsx}']
};
export default config;
