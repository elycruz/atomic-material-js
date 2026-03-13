import React from 'react';
import EzButtonComponent from '@atomic/ui-next/ez-button';

export default function EzButtonPage() {
  return (
    <section>
      <header>
        <h2>Button Element</h2>
      </header>
      <div>
        <p>
          A Material Design 3 button custom element that wraps a Shadow DOM{' '}
          <code>&lt;button&gt;</code> and reuses the existing button CSS
          modules.
        </p>

        <h3>Variants</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <EzButtonComponent theme="primary">Text (default)</EzButtonComponent>
          <EzButtonComponent variety="filled" theme="primary">
            Filled
          </EzButtonComponent>
          <EzButtonComponent variety="outlined" theme="primary">
            Outlined
          </EzButtonComponent>
          <EzButtonComponent variety="elevated" theme="primary">
            Elevated
          </EzButtonComponent>
          <EzButtonComponent variety="tonal" theme="primary">
            Tonal
          </EzButtonComponent>
        </div>

        <h3>Sizes</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <EzButtonComponent variety="outlined" theme="primary" size="xsmall">
            XSmall
          </EzButtonComponent>
          <EzButtonComponent variety="outlined" theme="primary" size="small">
            Small
          </EzButtonComponent>
          <EzButtonComponent variety="outlined" theme="primary" size="medium">
            Medium
          </EzButtonComponent>
          <EzButtonComponent variety="outlined" theme="primary" size="large">
            Large
          </EzButtonComponent>
          <EzButtonComponent variety="outlined" theme="primary" size="xlarge">
            XLarge
          </EzButtonComponent>
        </div>

        <h3>Themes</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <EzButtonComponent variety="filled" theme="primary">
            Primary
          </EzButtonComponent>
          <EzButtonComponent variety="filled" theme="secondary">
            Secondary
          </EzButtonComponent>
          <EzButtonComponent variety="filled" theme="tertiary">
            Tertiary
          </EzButtonComponent>
          <EzButtonComponent variety="filled" theme="success">
            Success
          </EzButtonComponent>
          <EzButtonComponent variety="filled" theme="info">
            Info
          </EzButtonComponent>
          <EzButtonComponent variety="filled" theme="warning">
            Warning
          </EzButtonComponent>
          <EzButtonComponent variety="filled" theme="error">
            Error
          </EzButtonComponent>
        </div>

        <h3>Disabled</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <EzButtonComponent variety="filled" theme="primary" disabled>
            Filled
          </EzButtonComponent>
          <EzButtonComponent variety="outlined" theme="secondary" disabled>
            Outlined
          </EzButtonComponent>
        </div>

        <h3>Icon Buttons</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <EzButtonComponent icon theme="secondary" aria-label="Settings">
            ⚙
          </EzButtonComponent>
          <EzButtonComponent
            icon
            variety="filled"
            theme="secondary"
            aria-label="Add"
          >
            +
          </EzButtonComponent>
          <EzButtonComponent
            icon
            variety="tonal"
            theme="secondary"
            aria-label="Edit"
          >
            ✎
          </EzButtonComponent>
          <EzButtonComponent
            icon
            variety="outlined"
            theme="secondary"
            aria-label="Star"
          >
            ★
          </EzButtonComponent>
        </div>

        <h3>Link Buttons</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <EzButtonComponent
            href="https://example.com"
            variety="filled"
            theme="primary"
          >
            Visit Example
          </EzButtonComponent>
          <EzButtonComponent
            href="https://example.com"
            variety="outlined"
            theme="info"
          >
            Learn More
          </EzButtonComponent>
        </div>
      </div>
    </section>
  );
}
