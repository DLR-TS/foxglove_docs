---
title: Settings
description: Configure Foxglove app settings, privacy preferences, and experimental features.
---

Configure Foxglove app settings, privacy preferences, and experimental features.

Click into the _Preferences_ tab in the app sidebar to configure the following settings.

## General

- **Color scheme** – Choose between light or dark mode, or follow your OS settings
- **Display timestamps in** – Timezone used to display timestamps
- **Timestamp format** – Formatting used to display timestamps
- **Message rate (Hz)** – Message pipeline's framerate – lowering framerate will reduce CPU usage and redraw frequency for panels like [Raw Messages](/docs/studio/panels/raw-messages) and [Data Source Info](/docs/studio/panels/data-source-info). Foxglove will continue to render at the usual 60fps for a smooth playback experience.
- **Language** – Select app language ([contribute your own translations](https://github.com/foxglove/studio/blob/main/CONTRIBUTING.md#localization))
- **Updates** – Toggle ability to automatically update the desktop app
- [**ROS_PACKAGE_PATH**](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) – Paths to search for more ROS packages. Can be specified using local file paths or `package://` URLs. Multiple paths can be separated by your standard OS path separator (e.g. ':' on Unix-like systems).

## Privacy

Decide whether you want to send anonymized usage data or crash reports to the Foxglove team – all data will be used to improve the app. These preference changes require an app relaunch to take effect.

## Extensions

Select the [Foxglove extensions](/docs/studio/extensions/getting-started) you want to install.

## Experimental features

These features are often being actively developed, tested, or deprecated – they are not recommended for regular use.

Reach out in the [Slack](/join-slack) channel, if you have any questions about using any of these features.