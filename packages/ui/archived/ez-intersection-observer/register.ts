import { EzIntersectionObserverElement } from './ez-intersection-observer.js';
import { registerCustomElement } from '../utils/index.js';

registerCustomElement(
  EzIntersectionObserverElement.localName,
  EzIntersectionObserverElement
);
