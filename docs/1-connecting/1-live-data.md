---
title: Live data
---

export const meta = {
  title: "Introduction",
  description:
    "Foxglove Studio can inspect data via multiple sources – including live ROS and non-ROS connections, as well as local and remote recorded data files (ROS 1 and ROS 2, PX4 ULogs, MCAP).",
  heroImage: "/img/docs/studio/connection/data-sources.webp",
};

Foxglove Studio can inspect data via multiple sources – including live and recorded data, [ROS](/ros) and [non-ROS](/docs/studio/connection/foxglove-websocket) connections, as well as local and remote recorded data files.

On opening Foxglove Studio, you will see a dialog with a list of all possible data sources (i.e. local file, remote file, live connection, sample data) – click into any of these options to start visualizing your data.

![data source dialog](/img/docs/studio/connection/dialog.webp)

Once you've loaded or connected to a data source, open the _Topics_ tab in the left sidebar to view your current data source's topics – including their schema names, message counts, and publish rates.

![topics tab](/img/docs/studio/connection/tab.jpeg)

All pre-recorded data sources (i.e. ROS 1, ROS 2, MCAP, and PX4 ULog files), whether they are loaded locally or from a remote URL, will be preloaded into Foxglove Studio. This means that you can visualize data over the course of the entire file at once.

_For more information on the MCAP file format, check out the [GitHub repo](https://github.com/foxglove/mcap) and [Introducing the MCAP File Format](/blog/introducing-the-mcap-file-format). If you're interested in support for data formats that are not currently included, please [share](/community) the protocols or serialization formats you're using._

## By live connection

Depending on your live connection, you have access to different capabilities:

|                        | [ROS 1](/docs/studio/connection/ros-native) | [ROS 2](/docs/studio/connection/ros-native)                     | [Rosbridge](/docs/studio/connection/rosbridge)                  | [Foxglove WebSocket](/docs/studio/connection/custom#live-connection) |
| ---------------------- | ------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| Stream ROS 1 data      | ✓                                           |                                                                 | ✓                                                               | ✓                                                                    |
| Stream ROS 2 data      |                                             | ✓                                                               | ✓                                                               | ✓                                                                    |
| Stream custom data     |                                             |                                                                 |                                                                 | ✓                                                                    |
| Custom message schemas | ✓                                           | [_ros2#1159_](https://github.com/ros2/ros2/issues/1159)         | ✓                                                               | ✓                                                                    |
| Publish messages       | ✓                                           | [_studio#1661_](https://github.com/foxglove/studio/issues/1661) | ✓                                                               | ✓ (ROS 1, ROS 2, JSON)                                               |
| Call services          |                                             |                                                                 | ✓                                                               | ✓ (ROS 1, ROS 2)                                                     |
| Call actions           |                                             |                                                                 |                                                                 |                                                                      |
| Read & set parameters  | ✓                                           | [_studio#2614_](https://github.com/foxglove/studio/issues/2614) | [_studio#2645_](https://github.com/foxglove/studio/issues/2645) | ✓                                                                    |

## Using Foxglove Bridge


> The Foxglove bridge is implemented as a C++ node for high performance and low overhead, and allows you to connect to your live ROS 1 and ROS 2 data via the Foxglove WebSocket protocol.
>
> Connect to [Foxglove Studio](/studio) via the Foxglove WebSocket connection to visualize your live robotics data.

## Overview

The `foxglove_bridge` uses the [Foxglove WebSocket protocol](https://github.com/foxglove/ws-protocol), a similar protocol to [`rosbridge`](https://github.com/RobotWebTools/rosbridge_suite), but with the ability to support additional schema formats such as ROS 2 `.msg` and ROS 2 `.idl`, parameters, graph introspection, and non-ROS systems. The bridge is written in C++ and designed for high performance with low overhead to minimize the impact to your robot stack.

## Installation

The `foxglove_bridge` package is available for ROS 1 Melodic and Noetic, and ROS 2 Humble and Rolling. Earlier releases of ROS will not be supported due to API design and/or performance limitations. The package can be installed with the following command:

```bash
$ sudo apt install ros-$ROS_DISTRO-foxglove-bridge
```

## Launch

Start the `foxglove_bridge` from your ROS workspace using `roslaunch` in ROS 1 or `ros2 launch` in ROS 2. Optional configurations and their default values are below.

```bash
$ ros2 launch foxglove_bridge foxglove_bridge_launch.xml
```

Add `foxglove_bridge` to your launch file if you plan to use it anytime your robot is online.

### Configuration

Use parameters to configure your bridge's behavior. These parameters must be set at initialization through a launch file or the command line – they cannot be modified at runtime.

- **port** – The TCP port to bind the WebSocket server to. Must be a valid TCP port number, or 0 to use a random port. Defaults to `8765`.
- **address** – The host address to bind the WebSocket server to. Defaults to `0.0.0.0`, listening on all interfaces by default. Change this to `127.0.0.1` to only accept connections from the local machine.
- **tls** – If `true`, use Transport Layer Security (TLS) for encrypted communication. Defaults to `false`.
- **certfile** – Path to the certificate to use for TLS. Required when **tls** is set to `true`. Defaults to `""`.
- **keyfile** – Path to the private key to use for TLS. Required when **tls** is set to `true`. Defaults to `""`.
- **topic_whitelist** – List of regular expressions ([ECMAScript grammar](https://en.cppreference.com/w/cpp/regex/ecmascript)) of whitelisted topic names. Defaults to `[".*"]`.
- **send_buffer_limit** – Connection send buffer limit in bytes. Messages will be dropped when a connection's send buffer reaches this limit to avoid a queue of outdated messages building up. Defaults to `10000000` (10 MB).
- (ROS 1) **max_update_ms** – The maximum number of milliseconds to wait in between polling `roscore` for new topics, services, or parameters. Defaults to `5000`.
- (ROS 2) **num_threads** – The number of threads to use for the ROS node executor. This controls the number of subscriptions that can be processed in parallel. 0 means one thread per CPU core. Defaults to `0`.
- (ROS 2) **max_qos_depth** – Maximum depth used for the QoS profile of subscriptions. Defaults to `10`.

## Development

For directions on how to build from source or to contribute to the project, check out the [`ros-foxglove-bridge` GitHub repo](https://github.com/foxglove/ros-foxglove-bridge/).

## Additional resources

- [Open a Foxglove bridge connection](/blog/announcing-the-new-foxglove-bridge-for-live-ros-data)