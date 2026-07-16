---
title: API Reference
description: todo
---

# API Reference

| Component               | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| [`Indevolt`](#indevolt) | Retrieve device data and control device.                    |
| [`Sys`](#sys)           | Obtain CMS (Communication Management System) information.   |
| [`WIFI`](#wifi)              | Retrieve the current Wi-Fi connection status of the device. |

---

## `Indevolt`

`Indevolt` provides data interaction APIs for micro energy storage devices. It allows you to retrieve device operating data and configuration parameters, as well as send control commands to the device.

* [**`Indevolt.GetData`**](#indevoltgetdata): Retrieves device operating data or configuration parameters.
* [**`Indevolt.SetData`**](#indevoltsetdata): Modifies device configuration parameters or executes control operations.

### `Indevolt.GetData`

Retrieves device operating data or configuration parameters.

import ApiBlock from "@site/src/components/ApiBlock";
import ResponseBlock from "@site/src/components/ResponseBlock";

<ApiBlock method="POST" path="/rpc/Indevolt.GetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.GetData?config={\"t\":[1664,1665]}"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "1664": 100,
  "1665": 251
}
```

</ResponseBlock>

#### Query Parameters

| Parameter | Type   | Required | Description                   |
| --------- | ------ | -------- | ----------------------------- |
| `config`  | Object | Yes      | Data retrieval configuration. |

`config` Object

| Parameter | Type  | Required | Description                                           |
| --------- | ----- | -------- | ----------------------------------------------------- |
| `t`       | Array | Yes      | List of [cJSON Points](#cjson-points) to be read. |

#### Response

Returns device data in JSON format, where:

* **Key**: cJSON Point
* **Value**: Current value of the corresponding data point

#### cJSON Points

The following cJSON Points are used to retrieve device operating data or configuration parameters. The supported cJSON Points vary by device model. Refer to the corresponding device's data point list for details.

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>

  <table><thead>
    <tr>
      <th>cJSON Point</th>
      <th>cJSON Value Type</th>
      <th>Unit</th>
      <th>Point Description</th>
      <th>Enum Definition</th>
      <th>API</th>
      <th>Annotation</th>
    </tr></thead>
  <tbody>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>SN </td>
    </tr>
    <tr>
      <td>0</td>
      <td>String</td>
      <td></td>
      <td>Device SN</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Firmware Version Information</td>
    </tr>
    <tr>
      <td>1118</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series EMS</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1109</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series BMS-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td> 1119 </td>
      <td>String</td>
      <td></td>
      <td>PG2000Series PCS </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1120</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series DCDC </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td> 1136</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC1 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1137 </td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS1 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1138 </td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC2 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1139 </td>
      <td>String</td>
      <td></td>
      <td> SFA/PFA BMS2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td> 1140</td>
      <td>String</td>
      <td></td>
      <td> SFA/PFA DCDC3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1141 </td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS3 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1142 </td>
      <td>String</td>
      <td></td>
      <td> SFA/PFA DCDC4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1143</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS4 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
      <tr>
      <td>1098 </td>
      <td>String</td>
      <td></td>
      <td> SFA/PFA DCDC5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1099</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS5 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>System Operating Information</td>
    </tr>
    <tr>
      <td>7101</td>
      <td>Enum</td>
      <td></td>
      <td>Working Mode</td>
      <td>1: Self-consumed Prioritized<br />4: Real-time Control<br />5: Charge/Discharge Schedule</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>142</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Rated Capacity</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2618</td>
      <td>Num</td>
      <td></td>
      <td>Grid Charging</td>
      <td>1000: Disable<br />1001: Enable</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11009</td>
      <td>Num</td>
      <td>W</td>
      <td>Inverter Input Limit</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2101</td>
      <td>Num</td>
      <td>W</td>
      <td>Total AC Input Power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2108</td>
      <td>Num</td>
      <td>W</td>
      <td>Total AC Output Power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11010</td>
      <td>Num</td>
      <td>W</td>
      <td>Feed-in Power Limit</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11011</td>
      <td>Num</td>
      <td>W</td>
      <td>Max AC Output Power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>680</td>
      <td>Num</td>
      <td></td>
      <td>Bypass</td>
      <td>0: Disable<br />1: Enable </td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11039</td>
      <td>Num</td>
      <td></td>
      <td>Bypass mode</td>
      <td>0: Eps<br />1: M-Inv</td>
      <td>`Indevolt.GetData`</td>
      <td>Automatically switch according to forward and reverse current</td>
    </tr>
    <tr>
      <td>6105</td>
      <td>Num</td>
      <td>%</td>
      <td>Backup SOC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>7171</td>
      <td>Num</td>
      <td></td>
      <td>Light</td>
      <td>0: Disable<br />1: Enable </td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>8646</td>
      <td>Num</td>
      <td>Day</td>
      <td>Battery Calibration: Cycle </td>
      <td>0-60 <br />0: OFF</td>
      <td>`Indevolt.GetData`</td>
      <td>Operating time without full charge</td>
    </tr>
    <tr>
      <td>8647</td>
      <td>Num</td>
      <td>Time</td>
      <td>Battery Calibration: Start Time</td>
      <td> DEC-->HEX<br />H: hour<br />L: minute </td>
      <td>`Indevolt.GetData`</td>
      <td>e.g.: 256-->0100<br /><br />01(HEX-H)-->01h<br />00(HEX-L)-->00min</td>
    </tr>
    <tr>
      <td>2802</td>
      <td>Num</td>
      <td>W</td>
      <td>Battery Calibration: Charging power (AC)</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Cluster Information</td>
    </tr>
    <tr>
      <td>606</td>
      <td>Enum</td>
      <td></td>
      <td>Master-slave identification</td>
      <td>1000: Master<br />1001: Slave<br />1002: None</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Bypass Power</td>
    </tr>
    <tr>
      <td>667</td>
      <td>Float</td>
      <td>W</td>
      <td>Bypass power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td>Real-time power flowing through the bypass path.<br/>- Grid-tied: power may come from the microinverter or be supplied directly to loads<br/>- Off-grid: power is directly supplied to loads</td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Electrical Energy Information</td>
    </tr>
    <tr>
      <td>2107</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Total AC Input Energy</td>
      <td>  </td>
      <td>`Indevolt.GetData`</td>
      <td>Total energy imported from the grid. This energy can be used to charge the battery or directly supply loads through bypass.</td>
    </tr>
    <tr>
      <td>2104</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Total AC Output Energy</td>
      <td>  </td>
      <td>`Indevolt.GetData`</td>
      <td>Comprehensive electrical energy, including (DC+AC+Bypass)</td>
    </tr>
    <tr>
      <td>11035</td>
      <td>Num</td>
      <td>Wh</td>
      <td>Daily bypass M-inv input energy</td>
      <td>  </td>
      <td>`Indevolt.GetData`</td>
      <td>Daily energy coming from the microinverter. This is only available in grid-tied mode, when the system is connected to a microinverter.</td>
    </tr>
    <tr>
      <td>11034</td>
      <td>Num</td>
      <td>Wh</td>
      <td>Total bypass M-inv input energy</td>
      <td>  </td>
      <td>`Indevolt.GetData`</td>
      <td>Total energy coming from the microinverter. This is only available in grid-tied mode, when the system is connected to a microinverter.</td>
    </tr>
    <tr>
    <td>11037</td>
      <td>Num</td>
      <td> KWh</td>
      <td>Daily off-grid bypass output energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td>Daily electrical energy of off - grid bypass discharge</td>
    </tr>
    <tr>
      <td>2105</td>
      <td>Num</td>
      <td> KWh</td>
      <td>Total off-grid bypass output energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td>Total electrical energy of off-grid bypass discharge</td>
    </tr>
    <tr>
      <td>9285</td>
      <td>Num</td>
      <td> Wh</td>
      <td>Daily bypass output energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td>Daily electrical energy of bypass discharge (grid-connected + off-grid)</td>
    </tr>
    <tr>
        <td>9284</td>
        <td>Num</td>
        <td>Wh</td>
        <td>Total bypass output energy</td>
        <td></td>
      <td>`Indevolt.GetData`</td>
      <td>Total electrical energy of bypass discharge (grid-connected + off-grid)</td>
    </tr>
    <tr>
      <td>1502</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Daily PV Generation</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1505</td>
      <td>Num</td>
      <td>Wh</td>
      <td>Cumulative Production</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6004</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Battery Daily Charging Energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6005</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Battery Daily Discharging Energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6006</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Battery Total Charging Energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6007</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Battery Total Discharging Energy</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Electricity Meter Status</td>
    </tr>
    <tr>
      <td>7120</td>
      <td>Enum</td>
      <td></td>
      <td>Meter Connection Status</td>
      <td>1000: Enable<br />1001: Disable</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11016</td>
      <td>Float</td>
      <td>W</td>
      <td>Meter Power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Grid Information</td>
    </tr>
    <tr>
      <td>2600</td>
      <td>Num</td>
      <td>V</td>
      <td>Grid Voltage</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2612</td>
      <td>Num</td>
      <td>Hz</td>
      <td>Grid Frequency</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Battery Pack Operating Parameters</td>
    </tr>
    <tr>
      <td>6001</td>
      <td>Enum</td>
      <td> </td>
      <td>Battery Charge/Discharge State</td>
      <td>1000: Static<br />1001: Charging<br />1002: Discharging</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6000</td>
      <td>Num</td>
      <td>W</td>
      <td>Battery Power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6002</td>
      <td>Num</td>
      <td>%</td>
      <td>Battery SOC Total</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9008</td>
      <td>String</td>
      <td> </td>
      <td>Batt SN-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9000</td>
      <td>Num</td>
      <td>%</td>
      <td>Batt SOC-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9004</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt V-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9013</td>
      <td>Num</td>
      <td>A</td>
      <td>Batt I-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9012</td>
      <td>Num</td>
      <td>℃</td>
      <td>Batt Temp-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9009</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell1 V-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9011</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell2 V-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9032</td>
      <td>String</td>
      <td> </td>
      <td>Batt SN-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9016</td>
      <td>Num</td>
      <td>%</td>
      <td>Batt SOC-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9020</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt V-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19173</td>
      <td>Num</td>
      <td>A</td>
      <td>Batt I-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9030</td>
      <td>Num</td>
      <td>℃</td>
      <td>Batt Temp-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9021</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell1 V-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9023</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell2 V-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9051</td>
      <td>String</td>
      <td> </td>
      <td>Batt SN-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9035</td>
      <td>Num</td>
      <td>%</td>
      <td>Batt SOC-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9039</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt V-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19174</td>
      <td>Num</td>
      <td>A</td>
      <td>Batt I-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9049</td>
      <td>Num</td>
      <td>℃</td>
      <td>Batt Temp-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9040</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell1 V-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9042</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell2 V-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9070</td>
      <td>String</td>
      <td> </td>
      <td>Batt SN-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9054</td>
      <td>Num</td>
      <td>%</td>
      <td>Batt SOC-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9058</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt V-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19175</td>
      <td>Num</td>
      <td>A</td>
      <td>Batt I-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9068</td>
      <td>Num</td>
      <td>℃</td>
      <td>Batt Temp-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9059</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell1 V-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9061</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell2 V-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9165</td>
      <td>Num</td>
      <td> </td>
      <td>Batt SN-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9149</td>
      <td>Num</td>
      <td>%</td>
      <td>Batt SOC-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9153</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt V-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19176</td>
      <td>Num</td>
      <td>A</td>
      <td>Batt I-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9163</td>
      <td>Num</td>
      <td>℃</td>
      <td>Batt Temp-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9154</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell1 V-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9156</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell2 V-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9218</td>
      <td>String</td>
      <td> </td>
      <td>Batt SN-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9202</td>
      <td>Num</td>
      <td>%</td>
      <td>Batt SOC-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9206</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt V-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19177</td>
      <td>Num</td>
      <td>A</td>
      <td>Batt I-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9216</td>
      <td>Num</td>
      <td>℃</td>
      <td>Batt Temp-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9219</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell1 V-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9222</td>
      <td>Num</td>
      <td>V</td>
      <td>Batt Cell2 V-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>PV Operating Parameters</td>
    </tr>
    <tr>
      <td>1501</td>
      <td>Num</td>
      <td>W</td>
      <td>Total DC Output Power</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1632</td>
      <td>Num</td>
      <td>A</td>
      <td>DC Input Current 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1600</td>
      <td>Num</td>
      <td>V</td>
      <td>DC Input Voltage 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1664</td>
      <td>Num</td>
      <td>W</td>
      <td>DC Input Power 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1633</td>
      <td>Num</td>
      <td>A</td>
      <td>DC Input Current 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1601</td>
      <td>Num</td>
      <td>V</td>
      <td>DC Input Voltage 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1665</td>
      <td>Num</td>
      <td>W</td>
      <td>DC Input Power 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1634</td>
      <td>Num</td>
      <td>A</td>
      <td>DC Input Current 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1602</td>
      <td>Num</td>
      <td>V</td>
      <td>DC Input Voltage 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1666</td>
      <td>Num</td>
      <td>W</td>
      <td>DC Input Power 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1635</td>
      <td>Num</td>
      <td>A</td>
      <td>DC Input Current 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1603</td>
      <td>Num</td>
      <td>V</td>
      <td>DC Input Voltage 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1667</td>
      <td>Num</td>
      <td>W</td>
      <td>DC Input Power 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
  </tbody>
  </table>

 </TabItem>
 <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">


<table><thead>
<tr>
    <th>cJSON Point</th>
    <th>cJSON Value Type</th>
    <th>Unit</th>
    <th>Point Description</th>
    <th>Enum Definition</th>
    <th>API</th>
    <th>Annotation</th>
</tr></thead>
<tbody>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>SN </td>
</tr>
<tr>
    <td>0</td>
    <td>String</td>
    <td></td>
    <td>Device SN</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Firmware Version Information </td>
</tr>
<tr>
    <td>1118</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series EMS</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1107</td>
    <td>String</td>
    <td></td>	
    <td>BK1600Series BMS</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>1119</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series PCS</td>
    <td>H_HEX-->DEC + L_HEX-->DEC</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td>311</td>
    <td>String</td>
    <td></td>
    <td>BK1600Series MPPT</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>System Operating Information</td>
</tr>
  <tr>
    <td>142</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Rated capacity</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2618</td>
    <td>Num</td>
    <td></td>
    <td>Grid Charging</td>
    <td>1000: Disable<br />1001: Enable</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2617</td>
    <td>Num</td>
    <td>W</td>
    <td>Feed-in Power Limit</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Num</td>
    <td>W</td>
    <td>Max AC Output Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2619</td>
    <td>Num</td>
    <td>W</td>
    <td>Max AC Input Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2101</td>
    <td>Num</td>
    <td>W</td>
    <td>Total AC Input Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2107</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Total AC Input Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2108</td>
    <td>Num</td>
    <td>W</td>
    <td>Total AC Output Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>680</td>
    <td>Enum</td>
    <td></td>
    <td>Bypass</td>
    <td>0: Disable<br />1: Enable</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7170</td>
    <td>Enum</td>
    <td></td>
    <td>Bypass mode</td>
    <td>0: Eps<br />1: M-Inv</td>
    <td>`Indevolt.GetData`</td>
    <td>Automatically switch according to forward and reverse current.</td>
  </tr>
  <tr>
    <td>7101</td>
    <td>Enum</td>
    <td></td>
    <td>Working mode</td>
    <td>0: Outdoor Portable<br />1: Self-consumed Prioritized<br />4: Real-Time Control<br />5: Charge/Discharge Schedule</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1502</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Daily Production</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1505</td>
    <td>Num</td>
    <td>0.001kwh</td>
    <td>Cumulative Production</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6105</td>
    <td>Num</td>
    <td>%</td>
    <td>Backup SOC</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6004</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Daily Charging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6005</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Daily Discharging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6006</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Total Charging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6007</td>
    <td>Num</td>
    <td>KWh</td>
    <td>Battery Total Discharging Energy</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7120</td>
    <td>Enum</td>
    <td></td>
    <td>Meter Connection Status</td>
    <td>1000：ON<br />1001：OFF</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>21028</td>
    <td>Num</td>
    <td>W</td>
    <td>Meter Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Bypass power (Not applicable to BK1600)</td>
</tr>
<tr>
    <td>667</td>
    <td>Num</td>
    <td>W</td>
    <td>Bypass power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
</tr>
<tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Battery Pack Operating Parameters</td>
  </tr>
  <tr>
    <td>6001</td>
    <td>Enum</td>
    <td></td>
    <td>Battery Charge/Discharge State</td>
    <td>1000: Static<br />1001: Charging<br />1002: Discharging</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6000</td>
    <td>Num</td>
    <td>W</td>
    <td>Battery Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6002</td>
    <td>Num</td>
    <td>%</td>
    <td>Battery SOC Total</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7620</td>
    <td>Num</td>
    <td>℃</td>
    <td>Batt Temp</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10112</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL1 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10113</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL2 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10114</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL3 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10115</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL4 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10116</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL5 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10117</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL6 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10118</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL7 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10119</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL8 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10120</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL9 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10121</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL10 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>10122</td>
    <td>Num</td>
    <td>V</td>
    <td>CELL11 Voltage</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>PV Operating Parameters</td>
  </tr>
  <tr>
    <td>1501</td>
    <td>Num</td>
    <td>W</td>
    <td>Total DC Output Power</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1632</td>
    <td>Num</td>
    <td>A</td>
    <td>DC Input Current 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1600</td>
    <td>Num</td>
    <td>V</td>
    <td>DC Input Voltage 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1664</td>
    <td>Num</td>
    <td>W</td>
    <td>DC Input Power 1</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1633</td>
    <td>Num</td>
    <td>A</td>
    <td>DC Input Current 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1601</td>
    <td>Num</td>
    <td>V</td>
    <td>DC Input Voltage 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1665</td>
    <td>Num</td>
    <td>W</td>
    <td>DC Input Power 2</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
 </tbody>
 </table>


  </TabItem>
</Tabs>


### `Indevolt.SetData`

Modifies device configuration parameters or sends control commands to the device.

<ApiBlock method="POST" path="/rpc/Indevolt.SetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "result": true
}
```

</ResponseBlock>

#### Query Parameters

| Parameter | Type   | Required | Description               |
| --------- | ------ | -------- | ------------------------- |
| `config`  | Object | Yes      | Data write configuration. |

`config` Object

| Parameter | Type   | Required | Description                                                                                |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------ |
| `f`       | Number | Yes      | Function code. The value is fixed at `16`.                                                 |
| `t`       | Number | Yes      | The [cJSON Point](#cjson-points-1) to be written.                                           |
| `v`       | Array  | Yes      | Values to be written. Refer to the `Value` definition for the corresponding point. |

#### Response

| Parameter | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| `result`  | Boolean | `true`: success; `false`: failure. |

#### Examples

1. Set Real-time Control mode

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
   ```

2. Set the discharge status, power, and SOC in Real-time Control mode

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47015,\"v\":[2,700,5]}"
   ```

#### cJSON Points

The supported cJSON Points (`t`) vary by device model. The meaning and format of the corresponding `v` values also differ between points. Refer to the data point list for the corresponding device model for details.

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>
    | cJSON Point | cJSON Value Type | Unit | Point Description    | Value                                 |API|
    | ----------- | ---------------- | ---- | -------------------- | --------------------------------------|---|
    | 47005       | Enum             |      | Mode Setting| 1: Self-consumed Prioritized<br />4: Real-time control<br />5: Charge/Discharge Schedule |`Indevolt.SetData`|
    | 47015       | UINT             |      | State Setting (Only available in real-time control)| 0: Standby<br />1: Charging<br />2: Discharging     |`Indevolt.SetData`|
    | 47016       | INT              | W    | Power Setting (Only available in real-time control)| MAX Charging: 50–2400<br />MAX Discharging: 50–2400    |`Indevolt.SetData`|
    | 47017       | UINT             | %    | SOC Setting (Only available in real-time control)| 5-100         |`Indevolt.SetData`|
    | 1147        | INT              | W    | Max AC Output Power Setting|  50-2400                                  |`Indevolt.SetData`|
    | 1146        | INT              | W    | Feed-in Power Limit Setting|  50-2400                                  |`Indevolt.SetData`|
    | 1143        | UINT             |      | Grid Charging Setting| 0: Disable<br />1: Enable                       |`Indevolt.SetData`|
    | 1138        | INT              | W    | Inverter Input Limit Setting| 100-2400                                 |`Indevolt.SetData`|
    | 1           | Enum             |      | Load Setting|    1: Smart Plug<br />2: Meter<br />3: Key Load<br />4: Custom     |`Indevolt.SetData`|
    | 7266        | Enum             |      | Bypass Setting| 0: Disable<br />1: Enable                                        |`Indevolt.SetData`|
    | 1142        | INT              | %    | Backup SOC Setting|                                                              |`Indevolt.SetData`|
    | 7265        | Enum             |      | Light Setting| 0: Disable<br />1: Enable                                         |`Indevolt.SetData`|

  </TabItem>
  <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">
    | cJSON Point | cJSON Value Type | Unit | Point Description | Value                                                                                    |API|
    | ----------- | ---------------- | ---- | ----------------- | ---------------------------------------------------------------------------------------- |---|
    | 47005 | Enum |      | Mode Setting   | 0: Outdoor Portable<br />1: Self-consumed Prioritized<br />4: Real-Time Control<br />5: Charge/Discharge Schedule |`Indevolt.SetData`|
    | 47015 | Enum |      | State Setting (Only available in real-time control) | 0: Standby<br />1: Charging<br />2: Discharging    |`Indevolt.SetData`|
    | 47016 | Num  | W    | Power Setting (Only available in real-time control) | 50-1200    |`Indevolt.SetData`|
    | 47017 | Num  | %    | SOC Setting (Only available in real-time control)  | 5-100       |`Indevolt.SetData`|
    
  </TabItem>
</Tabs>


:::info
In real-time control mode, device charging/discharging can be controlled by simultaneously writing state, power, and SOC values.
:::

---

## `Sys`

`Sys` is used to retrieve basic device information and system status.

### `Sys.GetConfig`

Retrieves the current device configuration, including device model, serial number, firmware version, etc.

<ApiBlock method="GET" path="/rpc/Sys.GetConfig">

```bash
curl "http://192.168.31.213:8080/rpc/Sys.GetConfig"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "device": {
    "hostname": "",
    "timezone": 480,
    "type": "CMS-SF2000",
    "sn": "",
    "mac": "7C3E82EF997F",
    "fw": "T1.4.06_ROOD. 072_M4801_0000002C",
    "f_ver": "T1406.07.002C",
    "p_ver": "VOD.00.08",
    "time": "2025-12-18 09:44:57",
    "time_stamp": 1766051097,
    "run_time": 2244
  }
}
```

</ResponseBlock>

**Response**

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `device`  | Object | Device information |

`device` Object

| Parameter    | Type   | Description                 |
| ------------ | ------ | --------------------------- |
| `hostname`   | String | Device name                 |
| `timezone`   | Number | Timezone                    |
| `type`       | String | Device model                |
| `sn`         | String | Device serial number        |
| `mac`        | String | Device MAC address          |
| `fw`         | String | Device firmware version     |
| `f_ver`      | String | CMS version                 |
| `p_ver`      | String | P-file version              |
| `time`       | String | Current system time         |
| `time_stamp` | Number | Current timestamp (seconds) |
| `run_time`   | Number | Device runtime (seconds)    |

---

## `WiFi`

`WiFi` is used to retrieve the current Wi-Fi connection status of the device.

**Supported Devices**

* BK1600 / BK1600 Ultra

### `WiFi.GetStatus`

Retrieves the device’s current Wi-Fi connection information, including IP address, SSID, and signal strength.

<ApiBlock method="GET" path="/rpc/WiFi.GetStatus">

```bash
curl "http://192.168.0.7:8080/rpc/WiFi.GetStatus"
```

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "src": "",
  "params": {
    "sta_ip": "192.168.0.7",
    "ssid": "IGEN_GUEST_2.4G",
    "rssi": 100
  }
}
```

</ResponseBlock>

**Response**

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `src`     | String | Device serial number (SN) |
| `params`  | Object | Wi-Fi status information  |

`params` Object

| Parameter | Type   | Description                                                         |
| --------- | ------ | ------------------------------------------------------------------- |
| `sta_ip`  | String | Device IP address                                                   |
| `ssid`    | String | Connected Wi-Fi SSID                                                |
| `rssi`    | Number | Wi-Fi signal strength (0–100). Higher value indicates better signal |
