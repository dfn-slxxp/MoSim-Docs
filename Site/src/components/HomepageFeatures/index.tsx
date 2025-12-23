import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create, Play, Share',
    img: require('@site/static/img/9496cutoutupscaled.png').default,
    description: (
      <>
        MoSim Modding allows you to recreate your favorite
        robots and drive them whenever you'd like.
      </>
    ),
  },
  {
    title: 'Build in Minutes',
    img: require('@site/static/img/buildercutoutupscaled.png').default,
    description: (
      <>
        MoSim Builder gives you all the tools you need to test out
        your designs without wasting any time, no code required.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img
          src={img}
          className={styles.featureImg}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
