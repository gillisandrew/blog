module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
      "prettier",
      "prettier/@typescript-eslint",
      "prettier/react",
    ],
    parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
    },
    overrides: [
      {
        files: ["src/graphql.d.ts"],
        rules: {
          "@typescript-eslint/prefer-interface": false,
          "@typescript-eslint/camelcase": false,
          "@typescript-eslint/array-type": false,
        }
      }
    ],
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  };
  