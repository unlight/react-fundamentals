/* eslint-disable */
module.exports = {
    "verbose": false,
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
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
