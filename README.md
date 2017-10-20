# website-frontend

## Overview
UI frontend repository for the Providence Geeks website.  Built with React and webpack.

## Project Setup
1. Make sure you have read the Frontend Onboarding docs [here](https://github.com/ProvidenceGeeks/website-docs/wiki/Onboarding-Guide#frontend)

### Development
Runs the app in development mode. The page will automatically reload when changes are made, and you should see build errors and lint warnings in the console.

```
yarn develop
```

The page should open automatically, however if it doesn't the url is: [http://localhost:9000](http://localhost:9000).

### Production
Creates a minified bundled build, and outputs to the build folder.
```
yarn build
```

### Testing
Runs unit tests with [jest](https://facebook.github.io/jest/)
```
yarn test
```

For TDD (recommended for local development), add the `watch` flag
```
yarn test --watch
```

To generate coverage, use
```
yarn test --coverage
```

### Demo
Run a production build locally
```
yarn serve
```


## Release Management
