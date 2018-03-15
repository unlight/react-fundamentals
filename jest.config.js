module.exports = {
    "verbose": false,
    "transform": {
        "^.+\\.tsx?$": "./node_modules/ts-jest/preprocessor.js"
    },
    "collectCoverage": false,
    "coverageDirectory": ".testresults",
    "coverageReporters": [
        "lcov",
        "text",
    ],
    "collectCoverageFrom": [
        "src/**/*.ts",
        "!src/**/*.spec.ts",
        "!src/**/*.ispec.ts"
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
