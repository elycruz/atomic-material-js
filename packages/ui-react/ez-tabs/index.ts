'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzTabsElement, EzTabsEvents } from '@atomic/ui/ez-tabs';

const EzTabsComponent = createComponent({
  tagName: EzTabsElement.localName,
  elementClass: EzTabsElement,
  react: React,
  events: {
    onTabChange: EzTabsEvents.TabChange,
  },
});

export default EzTabsComponent;
