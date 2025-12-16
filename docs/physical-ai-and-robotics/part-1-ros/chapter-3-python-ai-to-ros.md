

# Chapter 3: Bridging Python AI to ROS

As AI developers, we often prefer to write our high-level logic—our "agent"—in Python. ROS 2 makes this easy with its official Python client library, `rclpy`.

`rclpy` allows you to write ROS 2 nodes in Python, giving you full access to topics, services, and all other ROS 2 features. This is how we bridge our digital AI brain with the physical robot body.

**Example Workflow:**

1.  **Create a Python Node:** You write a Python script that initializes `rclpy` and creates a node.
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String

    class MyAgentNode(Node):
        def __init__(self):
            super().__init__('my_ai_agent')
            self.publisher_ = self.create_publisher(String, 'chatter', 10)
            # ... more logic ...
    ```

2.  **Subscribe to Sensor Data:** Your AI agent node subscribes to topics that provide sensor data, like `/odom` (for position), `/scan` (for laser scans), or `/image_raw`.

3.  **Process and Decide:** In your Python code, you process this data using libraries like NumPy, TensorFlow, or PyTorch to make a decision.

4.  **Publish Control Commands:** Once your agent decides on an action (e.g., "move forward"), it publishes a command message to a control topic, such as `/cmd_vel` (for velocity commands). A separate, low-level motor controller node, possibly written in C++, subscribes to this topic and translates the command into electrical signals for the motors.

This separation of concerns is powerful. The high-level AI agent, written in Python, doesn't need to worry about real-time constraints or hardware interfacing. It simply thinks and publishes its decisions. The low-level controllers handle the real-world execution.
