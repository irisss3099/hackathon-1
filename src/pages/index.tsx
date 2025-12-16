import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures'; // Import HomepageFeatures
import FutureFeatures from '../components/FutureFeatures'; // Import FutureFeatures

function CourseStatsHero() {
  const {siteConfig} = useDocusaurusContext();
  const [titleClicked, setTitleClicked] = useState(false);
  const [modulesClicked, setModulesClicked] = useState(false);
  const [chaptersClicked, setChaptersClicked] = useState(false);
  const [projectsClicked, setProjectsClicked] = useState(false);

  const handleTitleClick = () => {
    setTitleClicked(true);
    setTimeout(() => setTitleClicked(false), 1000); // Reset after 1 second
  };

  const handleModulesClick = () => {
    setModulesClicked(true);
    setTimeout(() => setModulesClicked(false), 1000); // Reset after 1 second
  };

  const handleChaptersClick = () => {
    setChaptersClicked(true);
    setTimeout(() => setChaptersClicked(false), 1000); // Reset after 1 second
  };

  const handleProjectsClick = () => {
    setProjectsClicked(true);
    setTimeout(() => setProjectsClicked(false), 1000); // Reset after 1 second
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroImageColumn}>
          <img
            className={styles.heroImage}
            src="/img/undraw_docusaurus_react.svg"
            alt="Animated Robot"
          />
        </div>
        <div className={styles.heroTextColumn}>
          <Heading
            as="h1"
            className={clsx(styles.heroTitle, styles.animatedItem, {
              [styles.glitterEffect]: titleClicked,
            })}
            style={{animationDelay: '0s'}}
            onClick={handleTitleClick}
          >
            Physical AI & Robotics
          </Heading>
          <p className={clsx(styles.heroSubtitle, styles.animatedItem)} style={{animationDelay: '0.2s'}}>
            Bridging the gap between the digital brain and the physical body.
            Explore the future of embodied intelligence.
          </p>
          <ul className={styles.statsList}>
            <li
              className={clsx(styles.animatedItem, {
                [styles.glitterEffect]: modulesClicked,
              })}
              style={{animationDelay: '0.4s'}}
              onClick={handleModulesClick}
            >
              <span className={styles.statNumber}>4</span> Modules
            </li>
            <li
              className={clsx(styles.animatedItem, {
                [styles.glitterEffect]: chaptersClicked,
              })}
              style={{animationDelay: '0.6s'}}
              onClick={handleChaptersClick}
            >
              <span className={styles.statNumber}>16</span> Chapters
            </li>
            <li
              className={clsx(styles.animatedItem, {
                [styles.glitterEffect]: projectsClicked,
              })}
              style={{animationDelay: '0.8s'}}
              onClick={handleProjectsClick}
            >
              <span className={styles.statNumber}>4</span> Core Projects
            </li>
          </ul>
          {/* Removed old Future Features text as it's now handled by the new component */}
          <div className={clsx(styles.buttons, styles.animatedItem)} style={{animationDelay: '1.2s'}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Learning →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="An advanced course on Physical AI & Robotics, bridging the gap between digital intelligence and physical action.">
      <CourseStatsHero />
      <main>
        <HomepageFeatures />
        <FutureFeatures />
      </main>
    </Layout>
  );
}
