

# Chapter 15: Cognitive Planning with LLMs

This is where the magic happens. We now have a text command, like "Clean the room." A robot cannot directly execute this. It has no concept of "clean" or "room." It only understands a limited set of primitive actions, like `navigateTo(x, y)`, `pickUp(object_id)`, and `placeAt(x, y)`.

The role of the LLM is to act as a **cognitive planner**, breaking down the high-level, ambiguous human goal into a concrete sequence of machine-executable steps.

**The Prompt Engineering Challenge:**
To achieve this, we don't just ask the LLM "How do I clean the room?". We use a technique called **prompt engineering** to give it the right context. The prompt we send to the LLM might look something like this:

```
You are the planning module for a humanoid robot. You have access to a list of objects in the room and a set of available functions. Your task is to translate a user's command into a sequence of these functions.

# Available Objects:
- red_can (at coordinates 1.5, 2.0)
- blue_box (at coordinates 3.0, 4.5)
- trash_bin (at coordinates 5.0, 1.0)

# Available Functions:
- navigateTo(x, y)
- pickUp(object_name)
- placeAt(x, y)

# User Command:
"Please pick up the red can and throw it in the trash."

# Plan:
```

**The LLM's Response:**
Given this prompt, a powerful LLM (like GPT-4) can reason about the world and generate a structured plan, typically in a format like JSON:
```json
[
  {"function": "navigateTo", "params": [1.5, 2.0]},
  {"function": "pickUp", "params": ["red_can"]},
  {"function": "navigateTo", "params": [5.0, 1.0]},
  {"function": "placeAt", "params": [5.0, 1.0]}
]
```

A ROS 2 node—our **LLM Action Sequencer**—is responsible for sending this prompt and parsing the response. It then executes the plan step-by-step, calling the appropriate ROS 2 services or actions for navigation, perception, and manipulation. This approach gives the robot a rudimentary form of "common sense" and the ability to handle complex, multi-step tasks from a single, simple command.
