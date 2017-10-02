#!/usr/bin/env bash

# make sure CircleCI fails the build if this build script fails
# https://discuss.circleci.com/t/build-not-failing-even-test-exit-with-code-1/5818/4
set -euo pipefail

echo 'node version'
node -v
echo 'npm version'
npm -v
echo 'yarn version'
yarn --version

echo 'install dependencies...'
rm -rf node_modules/ > /dev/null 2>&1
yarn install

# build
NODE_ENV=production
yarn run clean
yarn run test -- --coverage
yarn run build