module.exports =
{
  name: "FT",
  displayName: "Functional Testing",
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "./test/jest.setup.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/*.ts"
  ],
  coverageDirectory: "./test/FT/coverage",
  testEnvironment: "node",
  testMatch: [
    "**/test/FT/**/*.spec.ts"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/test/fixtures/"
  ]
};
