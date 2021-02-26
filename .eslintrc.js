/* eslint-disable */

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react-hooks/recommended",
        "airbnb"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "flowtype"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": [0],
        "comma-dangle": ["error", "never"],
        "jsx-a11y/label-has-associated-control": [0, { assert: "either" }],
        "react/jsx-no-bind": [0],
        "jsx-a11y/click-events-have-key-events": [0],
        "jsx-a11y/no-static-element-interactions": [0],
        "react/no-unused-state": [0],
        "react/jsx-boolean-value": [0],
        "no-unneeded-ternary": [0],
        "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
        "arrow-parens": [0],
        "prefer-template": [0],
        "import/no-extraneous-dependencies": [0],
        "react/jsx-props-no-spreading": [0],
        "no-param-reassign": [0], // need to remove
        "react/forbid-prop-types": [0], // need to check
        "quote-props": [0], // need to remove
        "space-unary-ops": [0], // need to remove
        "react/prop-types": [0], // need to remove
        "jsx-quotes": [0], // need to remove
        "react/no-array-index-key": [0], // need to remove
        "radix": [0], // need to remove
        "no-nested-ternary": [0], // need to remove
        "no-lonely-if": [0], // need to remove
        "react/jsx-fragments": [0], // need to remove
        "prefer-spread": [0], // need to remove
        "camelcase": [0], // need to remove
        "array-callback-return": [0], // need to remove
        "consistent-return": [0], // need to remove
        "jsx-a11y/no-noninteractive-element-interactions": [0], // need to remove
        "no-restricted-syntax": [0], // need to remove
        "prefer-object-spread": [0], // need to remove
        "import/prefer-default-export": [0], // need to remove
        "no-confusing-arrow": [0], // need to remove
        "no-cond-assign": [0], // need to remove
        "prefer-destructuring": [0], // need to remove
        "no-return-assign": [0], // need to remove
        "jsx-a11y/control-has-associated-label": [0], // need to remove
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-underscore-dangle": [0],
        "object-property-newline": [0],
        "max-len": ["error", { "code": 200 }]
    }
};
