---
title: 智能
description: 智能调节能源使用，充分利用电价差异实现节能增收。
---

# 智能

智能模式通过分析动态电价，自动优化您设备的充放电策略，旨在降低整体电费、提升能源使用效率，从而实现更高收益。

:::info 适用条件
1. 家庭使用非固定电价。
2. 家庭配备INDEVOLT储能设备。
:::

## 1. 激活智能模式

1. 点击**更多内容**，进入功能介绍页面。
2. 仔细阅读服务协议与相关说明。确认无误后，勾选**我已阅读并同意服务协议**。点击**下一步**按钮完成激活。

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>


## 2. 价格策略

价格策略是智能模式的核心，它通过预设的价格阈值，智能控制设备在电价低时充电、电价高时放电，从而充分利用电价波动实现收益最大化。

### 2.1 新增策略

1. 点击价格策略模块右上角的 <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 图标进入设置。
2. 根据页面提示，确保您已设置好[电价](./profile.md#31-添加电价)，并且家庭里已添加可参与策略的设备。若无，可分别点击对应区域进入设置。点击**下一步**按钮进入正式设置。
3. 页面会展示家庭内适用的设备，**选择参与策略的设备**，点击**下一步**。
4. 设定触发设备充放电行为的**目标价格**，点击**下一步**。
5. 预览系统根据您的设置生成的充放电计划，确认后点击**保存**。
6. 新策略创建后默认处于关闭状态，需手动点击**启用**按钮开启。

   <img src={require("./img/set_strategy.png").default} width="240"/>
   <img src={require("./img/strategy_requirements.png").default} width="240"/>
   <img src={require("./img/set_strategy_device.png").default} width="240"/>
   <img src={require("./img/strategy_price1.png").default} width="240"/>
   <img src={require("./img/confirm_strategy.png").default} width="240"/>

### 2.2 查看策略

若已创建策略，价格策略模块会显示当前计划状态（静止/充电/放电）及开关控制。

<img src={require("./img/price_strategy.png").default} width="240"/>

点击**价格策略**模块即可查看其运行计划以及策略所应用的设备。

<img src={require("./img/view_strategy.png").default} width="240"/>

点击价格策略页面右上角的日志图标，可查看策略日志，追溯所有历史修改记录以及开启/关闭状态变更情况。

<img src={require("./img/strategy_log.png").default} width="240"/>


### 2.3 修改策略

在价格策略页面，您可以随时对已创建的策略进行调整，包括修改适用的设备和调整目标价格。

**修改策略设备**

1. 在策略详情页面，点击 **设备运行详情** 模块右侧的编辑按钮。
2. 页面将显示当前家庭所有支持智能控制的设备，重新选择目标设备。
3. 点击 **下一步**，预览根据新设备生成的充放电计划，确认后点击 **启用**。
<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>

**调整目标价格**

1. 在策略详情页面，点击 **电力市场价格** 模块右侧的编辑按钮，重新选择目标价格。
2. 您可以按需重新设定目标价格，系统提供两种方式：
   - 手动设置：直接输入您期望的充（低价）放电（高价）触发价格。
   - 自动生成：设定目标价差，并选择高价与低价时段，系统将自动计算。
3. 点击 **下一步**，预览更新后的充放电计划，确认后点击 **启用**。
<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
<img src={require("./img/confirm_strategy.png").default} width="240"/>
