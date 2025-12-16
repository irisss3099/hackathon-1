

# Chapter 6: Physics and Collisions with Gazebo

**Gazebo** is a powerful, open-source 3D robotics simulator that is tightly integrated with ROS. Its primary strength is its high-fidelity physics engine. When you place your URDF-defined robot in a Gazebo world, it behaves according to the laws of physics.

- **Physics Engine:** Gazebo uses pluggable physics engines (like ODE, Bullet, DART) to compute the effects of forces and torques on your robot model. This includes:
    - **Gravity:** Your robot will fall if it's not supported.
    - **Inertia:** The model's mass and mass distribution (defined in the URDF) will determine how it accelerates and rotates. A top-heavy robot will be less stable than a bottom-heavy one.
    - **Friction:** Contact forces between the robot's feet and the ground will determine if it can walk without slipping. You can set material properties like friction and bounciness.

- **Collisions:** Using the `<collision>` tags in the URDF, Gazebo knows the physical shape of your robot. It constantly checks for intersections between these shapes and other objects in the world. When a collision is detected, the physics engine calculates the appropriate reaction forces, preventing parts from passing through each other and enabling realistic interactions like grasping objects or walking on uneven terrain.

You build an environment in Gazebo using a `.world` file, which is an XML format (SDF) where you can place static objects (buildings, furniture), dynamic objects (balls, blocks), and define environmental properties like lighting and gravity.
