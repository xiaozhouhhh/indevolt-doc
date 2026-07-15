---
title: Cluster
description: Erfahren Sie, wie mehrere Energiespeichergeräte zu einem System verbunden werden, um höhere Kapazität und Ausgangsleistung zu erreichen
---

# Cluster

## 1. Was ist Cluster

Cluster-Betrieb bezeichnet die Verbindung mehrerer Mikrospeicher zu einem gemeinsam gesteuerten System, in dem mehrere Geräte gemeinsam die Stromversorgung, Energiespeicherung und das Energiemanagement übernehmen.

In einem Cluster-Betrieb wird ein Gerät als **Hauptgerät** festgelegt, das für die Steuerung und Koordination des Gesamtsystems verantwortlich ist. Die übrigen Geräte fungieren als **Untergeräte** und werden in das System eingebunden. Die Geräte kommunizieren automatisch miteinander und arbeiten synchron.

Durch den Cluster-Betrieb erhöhen sich sowohl die Gesamtleistung als auch die gesamte Speicherkapazität des Systems. Dies eignet sich besonders für hohe Lasten, lange Notstromversorgung oder spätere Systemerweiterungen.

---

## 2. Warum Cluster-Betrieb erforderlich ist

Die Leistung und Kapazität eines einzelnen Geräts ist begrenzt. Wenn der Haushaltsverbrauch hoch ist oder eine längere Versorgungszeit benötigt wird, kann das System durch Cluster-Betrieb erweitert werden.

**Erhöhung der Ausgangsleistung**

Mehrere Geräte können gleichzeitig Leistung bereitstellen und dadurch größere Lasten versorgen.

> Beispiel:
> - 1 × SolidFlex 2000: maximale Wechselrichterleistung ca. 2400 W  
> - 2 Geräte im Cluster: ca. 4800 W  
> - Die tatsächliche Leistung ist weiterhin durch Netzbegrenzungen, Verkabelung und lokale Vorschriften eingeschränkt.

**Erhöhung der Speicherkapazität**

Im Cluster teilen sich mehrere Batteriepacks die Energiespeicherung, wodurch die Versorgungsdauer deutlich verlängert wird.

> Beispiel:
> - 1 × SolidFlex 2000 + 5 × SFA1800: ca. 10,8 kWh  
> - Zwei Systeme im Cluster: ca. 21,6 kWh  

**Flexible Erweiterung**

Das System unterstützt schrittweise Erweiterung. Nutzer können zunächst ein Gerät installieren und später weitere Geräte hinzufügen, ohne das Gesamtsystem neu aufzubauen.

---

## 3. Unterstützte Geräte

Die folgenden Modelle werden als Haupt- oder Untergerät unterstützt:

<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Zentralisiert</th>
    <th colspan="2">Koordiniert</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Modell</td>
    <td>Haupt</td>
    <td>Neben</td>
    <td>Haupt</td>
    <td>Neben</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</tbody>
</table>

:::info

- Der Cluster-Betrieb zwischen SolidFlex 2000 / PowerFlex 2000 und BK1600 / BK1600 Ultra wurde noch nicht vollständig validiert und wird nicht für Mischbetrieb empfohlen. SolidFlex 2000 und PowerFlex 2000 können jedoch problemlos gemeinsam betrieben werden.  
- Im Cluster-Betrieb:
  - Wird die PV-Schnittstelle weiterhin unterstützt  
  - Die Nutzung des Backup-Ports für Mikro-Wechselrichter und Lasten befindet sich noch in Optimierung und wird derzeit nicht vollständig unterstützt  
:::

---

## 4. Cluster-Modus

Das System unterstützt zwei Cluster-Architekturen für unterschiedliche Installationsszenarien.

Die Kommunikation zwischen Geräten erfolgt über:
- Wi-Fi  
- Ethernet  
- RS485  

Die Auswahl hängt von der lokalen Verkabelung und Netzwerkumgebung ab.

### 4.1 Koordiniert Cluster

Jedes Gerät ist separat mit dem Stromnetz verbunden und übernimmt eigene AC-Ein- und Ausgänge. Die Geräte synchronisieren ihre Daten über das Kommunikationsnetz, während das Hauptgerät die Leistungsverteilung und den Betrieb koordiniert.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/coordinated_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/coordinated_gen1.png").default} width="480" />
  </TabItem>
</Tabs>

### 4.2 Zentralisiert Cluster

Die Untergeräte werden nacheinander über die Stromleitungen mit dem Hauptgerät verbunden. Alle AC-Ein- und Ausgänge werden im Hauptgerät zusammengeführt, das anschließend die gesamte Netzschnittstelle sowie die Leistungssteuerung übernimmt.

Verkabelung:
- Das Hauptgerät wird über **GRID IN/OUT** mit dem Stromnetz verbunden  
- Der **Backup-Port** des Hauptgeräts wird mit dem **GRID IN/OUT** des ersten Untergeräts verbunden  
- Weitere Untergeräte werden kaskadiert verbunden: **Backup → GRID IN/OUT**

<Tabs>
  <TabItem value="gen1" label="SolidFlex 2000 / PowerFlex 2000" default>
    <img src={require("./img/centralized_gen2.png").default} width="480" />
  </TabItem>
  <TabItem value="gen2" label="BK1600 / BK1600 Ultra">
    <img src={require("./img/centralized_gen1.png").default} width="480"/>
  </TabItem>
