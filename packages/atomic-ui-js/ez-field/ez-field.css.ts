import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  :host > .flex-container {
    display: flex;
    flex-flow: row wrap;
  }

  :host [part~='leading trailing error help supporting-text counter']:empty {
    display: none;
  }

  :host [part='error'] {
    color: var(--md-sys-color-error, var(--ez-error-color-5));
    font-size: var(--md-sys-typescale-body-small-size, smaller);
    margin-top: 0.25rem;
    padding-inline: var(--md-sys-spacing-4, 1rem);
  }

  :host [part='help'] {
    font-size: var(--md-sys-typescale-body-small-size, smaller);
  }

  :host [part='supporting-text'] {
    font-size: var(--md-sys-typescale-body-small-size, smaller);
    color: var(--md-sys-color-on-surface-variant, GrayText);
    margin-top: 0.25rem;
    padding-inline: var(--md-sys-spacing-4, 1rem);
  }

  :host [part='counter'] {
    font-size: var(--md-sys-typescale-body-small-size, smaller);
    color: var(--md-sys-color-on-surface-variant, GrayText);
    text-align: end;
    margin-top: 0.25rem;
    padding-inline: var(--md-sys-spacing-4, 1rem);
  }
`;
