/**
 * @module ez-surface
 *
 * Defines and exports the ez-surface custom element — an expressive,
 * animatable container with MD3 elevation support.
 */

export const ezSurfaceName = 'ez-surface';

export type ElevationLevel = '0' | '1' | '2' | '3' | '4' | '5';

export type AnimationPreset =
  | 'fade-in'
  | 'fade-out'
  | 'scale-up'
  | 'scale-down'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'pulse'
  | 'float'
  | 'breathe';

export type AnimateTrigger = 'enter' | 'hover' | 'press' | 'visible';

const ELEVATION_ATTR = 'elevation',
  HOVER_ELEVATION_ATTR = 'hover-elevation',
  ANIMATION_ATTR = 'animation',
  ANIMATE_ON_ATTR = 'animate-on',
  ANIMATE_SPEED_ATTR = 'animate-speed',
  observedAttrs = [
    ELEVATION_ATTR,
    HOVER_ELEVATION_ATTR,
    ANIMATION_ATTR,
    ANIMATE_ON_ATTR,
    ANIMATE_SPEED_ATTR,
  ],
  ELEVATION_SHADOWS: Record<string, string> = {
    '0': 'none',
    '1': '0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%)',
    '2': '0 1px 2px 0 rgb(0 0 0 / 30%), 0 2px 6px 2px rgb(0 0 0 / 15%)',
    '3': '0 1px 3px 0 rgb(0 0 0 / 30%), 0 4px 8px 3px rgb(0 0 0 / 15%)',
    '4': '0 2px 3px 0 rgb(0 0 0 / 30%), 0 6px 10px 4px rgb(0 0 0 / 15%)',
    '5': '0 4px 4px 0 rgb(0 0 0 / 30%), 0 8px 12px 6px rgb(0 0 0 / 15%)',
  },
  /**
   * Web Animations API keyframe definitions for each preset.
   */
  ANIMATION_KEYFRAMES: Record<string, Keyframe[]> = {
    'fade-in': [{ opacity: 0 }, { opacity: 1 }],
    'fade-out': [{ opacity: 1 }, { opacity: 0 }],
    'scale-up': [
      { transform: 'scale(0.85)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
    ],
    'scale-down': [
      { transform: 'scale(1.15)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
    ],
    'slide-up': [
      { transform: 'translateY(24px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    'slide-down': [
      { transform: 'translateY(-24px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ],
    'slide-left': [
      { transform: 'translateX(24px)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 },
    ],
    'slide-right': [
      { transform: 'translateX(-24px)', opacity: 0 },
      { transform: 'translateX(0)', opacity: 1 },
    ],
    pulse: [
      { transform: 'scale(1)' },
      { transform: 'scale(1.04)' },
      { transform: 'scale(1)' },
    ],
    float: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-6px)' },
      { transform: 'translateY(0)' },
    ],
    breathe: [{ opacity: 1 }, { opacity: 0.7 }, { opacity: 1 }],
  },
  DURATION_MAP: Record<string, number> = {
    short1: 50,
    short2: 100,
    short3: 150,
    short4: 200,
    medium1: 250,
    medium2: 300,
    medium3: 350,
    medium4: 400,
    long1: 450,
    long2: 500,
    long3: 550,
    long4: 600,
    'extra-long1': 700,
    'extra-long2': 800,
    'extra-long3': 900,
    'extra-long4': 1000,
  },
  CONTINUOUS_PRESETS = new Set(['pulse', 'float', 'breathe']),
  DEFAULT_DURATION = 300, // medium2
  DEFAULT_EASING = 'cubic-bezier(0.2, 0, 0, 1)'; // MD3 standard

function isValidElevation(value: string): value is ElevationLevel {
  return value >= '0' && value <= '5' && value.length === 1;
}

export interface PlayAnimationOptions {
  duration?: string | number;
  easing?: string;
}

export class EzSurfaceElement extends HTMLElement {
  static localName = ezSurfaceName;
  static observedAttributes = observedAttrs;

  #initialized = false;
  #attrsChangedMap: Record<string, boolean> = {};

  #elevation: ElevationLevel = '0';
  #hoverElevation: ElevationLevel | '' = '';
  #animation = '';
  #animateOn = '';
  #animateSpeed = '';

  #activeAnimation: Animation | null = null;
  #intersectionObserver: IntersectionObserver | null = null;

  // --- Properties ---

  get elevation(): ElevationLevel {
    return this.#elevation;
  }

  set elevation(value: ElevationLevel) {
    if (!isValidElevation(value)) return;
    this.#elevation = value;
    this.#applyElevation();

    if (!this.#attrsChangedMap[ELEVATION_ATTR]) {
      this.setAttribute(ELEVATION_ATTR, value);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.#attrsChangedMap[ELEVATION_ATTR];
    }
  }

  get hoverElevation(): ElevationLevel | '' {
    return this.#hoverElevation;
  }

  set hoverElevation(value: ElevationLevel | '') {
    if (value !== '' && !isValidElevation(value)) return;
    this.#hoverElevation = value;

    if (!this.#attrsChangedMap[HOVER_ELEVATION_ATTR]) {
      if (value) this.setAttribute(HOVER_ELEVATION_ATTR, value);
      else this.removeAttribute(HOVER_ELEVATION_ATTR);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.#attrsChangedMap[HOVER_ELEVATION_ATTR];
    }
  }

  get animation(): string {
    return this.#animation;
  }

  set animation(value: string) {
    this.#animation = value;

    if (!this.#attrsChangedMap[ANIMATION_ATTR]) {
      if (value) this.setAttribute(ANIMATION_ATTR, value);
      else this.removeAttribute(ANIMATION_ATTR);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.#attrsChangedMap[ANIMATION_ATTR];
    }
  }

  get animateOn(): string {
    return this.#animateOn;
  }

  set animateOn(value: string) {
    this.#animateOn = value;

    if (!this.#attrsChangedMap[ANIMATE_ON_ATTR]) {
      if (value) this.setAttribute(ANIMATE_ON_ATTR, value);
      else this.removeAttribute(ANIMATE_ON_ATTR);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.#attrsChangedMap[ANIMATE_ON_ATTR];
    }

    this.#updateListeners();
  }

  get animateSpeed(): string {
    return this.#animateSpeed;
  }

  set animateSpeed(value: string) {
    this.#animateSpeed = value;

    if (!this.#attrsChangedMap[ANIMATE_SPEED_ATTR]) {
      if (value) this.setAttribute(ANIMATE_SPEED_ATTR, value);
      else this.removeAttribute(ANIMATE_SPEED_ATTR);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this.#attrsChangedMap[ANIMATE_SPEED_ATTR];
    }
  }

  // --- Lifecycle ---

  connectedCallback() {
    if (!this.#initialized && this.isConnected) {
      this.#elevation =
        (this.getAttribute(ELEVATION_ATTR) as ElevationLevel) ?? '0';
      this.#hoverElevation =
        (this.getAttribute(HOVER_ELEVATION_ATTR) as ElevationLevel | '') ?? '';
      this.#animation = this.getAttribute(ANIMATION_ATTR) ?? '';
      this.#animateOn = this.getAttribute(ANIMATE_ON_ATTR) ?? '';
      this.#animateSpeed = this.getAttribute(ANIMATE_SPEED_ATTR) ?? '';

      this.#applyElevation();
      this.#updateListeners();

      // Handle "enter" trigger
      if (this.#hasTrigger('enter') && this.#animation) {
        void this.playAnimation(this.#animation);
      }

      this.#initialized = true;
    }
  }

  disconnectedCallback() {
    if (this.#initialized) {
      this.#removeListeners();
      this.stopAnimation();

      if (this.#intersectionObserver) {
        this.#intersectionObserver.disconnect();
        this.#intersectionObserver = null;
      }

      this.#initialized = false;
    }
  }

  attributeChangedCallback(
    attrName: string,
    prevValue: string | null,
    newValue: string | null
  ) {
    if (prevValue === newValue) return;

    switch (attrName) {
      case ELEVATION_ATTR:
        if (!this.#attrsChangedMap[ELEVATION_ATTR]) {
          this.#attrsChangedMap[ELEVATION_ATTR] = true;
          this.elevation = (newValue ?? '0') as ElevationLevel;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete this.#attrsChangedMap[ELEVATION_ATTR];
        }
        break;

      case HOVER_ELEVATION_ATTR:
        if (!this.#attrsChangedMap[HOVER_ELEVATION_ATTR]) {
          this.#attrsChangedMap[HOVER_ELEVATION_ATTR] = true;
          this.hoverElevation = (newValue ?? '') as ElevationLevel | '';
        } else {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete this.#attrsChangedMap[HOVER_ELEVATION_ATTR];
        }
        break;

      case ANIMATION_ATTR:
        if (!this.#attrsChangedMap[ANIMATION_ATTR]) {
          this.#attrsChangedMap[ANIMATION_ATTR] = true;
          this.animation = newValue ?? '';
        } else {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete this.#attrsChangedMap[ANIMATION_ATTR];
        }
        break;

      case ANIMATE_ON_ATTR:
        if (!this.#attrsChangedMap[ANIMATE_ON_ATTR]) {
          this.#attrsChangedMap[ANIMATE_ON_ATTR] = true;
          this.animateOn = newValue ?? '';
        } else {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete this.#attrsChangedMap[ANIMATE_ON_ATTR];
        }
        break;

      case ANIMATE_SPEED_ATTR:
        if (!this.#attrsChangedMap[ANIMATE_SPEED_ATTR]) {
          this.#attrsChangedMap[ANIMATE_SPEED_ATTR] = true;
          this.animateSpeed = newValue ?? '';
        } else {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete this.#attrsChangedMap[ANIMATE_SPEED_ATTR];
        }
        break;

      default:
        break;
    }
  }

  // --- Public API ---

  /**
   * Play an animation preset programmatically.
   * Returns a promise that resolves when the animation completes.
   */
  playAnimation(name: string, options?: PlayAnimationOptions): Promise<void> {
    this.stopAnimation();

    const keyframes = ANIMATION_KEYFRAMES[name];

    if (!keyframes) return Promise.resolve();

    const durationValue = options?.duration ?? this.#animateSpeed,
      duration =
        typeof durationValue === 'number'
          ? durationValue
          : (DURATION_MAP[durationValue] ?? DEFAULT_DURATION),
      easing = options?.easing ?? DEFAULT_EASING,
      isContinuous = CONTINUOUS_PRESETS.has(name);

    this.#activeAnimation = this.animate(keyframes, {
      duration,
      easing,
      fill: isContinuous ? 'none' : 'both',
      iterations: isContinuous ? Infinity : 1,
    });

    this.dispatchEvent(
      new CustomEvent('ez-surface-animate-start', {
        detail: { animation: name },
        bubbles: true,
      })
    );

    if (isContinuous) return Promise.resolve();

    return this.#activeAnimation.finished.then(
      () => {
        this.#activeAnimation = null;
        this.dispatchEvent(
          new CustomEvent('ez-surface-animate-end', {
            detail: { animation: name },
            bubbles: true,
          })
        );
      },
      () => {
        // Animation was cancelled — ignore AbortError
      }
    );
  }

  /**
   * Stop the current animation.
   */
  stopAnimation(): void {
    if (this.#activeAnimation) {
      this.#activeAnimation.cancel();
      this.#activeAnimation = null;
    }
  }

  // --- Private ---

  #applyElevation() {
    const shadow = ELEVATION_SHADOWS[this.#elevation] ?? 'none';

    this.style.boxShadow = shadow;
  }

  #hasTrigger(trigger: AnimateTrigger): boolean {
    return this.#animateOn
      .split(',')
      .some(t => t.trim().toLowerCase() === trigger);
  }

  #updateListeners() {
    this.#removeListeners();

    if (this.#hasTrigger('hover') || this.#hoverElevation) {
      this.addEventListener('pointerenter', this.#onPointerEnter);
      this.addEventListener('pointerleave', this.#onPointerLeave);
    }

    if (this.#hasTrigger('press')) {
      this.addEventListener('pointerdown', this.#onPointerDown);
      this.addEventListener('pointerup', this.#onPointerUp);
      this.addEventListener('pointercancel', this.#onPointerUp);
    }

    if (this.#hasTrigger('visible')) {
      this.#setupIntersectionObserver();
    } else if (this.#intersectionObserver) {
      this.#intersectionObserver.disconnect();
      this.#intersectionObserver = null;
    }
  }

  #removeListeners() {
    this.removeEventListener('pointerenter', this.#onPointerEnter);
    this.removeEventListener('pointerleave', this.#onPointerLeave);
    this.removeEventListener('pointerdown', this.#onPointerDown);
    this.removeEventListener('pointerup', this.#onPointerUp);
    this.removeEventListener('pointercancel', this.#onPointerUp);
  }

  #onPointerEnter = () => {
    if (this.#hoverElevation) {
      const shadow = ELEVATION_SHADOWS[this.#hoverElevation] ?? 'none';

      this.style.boxShadow = shadow;
    }

    if (this.#hasTrigger('hover') && this.#animation) {
      void this.playAnimation(this.#animation);
    }
  };

  #onPointerLeave = () => {
    if (this.#hoverElevation) {
      this.#applyElevation();
    }

    if (this.#hasTrigger('hover') && this.#activeAnimation) {
      this.stopAnimation();
    }
  };

  #onPointerDown = () => {
    if (this.#hasTrigger('press') && this.#animation) {
      void this.playAnimation(this.#animation);
    }
  };

  #onPointerUp = () => {
    if (this.#hasTrigger('press') && this.#activeAnimation) {
      this.stopAnimation();
    }
  };

  #setupIntersectionObserver() {
    if (this.#intersectionObserver) return;

    this.#intersectionObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && this.#animation) {
            void this.playAnimation(this.#animation);

            // One-shot: disconnect after triggering
            this.#intersectionObserver?.disconnect();
            this.#intersectionObserver = null;
            break;
          }
        }
      },
      { threshold: 0.1 }
    );

    this.#intersectionObserver.observe(this as unknown as Element);
  }
}
