![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Fcreate-application-template%2Fmain%2Fpackage.json&query=%24.version&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEnRFWHRfcV9pY29PcmlnRGVwdGgAMzLV4rjsAAABRUlEQVQ4jcWSP0tCYRyFz++9gV3KCEoroxZxSiLEoCT7MwUGrQ1tfoD28AMEFTQ1F40OOWVLcPMSDqENrU0SBHUpQrA/cr2nQTEwSm8QnfGF5znnhR/w35HWh0LuYUsoYZara9HV0RcAMAyjy6uFjwi+Tc/7k98Krs4fZym1CxFRNfJYHJUCAApTSrgOAEKsRBb9p18E+fyt7rH1MwFjP24mrquV5/hMIlQGAAUA6XRa67b1TFu4Xjnp6e0/yWZvPE1BcHhpA+ByW7g5AnNDPX2bjS9QiqZVEshYpwIAoEOrTF9ACqY1ooA7N/Bn1IT6HViPbVdFAKCYuy+JqHFXNPHkrQwG6gtE23HbLsLdUELeFQBE4gP74mCPJDuBa5CDqbhvG2i9RMOKQkOSDmJQCILUG3WvdFDSlFySzmFkwW+6Xfx3+QCAd27zrNWLdgAAAABJRU5ErkJggg==&label=version&labelColor=%23454145&color=%23cec2eb)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Fcreate-application-template%2Fmain%2Fpackage.json&query=%24.engines.node&logo=nodedotjs&label=node&labelColor=%23454145&color=%23cec2eb)
![Static Badge](https://img.shields.io/badge/npm->=v10-%23cec2eb?logo=npm&labelColor=%23454145)

# Create Application Template
This project aims to provide a configured application template for you to build upon.  

All configuration is fully visible and under your control to augment as you see fit.  

The template is a typescript enabled React application with a test suite and code linting.  

See the template running live [here](https://www.createapplicationtemplate.com/).  

NOTE this is a continuation of the long running project [create-application-template](https://www.npmjs.com/package/create-application-template)  

## installation
first install globally  
```
npm install -g @epic-effx/create-application-template@latest
```

then create your project  
```
npx @epic-effx/create-application-template --name={my-project}
```

## newest features 🚀
React 19 with [React Compiler](https://react.dev/learn/react-compiler/introduction) opt-in

this version takes advantage of the React Compiler's automatic optimization

it also includes the React Compiler's ESLint integration

## usage
webpack is used for code bundling and the development server  

run development server and test suite (on http://localhost:3333 by default)  
```
npm run dev
```

build static bundle  
```
npm run build
```

## tsconfig
focused on type checking; babel is used for transpiling  

## pre-commit
scripts in `.husky/pre-commit` are run on commits for quality control  

add or remove scripts you'd like run before code is committed  

## test suite
to create a test follow this file naming format: `*.{spec,test}.{ts,tsx}`  

run the test suite stand alone like so  
```
npm run test
```

## code linting
linting rules are in `.eslintrc.js`; install the ESLint plugin if using vscode  
```
npm run lint
```

css linting rules are in `.stylelintrc.js`; install the Stylelint plugin if using vscode  
```
npm run stylelint
```

## styles
styling is done using the style-components module, but straight CSS is supported

after instillation it is recommended to proceed using styled-components or CSS, but not both

if you proceed with styled-components: 
  - remove the single `.css` example in `/src/styles/`
  - that's it!

if you prefer CSS: 
  - alter `.stylelintrc.js` and `.husky/pre-commit` per the files' notes
  - remove `.ts` files from `/src/styles/` or "recreate" them in `.css`

## environmental settings

access environmental variables in code like so  
```js
console.log(process.env.PORT)
```

### build settings

`NODE_ENV` and `BABEL_ENV` are explicitly set in the npm scripts using `cross-env`

- `development` when running the dev server  
- `production` when running the build  

these variables set the OS env as early as possible and control build tool behavior e.g. enabling or disabling development-only Babel plugins like React Fast Refresh

they are set in the scripts to guarantee consistent, production-safe builds across local, CI, and hosting environments

### `.env` variables

add new or alter existing environmental variables via the `.env` file  

`.env` is intended for application runtime configuration - not build tool configuration

the following variables exist in the default configuration and can be altered  

#### develop (dev server)
```
# optional
PORT={port number}
INLINE_SIZE_LIMIT={default is 10000}
```

#### production (build)
```
# optional
INLINE_SIZE_LIMIT={default is 10000}
```

## dependency overrides

this version includes minimal npm `overrides` to patch known transitive vulnerabilities in webpack tooling

they are intentionally limited to patch-level upgrades within the same major

you can remove them in the future by:

  1. running `npm update`
  2. removing the `overrides` section
  3. reinstalling dependencies
  4. running `npm audit`


