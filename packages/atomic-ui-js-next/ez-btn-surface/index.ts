'use client';

import lazy from 'next/dynamic';

const EzBtnSurfaceComponent = lazy(
  () => import('@atomic/ui-react/ez-btn-surface').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzBtnSurfaceComponent;
