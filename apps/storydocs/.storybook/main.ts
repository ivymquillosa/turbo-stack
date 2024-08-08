// import { dirname, join, resolve } from 'path'

// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, 'package.json')))
// }

// const config: any = {
//   // stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],
//   stories: ['../stories/*.mdx', '../stories/*.stories.tsx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   addons: [
//     getAbsolutePath('@storybook/addon-links'),
//     getAbsolutePath('@storybook/addon-essentials'),
//     getAbsolutePath('@storybook/addon-docs')
//   ],
//   framework: {
//     name: getAbsolutePath('@storybook/react-vite'),
//     options: {}
//   },

//   // core: {
//   //   builder: '@storybook/builder-vite', // 👈 The builder enabled here.
//   // },

//   core: {
//     disableTelemetry: true // 👈 Disables telemetry
//   },

//   async viteFinal(config, { configType }) {
//     // customize the Vite config here
//     return {
//       ...config,
//       define: { 'process.env': {} },
//       resolve: {
//         extensions: [".mdx", ".mjs", ".js", ".jsx", ".ts", ".tsx"],

//         alias: [
//           {
//             find: 'ui',
//             replacement: resolve(__dirname, '../../../packages/ui/')
//           }
//         ]
//       }
//     }
//   },

//   docs: {
//     autodocs: true
//   },

//   staticDirs: ['../public']
// }

// export default config
import { dirname, join } from 'path'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config = {
  stories: ['../stories/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },

  core: {
    disableTelemetry: true // 👈 Disables telemetry
  },

  docs: {
    //👇 See the table below for the list of supported options
    autodocs: 'tag',
    defaultName: 'Docs'
  }
}