'use client';

import lazy from 'next/dynamic';

const EzTabComponent = lazy(
  () => import('@atomic/ui-react/ez-tab').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzTabComponent;
