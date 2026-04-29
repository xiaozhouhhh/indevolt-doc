---
title: 电池SOC均衡说明
description: 了解电池电量不一致时，系统如何自动调节与保护
---

# 电池SOC均衡说明

## 1. 什么是 SOC 均衡

SOC（State of Charge）表示电池的电量百分比。当微储接入多个电池包时，不同电池的电量可能会出现差异。此时，系统会自动进行“均衡”，让各个电池的电量尽量保持接近。

简单理解：让电量高的多出力，电量低的少出力，逐步拉平差距。

---

## 2. 为什么需要 SOC 均衡

- 延长电池寿命：避免个别电池长期过充或过放
- 提升运行效率：电量一致时，系统运行更稳定
- 保障使用安全：降低过热、损坏等风险

---

## 3. 如何实现 SOC 均衡

系统通过内置 DCDC 模块 + EMS（能量管理系统）自动调节：

- 根据各电池 SOC 差异，按比例分配充放电功率  
- SOC 较高的电池：更多放电 / 更少充电  
- SOC 较低的电池：更少放电 / 更多充电  
- 最终将电池间 SOC 差异控制在 **约 3%～7%**

> *示例：*
> - *电池包 1：SOC 80%*
> - *电池包 2：SOC 40%*
> - *负载：900W*
> 
> *此时，EMS会按以下方式分配功率：*
> - *电池包1（电量高）：放电约 600W*  
> - *电池包2（电量低）：放电约 300W*  
> 
> *随着时间推移，两者电量差距会逐渐缩小，直到趋于平衡。*

---

## 4. 低电量下如何均衡

当系统电量较低时，会优先保障安全和基础供电。


<details className="custom-details">
  <summary className="custom-details__summary">如何查看/设置应急电量</summary>

  APP操作步骤：设备页面-点击对应的微储设备-点击<img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>图标-点击电量设置-设置应急电量（5%~100%）

  <img src={require("../energy-mode/img/select_device.png").default} width="240"/>
  <img src={require("../energy-mode/img/device_info.png").default} width="240"/>
  <img src={require("../energy-mode/img/device_setting.png").default} width="240"/>
  <img src={require("./img/soc_settings.png").default} width="240"/>
  <img src={require("./img/backup_reserve.png").default} width="240"/>
</details>

### 4.1 放电

- 当某个电池包电量降至“应急电量”时，该电池包停止放电，进入待机。
    > 注意：在光伏接入、电网充电或深度待机等情况下，此策略不生效。

- 其他电量更高的电池继续供电。


### 4.2 充电

**◽ 有光伏时（PV / PV+AC）**

所有电池包同时充电  

**◽ 仅使用电网（AC）充电**

| EMS 版本       | 行为 |
| -------------- | ---- |
| 低于 1.01.05 | 当总 SOC 低于应急电量，**所有电池包统一充电**；<br />当总 SOC 达到应急电量时停止 |
| 1.01.05 或更高 | 当总 SOC 低于应急电量，**优先给“低于应急电量”的电池包充电**；<br />当总 SOC 达到应急电量时停止   |


📌 详细补电逻辑请参考：[补电逻辑说明](./recharge.md)

### 4.3 待机

**◽ 主机功耗**

主机是否配备 AC 辅助电源模块，会影响其待机功耗的供电来源。该信息后续将在 App 中展示。

主机深度待机功耗约 6W：

- 无辅源模块：由**自身电池供电**，会导致主机 SOC 下降速度快于电池包  
- 有辅源模块：由**辅源模块供电**（接入电网时由电网供电），可减少电池消耗  

**◽ 电池包功耗**

约 2W，始终由自身电池供电

📌 详细待机功耗说明请参考：[待机功耗说明](./standby-power.md)
