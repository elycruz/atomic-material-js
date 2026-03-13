'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzAppbarElement, EzAppbarEvents } from '@atomic/ui/ez-appbar';

const EzAppbarComponent = createComponent({
  tagName: EzAppbarElement.localName,
  elementClass: EzAppbarElement,
  react: React,
  events: {
    onXAppbarIntersected: EzAppbarEvents.Intersected,
    onXAppbarNotIntersected: EzAppbarEvents.NotIntersected,
  },
});

export default EzAppbarComponent;
