'use client';

import lazy from 'next/dynamic';

const EzTabsComponent = lazy(
  () => import('@atomic/ui-react/ez-tabs').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzTabsComponent;
