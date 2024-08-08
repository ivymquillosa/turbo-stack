# Get started with Turbostack
This collection represents a portion of my personal experience and knowledge, developed over time through working with a variety of UI libraries. I’ve applied different tools and techniques to create effective user interfaces, leveraging what I’ve learned to build well-crafted React components. Each element in this compilation highlights my ability to use these libraries to create both functional and visually appealing interfaces.

These are some of the technologies used in creating these Turbostack UI Components:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework for rapid UI development
- 📦 [PNPm](https://pnpm.io/) — Fast, disk space efficient package manager

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing
{/* - [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs */}


## Useful Commands
- `pnpm install` - Install all dependencies for the monorepo.
- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
{/* - `pnpm changeset` - Generate a changeset */}

## Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/storydocs`: Component documentation site with Storybook
- `common/classnames`: A utility function designed to handle and combine CSS class names
- `common/config-eslint`: ESLint preset
- `common/config-tailwind`: Shared `tailwind.config.ts`s used throughout the Turborepo
- `common/config-typescript`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/aria-components`: React components with [React Aria](https://react-spectrum.adobe.com/react-aria/) library
- `packages/handcrafted-components`: Built-from-scratch React components
- `packages/radix-components`: React components with [Radix UI](https://www.radix-ui.com/) library
- `stacked/dashboard`: Pending development
- `stacked/forms`: Pending development
- `stacked/cards`: Pending development

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `pnpm add`.

This example sets up your `.gitignore` to exclude all generated files, other folders like `node_modules` used to store your dependencies.


## Usage
After cloning, run `pnpm i` or `pnpm install` on your terminal.

<h4 style={{margin:'15px 0px 3px', fontWeight: 700}}>Develop</h4>
To develop all apps and packages, run the following command `pnpm dev`. For filtering a package, run `pnpm dev --filter=package-name`

<h4 style={{margin:'15px 0px 3px', fontWeight: 700}}>Build</h4>
To build all apps and packages, run the following command `pnpm build`. For filtering a package, run `pnpm build --filter=package-name`

<h4 style={{margin:'15px 0px 3px', fontWeight: 700}}>Storybook</h4>
For running storybook in development mode, run `pnpm storybook`. For running the build preview stories, run `pnpm preview-storybook`.

{/* Publish
To publish a package(s), run the following commands:

pnpm lint to check the whole source code for programmatic and stylistic errors.
pnpm format to format the whole source code to have a standard/uniform code format.
pnpm changeset to select which package(s) you like to publish.
pnpm version-packages to actually bump the package version and write your CHANGELOG.
pnpm release to build and publish to our private registry.
Then push all committed commits by the changeset cli. Then checkout to main branch and merge the publish branch so that the changeset clis next publish process will compare correctly it's new package versions, and release a package that has an actual update. */}

## Adding/removing/upgrading packages
You can add, remove and upgrade packages from within the project's root folder using PNpm's built-in commands.

The overall syntax is `pnpm add <package> --filter=<workspace-name>`.

Example for adding/removing/upgrading an external package to our `@stack/handcrafted-components` package:

- Install: `pnpm add styled-components --filter=@stack/handcrafted-components`
- Remove: `pnpm remove styled-components --filter=@stack/handcrafted-components`
- Upgrade: `pnpm up styled-components --filter=@stack/handcrafted-components`

## Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `pnpm build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.