# 5. ☁️ The "Ether" Lab (Cloud-Native)

This option is best for rapid deployment or for students with non-RTX laptops.

### Cloud Workstations (AWS/Azure)
Instead of buying PCs, you rent instances.

-   **Instance Type**: AWS g5.2xlarge (A10G GPU, 24GB VRAM) or g6e.xlarge.
-   **Software**: NVIDIA Isaac Sim on Omniverse Cloud (requires specific AMI).
-   **Cost Calculation**:
    -   **Instance cost**: ~$1.50/hour (spot/on-demand mix).
    -   **Usage**: 10 hours/week × 12 weeks = 120 hours.
    -   **Storage (EBS volumes)**: ~$25/quarter.
    -   **Total Cloud Bill**: **~$205 per quarter.**

### Local "Bridge" Hardware
You cannot eliminate hardware entirely for "Physical AI." You still need the edge devices to deploy the code physically.

-   **Edge AI Kits**: You still need the Jetson Kit for the physical deployment phase.
    -   **Cost**: $700 (One-time purchase).
-   **Robot**: You still need one physical robot for the final demo.
    -   **Cost**: $3,000 (Unitree Go2 Standard).

### The Latency Trap (Hidden Cost)
-   Simulating in the cloud works well, but controlling a **real** robot from a cloud instance is dangerous due to latency.
-   **Solution**: Students train in the Cloud, download the model (weights), and flash it to the local Jetson kit.
