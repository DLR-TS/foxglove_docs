---
title: Publish
description: Publish messages on a topic back to your robotics stack.
---

Publish messages on a topic back to your robotics stack.

## User interactions

Specifying the topic you want to publish your message on will automatically infer its schema name and populate the text field with a JSON message template.

Clicking into the schema name field will provide a dropdown list of common ROS schemas. Selecting a schema will also populate the text field with a JSON message template.

Edit the template to customize the message you want to send back to your ROS stack, before hitting "Publish".

![publish panel](/img/docs/visualizing/panels/publish/panel.webp)

The "Publish" button will be disabled if Foxglove is not connected to a ROS source.

## Settings

| General            |                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Editing mode**   | Whether you want to edit the message to publish back to your ROS stack; defaults to On |
| **Button title**   | Defaults to "Publish"                                                                  |
| **Button tooltip** |  Defaults to "Connect to ROS to publish data"                                          |
| **Button color**   |  Defaults to green                                                                     |