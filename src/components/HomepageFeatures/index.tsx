import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Client-side',
    Svg: require('@site/static/img/undraw_mobile_browsers_re_kxol.svg').default,
    description: (
      <>
        A powerful router based on client-side routing.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_check_boxes_re_v40f.svg').default,
    description: (
      <>
        Create routes on your web page quickly.
      </>
    ),
  },
  {
    title: 'Powered by typescript',
    Svg: require('@site/static/img/undraw_outer_space_re_u9vd.svg').default,
    description: (
      <>
        Full typescript support.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
