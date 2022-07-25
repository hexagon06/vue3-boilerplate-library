# Changelog

Based on [keepachangelog.com](https://keepachangelog.com/en/1.0.0/)

## Unversioned

## [0.1.0] - 2022-07-25 

### Added

- story for `HelloWorlds`

### Changed

- Moved Vite Readme to README.md
- Renamed `HelloWorld2` to `HelloWorlds`
- Made `HelloWorlds` an example of nesting
- Colors for `HelloWorld`

## [0.0.6] - 2022-07-25 Building fixes

### Fixed

- moved storybook dependency to dev dependencies because storybook is not needed for the consuming library
- readded mistakenly removed code for vite build

## [0.0.5] - 2022-07-25 scss

### Added

- scss useage in Storybook
- css from scss in build result

## [0.0.4] - 2022-07-06 Linting  & Formatting

### Added

- linting support with `eslint` and configured it as the default formatter in the workspace
- added format document on save as

## [0.0.3] - 2022-07-06 Starting Storybook

- Initialized Storybook 
- Ignore Storybook pages from export
- Support for exporting imported css files
- Added useage isntructions to the README.md

## Changed

- Updated `vue-tsc` to latest

## removed

- `yarn dev` script and running vite as a site support.

## [0.0.2] - 2022-07-06 Creating Vite Library

### Added

- Ran `yarn create vite` using node `v14.19.3`
- Changed `vite.config.ts` and `package.json` for library building using [this guide](https://jivancic.com/posts/build-a-component-library.html#components)

## [0.0.1] - 2022-07-06 Initial Intent

### Added

- Readme with the plan.
- Changelog
- Lincence
- package.json
