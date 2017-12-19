const tslintRulesRecommended = require('tslint/lib/configs/recommended').rules;
const tslintConfig = {
    rulesDirectory: ["node_modules/tslint/lib/rules"],
    rules: Object.assign({}, tslintRulesRecommended, {
        "member-access": false,
        "ordered-imports": false,
        "quotemark": false,
        "no-var-keyword": false,
        "object-literal-sort-keys": false,
        "no-console": false,
        "arrow-parens": false,
        "max-line-length": false,
        "object-literal-key-quotes": false,
        "no-shadowed-variable": false,
        "only-arrow-functions": false,
        "no-var-requires": false,
        "semicolon": false,
        "interface-over-type-literal": false,
        "align": false,
        "no-angle-bracket-type-assertion": false,
        "whitespace": false,
    }),
};

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
        // "tslint",
    ],
    "rules": {
        'no-undef': 0,
        'no-unused-vars': 0,
        'prefer-destructuring': 1,
        "indent": 0,
        "unicorn/import-index": 0,
        // "tslint/config": [1, tslintConfig],
        "import/newline-after-import": 0,
        "import/no-duplicates": 1,
        "import/max-dependencies": [1, { "max": 10 }],
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "semi": [1, "always"],
    }
};
