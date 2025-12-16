

# Chapter 2: The ROS 2 Communication Model              

ROS 2's communication model is built on three core concepts: Nodes, Topics, and Services.

### Nodes
A **Node** is the fundamental processing unit in a ROS 2 system. Think of it as a small, single-purpose program. You might have a node for each of the following:
- `camera_driver`: A node that captures images from a camera.
- `image_processor`: A node that subscribes to images, detects faces, and publishes the face locations.
- `motor_controller`: A node that receives commands to move a joint and controls the physical motor.
- `navigator`: An AI node that takes in sensor data and decides where the robot should move.

Each node in your robot is an independent executable that can be started, stopped, and restarted separately. This modularity makes the system robust and easy to debug.

### Topics
**Topics** are the primary mechanism for one-way, anonymous communication. They are named buses over which nodes exchange messages.

- **Publishers:** A node that wants to send out data *publishes* messages to a topic. For example, our `camera_driver` node would publish `sensor_msgs/Image` messages to a topic named `/image_raw`.
- **Subscribers:** A node that wants to receive data *subscribes* to a topic. Our `image_processor` node would subscribe to `/image_raw`. When a new message is published, all subscribers receive a copy.

This publish/subscribe model is powerful because it decouples nodes. The `camera_driver` doesn't know or care if one node, five nodes, or zero nodes are listening. It just publishes images. Similarly, the `image_processor` doesn't care which node is publishing the images, as long as they are on the `/image_raw` topic.

### Services
**Services** are used for two-way, request-response communication. Unlike topics, services are synchronous. A client node sends a request to a service and waits for a response from the server node.

This is useful for actions that need to return a result or confirmation.
- **Example:** You might have a `/clear_costmap` service for a navigation robot. A client node can call this service, and the navigation node (the server) will clear its internal map of obstacles and then send a response (e.g., `success: true`). The client waits until the operation is complete.

This is analogous to making a function call, but across different processes or even different computers on a network.
