/* eslint-disable */
module.exports = {
    "verbose": false,
    "transform": {
        "^.+\\.tsx?$": "./node_modules/ts-jest/preprocessor.js"
    },
    "collectCoverage": false,
    "coverageDirectory": "~testresults",
    "coverageReporters": [
        "lcov",
        "text",
    ],
    "collectCoverageFrom": [
        "src/**/*.tsx",
        "src/**/*.ts",
        "!src/**/*.spec.ts",
        "!src/**/*.spec.tsx",
    ],
    "moduleNameMapper": {
        "react-eventmanager": "react-eventmanager/lib/esm"
    },
    "testMatch": [
        "<rootDir>/src/**/*.spec.ts",
        "<rootDir>/src/**/*.spec.tsx"
    ],
    // "testRegex": ".*\\.spec\\.tsx?$",
    "moduleFileExtensions": [
        "js",
        "ts",
        "tsx"
    ]
};
