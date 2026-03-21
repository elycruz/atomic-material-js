'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzButtonSurfaceElement } from '@atomic/ui/ez-button-surface/index.js';

const EzButtonSurfaceComponent = createComponent({
  tagName: EzButtonSurfaceElement.localName,
  elementClass: EzButtonSurfaceElement,
  react: React,
});

export default EzButtonSurfaceComponent;
