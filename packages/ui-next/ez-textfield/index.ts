'use client';

import lazy from 'next/dynamic';

const EzTextfieldComponent = lazy(
  () => import('@atomic/ui-react/ez-textfield').then(mod => mod.default),
  {
    ssr: false,
  }
);

export default EzTextfieldComponent;
