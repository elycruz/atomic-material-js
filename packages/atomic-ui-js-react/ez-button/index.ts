'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzButtonElement } from '@atomic/ui/ez-button';

const EzButtonComponent = createComponent({
  tagName: EzButtonElement.localName,
  elementClass: EzButtonElement,
  react: React,
});

export default EzButtonComponent;
