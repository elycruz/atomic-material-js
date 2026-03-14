import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { EzShapeElement, EzShapeName, SHAPE_NAMES } from './ez-shape.js';
import { registerCustomElement } from '../utils/index.js';

registerCustomElement(EzShapeName, EzShapeElement);

describe('EzShapeElement', () => {
  let el: EzShapeElement;

  beforeEach(() => {
    el = document.createElement(EzShapeName);
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
  });

  it('should be registered as a custom element', () => {
    expect(customElements.get(EzShapeName)).toBe(EzShapeElement);
  });

  it('should have the correct localName', () => {
    expect(EzShapeElement.localName).toBe('ez-shape');
  });

  it('should be an instance of HTMLElement', () => {
    expect(el).toBeInstanceOf(HTMLElement);
  });

  it('should default to circle shape', () => {
    expect(el.shape).toBe('circle');
  });

  it('should reflect shape attribute to property', () => {
    el.setAttribute('shape', 'diamond');
    expect(el.shape).toBe('diamond');
  });

  it('should reflect shape property to attribute', () => {
    el.shape = 'pill';
    expect(el.getAttribute('shape')).toBe('pill');
  });

  it('should create SVG clipPath for circle', () => {
    el.shape = 'circle';
    expect(el.style.clipPath).toContain('url(#');

    const svg = el.querySelector('svg');

    expect(svg).not.toBeNull();
    expect(svg?.querySelector('clipPath')).not.toBeNull();
  });

  it('should create SVG clipPath for diamond', () => {
    el.shape = 'diamond';
    expect(el.style.clipPath).toContain('url(#');

    const svg = el.querySelector('svg');

    expect(svg).not.toBeNull();
    expect(svg?.querySelector('clipPath')).not.toBeNull();
  });

  it('should create SVG clipPath for heart', () => {
    el.shape = 'heart';
    expect(el.style.clipPath).toContain('url(#');

    const svg = el.querySelector('svg');

    expect(svg).not.toBeNull();
    expect(svg?.querySelector('clipPath')).not.toBeNull();
  });

  it('should create SVG clipPath for arch', () => {
    el.shape = 'arch';
    expect(el.style.clipPath).toContain('url(#');

    const svg = el.querySelector('svg');

    expect(svg).not.toBeNull();
  });

  it('should update SVG path when switching shapes', () => {
    el.shape = 'heart';

    const svg1 = el.querySelector('svg');

    expect(svg1).not.toBeNull();

    el.shape = 'circle';

    const svg2 = el.querySelector('svg');

    expect(svg2).not.toBeNull();
    expect(el.style.clipPath).toContain('url(#');
  });

  it('should reflect morph-to attribute', () => {
    el.setAttribute('morph-to', 'diamond');
    expect(el.morphTo).toBe('diamond');
  });

  it('should reflect morph-to property to attribute', () => {
    el.morphTo = 'triangle';
    expect(el.getAttribute('morph-to')).toBe('triangle');
  });

  it('should reflect morph-on attribute', () => {
    el.setAttribute('morph-on', 'hover,press');
    expect(el.morphOn).toBe('hover,press');
  });

  it('should morph shape on pointerenter when morph-on=hover', () => {
    el.shape = 'circle';
    el.morphTo = 'diamond';
    el.morphOn = 'hover';

    el.dispatchEvent(new PointerEvent('pointerenter'));

    expect(el.style.clipPath).toContain('url(#');

    const path = el.querySelector('svg path');

    expect(path).not.toBeNull();
  });

  it('should revert shape on pointerleave when morph-on=hover', () => {
    el.shape = 'circle';
    el.morphTo = 'diamond';
    el.morphOn = 'hover';

    el.dispatchEvent(new PointerEvent('pointerenter'));
    el.dispatchEvent(new PointerEvent('pointerleave'));

    expect(el.style.clipPath).toContain('url(#');
  });

  it('should dispatch ez-shape-morph event on morph', () => {
    el.shape = 'circle';
    el.morphTo = 'diamond';
    el.morphOn = 'hover';

    let detail: any;

    el.addEventListener('ez-shape-morph', ((e: CustomEvent) => {
      detail = e.detail;
    }) as EventListener);

    el.dispatchEvent(new PointerEvent('pointerenter'));

    expect(detail).toEqual({ from: 'circle', to: 'diamond' });
  });

  it('should accept all valid shape names', () => {
    for (const shapeName of SHAPE_NAMES) {
      el.shape = shapeName;
      expect(el.shape).toBe(shapeName);
    }
  });

  it('should have 35 shape names', () => {
    expect(SHAPE_NAMES).toHaveLength(35);
  });

  it('should clean up SVG on disconnect', () => {
    el.shape = 'heart';
    expect(el.querySelector('svg')).not.toBeNull();

    el.remove();
    expect(el.querySelector('svg')).toBeNull();
  });

  it('should support new M3 Expressive shapes', () => {
    const newShapes = [
      'boom',
      'burst',
      'flower',
      'ghostish',
      'puffy-diamond',
      'very-sunny',
      'cookie-12-sided',
    ] as const;

    for (const shapeName of newShapes) {
      el.shape = shapeName;
      expect(el.shape).toBe(shapeName);
      expect(el.style.clipPath).toContain('url(#');

      const svg = el.querySelector('svg');

      expect(svg).not.toBeNull();
    }
  });

  it('should apply evenodd fill-rule for flower shape', () => {
    el.shape = 'flower';

    const path = el.querySelector('svg path');

    expect(path).not.toBeNull();
    expect(path?.getAttribute('fill-rule')).toBe('evenodd');
  });
});
