'use client';

import lazy from 'next/dynamic';

const EzBadgeComponent = lazy(
  () => import('@atomic/ui-react/ez-badge').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzBadgeComponent;
