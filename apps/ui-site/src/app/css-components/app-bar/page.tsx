import { classNames } from '@atomic/ui/utils';

const supportedStyles = [
    ['Default', ''],
    ['Filled', 'filled'],
    ['Outlined', 'outlined'],
    ['Elevated', 'elevated'],
  ] as const,
  supportedSizes = [
    ['Small', ''],
    ['Medium', 'medium'],
    ['Large', 'large'],
  ] as const;

export default function AppBarPage() {
  return (
    <section>
      <header>
        <h2>AppBar</h2>
      </header>
      <article>
        <p>Supplies the hide and show animation on user scroll.</p>

        <h3>Style Variants</h3>
        <div
          className="ez-theme-primary"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {supportedStyles.map(([label, v]) => {
            const className = classNames('ez-appbar', {
              [`ez-${v}`]: !!v,
            });

            return (
              <header key={`style-${label}`} className={className}>
                <hgroup>
                  <span className="ez-h3">Title{v ? ` (${label})` : null}</span>
                </hgroup>
              </header>
            );
          })}
        </div>

        <h3>Size Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {supportedSizes.map(([label, v]) => {
            const className = classNames('ez-appbar', {
              [`ez-${v}`]: !!v,
            });

            return (
              <header key={`size-${label}`} className={className}>
                <hgroup>
                  <span className="ez-h3">Title ({label})</span>
                </hgroup>
              </header>
            );
          })}
        </div>

        <h3>Medium &amp; Large with Subtitle</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <header className="ez-appbar ez-medium ez-has-subtitle">
            <hgroup>
              <span className="ez-h3">Medium Title</span>
              <p>Subtitle text</p>
            </hgroup>
          </header>
          <header className="ez-appbar ez-large ez-has-subtitle">
            <hgroup>
              <span className="ez-h3">Large Title</span>
              <p>Subtitle text</p>
            </hgroup>
          </header>
        </div>
      </article>
    </section>
  );
}
