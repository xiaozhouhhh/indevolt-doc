---
title: 旁路口模式说明
description: 了解旁路口在不同场景下的工作方式，以及如何正确使用与切换模式
---

# 旁路口模式说明

旁路口（Backup）可以自动识别你连接的是**微逆设备**还是**用电负载**，并在两种模式之间智能切换：
- **微逆模式**：用于接入光伏微逆
- **EPS 模式**：用于给家庭负载供电

:::info 前提
- **固件版本要求**：EMS ≥ 1.01.03
:::

## 模式切换逻辑

旁路口会根据“功率方向 + 功率大小 + 持续时间”自动判断当前接入类型，并切换模式：

| 判定条件                       | 识别为 | 切换模式 |
| ------------------------------ | ------ | -------- |
| **输入**功率 ≥ 30W，持续 5 秒  | 微逆   | 微逆模式 |
| **输出**功率 ≥ 30W，持续 20 秒 | 负载   | EPS 模式 |

## 设备的基本行为

无论在哪种状态下，设备都遵循以下规则：

- 当旁路口功率为 0 时，设备会保持“上一次运行模式”
- 设备重启后，默认进入 **EPS 模式**  
    ⚠️ 需断开 PV 和 AC 后再重启，才能生效



## 如何开启或关闭旁路口

根据网络情况，有两种方式：

### 方式一：App 远程设置

Indevolt App → 设备 → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → 旁路设置 → 启用 → 选择接入设备类型

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/bypass.png").default} width="240"/>


### 方式二：蓝牙本地连接（无网络时）

App → 我的 / 登录页 → 设备直连 → 扫描二维码 → 连接设备 → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → 旁路设置 → 开启

<img src={require("./img/profile.png").default} width="240"/>
<img src={require("./img/login.png").default} width="240"/>
<img src={require("./img/scan_qr_code2.png").default} width="240"/>
<img src={require("./img/direct_connect.png").default} width="240"/>
<img src={require("./img/direct_connect_device_page.png").default} width="240"/>
<img src={require("./img/direct_connect_device_settings.png").default} width="240"/>


### 不同状态下如何控制

| 状态       | 网络情况 | 控制方式       | 
|------------|----------|----------------|
| 并网       | 正常     | App / 蓝牙     |
| 并网       | 异常     | 仅蓝牙         | 
| 离网       | 正常     | App / 蓝牙     | 
| 离网       | 异常     | 仅蓝牙         | 

**离网补充说明**

如果离网的休眠设置 → 待机关机倒计时到达后，设备会进入**休眠**，旁路口会**自动关闭**，可通过以下方式重新开启：
1. 长按电源键约 2 秒  
2. 根据网络情况选择对应控制方式开启



## 具体场景说明

### 场景 1：并网（网络正常）

- 设置方式：[App 远程设置](#方式一app-远程设置)
- 模式根据功率自动切换（见[模式切换逻辑](#模式切换逻辑)）


### 场景 2：并网 → 离网（网络正常）

- 设置方式：[App 远程设置](#方式一app-远程设置)
- 并网下模式根据功率自动切换（见[模式切换逻辑](#模式切换逻辑)）
- AC 断开后：
  | 接入设备 | 离网后行为                                                          |
  | -------- | ------------------------------------------------------------------- |
  | 微逆     | 旁路口自动关闭，防止损坏微逆或逆变器<br/>如需切换到EPS 模式，请重启 |
  | 负载     | 自动切换到微储 EPS 供电                                             |


### 场景 3：并网（网络异常）

- 设置方式：[蓝牙本地连接](#方式二蓝牙本地连接无网络时)
- 模式根据功率自动切换（见[模式切换逻辑](#模式切换逻辑)）


### 场景 4：并网 → 离网（网络异常）

- 设置方式：[蓝牙本地连接](#方式二蓝牙本地连接无网络时)
- 并网下模式根据功率自动切换（见[模式切换逻辑](#模式切换逻辑)）
- AC 断开后：离网行为同场景 2
