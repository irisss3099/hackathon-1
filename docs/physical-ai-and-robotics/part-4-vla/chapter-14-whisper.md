

# Chapter 14: From Voice to Action with OpenAI Whisper

The most natural way for a human to interact with a humanoid robot is through speech. The first step in our VLA pipeline is to reliably convert spoken language into text.

**OpenAI's Whisper** is a state-of-the-art automatic speech recognition (ASR) model trained on a massive and diverse dataset of audio. Its key advantages are:
-   **High Accuracy:** It exhibits human-level robustness to background noise, accents, and technical jargon.
-   **Multilingual:** It can transcribe speech from dozens of languages.
-   **Ease of Use:** It can be run locally for real-time applications or accessed via a simple API call.

**ROS 2 Integration:**
We will create a ROS 2 node that acts as the robot's "ears."
1.  **Audio Input:** The node subscribes to a ROS topic that streams raw audio from a microphone (either simulated or real).
2.  **Transcription:** It sends this audio to the Whisper model (e.g., using the OpenAI API or a locally hosted instance).
3.  **Publishing Text:** Whisper returns a text transcript of the speech. The node then publishes this text string to a ROS topic like `/voice_command`.

This simple-yet-powerful node allows any other part of the robot's brain to "listen" for commands, completely abstracting away the complexity of speech recognition.
