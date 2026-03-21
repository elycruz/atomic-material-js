'use client';

import lazy from 'next/dynamic';

const EzIntersectionObserverComponent = lazy(
  () => import('@atomic/ui-react/ez-intersection-observer').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzIntersectionObserverComponent;
