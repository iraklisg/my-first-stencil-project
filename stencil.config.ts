import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-first-stencil-project',
  globalStyle: 'src/global/build.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
