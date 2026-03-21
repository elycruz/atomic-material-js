import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import {
  EzIntersectionObserverName,
  EzIntersectionObserverIntersectionEvName,
  EzIntersectionObserverElement,
} from './ez-intersection-observer.js';

export default {
  title: 'Custom Elements/Intersection Observer',
  component: 'ez-intersection-observer',
};

export const BasicRegistration: StoryObj = {
  render: () => html`
    <ez-intersection-observer data-testid="observer-basic">
      <div>Observed content</div>
    </ez-intersection-observer>
  `,
  play: async ({ canvas }) => {
    const el = canvas.getByTestId('observer-basic');

    await expect(el).toBeInTheDocument();
    await expect(el).toHaveProperty(
      'nodeName',
      EzIntersectionObserverName.toUpperCase()
    );
    // No shadow DOM
    await expect(el).toHaveProperty('shadowRoot', null);
    // Has child content
    await expect(el).toHaveProperty('childElementCount', 1);
  },
};

export const ClassToggleOnIntersection: StoryObj = {
  render: () => html`
    <div
      id="toggle-target"
      data-testid="toggle-target"
      style="padding: 1rem; border: 1px solid #ccc;"
    >
      Toggle target element
    </div>
    <ez-intersection-observer
      data-testid="observer-toggle"
      classNameToToggle="is-visible"
      .classNameToToggleTargetSelector="${'#toggle-target'}"
      threshold="0"
    >
      <div style="height: 50px; background: #eee;">Intersecting element</div>
    </ez-intersection-observer>
  `,
  play: async ({ canvas }) => {
    const observer = canvas.getByTestId('observer-toggle'),
      target = canvas.getByTestId('toggle-target');

    await expect(observer).toBeInTheDocument();
    await expect(target).toBeInTheDocument();

    const el = observer as unknown as EzIntersectionObserverElement;

    await el.updateComplete;

    await expect(el.classNameToToggle).toBe('is-visible');
    await expect(el.classNameToToggleTargetSelector).toBe('#toggle-target');
    await expect(el.threshold).toBe(0);
  },
};

export const ReverseMode: StoryObj = {
  render: () => html`
    <div
      id="reverse-target"
      data-testid="reverse-target"
      style="padding: 1rem; border: 1px solid #ccc;"
    >
      Reverse toggle target
    </div>
    <ez-intersection-observer
      data-testid="observer-reverse"
      classNameToToggle="is-hidden"
      .classNameToToggleTargetSelector="${'#reverse-target'}"
      reverse
      threshold="0"
    >
      <div style="height: 50px; background: #eee;">Intersecting element</div>
    </ez-intersection-observer>
  `,
  play: async ({ canvas }) => {
    const observer = canvas.getByTestId('observer-reverse');

    await expect(observer).toBeInTheDocument();

    const el = observer as unknown as EzIntersectionObserverElement;

    await el.updateComplete;

    await expect(el.reverse).toBe(true);
    await expect(el.classNameToToggle).toBe('is-hidden');
  },
};

export const CustomEventWithDetail: StoryObj = {
  render: () => html`
    <ez-intersection-observer
      data-testid="observer-event"
      classNameToToggle="active"
      .classNameToToggleTargetSelector="${'#event-target'}"
      threshold="0"
    >
      <div id="event-target" data-testid="event-target">Event target</div>
    </ez-intersection-observer>
  `,
  play: async ({ canvas }) => {
    const observer = canvas.getByTestId('observer-event');

    await expect(observer).toBeInTheDocument();

    // Verify event name constant is correctly formed
    await expect(EzIntersectionObserverIntersectionEvName).toBe(
      'ez-intersection-observer-intersection'
    );

    const el = observer as unknown as EzIntersectionObserverElement;

    await el.updateComplete;

    await expect(el.classNameToToggle).toBe('active');
  },
};

export const ThresholdConfiguration: StoryObj = {
  render: () => html`
    <ez-intersection-observer
      data-testid="observer-threshold-number"
      threshold="0.5"
    >
      <div>Threshold 0.5</div>
    </ez-intersection-observer>
    <ez-intersection-observer
      data-testid="observer-threshold-array"
      threshold="[0, 0.25, 0.5, 0.75, 1]"
    >
      <div>Threshold array</div>
    </ez-intersection-observer>
    <ez-intersection-observer data-testid="observer-threshold-default">
      <div>Default threshold</div>
    </ez-intersection-observer>
  `,
  play: async ({ canvas }) => {
    const numEl = canvas.getByTestId(
      'observer-threshold-number'
    ) as unknown as EzIntersectionObserverElement;

    await numEl.updateComplete;

    await expect(numEl.threshold).toBe(0.5);

    const arrEl = canvas.getByTestId(
      'observer-threshold-array'
    ) as unknown as EzIntersectionObserverElement;

    await arrEl.updateComplete;

    const arrThreshold = arrEl.threshold as number[];

    await expect(arrThreshold).toHaveProperty('length', 5);
    await expect(arrThreshold[0]).toBe(0);
    await expect(arrThreshold[4]).toBe(1);

    const defaultEl = canvas.getByTestId(
      'observer-threshold-default'
    ) as unknown as EzIntersectionObserverElement;

    await defaultEl.updateComplete;

    await expect(defaultEl.threshold).toBe(1);
  },
};
