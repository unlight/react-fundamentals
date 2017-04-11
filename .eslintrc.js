module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": [
        // "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "typescript",
    ],
    "rules": {
        "no-undef": 0,
        // "no-unused-vars": 0,
    }
};
