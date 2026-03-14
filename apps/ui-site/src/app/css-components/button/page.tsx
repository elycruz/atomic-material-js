import {
  EzThemeVariants,
  EzStyleVariants,
  EzSizeVariants,
  SizeVariant,
} from '@atomic/ui/utils';
import EzRippleComponent from '@atomic/ui-next/ez-ripple';

export default function ButtonPage() {
  return (
    <>
      <section className="buttons-section">
        <header>
          <h2>Button</h2>
        </header>

        <div className="ez-section-body">
          <dl>
            <dt>Pure Buttons</dt>
            <dd className="ez-btn-group">
              {Object.keys(EzSizeVariants).map(k3 => (
                <button
                  key={`pure-sized-button-${k3}`}
                  className={`ez-${EzSizeVariants[k3 as keyof typeof EzSizeVariants]}`}
                  type="button"
                >
                  {k3}
                </button>
              ))}
            </dd>
            <dt>Button Sizes</dt>
            <dd className="ez-btn-group">
              <button
                className="ez-btn ez-theme-primary ez-outlined"
                type="button"
              >
                <EzRippleComponent></EzRippleComponent>
                <span>Default</span>
              </button>
              {Object.keys(EzSizeVariants).map(k3 => (
                <button
                  key={`sized-button-${k3}`}
                  className={`ez-btn ez-${EzSizeVariants[k3 as SizeVariant]} ez-theme-primary ez-outlined`}
                  type="button"
                >
                  <EzRippleComponent></EzRippleComponent>
                  <span>{k3}</span>
                </button>
              ))}
            </dd>
          </dl>
        </div>

        <div className="ez-section-body">
          <h3>Button Varieties</h3>

          <dl>
            {Object.keys(EzThemeVariants).map(k1 => {
              const themeClassSuffix = EzThemeVariants[k1];

              return (
                <>
                  <dt>{k1}</dt>

                  {Object.keys(EzStyleVariants).map(k2 => {
                    const variantClassSuffix =
                        (EzStyleVariants as Record<string, string>)[k2] ?? '',
                      variantClassName = variantClassSuffix
                        ? ` ez-${variantClassSuffix}`
                        : '';

                    return (
                      <dd key={`dd-2.${k2}`}>
                        <dl>
                          <dt>{k2}</dt>
                          <dd className="ez-btn-group">
                            <button
                              className={`ez-btn ez-theme-${themeClassSuffix}${variantClassName}`}
                              type="button"
                            >
                              <EzRippleComponent></EzRippleComponent>
                              <span>Default</span>
                            </button>
                            <button
                              className={`ez-btn ez-theme-${themeClassSuffix}${variantClassName}`}
                              type="button"
                              disabled
                            >
                              <EzRippleComponent></EzRippleComponent>
                              <span>Disabled</span>
                            </button>
                            <button
                              className={`ez-btn ez-theme-${themeClassSuffix}${variantClassName}`}
                              type="button"
                            >
                              <EzRippleComponent></EzRippleComponent>
                              <span>$</span>
                              <span>With multiple children</span>
                            </button>
                            {Object.keys(EzSizeVariants).map(k3 => (
                              <button
                                key={`${k1}-${k2}-${k3}`}
                                className={`ez-btn ez-theme-${themeClassSuffix}${variantClassName} ez-${EzSizeVariants[k3 as SizeVariant]}`}
                                type="button"
                              >
                                <EzRippleComponent></EzRippleComponent>
                                <span>{k3}</span>
                              </button>
                            ))}
                          </dd>
                        </dl>
                      </dd>
                    );
                  })}
                </>
              );
            })}
          </dl>
        </div>
      </section>
    </>
  );
}
