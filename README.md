?# website-frontend

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

#### Mobile Development and Testing
For testing from a mobile device
1. Make sure your phone and device are on the same network
1. Find the internal address of your machine, something like `192.168.x.y` - [OSX][] / [Linux][] / [Windows][]
1. Run the `develop` task and pass a `--host` flag to **webpack-dev-server**, e.g. `yarn run develop --host 0.0.0.0`
1. From your mobile device, open up the address in step two and the port, e.g. `http://192.168.x.y:9000`

[Be aware](https://en.wikipedia.org/wiki/0.0.0.0) that using address `0.0.0.0` opens up the host machine to be accessible from _all_ IP addresses.
Hence we avoid making this the default host unless explicitly needed.

[OSX]: http://osxdaily.com/2010/11/21/find-ip-address-mac/
[Linux]: https://askubuntu.com/questions/430853/how-do-i-find-my-internal-ip-address
[Windows]: https://www.digitalcitizen.life/find-ip-address-windows

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
Release management and procedure docs can be found in the [wiki](https://github.com/ProvidenceGeeks/website-docs/wiki/Release-Management)
