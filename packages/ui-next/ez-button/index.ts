'use client';

import lazy from 'next/dynamic';

const EzButtonComponent = lazy(
  () => import('@atomic/ui-react/ez-button').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzButtonComponent;
