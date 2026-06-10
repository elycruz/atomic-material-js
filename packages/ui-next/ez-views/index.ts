'use client';

import lazy from 'next/dynamic';

const EzViewsComponent = lazy(
  () => import('@atomic/ui-react/ez-views').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzViewsComponent;
