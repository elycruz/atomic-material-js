'use client';

import lazy from 'next/dynamic';

const EzRippleComponent = lazy(
  () => import('@atomic/ui-react/ez-ripple').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzRippleComponent;
