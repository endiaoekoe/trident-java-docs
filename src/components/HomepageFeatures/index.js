import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/plug-fill.svg').default,
    description: (
      <>
        Easy to install and integrate, can be used as a dependency.
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/feather_icon_128867.svg').default,
    description: (
      <>
        Contains all necessary libraries and pre-built components, saves resources at runtime.
      </>
    ),
  },
  {
    title: 'Community-Driven',
    Svg: require('@site/static/img/chat-smile-2-line.svg').default,
    description: (
      <>
        Dedicated to working with the TRON network and serving the developers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
