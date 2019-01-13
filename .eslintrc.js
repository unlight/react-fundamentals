module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        'ecmaFeatures': {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:unicorn/recommended",
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "unicorn",
        "import",
        "typescript",
        "tslint",
    ],
    "rules": {
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-console": 1,
        "prefer-destructuring": 1,
        "no-unused-expressions": 1,
        "indent": 0,
        "unicorn/import-index": 0,
        "import/newline-after-import": 0,
        "import/no-duplicates": 1,
        "import/max-dependencies": [1, { "max": 10 }],
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "semi": [1, "always"],
        "react/prop-types": 0,
        'tslint/config': [1, {
            configFile: 'tsconfig.json',
            lintFile: './tslint.json',
        }],
    }
};
