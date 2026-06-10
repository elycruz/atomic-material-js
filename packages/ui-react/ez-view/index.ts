'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzViewElement, EzViewEvents } from '@atomic/ui/ez-view';

const EzViewComponent = createComponent({
  tagName: EzViewElement.localName,
  elementClass: EzViewElement,
  react: React,
  events: {
    onShow: EzViewEvents.Show,
    onHide: EzViewEvents.Hide,
  },
});

export default EzViewComponent;
