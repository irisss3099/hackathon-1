import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string; // Changed from Svg to icon (emoji)
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Master Robotics Fundamentals',
    icon: '🤖',
    description: (
      <>
        Dive deep into ROS 2, the backbone of modern robotics, and build the foundational skills for intelligent robot development.
      </>
    ),
  },
  {
    title: 'Build Digital Twins',
    icon: '🎮',
    description: (
      <>
        Create realistic simulations of robots and environments using Gazebo and Unity, enabling safe and efficient AI training.
      </>
    ),
  },
  {
    title: 'Develop AI Brains',
    icon: '🧠',
    description: (
      <>
        Harness NVIDIA Isaac platform for GPU-accelerated perception, navigation, and decision-making systems for your robots.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span> {/* Render emoji icon */}
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
