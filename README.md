# EvermoreDev's React Boilerplate
[![Build Status](https://travis-ci.org/evermoredev/react-boilerplate.svg?branch=master)](https://travis-ci.org/evermoredev/react-boilerplate) 

This React boilerplate is designed to get you up and running with all of the latest technologies in the React world.

## Technologies include:

* [React 15.3](https://github.com/facebook/react)
* [React Router 4](https://react-router.now.sh)
* [Babel 6](https://babeljs.io)
* [Jest](https://facebook.github.io/jest/docs/getting-started.html)
* [PostCSS-Loader](https://github.com/postcss/postcss-loader)
* [Webpack](https://webpack.github.io)
* [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
* [React Transform](https://github.com/gaearon/react-transform-hmr)

## Usage

```
npm install
npm start
http://localhost:4000
```

## Features

### [React](https://github.com/facebook/react)

The newest version of React with ES2016 modules and classes make your React components clean and easy to follow.

```jsx
import React from 'react';

class HomeView extends React.Component {

  render() {
    return (
      <div className="home-view">
        <h1>Welcome Home!</h1>
      </div>
    );
  }

}

export default HomeView;
```

### [React Router 4](https://react-router.now.sh)

Two example routes have already been built in, as well as a 404/Not Found page.

### [Babel 6](http://babeljs.io)

Already configured to use the latest ES2016 and ES2017 features.

### [Jest](https://facebook.github.io/jest/docs/getting-started.html)

Uses React's testing library [Jest](https://facebook.github.io/jest/docs/getting-started.html). Tests are set up out of the box. Simply run `npm test` to see Jest in action. Initial tests are located in `__tests__/` and follow the same folder structure as `src/`.

The tests also provide a simple example of using airbnb's Testing Utility [Enzyme](http://airbnb.io/enzyme/index.html) to mount React components.

### [PostCSS-Loader](https://github.com/postcss/postcss-loader)

Styling is set up for [Sass](http://sass-lang.com/) in the `src/components/styles` directory and the building is already configured. We've included [normalize.css](https://github.com/necolas/normalize.css/) for a good reset.

### [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)

From the docs:

> The webpack-dev-server is a little Node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via Sock.js.

## Still More...

### ESLint

Yeah, we're a little opinionated. We've added a lot of rules and always looking to add more. Make some suggestions if you have them!

### CHANGELOG.md

We've included a CHANGELOG with the project that we're keeping up with but highly recommend its use for your own project. Clean it out and start your own!

### [Travis](https://docs.travis-ci.com/)

We've included continuous integration testing with [Travis](https://docs.travis-ci.com/). Be sure to enable it in your repo.
