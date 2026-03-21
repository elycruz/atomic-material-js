'use client';

import lazy from 'next/dynamic';

const EzButtonSurfaceComponent = lazy(
  () => import('@atomic/ui-react/ez-button-surface').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzButtonSurfaceComponent;
