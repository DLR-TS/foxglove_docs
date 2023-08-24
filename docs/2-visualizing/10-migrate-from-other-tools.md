---
title: Migrate from other tools
description: Migrate your existing developer tools to a Fox
---

Foxglove streamlines robotics development by migrating many commonly used developer tools into modular [panels](/docs/visualizing/panels/introduction) – all within one integrated development environment.

## By framework

| framework | tool                                                                                                               | Foxglove panel                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`rosparam`](http://wiki.ros.org/rosparam)                                                                         | [Parameters](/docs/studio/panels/parameters)                                                               |
|           | [`rostopic`](http://wiki.ros.org/rostopic)                                                                         | [Data Source Info](/docs/studio/panels/data-source-info), [Raw Messages](/docs/studio/panels/raw-messages) |
|           | [`rqt_console`](https://wiki.ros.org/rqt_console)                                                                  | [Log](/docs/studio/panels/log)                                                                             |
|           | [`rqt_graph`](https://wiki.ros.org/rqt_graph)                                                                      | [Topic Graph](/docs/studio/panels/topic-graph)                                                             |
|           | [`rqt_image_view`](https://wiki.ros.org/rqt_image_view)                                                            | [Image](/docs/studio/panels/image)                                                                         |
|           | [`rqt_plot`](https://wiki.ros.org/rqt_plot)                                                                        | [Plot](/docs/studio/panels/plot)                                                                           |
|           | [`rqt_publisher`](http://wiki.ros.org/rqt_publisher)                                                               | [Publish](/docs/studio/panels/publish)                                                                     |
|           | [`rqt_runtime_monitor`](http://wiki.ros.org/rqt_runtime_monitor)                                                   | [Diagnostics](/docs/studio/panels/diagnostics)                                                             |
|           | [`rviz`](http://wiki.ros.org/rviz)                                                                                 | [3D](/docs/studio/panels/3d)                                                                               |
|           | [`teleop_twist_keyboard`](http://wiki.ros.org/teleop_twist_keyboard)                                               | [Teleop](/docs/studio/panels/teleop)                                                                       |
| ROS 2     | [`ros2 param`](https://docs.ros.org/en/galactic/How-To-Guides/Using-ros2-param.html)                               | [Parameters](/docs/studio/panels/parameters)                                                               |
|           | [`ros2 topic`](https://docs.ros.org/en/galactic/Tutorials/Topics/Understanding-ROS2-Topics.html#ros2-topic-list)   | [Data Source Info](/docs/studio/panels/data-source-info), [Raw Messages](/docs/studio/panels/raw-messages) |
|           | [`rqt_console`](https://docs.ros.org/en/galactic/Tutorials/Rqt-Console/Using-Rqt-Console.html)                     | [Log](/docs/studio/panels/log)                                                                             |
|           | [`rqt_graph`](https://docs.ros.org/en/galactic/Tutorials/Topics/Understanding-ROS2-Topics.html?#rqt-graph)         | [Topic Graph](/docs/studio/panels/topic-graph)                                                             |
|           | [`rqt_image_view`](https://index.ros.org/p/rqt_image_view/github-ros-visualization-rqt_image_view)                 | [Image](/docs/studio/panels/image)                                                                         |
|           | [`rqt_plot`](https://index.ros.org/p/rqt_plot/)                                                                    | [Plot](/docs/studio/panels/plot)                                                                           |
|           | [`rqt_publisher`](https://index.ros.org/p/rqt_publisher/)                                                          | [Publish](/docs/studio/panels/publish)                                                                     |
|           | [`rqt_runtime_monitor`](https://index.ros.org/p/rqt_runtime_monitor/github-ros-visualization-rqt_runtime_monitor/) | [Diagnostics](/docs/studio/panels/diagnostics)                                                             |
|           | [`rviz`](https://github.com/ros2/rviz)                                                                             | [3D](/docs/studio/panels/3d)                                                                               |
|           | [`teleop_twist_keyboard`](https://github.com/ros2/teleop_twist_keyboard)                                           | [Teleop](/docs/studio/panels/teleop)                                                                       |
| Other     | [`urdf-loader` demo](https://gkjohnson.github.io/urdf-loaders/javascript/example/bundle/)                          | [3D](/docs/studio/panels/3d#add-urdf)                                                                      |