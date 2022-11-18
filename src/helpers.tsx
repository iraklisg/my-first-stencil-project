import { getAssetPath, h, Host } from '@stencil/core';

export const StyledHost: typeof Host = (attrs, children) => (
    <Host {...attrs}>
      <link rel='stylesheet' href={getAssetPath('/build/my-first-stencil-project.css')} />
      {children}
    </Host>
);
