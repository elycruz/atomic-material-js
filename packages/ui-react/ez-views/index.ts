'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzViewsElement, EzViewsEvents } from '@atomic/ui/ez-views';

const EzViewsComponent = createComponent({
  tagName: EzViewsElement.localName,
  elementClass: EzViewsElement,
  react: React,
  events: {
    onChange: EzViewsEvents.Change,
  },
});

export default EzViewsComponent;
