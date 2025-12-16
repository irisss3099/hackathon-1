

# Chapter 12: Humanoid Path Planning with Nav2

Once our robot knows where it is and has a map, it needs to be able to plan a path from point A to point B. The **Navigation2 (Nav2)** stack is the standard, production-quality navigation system used in the ROS 2 community. While originally designed for wheeled robots, its modular architecture can be adapted for the unique challenges of humanoid locomotion.

**How Nav2 Works:**
Nav2 is a complex system of nodes working together:
1.  **Global Planner:** Given a goal (e.g., "go to the kitchen"), the global planner uses a map of the environment to find an optimal path, much like a GPS app. It produces a high-level path that avoids known static obstacles like walls.
2.  **Local Planner / Controller:** The local planner's job is to follow the global path while avoiding immediate, dynamic obstacles (e.g., a person walking by). It takes a small segment of the global path and generates safe velocity commands (`/cmd_vel`) to send to the robot's controller.

**The Humanoid Challenge:**
This is where it gets tricky. A standard local planner for a wheeled robot generates simple `(x, y, theta)` velocity commands. A humanoid robot cannot simply "move forward at 0.5 m/s". It needs to execute a complex sequence of joint movements to take a step, maintain balance, and move in the desired direction.

**Adapting Nav2 for Humanoids:**
The key is to replace the standard local planner (often called the "controller") with a specialized one designed for bipedal walking. This **humanoid controller** would still receive the global path from Nav2, but its output would not be a simple velocity command. Instead, it would:
-   Interface with a **walking pattern generator (WPG)**.
-   The WPG takes high-level commands like "walk forward," "turn left," or "sidestep" and translates them into a stable sequence of foot placements and body motions.
-   The humanoid controller's job is to use the Nav2 path to decide which of these high-level commands to send to the WPG, effectively making the humanoid "follow" the path by taking discrete steps.

This bridges the high-level symbolic planning of Nav2 with the low-level, physics-based control required to make a bipedal robot walk without falling. It's the final piece of the puzzle, connecting our AI brain to the complex mechanics of the humanoid body.
