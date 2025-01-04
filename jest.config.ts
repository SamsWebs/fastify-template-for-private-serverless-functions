import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  rootDir: '.',
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(js|jsx)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: ['<rootDir>/specs/**/*.spec.{ts,tsx}']
};
export default config;