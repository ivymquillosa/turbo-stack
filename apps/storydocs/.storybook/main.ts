import { dirname, join, resolve } from 'path'

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}
export default {
  // stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    stories: ['../stories/*.mdx', '../stories/*.stories.tsx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
      },

  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
 
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};