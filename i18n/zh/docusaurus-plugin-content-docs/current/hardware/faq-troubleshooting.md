---
title: FAQ与故障排查
description: INDEVOLT 储能设备常见问题解答与使用说明
---

# FAQ与故障排查

## 一、适用范围与基础兼容

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：设备兼容何种规格的太阳能板？
  </summary>

  答：建议适配光伏开路电压（Voc）在 10-60V 范围内、短路电流（Isc）不超过 20A 的太阳能板。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：设备能否在 0°C 以下环境使用？电池的理想工作温度范围是多少？
  </summary>

  答：设备在 0°C 以下可正常实现充放电功能，光伏发电也能正常进行。受冬季光照条件影响，发电量会有所降低，此时光伏电力基本可满足自用，无电力浪费情况。
  
  电池理想环境温度范围如下：
    - 充电：-20~55°C
    - 放电：-20~55°C
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：设备可以适配哪些品牌的产品？
  </summary>

  答：目前支持 Shelly、SOLARMAN 、INDEVOLT 等品牌产品。
</details>


## 二、安装、接线与使用

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：是否需要额外配备微型逆变器？
  </summary>

  答：根据型号不同，情况如下：
  - 非 ECO 型号：已内置微型逆变器，无需额外配置，且包含 4 路 MPPT（最大功率点跟踪）。若需提升光伏输出功率，可额外接入微型逆变器。
  - ECO 型号：不支持 MPPT。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：插入或添加扩展电池前需注意哪些事项？
  </summary>

  答：必须在设备完全断电状态下操作，严禁带电插拔，否则可能导致设备损坏或安全风险。正确操作步骤如下：  
      1. 断开光伏输入连接和 AC 电源插头；  
      2. 长按电源键 2 秒，关闭设备；  
      3. 设备关闭后，插入扩展电池；  
      4. 重新连接太阳能板并通电，恢复使用。  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：停电时，设备能否正常使用？
  </summary>

  答：家庭停电时设备可正常使用，可通过光伏进行充电，其离网输出接口根据不同产品型号最大输出功率有所不同。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：停电时，能否使用并网口？
  </summary>

  答：根据相关并网认证标准，设备需具备防孤岛功能（防止电网停电时设备向电网供电，避免对电网维修人员造成安全隐患）。因此，电网停电时，不能通过并网端口向电网供电，仅可通过设备的离网端口为负载供电。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：如何理解旁路模式？
  </summary>

  答：旁路模式是设备为适配特定外接设备而设计的运行模式，当旁路模式开启时，支持接入微型逆变器、关键负载等设备。用户可根据实际接入的设备类型，在设备或 App 中选择对应开关，开启后 App 界面会显示所接入设备的图案及能量流状态，便于实时监测设备运行情况。
  
  👉 查看详细说明：[旁路口使用说明](./technical-note/bypass.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：网络中断后，如何查看设备监测数据及调整参数？
  </summary>

  答：网络中断时，设备底层功能仍正常运行，可以通过连接本地蓝牙查看数据：
    - 方式一：在账号登录界面，选择“设备直连”，通过蓝牙与设备建立直连；
    - 方式二：在 App 应用中“我的”页面，选择“设备直连”功能，直接连接设备。
</details>

## 三、充放电与能量管理策略

<details className="error-details" open>
  <summary className="custom-details__summary">
  1. 问：多个电池电量不一样，会有问题吗？
  </summary>

  答：从硬件设计来看，设备通过 DC-DC 优化器解决不同电池包之间的电量差异，每个电池包均配备独立的 BMS（电池管理系统）和 DC-DC 优化器，即便不同容量、不同 SOC 的电池包，也可混合使用，不会因电量不平衡产生问题。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  2. 问：是否有改善模块间SOC平衡的措施？
  </summary>

  答：在后续的充放电循环过程中，系统会自动进行SOC均衡调整。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  3. 问：如何设置设备，使其不向家庭电网馈入电力？
  </summary>

  答：在 App 内进入设备的“功率设置”，将最大馈网功率设置为 0。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  4. 问：能否按“时间 + 电量”条件控制放电？
  </summary>

  答：可通过 Home Assistant 自行设置条件，在 Home Assistant 中添加对应的时间规则与 SOC 阈值规则，实现两者的联动控制。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  5. 问：如何设置让设备通过太阳能电池板为电池充电？
  </summary>

  答：在 App 的电量设置中，充电来源选择“仅PV”即可。
  
  > **注意**：为维持电池健康状态，当电池电量极低（SOC≤5%），且光伏功率不足时，系统将自动从电网充电，以保护电池安全。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  6. 问：当光伏功率达到多少时，设备才会开始充电？
  </summary>

  答：当光伏输入功率低于 50W 时，设备不会启动充电。
  
  这是因为设备自身运行功耗约 35 W，加上电能转换损耗，若光伏功率低于 50W，扣除损耗后，剩余电量基本无法为电池充电，反而可能导致电力浪费，因此系统设定光伏功率高于 50W 时才启动充电。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  7. 问：为什么光伏功率较低时，设备没有显示充电状态？
  </summary>

  答：只有当光伏输入在扣除设备自身耗电和转换损耗后，实际进入电池的充电功率达到一定水平，系统才会显示为充电。

  在光伏功率较低时，常见情况是：
  - 一部分电能被设备自身运行和电能转换消耗；
  - 实际进入电池的功率较小（低于显示阈值）；

  在功率低于系统显示阈值时，App 界面会显示为“静止”，但电池仍可能在缓慢充电，属于正常现象。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  8. 问：使用储能产品前，是否需要将电池充满电？
  </summary>

  答：建议在首次使用前，将电池满充 1 次，用于校准 SOC 数值，确保后续 App 显示的 SOC 与电池实际电量一致，提升使用体验。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  9. 问：当电池充满电后，太阳能电池板是否会停止发电？该操作是否存在危险？
  </summary>

  答：电池充满后太阳能板不会停止发电，该情况无安全风险：
  - 发电与余电处理：满电后太阳能板仍正常发电，多余电力按 App 设置（已设置“最大馈网功率”）馈入电网；若断开微型逆变器，设备会限制多余电力，避免电池过充。
  - 安全保障：设备自带过充保护，电池 SOC 达 100% 时自动停止充电，无安全隐患，只需确保转换开关连接正确、设备保护功能正常启用即可。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  10. 问：为什么断开电网后，应急插座（Backup）没有电？
  </summary>

  答：该插座的运行逻辑与接入设备类型及模式设置相关，具体说明如下：
  - 模式关联：当该插座接入微型逆变器时，设备会自动置为“微逆模式”；接入负载时，会置为“EPS（应急电源）模式”，模式会被系统记录；
  - 供电条件：断开电网（AC）或未重启设备时，系统会按上次记录的模式运行。其中，“微逆模式”下断开电网，为保护离网端口，插座不放电；仅在“EPS模式”下断开电网，插座才会供电。
  
  如何确保停电时有电可用？
  - 在设备仍然连接电网的情况下，将关键负载接入应急插座，系统会自动进入 EPS 模式；
  - 或者重启设备，设备重启后默认进入 EPS 模式；如果再接入微型逆变器，系统会再次切换到微逆模式。
  
  此外，若断开电网时电池SOC＜5%，应急插座也可能无法供电。

  👉 查看详细说明：[旁路口使用说明](./technical-note/bypass.md)
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  11. 问：SolidFlex 2000 设备的耗电量是多少？
  </summary>

  答：SolidFlex 2000 设备的耗电量分两种工况：
  - 工作状态（处于充放电或为负载供电时）：功耗约 30W；
  - 深度待机状态（不充电、不放电，设备低功耗运行）：功耗会随系统设置变化，详见[待机功耗说明](./technical-note/standby-power.md)
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  12. 问：设备耗电是否总是从电池取电，还是可直接使用光伏电力？
  </summary>

  答：设备耗电并非总是从电池取电，具体供电来源取决于外接设备的连接方式：
  - 若负载连接在设备的旁路口（相当于电表+负载的组合），则 MPPT 输入的太阳能电力会优先供应该负载，满足负载需求后，多余的太阳能电力才会为电池充电；
  - 若负载未连接旁路口，则设备优先从电池或电网取电（根据当前设置的电源优先级）。
</details>


## 四、扩展、电池与并机

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：集群模式是什么？如何使用？
  </summary>

  答：集群模式是指多台同类型储能设备（如多台 SolidFlex 2000）通过无线或有线方式组网，实现协同运行的模式，其核心功能包括：
  - 统一调度：多台设备共享负载信息，按预设规则分配充放电功率，提升整体运行效率；
  - 容量叠加：多台设备的电池容量叠加，满足更高负载或更长续航需求；
  - 冗余备份：某一台设备故障时，其余设备可正常运行，保障供电稳定性。
  
  使用方法：在 App 中完成所有设备的添加配网后，进入“设备”设置页面，选择“并机设置”，按照提示添加需组网的设备，完成配对后即可启用集群模式，同时可在该界面设置功率分配规则、SOC 阈值等参数。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：PowerFlex 系统与 SolidFlex 系统能否在集群模式下共同运行？
  </summary>

  答：目前已支持 PowerFlex 系统与 SolidFlex 系统在集群模式下共同运行。
</details>

<details className="error-details" open>
  <summary className="custom-details__summary">
  3. 问：若拥有两个电池组，设备输出功率可设置为 2×2400W，还是总功率仅为 2400W？
  </summary>

  答：**系统总放电功率上限为 2400W，而非 2 × 2400W**。  
  若设备存在总功率限制（如受逆变器功率、电路承载能力限制），则总功率需以设备标注的最大输出功率为准。具体可参考设备手册，或通过App设备界面的“功率设置”中查看可设置的最大总功率。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：电池参数显示最大功率为 2400W，但当前配置默认功率为 800W，能否将功率调整至 2400W？
  </summary>

  答：设备的放电能力由电池包数量决定，若需提升放电功率至 2400W，需增加电池包数量；仅通过参数调整无法实现功率提升。增加电池包数量后，设备放电能力会相应增强，需确保电路负载匹配，避免因负载过高导致设备故障。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：系统在多台设备并机时，供电功率是如何分配的？
  </summary>

  答：系统采用基于 SOC 与负载功率的分级供电分配规则，具体如下：
  - 放电功率 ＜ 200W 时，仅由 SOC 最高的设备承担全部放电负荷；
  - 200W ≤ 放电功率 ＜ 500W 时，由两台 SOC 较高的设备共同分担放电功率；
  - 放电功率 ＞ 500W 时，所有从机均参与放电，且按各设备 SOC 占比分配功率。  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：系统最多支持多少台 SolidFlex 2000 设备和 SFA1800 电池模块？总功率上限是多少？
  </summary>

  答：
  - 最大接入数量：每台 SolidFlex 2000 最大可接入 5 个 SFA1800 电池模块，单台设备最大装机容量为 10.8 千瓦时（5 个 SFA1800 电池模块总容量）；
  - 总放电功率上限：单台 SolidFlex 2000 的额定放电功率为 2400W；系统支持最多 3 台 SolidFlex 2000 作为无线集群，累计总放电功率上限为 7200W（3×2400W）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. 问：接入多台 SolidFlex 2000 后，系统或固件会限制总功率吗？App 支持识别的最大装机总容量是多少？
  </summary>

  答：
  - 固件功率限制：接入多组 SolidFlex 2000 电池簇时，固件不会限制总功率输出，用户可在 App 中根据实际需求调整设备总功率（需确保不超过电路承载能力）；
  - App 识别容量：App 不限制识别的最大装机总容量，例如接入 2 台 SolidFlex 2000，App 会分别显示每台设备的装机容量，并在集群界面显示总容量。
</details>

## 五、关联设备与系统联动

<details className="error-details" open>
  <summary className="custom-details__summary">
  1. 问：单个 Shelly 电流互感器能否同时控制多组 SolidFlex 2000 电池簇？控制方式为集中控制还是独立控制？
  </summary>

  答：单个 Shelly 电流互感器可以同时控制多组 SolidFlex 2000 电池簇，控制方式为集中控制，即所有被控制的 SolidFlex 2000 会执行同一指令（如统一启动放电、调整放电功率）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：能否与其他品牌储能系统联动？
  </summary>

  答：可以。通过 Home Assistant，可实现与其他系统的联动控制。操作时需确保两套系统均已接入 HomeAssistant，并完成设备授权与指令对接。
</details>

## 六、能耗优化与用电成本

<details className="error-details" open>
  <summary className="custom-details__summary">
  1. 问：当电池电量达到应急电量后，待机功耗仍由电池供给，不会自动切换到电网供电模式，该如何解决？
  </summary>

  答：建议做法：
  1. 开启 AC 旁路功能，电池降至应急电量后，待机功耗自动切换为电网供电，避免电池持续自耗电；
  2. 下调应急电量阈值 5%-10%，减少设备频繁充电次数，降低充电损耗；
  3. 恢复电网充电功能，设置仅电价低谷时段（如夜间）充电，兼顾电池健康与电费控制；
  4. 优化光伏利用，调整设备设置，优先用光伏电力供应待机功耗、为电池充电，减少电网依赖。

</details>

## 七、质保问题

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：产品质保期是多久？覆盖哪些部件？
  </summary>

  答：产品提供 **10 年有限质保**。质保范围涵盖电池、交流逆变器及整套系统（具体以质保合同条款为准，易损件除外）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：8000次循环寿命是否具备合同质保效力，还是仅为理论标称值。
  </summary>

  答：8000次循环寿命是基于实际测试得出的结果（设备采用两颗大电芯，提升循环稳定性），具备合同质保效力。
</details>

 
 <details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：质保期结束时，系统承诺的电池剩余容量（SOH）为多少？
  </summary>

  答：不低于70%（SOH）。
</details>


<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：标称 8000 次循环寿命时，实际放电深度（DOD）是多少？
  </summary>

  答：8000次循环寿命采用的实际放电深度为100%；系统设定的电池保护/预留电量比例为5%
</details>


<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：若要享受质保服务，电池允许的最大放电深度（DOD）为多少？
  </summary>

  答：在质保条件下，电池允许的最大放电深度为100%（日常使用中建议根据需求调整，避免频繁满放）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：符合质保条件的设备运行温度范围是多少？
  </summary>

  答：符合质保条件的设备运行温度范围为-20~55℃（最高限值55℃，最低限值-20℃）。
</details>


<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. 问：系统是否会自动限制充放电倍率（C-rate），以延长电池使用寿命？
  </summary>

  答：系统支持手动调整充放电功率，同时会根据电池状态（如SOC、温度）自动限制充放电倍率，避免过高倍率对电池造成损伤，延长电池使用寿命。

</details>


