import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx'; // Import clsx for combining class names
import styles from './index.module.css'; // Re-using styles from the homepage for consistency

export default function CourseSummary(): React.ReactNode {
  return (
    <Layout title="Course Summary" description="A journey into embodied intelligence">
      <div className={clsx(styles.heroBanner)} style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <Heading as="h1" className={clsx("hero__title", styles.heroTitle)} style={{ color: 'white' }}>
            ✨ A Journey into Embodied Intelligence
          </Heading>
          <p className={clsx("hero__subtitle", styles.hero__subtitle)} style={{ maxWidth: '800px', margin: 'auto', color: 'white' }}>
            This course transcends the digital realm, taking you on a comprehensive journey to build, train, and deploy intelligent humanoid robots that can perceive, understand, and interact with the physical world.
          </p>
        </div>
      </div>
      <main style={{ padding: '2rem 0' }}> {/* Adjusted padding */}
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--ifm-color-primary-darkest)' }}>
                What You Will Build
              </Heading>
              <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '4rem' }}>
                This is a project-based course where you will progressively build a complete software and AI stack for a simulated humanoid robot. Here’s a glance at the four core parts of our journey:
              </p>

              <div className={styles.summaryCard}> {/* Applied new class */}
                <Heading as="h3">🧠 Part 1: The Robotic Nervous System (ROS 2)</Heading>
                <p>First, you will build the robot's "central nervous system." You will master ROS 2, the industry-standard framework for robot communication, enabling different software modules—like perception, planning, and control—to work together in harmony.</p>
              </div>

              <div className={styles.summaryCard}> {/* Applied new class */}
                <Heading as="h3">🎮 Part 2: The Digital Twin (Gazebo & Unity)</Heading>
                <p>Next, you will give your robot a virtual world to live in. Learn to construct and interact with a "digital twin"—a physically accurate simulation of your robot in environments you design. You will master Gazebo for physics and Unity for high-fidelity rendering, allowing you to test and train your AI safely and efficiently.</p>
              </div>

              <div className={styles.summaryCard}> {/* Applied new class */}
                <Heading as="h3">🚀 Part 3: The AI-Robot Brain (NVIDIA Isaac)</Heading>
                <p>With the body and world in place, it's time to build the brain. You will harness the power of the NVIDIA Isaac platform to develop advanced, GPU-accelerated perception and navigation systems. This is where your robot learns to "see" and navigate its world with incredible speed and accuracy.</p>
              </div>

              <div className={styles.summaryCard}> {/* Applied new class */}
                <Heading as="h3">🗣️ Part 4: Vision-Language-Action (VLA)</Heading>
                <p>Finally, you will give your robot the gift of understanding. This capstone module converges Large Language Models (LLMs) with robotics. Your robot will learn to understand natural voice commands (e.g., "bring me the water bottle"), reason about the request, and create and execute a plan of action from scratch.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
