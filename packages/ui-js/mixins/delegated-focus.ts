import { ReactiveElement } from 'lit';

import type { Constructor } from '../utils/types.js';

export const WithDelegatedFocus = <T extends Constructor<ReactiveElement>>(
  Base: T
): T => {
  return class extends Base {
    static shadowRootOptions = {
      ...ReactiveElement.shadowRootOptions,
      delegatesFocus: true,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(...args: any[]) {
      super();
    }
  };
};
