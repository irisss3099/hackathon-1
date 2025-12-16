import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FutureFeatureItem = {
  title: string;
  description: string;
  icon: string; // Using a simple icon for now, could be Svg later
};

const FutureFeatureList: FutureFeatureItem[] = [
  {
    title: 'Advanced Dexterity & Manipulation',
    icon: '🦾',
    description: 'Robots capable of intricate object handling and fine motor skills in unstructured environments.',
  },
  {
    title: 'Adaptive Learning & Personalization',
    icon: '🧠',
    description: 'AI systems that continuously learn from interactions and adapt to individual user preferences and dynamic surroundings.',
  },
  {
    title: 'Human-Robot Collaboration',
    icon: '🤝',
    description: 'Seamless integration of robots into human workflows, enhancing productivity and safety in shared spaces.',
  },
  {
    title: 'Ethical AI & Explainability',
    icon: '⚖️',
    description: 'Developing transparent and ethically sound AI models, ensuring trust and accountability in robotic applications.',
  },
];

function FutureFeature({title, icon, description}: FutureFeatureItem) {
  return (
    <div className={clsx('col col--6 margin-bottom--lg', styles.futureFeature)}>
      <div className="text--center">
        <span className={styles.futureFeatureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FutureFeatures(): React.ReactNode {
  return (
    <section className={clsx(styles.futureFeatures, 'padding-vert--xl')}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          🌌 Glimpse into the Future
        </Heading>
        <div className="row">
          {FutureFeatureList.map((props, idx) => (
            <FutureFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
