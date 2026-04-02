'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzTabElement } from '@atomic/ui/ez-tab';

const EzTabComponent = createComponent({
  tagName: EzTabElement.localName,
  elementClass: EzTabElement,
  react: React,
});

export default EzTabComponent;
