'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzBadgeElement } from '@atomic/ui/ez-badge';

const EzBadgeComponent = createComponent({
  tagName: EzBadgeElement.localName,
  elementClass: EzBadgeElement,
  react: React,
});

export default EzBadgeComponent;
