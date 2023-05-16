module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
		"airbnb",
		'airbnb-typescript',
		"airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
		project: './tsconfig.json'
    },
    "plugins": [
        "react",
        "@typescript-eslint",
		"prettier"
    ],
    "rules": {
		  'react/react-in-jsx-scope': 0,
		  'react/function-component-definition': 0,
      'array-callback-return': 0,
		  'react/button-has-type': 0,
      'no-param-reassign': 0,
      '@typescript-eslint/no-unused-expressions': 0,
		  "jsx-a11y/label-has-associated-control": ["error", {
		  	"required": {
		  		"some": ["nesting", "id"]
		  	}
	  	}],
		  "jsx-a11y/label-has-for": ["error", {
		  	"required": {
		  		"some": ["nesting", "id"]
	  		}
	  	}],
	  	'import/prefer-default-export': 0,
		  '@typescript-eslint/default-param-last': 0,
    }
}