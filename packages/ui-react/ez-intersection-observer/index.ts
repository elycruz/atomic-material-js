'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzIntersectionObserverElement } from '@atomic/ui/ez-intersection-observer';

const EzIntersectionObserverComponent = createComponent({
  tagName: EzIntersectionObserverElement.localName,
  elementClass: EzIntersectionObserverElement,
  react: React,
});

export default EzIntersectionObserverComponent;
