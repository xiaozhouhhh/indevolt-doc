---
title: Smart
description: Optimieren Sie die Energienutzung basierend auf Preisänderungen, um Kosten zu senken und Einnahmen zu steigern.
---

# Smart

Der **Smart-Modus** analysiert dynamische Strompreise und optimiert automatisch die Lade- und Entladestrategie Ihrer Geräte. Ziel ist es, die Gesamtkosten für Strom zu senken, die Energieeffizienz zu verbessern und die wirtschaftlichen Vorteile zu maximieren.

:::info Anforderungen
1. Das Haus verwendet einen nicht festen Stromtarif.
2. Das Haus ist mit einem INDEVOLT Energiespeichersystem ausgestattet.
:::

## 1. Smart-Modus aktivieren

1. Tippen Sie auf **Mehr**, um die Funktionsübersichtsseite zu öffnen.
2. Lesen Sie die Servicevereinbarung und die zugehörigen Informationen. Nach Bestätigung, dass alles korrekt ist, aktivieren Sie **Ich habe die Servicevereinbarung gelesen**. Tippen Sie auf **Weiter**, um die Aktivierung abzuschließen.

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>


## 2. Preisstrategie

Die preisstrategie ist das Kernstück des Smart-Modus. Durch Festlegen von Preisschwellen lädt das System intelligent bei niedrigen Preisen und entlädt bei hohen Preisen – so werden die Vorteile von Strompreisschwankungen maximal genutzt.

### 2.1 Neue Strategie erstellen

Bevor Sie eine Strategie erstellen, stellen Sie sicher, dass Sie Ihren [Stromtarif](./profile.md#3-tarif) eingerichtet haben:

1. Tippen Sie auf das <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> Symbol im Abschnitt Preisbasierte Strategie, um die Einstellungsseite zu öffnen.
2. Folgen Sie den Hinweisen und stellen Sie sicher, dass Sie bereits einen [Stromtarif konfiguriert](./profile.md#31-tarif-hinzufügen) und geeignete Geräte für die Strategie im Haushalt hinzugefügt haben. Falls nicht, tippen Sie auf die entsprechenden Bereiche und schließen Sie die Einrichtung ab. Tippen Sie danach auf **Weiter**, um fortzufahren.
3. Wählen Sie die **Geräte, die an der Strategie teilnehmen**, und tippen Sie auf **Weiter**.
4. Stellen Sie den **Zielpreis** ein und tippen Sie auf **Weiter**.
5. Prüfen Sie den vom System erzeugten Lade-/Entladeplan. Bestätigen Sie die Vorschau und tippen Sie auf **Speichern**.
6. Neu erstellte Strategien sind standardmäßig deaktiviert. Tippen Sie auf **Aktivieren**, um die Strategie zu aktivieren.

   <img src={require("./img/set_strategy.png").default} width="240"/>
   <img src={require("./img/strategy_requirements.png").default} width="240"/>
   <img src={require("./img/set_strategy_device.png").default} width="240"/>
   <img src={require("./img/strategy_price1.png").default} width="240"/>

### 2.2 Strategie anzeigen

Nach der Erstellung einer Strategie zeigt der Abschnitt Preisbasierte Strategie den aktuellen Status (Leerlauf / Laden / Entladen) und den Schalter an.

<img src={require("./img/price_strategy.jpg").default} width="240"/>

Tippen Sie auf den Abschnitt **Preisbasierte Strategie**, um den Zeitplan und die Geräte anzuzeigen, die derzeit die Strategie verwenden.

<img src={require("./img/view_strategy.jpg").default} width="240"/>

Über das **Protokollsymbol** oben rechts auf der Preisstrategie-Seite können Sie das Strategielog öffnen und alle historischen Änderungen sowie Statuswechsel (**Aktiviert/Deaktiviert**) nachverfolgen.

<img src={require("./img/strategy_log.png").default} width="240"/>

### 2.3 Strategie bearbeiten

Auf der Preisstrategie-Seite können bestehende Strategien jederzeit angepasst werden, einschließlich der **Gerätezuordnung** und des **Zielpreises**.

**Strategiegeräte bearbeiten**

1. Tippen Sie auf der Strategie-Detailseite auf die **Gerätestatus** neben dem Modul **Geräte-Betriebsdetails**.
2. Wählen Sie das Zielgerät erneut aus der Liste aller Smart-kompatiblen Geräte im Haushalt aus.
3. Tippen Sie auf **Weiter**, prüfen Sie den neuen Lade-/Entladeplan und bestätigen Sie durch Tippen auf **Aktivieren**.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/set_strategy_device.png").default} width="240"/>

**Zielpreis anpassen**

1. Tippen Sie auf die Bearbeiten-Schaltfläche neben dem Modul **Strommarktpreise**, um den Zielpreis neu zu konfigurieren.
2. Es stehen zwei Einstellmethoden zur Verfügung:
   - Manuelle: Geben Sie den gewünschten Auslösepreis für Preisstrategie und Entladen (Hochpreis) direkt ein.
   - Automatische: Definieren Sie die gewünschte Ziel-Preisdifferenz und wählen Sie die Zeitfenster für Hoch- und Niedrigpreis. Das System berechnet die Preise automatisch.
3. Tippen Sie auf **Weiter**, prüfen Sie die Vorschau des aktualisierten Lade-/Entladeplans und tippen Sie anschließend auf **Aktivieren**, um zu bestätigen.

<img src={require("./img/view_strategy.png").default} width="240"/>
<img src={require("./img/strategy_price1.png").default} width="240"/>
<img src={require("./img/strategy_price2.png").default} width="240"/>
