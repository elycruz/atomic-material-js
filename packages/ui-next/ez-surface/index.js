import lazy from 'next/dynamic';

const EzSurfaceComponent = lazy(() => import('@atomic/ui-react/ez-surface').then(mod => mod.default), {
  ssr: false
});

export default EzSurfaceComponent;
