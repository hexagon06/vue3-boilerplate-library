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

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- open the workspace in vscode using the `vue3-boilerplate-library.code-workspace` file.
- open vscode extensions with `Ctrl+Shift+X` and search for `@recommended`. Install all recommended extenstions using the ![cloud icon](https://freeiconshop.com/wp-content/uploads/edd/download-cloud-outline.png)

## Vite 

Using [Vite](https://vitejs.dev/) to develop and build.

## Vue 3

Using [Vue 3](https://vuejs.org/) framework for components, using the composition api.

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## TypeScript

Written using [TypeScript](https://www.typescriptlang.org/)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Rollup

Packaging components using [Rollup.js](https://rollupjs.org/guide/en/)

Rollup is now configured in the [`vite.config.ts`](./vite.config.ts)

## Storybook

Write documentation and create a testable frontend using [Storybook](https://storybook.js.org/)

### Chromatic

This library is setup to be published with Chromatic.
replace the token in the 'chromatic' script in `package.json`

for more info look at the [publish Storybook page](https://storybook.js.org/docs/react/sharing/publish-storybook)

## Other opinionated frameworks

There may be other frameworks to be added later. However, when they are very opinionated or add a large dependency (like bootstrap or tailwind), they may live on a separate branch.

# ToDo

- Find a good way to package images and other assets
- Choose and add a unittest framework
- See if there is a better way to do things with npx
- Add [.npmrc](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-a-local-npmrc-file)
- snippets
