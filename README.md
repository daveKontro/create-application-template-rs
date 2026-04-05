![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Fcreate-application-template-rs%2Fmain%2Fpackage.json&query=%24.version&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEnRFWHRfcV9pY29PcmlnRGVwdGgAMzLV4rjsAAABRUlEQVQ4jcWSP0tCYRyFz++9gV3KCEoroxZxSiLEoCT7MwUGrQ1tfoD28AMEFTQ1F40OOWVLcPMSDqENrU0SBHUpQrA/cr2nQTEwSm8QnfGF5znnhR/w35HWh0LuYUsoYZara9HV0RcAMAyjy6uFjwi+Tc/7k98Krs4fZym1CxFRNfJYHJUCAApTSrgOAEKsRBb9p18E+fyt7rH1MwFjP24mrquV5/hMIlQGAAUA6XRa67b1TFu4Xjnp6e0/yWZvPE1BcHhpA+ByW7g5AnNDPX2bjS9QiqZVEshYpwIAoEOrTF9ACqY1ooA7N/Bn1IT6HViPbVdFAKCYuy+JqHFXNPHkrQwG6gtE23HbLsLdUELeFQBE4gP74mCPJDuBa5CDqbhvG2i9RMOKQkOSDmJQCILUG3WvdFDSlFySzmFkwW+6Xfx3+QCAd27zrNWLdgAAAABJRU5ErkJggg==&label=version&labelColor=%23081e28&color=%23fd05a0)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Fcreate-application-template-rs%2Fmain%2Fpackage.json&query=%24.engines.node&logo=nodedotjs&label=node&labelColor=%23081e28&color=%23fd05a0)
![Static Badge](https://img.shields.io/badge/npm->=v10-%23fd05a0?logo=npm&labelColor=%23081e28)

# Create Application Template RS
This project aims to provide a configured application template for you to build upon.  

All configuration is fully visible and under your control to augment as you see fit.  

The template is a typescript enabled React application with a test suite and code linting.  

Rust-based 🦀 web bundler [Rspack](https://rspack.rs/) and compiler [SWC](https://swc.rs/) are utilized for fast bundling and transpiling 

See the template running live [here](https://www.createapplicationtemplaters.com/).  

## installation
first install globally  
```
npm install -g @epic-effx/create-application-template-rs@latest
```

then create your project  
```
npx @epic-effx/create-application-template-rs --name={my-project}
```

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

## compiler 🚀
this project uses React 19 with [React Compiler](https://react.dev/learn/react-compiler/introduction) opt-in

it takes advantage of the React Compiler's automatic optimization

React Compiler's ESLint integration is also included via `eslint-plugin-react-hooks`

`babel-loader` is used for compilation; see Rspack [docs](https://rspack.rs/guide/tech/react#react-compiler)

## tsconfig
focused on type checking; SWC is used for transpiling  

## git hooks
scripts in `.husky/pre-commit` are run on commits for quality control  

run `npm prepare` to enable husky and use the provided pre-commit file  

warning: running `npx husky init` will re-initiate husky and overwrite the provided pre-commit file  

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
```
console.log(process.env.PORT)
```

### build settings

some environmental setting are explicitly set in the npm scripts using `cross-env`

- `development` when running the dev server  
- `production` when running the build  

these variables set the OS env as early as possible and control build tool behavior

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

this version includes minimal npm `overrides` to patch known transitive vulnerabilities in tooling

they are intentionally limited to patch-level upgrades within the same major

you can remove them in the future by:

  1. running `npm update`
  2. removing the `overrides` section
  3. reinstalling dependencies
  4. running `npm audit`


