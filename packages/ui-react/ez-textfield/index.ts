'use client';

import React from 'react';
import { createComponent } from '@lit/react';
import { EzTextfieldElement } from '@atomic/ui/ez-textfield';

const EzTextfieldComponent = createComponent({
  tagName: EzTextfieldElement.localName,
  elementClass: EzTextfieldElement,
  react: React,
});

export default EzTextfieldComponent;
