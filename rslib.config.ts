import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  lib: [
    {
      dts: true,
      format: 'esm',
    },
    {
      dts: true,
      format: 'cjs',
    },
  ],
  output: {
    target: 'web',
  },
  performance: {
    chunkSplit: {
      override: {
        chunks: 'all',
      },
    },
  },
  plugins: [pluginReact()],
});
