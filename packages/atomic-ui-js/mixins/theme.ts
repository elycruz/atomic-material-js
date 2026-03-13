import { ReactiveElement } from 'lit';

import type { Constructor } from '../utils/types.js';
import { THEME_NAME, type ThemeVariant } from '../utils/constants.js';
import { isNullable } from '../utils/object.js';

export const WithTheme = <T extends Constructor<ReactiveElement>>(
  Base: T
): T => {
  return class WithTheme extends Base {
    static properties = {
      ...(Base as unknown as typeof ReactiveElement).properties,
      [THEME_NAME]: { type: String, reflect: true },
    };

    protected _theme: ThemeVariant | '';

    get theme(): ThemeVariant | '' {
      return isNullable(this._theme) ? '' : this._theme;
    }

    set theme(xs: ThemeVariant | '') {
      const oldValue = this._theme;

      this._theme = xs || '';
      this.requestUpdate(THEME_NAME, oldValue);
    }
  };
};
