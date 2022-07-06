# vue3-boilerplate-library

Project starter for Vue 3 libraries.

## How to start

You can create a fork of this project and start that way.

You could also use [degit](https://github.com/Rich-Harris/degit) instead.
```
degit hexagon06/vue3-boilerplate-library
```

Then replace all instances of `vue3-boilerplate-library` in the project with your library name.

Then configure your target repository

Check all properties in [package.json](./package.json)

## Working with the library

This setup enables you to develop components using the Vue.js framework and quickly test and validate using storybook. The library is not intended to be run as a normal Vite project, therefore the `dev` script is removed from the `package.json`.

To view and test your components you create a `<componentname>.stories.js` file and [write a story](https://storybook.js.org/docs/vue/writing-stories/introduction). Then start storybook using yarn
```
yarn storybook
```

### New Library version

To create a new library version;
- Track your changes in [CHANGELOG.md](./CHANGELOG.md)
- Commit your changes
- Run `yarn version` and increment using [semantic versioning](https://semver.org/)
- Push your commits if you have a remote
- Run `yarn publish` to publish the library

### Documentation

The pages you view using storybook can be exported as a static webpage, which you then can publish to a hosting service. 
```
yarn build-storybook
```

# Libraries & Dependencies

## Vite 

Using [Vite](https://vitejs.dev/) to develop and build.

## Vue 3

Using [Vue 3](https://vuejs.org/) framework for components, using the composition api.

## TypeScript

Written using [TypeScript](https://www.typescriptlang.org/)

## Rollup

Packaging components using [Rollup.js](https://rollupjs.org/guide/en/)

Rollup is now configured in the [`vite.config.ts`](./vite.config.ts)

## Storybook

Write documentation and create a testable frontend using [Storybook](https://storybook.js.org/)

## Other opinionated frameworks

There may be other frameworks to be added later. However, when they are very opinionated or add a large dependency (like bootstrap or tailwind), they may live on a separate branch.

# ToDo

- Find a good way to package images and other assets
- Find a good way to compile and package scss
- Choose and add a unittest framework
- See if there is a better way to do things with npx
- Add Linting
- Add [.npmrc](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-a-local-npmrc-file)
- Move the [`VITE-README`](./VITE-README.md) content to `README.md`
- workspace file, snippets
