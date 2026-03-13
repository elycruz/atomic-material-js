'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzBtnSurfaceElement } from '@atomic/ui/ez-btn-surface/index.js';

const EzBtnSurfaceComponent = createComponent({
  tagName: EzBtnSurfaceElement.localName,
  elementClass: EzBtnSurfaceElement,
  react: React,
});

export default EzBtnSurfaceComponent;
