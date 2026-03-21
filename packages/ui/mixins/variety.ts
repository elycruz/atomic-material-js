import { ReactiveElement } from 'lit';

import type { Constructor } from '../utils/types.js';
import { VARIETY_NAME, type StyleVariant } from '../utils/constants.js';
import { isNullable } from '../utils/object.js';

export const WithVariety = <T extends Constructor<ReactiveElement>>(
  Base: T
): T => {
  return class WithVariety extends Base {
    static properties = {
      ...(Base as unknown as typeof ReactiveElement).properties,
      [VARIETY_NAME]: { type: String, reflect: true },
    };

    protected _variety: StyleVariant | '';

    get variety(): StyleVariant | '' {
      return isNullable(this._variety) ? '' : this._variety;
    }

    set variety(xs: StyleVariant | '') {
      const oldValue = this._variety;

      this._variety = xs || '';
      this.requestUpdate(VARIETY_NAME, oldValue);
    }
  };
};
