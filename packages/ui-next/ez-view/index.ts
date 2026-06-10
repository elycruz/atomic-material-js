'use client';

import lazy from 'next/dynamic';

const EzViewComponent = lazy(
  () => import('@atomic/ui-react/ez-view').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzViewComponent;
