module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/file-mock.js",
  },
  testMatch: ["**/__tests__/**/*.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupJest.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
};
