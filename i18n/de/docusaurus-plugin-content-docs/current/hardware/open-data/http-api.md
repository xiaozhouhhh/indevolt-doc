---
title: API-Referenz
description: todo
---

# API-Referenz

| Komponente | Beschreibung |
| ----------------------- | -------------------------------------- |
| [`Indevolt`](#indevolt) | Lesen von Gerätedaten der INDEVOLT Energiespeicher und Steuerung des Geräts |
| [`Sys`](#sys) | Abrufen grundlegender Geräteinformationen und des Systemstatus |
| [`WIFI`](#wifi) | Abrufen des aktuellen WLAN-Verbindungsstatus des Geräts |

---

## `Indevolt`

`Indevolt` ist die Datenschnittstelle für die Kommunikation mit dem Energiespeicher. Sie wird verwendet, um Betriebsdaten und Konfigurationsparameter des Geräts auszulesen sowie Steuerbefehle an das Gerät zu senden.

* [**`Indevolt.GetData`**](#indevoltgetdata): Lesen von Betriebsdaten oder Konfigurationsparametern des Geräts.
* [**`Indevolt.SetData`**](#indevoltsetdata): Ändern von Konfigurationsparametern oder Ausführen von Steuerbefehlen.

### `Indevolt.GetData`

Liest Betriebsdaten oder Konfigurationsparameter des Geräts.

import ApiBlock from "@site/src/components/ApiBlock";
import ResponseBlock from "@site/src/components/ResponseBlock";


<ApiBlock method="POST" path="/rpc/Indevolt.GetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.GetData?config={\"t\":[1664,1665]}"
````

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
 "1664":100,
 "1665":251
}
```

</ResponseBlock>

#### Anfrageparameter

| Parameter | Typ    | Erforderlich | Beschreibung                     |
| --------- | ------ | ------------ | -------------------------------- |
| `config`  | Object | Ja           | Konfiguration für den Datenabruf |

Beschreibung des Objekts `config`

| Parameter | Typ   | Erforderlich | Beschreibung                                                    |
| --------- | ----- | ------------ | --------------------------------------------------------------- |
| `t`       | Array | Ja           | Liste der auszulesenden [cJSON-Datenpunkte](#cjson-datenpunkte) |

#### Antwortparameter

Gerätedaten im JSON-Format:

* **Key**: cJSON-Datenpunkt
* **Value**: Aktueller Wert des entsprechenden Datenpunkts

#### cJSON-Datenpunkte

Die folgenden cJSON-Datenpunkte werden zum Auslesen von Betriebsdaten oder Konfigurationsparametern des Geräts verwendet.

Die unterstützten cJSON-Datenpunkte können je nach Gerätemodell unterschiedlich sein. Bitte beachten Sie die Datenpunktliste des jeweiligen Gerätemodells.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>

  <table><thead>
    <tr>
    <th>cJSON-Punkt</th>
    <th>cJSON-Werttyp</th>
    <th>Einheit</th>
    <th>Beschreibung</th>
    <th>Enum-Definition</th>
    <th>API</th>
    <th>Hinweise</th>
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
    <th>cJSON-Punkt</th>
    <th>cJSON-Werttyp</th>
    <th>Einheit</th>
    <th>Beschreibung</th>
    <th>Enum-Definition</th>
    <th>API</th>
    <th>Hinweise</th>
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

Ändert Konfigurationsparameter des Geräts oder sendet Steuerbefehle an das Gerät.

<ApiBlock method="POST" path="/rpc/Indevolt.SetData">

```bash
curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
````

</ApiBlock>

<ResponseBlock title="200 OK">

```json
{
  "result": true
}
```

</ResponseBlock>

#### Anfrageparameter

| Parameter | Typ    | Erforderlich | Beschreibung                              |
| --------- | ------ | ------------ | ----------------------------------------- |
| `config`  | Object | Ja           | Konfiguration für das Schreiben von Daten |

Beschreibung des Objekts `config`

| Parameter | Typ    | Erforderlich | Beschreibung                                               |
| --------- | ------ | ------------ | ---------------------------------------------------------- |
| `f`       | Number | Ja           | Funktionscode, fest auf `16` gesetzt                       |
| `t`       | Number | Ja           | Zu schreibender [cJSON-Datenpunkt](#cjson-datenpunkte-1)   |
| `v`       | Array  | Ja           | Schreibwert. Siehe Beschreibung des jeweiligen Datenpunkts |

#### Antwortparameter

| Parameter | Typ     | Beschreibung                                 |
| --------- | ------- | -------------------------------------------- |
| `result`  | Boolean | `true`: erfolgreich; `false`: fehlgeschlagen |

#### Beispiele

1. Echtzeit-Steuerungsmodus einstellen

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
   ```

2. Entladezustand, Leistung und SOC im Echtzeit-Steuerungsmodus einstellen

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47015,\"v\":[2,700,5]}"
   ```

#### cJSON-Datenpunkte

Die unterstützten cJSON-Datenpunkte `t` können je nach Gerätemodell unterschiedlich sein. Auch das Format und die Bedeutung des Werts `v` unterscheiden sich je nach Datenpunkt.

Bitte beachten Sie die entsprechende Datenpunktliste des jeweiligen Gerätemodells.


<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>
    | cJSON-Punkt | cJSON-Werttyp | Einheit | Beschreibung | Wert | API |
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
    | cJSON-Punkt | cJSON-Werttyp | Einheit | Beschreibung | Wert | API |
    | ----------- | ---------------- | ---- | ----------------- | ------------------- |---|
    | 47005 | Enum |      | Mode Setting   | 0: Outdoor Portable<br />1: Self-consumed Prioritized<br />4: Real-Time Control<br />5: Charge/Discharge Schedule |`Indevolt.SetData`|
    | 47015 | Enum |      | State Setting (Only available in real-time control) | 0: Standby<br />1: Charging<br />2: Discharging    |`Indevolt.SetData`|
    | 47016 | Num  | W    | Power Setting (Only available in real-time control) | 50-1200    |`Indevolt.SetData`|
    | 47017 | Num  | %    | SOC Setting (Only available in real-time control)  | 5-100       |`Indevolt.SetData`|
    
  </TabItem>
</Tabs>

:::info
Im Echtzeit-Steuerungsmodus können Status, Leistung und SOC-Wert in einer einzigen Anfrage geschrieben werden, um den Lade- und Entladevorgang des Geräts zu steuern.
:::

---

## `Sys`

`Sys` wird verwendet, um grundlegende Geräteinformationen und den Systemstatus abzurufen.

### `Sys.GetConfig`

Ruft die aktuellen Konfigurationsinformationen des Geräts ab, einschließlich Gerätemodell, Seriennummer, Firmware-Version usw.

<ApiBlock method="GET" path="/rpc/Sys.GetConfig">

```bash
curl "http://192.168.31.213:8080/rpc/Sys.GetConfig"
````

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

**Antwortparameter**

| Parameter | Typ    | Beschreibung        |
| --------- | ------ | ------------------- |
| `device`  | Object | Geräteinformationen |

Beschreibung des Objekts `device`

| Parameter    | Typ    | Beschreibung                          |
| ------------ | ------ | ------------------------------------- |
| `hostname`   | String | Gerätename                            |
| `timezone`   | Number | Zeitzone                              |
| `type`       | String | Gerätemodell                          |
| `sn`         | String | Seriennummer des Geräts               |
| `mac`        | String | MAC-Adresse des Geräts                |
| `fw`         | String | Firmware-Version des Geräts           |
| `f_ver`      | String | CMS-Version                           |
| `p_ver`      | String | Pfile-Version                         |
| `time`       | String | Aktuelle Uhrzeit                      |
| `time_stamp` | Number | Aktueller Zeitstempel (in Sekunden)   |
| `run_time`   | Number | Betriebszeit des Geräts (in Sekunden) |

---

## `WIFI`

`WiFi` wird verwendet, um den aktuellen WLAN-Verbindungsstatus des Geräts abzurufen.

**Unterstützte Geräte**

* BK1600 / BK1600 Ultra

### `WiFi.GetStatus`

Ruft den aktuellen WLAN-Status des Geräts ab, einschließlich IP-Adresse, WLAN-Name und Signalstärke.

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

**Antwortparameter**

| Parameter | Typ    | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| `src`     | String | Seriennummer des Geräts (SN) |
| `params`  | Object | WLAN-Statusinformationen     |

Beschreibung von `params`

| Parameter | Typ    | Beschreibung                                                                                 |
| --------- | ------ | -------------------------------------------------------------------------------------------- |
| `sta_ip`  | String | Aktuelle IP-Adresse des Geräts                                                               |
| `ssid`    | String | Name des aktuell verbundenen WLAN-Netzwerks                                                  |
| `rssi`    | Number | WLAN-Signalstärke in Prozent, Bereich `0~100`; ein höherer Wert bedeutet ein besseres Signal |

