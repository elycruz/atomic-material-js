'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzSurfaceElement } from '@atomic/ui/ez-surface';

const EzSurfaceComponent = createComponent({
  tagName: EzSurfaceElement.localName,
  elementClass: EzSurfaceElement,
  react: React,
});

export default EzSurfaceComponent;
