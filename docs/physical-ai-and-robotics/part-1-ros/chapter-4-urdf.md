

# Chapter 4: The Robot's Blueprint: URDF

A robot is a complex physical object. To simulate and control it, the software needs a precise model of its physical structure. The **Unified Robot Description Format (URDF)** is an XML-based file format used in ROS to describe all the physical elements of a robot.

For a humanoid robot, the URDF file is like its digital blueprint. It defines:

-   **Links:** The rigid parts of the robot's body (e.g., torso, upper arm, forearm, hand). Each link has properties like its mass, inertia, and visual/collision geometry.
    -   **Visual Geometry:** What the link looks like. This is typically a 3D mesh file (e.g., `.dae` or `.stl`).
    -   **Collision Geometry:** A simpler shape used by the physics engine to calculate collisions. Using a simpler shape speeds up computation.

-   **Joints:** The connections between links. Joints define how links can move relative to each other. Key properties include:
    -   **Type:** `revolute` (for a rotating joint like an elbow), `prismatic` (for a sliding joint), `fixed` (for a rigid connection), etc.
    -   **Axis:** The axis around which the joint rotates or slides.
    -   **Limits:** The minimum and maximum angle or position, velocity, and effort (torque/force) the joint can handle.

By parsing the URDF file, ROS-based tools can automatically understand your robot's structure.
-   **Gazebo (Simulation):** Reads the URDF to create a physically accurate model of your robot in the simulated world. It uses the mass, inertia, and collision properties to simulate how the robot will behave under gravity and when it interacts with its environment.
-   **Rviz2 (Visualization):** Reads the URDF to display a 3D model of your robot. It uses topics that publish joint states (`/joint_states`) to animate the model in real-time, showing you the robot's current pose.
-   **Kinematics & Dynamics Libraries:** Use the URDF to calculate things like the position of the hand given all the joint angles (forward kinematics) or the required joint torques to hold a certain pose (inverse dynamics).

Creating a URDF for a complex humanoid is a detailed process but is fundamental to working with it in the ROS ecosystem. It is the core description that brings your robot to life in the digital world.