</Tabs>

---

## 5. Betriebsregeln im Cluster

Das System übernimmt automatisch die Koordination und Leistungsverteilung ohne manuelles Eingreifen.

### 5.1 Systemkapazität

Es werden maximal 3 Geräte unterstützt: 1 Hauptgerät + bis zu 2 Untergeräte

### 5.2 Ausgangsleistung

Maximale Leistung im Cluster:

- Normale Last: 7200 W (3 × 2400 W)  
- Mit Mikro-Wechselrichter: 10800 W (3 × 3600 W)

> Hinweis: Im Cluster-Betrieb kann die Leistungsanzeige bei Nutzung des Backup-Ports mit Mikro-Wechselrichtern derzeit ungenau sein und wird kontinuierlich optimiert.

:::danger
Bitte stellen Sie sicher, dass die maximale Ausgangsleistung den lokalen elektrischen Vorschriften und Sicherheitsnormen entspricht.
:::

### 5.3 Verhalten der Leistungszuweisung

Während des Cluster-Betrieb verteilt das System die Leistung automatisch entsprechend dem Ladezustand der Geräte und der aktuellen Last. Daher gilt:

* Die Ausgangsleistung der einzelnen Geräte kann unterschiedlich sein
* Nicht alle Geräte sind zwingend gleichzeitig an der Leistungsabgabe beteiligt
* Geräte mit höherem Ladezustand übernehmen bevorzugt die Last

Das typische Systemverhalten in Abhängigkeit von der Last ist wie folgt:

| Lastleistung    | Systemverhalten                                                    |
| --------------- | ------------------------------------------------------------------ |
| unter 200 W     | nur das Gerät mit dem höchsten SoC übernimmt die Last              |
| 200 W bis 500 W | zwei Geräte mit höherem SoC teilen sich die Last                   |
| über 500 W      | alle untergeordneten Geräte sind beteiligt, die Lastverteilung erfolgt proportional zum SoC |

---

## 6. Cluster-Einrichtung

Die Cluster-Konfiguration kann über die INDEVOLT-App durchgeführt werden.

Bitte stellen Sie vorab sicher:

* Alle Geräte unterstützen den Cluster-Betrieb
* Alle Geräte sind eingeschaltet und betriebsbereit
* Alle Geräte ordnungsgemäß mit dem Netzwerk verbunden und demselben Zuhause hinzugefügt wurden.
* Bei einer RS485-Parallelschaltung die Kommunikationskabel korrekt angeschlossen sind.

### Schritt 1: Cluster-Einstellungen öffnen

Öffnen Sie die Gerätedetailseite, tippen Sie oben rechts auf das Einstellungs-Symbol <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> und wählen Sie **Cluster**.

Tippen Sie anschließend auf **Einen Cluster erstellen**, um ein neues Cluster zu erstellen.

<img src={require("./img/device_info.png").default} width="240"/>
<img src={require("./img/cluster_device_settings.png").default} width="240"/>
<img src={require("./img/create_cluster.png").default} width="240"/>

### Schritt 2: Cluster-Modus auswählen

Wählen Sie den Cluster-Modus: **Zentralisierter** oder **Koordiniert**.

<img src={require("./img/creating_cluster.png").default} width="240"/>
<img src={require("./img/cluster_mode.png").default} width="240"/>

### Schritt 3: Haupt- und Untergeräte hinzufügen

In der Liste der clusterfähigen Geräte können Sie die Karten per Langdruck auswählen und per Drag & Drop in den Haupt- oder Neben-Bereich ziehen.

<img src={require("./img/cluster_devices.png").default} width="240"/>

### Schritt 4: Kommunikationsmethode auswählen

Wählen Sie die Kommunikationsmethode zwischen den parallelen Geräten: **Wi-Fi** oder **RS485**.

<img src={require("./img/cluster_communication.png").default} width="240"/>

### Schritt 5: Clusterparameter konfigurieren

Konfigurieren Sie die grundlegenden Clusterparameter, einschließlich des Namens und der leistungsbezogenen Grenzwerte, und tippen Sie anschließend auf **Speichern**, um die Erstellung abzuschließen.

:::danger
Stellen Sie sicher, dass die konfigurierten Parameter den lokalen Netzanforderungen sowie den geltenden Gesetzen und Vorschriften entsprechen.
:::

<img src={require("./img/cluster_name.png").default} width="240"/>
<img src={require("./img/cluster_output_limit.png").default} width="240"/>
<img src={require("./img/cluster_feed_in_limit.png").default} width="240"/>
<img src={require("./img/cluster_created.png").default} width="240"/>

### Schritt 6: Cluster anzeigen und verwalten

Nach erfolgreicher Einrichtung wechselt die App automatisch zur Cluster-Übersichtsseite. Dort können Sie den gesamten Systemstatus einsehen, einschließlich der Gerätezuordnung im Cluster, der Echtzeit-Leistung sowie der Energiemanagement-Strategien.

Über das Einstellungsmenü oben rechts <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> können Sie das Cluster weiter verwalten, z. B. Parameter ändern oder die Cluster-Verbindung aufheben.

<img src={require("./img/cluster_info.png").default} width="240"/>
<img src={require("./img/cluster_settings.png").default} width="240"/>
