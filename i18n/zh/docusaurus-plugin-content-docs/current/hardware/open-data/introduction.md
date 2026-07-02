---
title: 介绍
description: INDEVOLT 设备本地与云端数据通信框架说明
---

# OpenData 介绍

OpenData 是为 INDEVOLT 微型储能设备设计的一套轻量级数据通信框架，用于实现设备与 App、云平台、家庭能源系统（HEMS）以及工业系统之间的数据交互。

通过 OpenData，你可以：

- 📡 实时查看设备数据：如电量（SOC）、功率、电压、温度、运行状态
- 🎛️ 远程控制设备：如设置充放电模式、调整功率、控制运行策略
- 🔗 接入第三方系统：如 Home Assistant 或云平台

## 支持的通信方式

OpenData 支持多种常见工业与物联网协议，方便不同场景使用：

- [**HTTP / HTTP Digest / HTTPS**](./http.md)
  - 适用于云平台与应用程序接口（API）调用
  - 支持按需查询设备数据

- [**Modbus TCP / RTU**](./modbus.md)
  - 适用于本地工业与能源管理系统（HEMS / PLC）
  - 通过寄存器方式读取或写入设备数据

- [**MQTT**](./mqtt.md)
  - 适用于实时数据推送与物联网场景
  - 基于发布 / 订阅模式，实现高效数据同步

## 设备接入方式

设备可以通过以下方式连接网络：

- Wi-Fi
- Ethernet（以太网）
- RS485（用于 Modbus RTU）

设备成功联网后，即可通过 OpenData 与外部系统进行数据交互与控制。

## 工作原理

可以简单理解为：设备负责产生和上传数据，外部系统负责读取数据或下发控制指令。

```text
INDEVOLT 设备
   ↓
OpenData 通信层
   ↓
HTTP / MQTT / Modbus
   ↓
外部系统（App / 云平台 / HEMS / PLC）
```
