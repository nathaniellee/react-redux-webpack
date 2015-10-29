# react-redux-webpack

Basic scaffolding for a web application using WebPack for building, ESLint for linting, Mocha with Chai and Sinon for unit testing, a simple Node server to deliver static files, Less for CSS pre-processing, and Babel for transpiling JavaScript using ES6/2015/Harmony/Next syntax to JavaScript using ES5 syntax.

## Basic usage

```
npm install
npm start
```

This first lints, then runs unit tests, then bundles the source files, and finally launches a basic node server. Go to `http://localhost:3000` in your browser to see the placeholder application.

### Additional npm commands

* *bundle* - Runs `webpack --progress --colors` to build the application.
* *lint* - Runs `eslint src` to lint everything in the `src` directory.
* *test* - Runs `mocha --opts ./test/mocha.opts --compilers js:babel/register --recursive test/**/*.jsx` to run all unit test spec files (must end with `jsx` extension) in the `test` directory.
