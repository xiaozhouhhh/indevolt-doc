---
title: MQTT Topic
description: todo
---

# MQTT Topic

INDEVOLT MQTT 默认提供以下 Topic 结构，开发者可根据实际部署需求进行自定义。

| Topic                        | 说明         |
| ---------------------------- | ------------ |
| [`/test/subtopic`](#1-数据上报)             | 设备数据上报 |
| [`/test/subtopic/control`](#2-控制命令)     | 控制命令     |
| [`/test/subtopic/control_ack`](#3-控制应答) | 控制执行结果 |

## 1. 数据上报

设备通过数据 Topic 主动发布运行数据。

**Topic**

`/test/subtopic`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic" -v
```

**数据类型**

同一个 Topic 下可能包含多种数据类型，客户端可通过 `dataType` 字段区分消息类型。

| dataType     | 说明     |
| ------------ | -------- |
| gateway_data | 网关信息 |
| battery_data | 电池数据 |

**示例消息**

```json
{
  "GW_SN": "xxxxxxxx",
  "dataType": "gateway_data",
  "firmwareVersion": "V140C.0B.0036",
  "rssiWifi": "-41",
  "ssidWifi": "QXTS",
  "bssidWifi": "",
  "iP": "190.160.3.167"
}
```


## 2. 控制命令

第三方系统可以通过控制 Topic 向设备发送控制请求。

**Topic**

`/test/subtopic/control`

**Publish**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_pub -h 127.0.0.1 -t "/test/subtopic/control" -m '{}'
```

**消息格式**

| 字段 | 说明 |
| ---- | ---- |
|      |      |


## 3. 控制应答

设备执行控制命令后，通过控制应答 Topic 返回执行结果。

**Topic**

`/test/subtopic/control_ack`

**Subscribe**

```bash
# Example: connect to a local MQTT Broker
# Replace 127.0.0.1 with your MQTT Broker address if using a remote Broker
mosquitto_sub -h 127.0.0.1 -t "/test/subtopic/control_ack" -v
```

**示例消息**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="success" label="成功" default>

```json
{

}
```

  </TabItem>

  <TabItem value="fail" label="失败">

```json
{

}
```

  </TabItem>

</Tabs>

