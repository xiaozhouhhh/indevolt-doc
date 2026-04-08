---
title: 旁路口模式说明
description: 了解Indevolt微储旁路口的用途、工作逻辑及不同场景下的行为
---

# 旁路口模式说明

旁路口（Backup）是一个**可自动切换方向的接口**：

- 接入光伏微逆 → 作为**输入口（发电）**
- 接入电器负载 → 作为**输出口（供电）**

👉 系统会自动识别当前连接类型，并切换工作模式。


:::info 固件要求
EMS ≥ 1.01.05 才支持旁路口连接负载或微逆。
:::

## 旁路口能做什么？

### 1️⃣ 接入微逆（发电）

当连接微逆时，电能会进入系统，用于：
- 给负载供电
- 给电池充电
- 多余电量并网（受限于馈网限制）

#### 不同策略下的行为差异

**自用优先**

- 光伏（微逆/PV）优先供给负载  
- 剩余电量再存入电池  
- 电池满后：
   - 在馈网限制内 → 并网  
   - 超出 → 光伏降功率  


**自定义充放计划 （仅PV）**

- 光伏（微逆/PV）优先供电池充电
- 电池充满后再供负载 
- 多余电量在限制内并网，超出部分降低 PV 功率

> **保护机制：**
> 
> 若电池已满，且余电仍过多（超过最大馈网功率）：
> - 系统可能临时断开旁路
> - 每 15 分钟自动检测，条件满足（不超过最大馈网功率）后恢复  


**自定义充放计划 （PV+AC）**

- 光伏（微逆/PV） + 电网优先为电池充电
- 电池充满后旁路断开，AC停止输入

### 2️⃣ 接入负载（用电）

当连接电器时，系统会自动选择电源供电：
- 优先使用光伏
- 不足时由电池补充  
- 仍不足时使用电网（仅并网模式）


## 模式识别

旁路口会根据功率自动判断接入设备类型：

| 条件                           | 识别为 | 模式 |
| ------------------------------ | ------ | -------- |
| **输入**功率 ≥ 30W，持续 5 秒  | 微逆   | 微逆模式 |
| **输出**功率 ≥ 30W，持续 20 秒 | 负载   | EPS 模式 |


## 旁路功率限制

| 模式 | 输入功率（微逆） | 输出功率（负载） |
| ---- | ---------------- | ---------------- |
| 并网 | ≤ 2400W          | ≤ 3600W          |
| 离网 | ≤ 1200W          | ≤ 2400W          |

## 设备的基本行为

- 当旁路口功率为 0 时，设备会保持“上一次运行模式”
- 设备重启后，默认进入 **EPS 模式**（需断开 PV 和 AC 后再重启）

## 如何开启或关闭旁路口

根据网络情况，有两种方式：

### 方式一：App 远程设置（网络正常）

Indevolt App → 设备 → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → 旁路设置 → 启用 → 选择接入设备类型

<img src={require("../energy-mode/img/select_device.png").default} width="240"/>
<img src={require("../energy-mode/img/device_info.png").default} width="240"/>
<img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
<img src={require("./img/bypass.png").default} width="240"/>


### 方式二：蓝牙本地连接（无网络）

App → 我的 / 登录页 → 设备直连 → 扫描二维码 → 连接设备 → <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> → 旁路设置 → 开启

<img src={require("./img/profile.png").default} width="240"/>
<img src={require("./img/login.png").default} width="240"/>
<img src={require("./img/scan_qr_code2.png").default} width="240"/>
<img src={require("./img/direct_connect.png").default} width="240"/>
<img src={require("./img/direct_connect_device_page.png").default} width="240"/>
<img src={require("./img/direct_connect_device_settings.png").default} width="240"/>


### 不同状态下如何控制

| 状态 | 网络情况 | 控制方式   |
| ---- | -------- | ---------- |
| 并网 | 正常     | App / 蓝牙 |
| 并网 | 异常     | 仅蓝牙     |
| 离网 | 正常     | App / 蓝牙 |
| 离网 | 异常     | 仅蓝牙     |

**离网补充说明**

如果离网的休眠设置 → 待机关机倒计时到达后，设备会进入**休眠**，旁路口会**自动关闭**，可通过以下方式重新开启：
1. 点按电源键 
2. 根据网络情况选择对应控制方式开启


## 具体场景说明

### 并网

**微逆模式**

<img src={require("./img/grid_microinverter.png").default} width="480"/>

- 光伏优先自用 + 充电  
- 多余电量并网（受馈网限制） 
- 发电过多时，系统可能限制或暂时断开旁路（正常保护）

**EPS模式**

<img src={require("./img/grid_eps.png").default} width="480"/>

- 光伏优先供电  
- 电池补充  
- 不足用电网  


### 离网

**微逆模式**

- 旁路口不再接收输入电能，**自动关闭**，防止损坏微逆或逆变器
- 如需供电：需重启设备切换为 EPS 模式  

**EPS模式**

<img src={require("./img/offgrid_eps.png").default} width="360"/>

- 自动切换微储 EPS 供电
- 可作为备用电源使用  