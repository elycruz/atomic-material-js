import { ReactiveElement } from 'lit';

import type { Constructor } from '../utils/types.js';
import { SIZE_NAME, type SizeVariant } from '../utils/constants.js';
import { isNullable } from '../utils/object.js';

export interface WithSizeInterface {
  size: SizeVariant | '';
}

export const WithSize = <T extends Constructor<ReactiveElement>>(
  Base: T
): T & Constructor<WithSizeInterface> => {
  return class WithSize extends Base {
    static properties = {
      ...(Base as unknown as typeof ReactiveElement).properties,
      [SIZE_NAME]: { type: String, reflect: true },
    };

    protected _size: SizeVariant | '';

    get size(): SizeVariant | '' {
      return isNullable(this._size) ? '' : this._size;
    }

    set size(xs: SizeVariant | '') {
      const oldValue = this._size;

      this._size = xs || '';
      this.requestUpdate(SIZE_NAME, oldValue);
    }
  } as unknown as T & Constructor<WithSizeInterface>;
};
