import EzAppBarComponent from '@atomic/ui-next/ez-appbar';
import styles from './page.module.scss';

export default function EzAppBarPage() {
  return (
    <section>
      <header>
        <h1>App Bar Component</h1>
      </header>
      <article>
        {/* Size Variants */}
        <section>
          <h2>Size Variants</h2>
          <div className={styles['variants-container']}>
            <div className={styles['variant-example']}>
              <h3>Small (Default)</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent>
                  <h1>Small (Default)</h1>
                </EzAppBarComponent>
              </div>
            </div>

            <div className={styles['variant-example']}>
              <h3>Medium</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent size="medium">
                  <h1>Medium</h1>
                </EzAppBarComponent>
              </div>
            </div>

            <div className={styles['variant-example']}>
              <h3>Medium with Subtitle</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent size="medium" className="ez-has-subtitle">
                  <hgroup>
                    <h1>Medium</h1>
                    <p>With subtitle</p>
                  </hgroup>
                </EzAppBarComponent>
              </div>
            </div>

            <div className={styles['variant-example']}>
              <h3>Large</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent size="large">
                  <h1>Large</h1>
                </EzAppBarComponent>
              </div>
            </div>

            <div className={styles['variant-example']}>
              <h3>Large with Subtitle</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent size="large" className="ez-has-subtitle">
                  <hgroup>
                    <h1>Large</h1>
                    <p>With subtitle</p>
                  </hgroup>
                </EzAppBarComponent>
              </div>
            </div>
          </div>
        </section>

        {/* Style Variants */}
        <section>
          <h2>Style Variants</h2>
          <div className={styles['variants-container']}>
            <div className={styles['variant-example']}>
              <h3>Filled</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent
                  variety="filled"
                  theme="primary"
                  className="ez-filled ez-theme-primary"
                >
                  <h1>Filled</h1>
                </EzAppBarComponent>
              </div>
            </div>

            <div className={styles['variant-example']}>
              <h3>Outlined</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent
                  variety="outlined"
                  theme="primary"
                  className="ez-outlined ez-theme-primary"
                >
                  <h1>Outlined</h1>
                </EzAppBarComponent>
              </div>
            </div>

            <div className={styles['variant-example']}>
              <h3>Elevated</h3>
              <div className={styles['appbar-wrapper']}>
                <EzAppBarComponent
                  variety="elevated"
                  theme="primary"
                  className="ez-elevated ez-theme-primary"
                >
                  <h1>Elevated</h1>
                </EzAppBarComponent>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Behavior */}
        <section>
          <h2>Scroll Behavior</h2>
          <div className={styles['example-scroll-pane']}>
            <EzAppBarComponent
              parentSelector={`.${styles['example-scroll-pane']}`}
            >
              <h1>Sticky Appbar</h1>
            </EzAppBarComponent>

            <div className={styles.text}>
              <p>
                Scroll down to see the appbar hide and show behavior. The
                appbar will hide when scrolling down and reappear when
                scrolling up.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus risus erat, scelerisque at ex id, ullamcorper
                consequat nisi. Vivamus tincidunt ante at posuere iaculis.
              </p>
              <p>
                Integer faucibus felis felis, id ornare eros porta vitae. Cras
                quis dolor scelerisque, molestie justo eget, bibendum purus.
                Morbi dignissim et lorem id fermentum.
              </p>
              <p>
                Sed tincidunt vel urna eu venenatis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
              <p>
                Phasellus nec nulla risus. Donec ut felis viverra, porta felis
                vitae, luctus erat. Phasellus tempus faucibus nisi, a dictum
                lacus placerat id.
              </p>
              <p>
                Aliquam tellus orci, ultricies et turpis vitae, fermentum
                gravida neque. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
              <p>
                Quisque sed diam eu nisi ultricies efficitur in et ex. Sed enim
                risus, porttitor dictum lacinia eget, scelerisque sed leo.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Mauris tempus ligula ut
                suscipit cursus.
              </p>
              <p>
                Nam faucibus ornare nibh, eget venenatis tellus congue a.
                Praesent fringilla nunc quis varius vulputate.
              </p>
              <p>
                Curabitur tincidunt nisi scelerisque suscipit euismod.
                Curabitur fringilla pretium neque, eleifend vulputate neque
                cursus ornare.
              </p>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}
