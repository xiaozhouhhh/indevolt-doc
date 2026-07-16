---
title: Référence API
description: todo
---

# Référence API

| Composant | Description |
| --------- | ----------- |
| [`Indevolt`](#indevolt) | Lire les données des appareils de stockage d'énergie INDEVOLT et contrôler les appareils. |
| [`Sys`](#sys) | Obtenir les informations de base de l'appareil et l'état du système. |
| [`WIFI`](#wifi) | Obtenir l'état actuel de la connexion Wi-Fi de l'appareil. |

---

## `Indevolt`

`Indevolt` fournit des API d’interaction de données pour les dispositifs de micro-stockage d’énergie. Elles permettent de récupérer les données de fonctionnement et les paramètres de configuration de l’appareil, ainsi que d’envoyer des commandes de contrôle à celui-ci.

* [**`Indevolt.GetData`**](#indevoltgetdata) : Récupère les données de fonctionnement ou les paramètres de configuration de l’appareil.
* [**`Indevolt.SetData`**](#indevoltsetdata) : Modifie les paramètres de configuration de l’appareil ou exécute des opérations de contrôle.

### `Indevolt.GetData`

Récupère les données de fonctionnement ou les paramètres de configuration de l’appareil.

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

#### Paramètres de requête

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `config` | Object | Oui | Configuration de récupération des données. |

Objet `config`

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `t` | Array | Oui | Liste des [points cJSON](#points-cjson) à lire. |

#### Réponse

Retourne les données de l’appareil au format JSON, où :

* **Clé (Key)** : Point cJSON
* **Valeur (Value)** : Valeur actuelle du point de données correspondant

#### Points cJSON

Les points cJSON suivants sont utilisés pour récupérer les données de fonctionnement ou les paramètres de configuration de l’appareil. Les points cJSON pris en charge varient selon le modèle de l’appareil. Consultez la liste des points de données correspondant à votre appareil pour plus de détails.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>

  <table><thead>
    <tr>
      <th>Point cJSON</th>
      <th>Type de valeur cJSON</th>
      <th>Unité</th>
      <th>Description</th>
      <th>Définition Enum</th>
      <th>API</th>
      <th>Remarque</th>
    </tr></thead>
  <tbody>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>SN </td>
    </tr>
    <tr>
      <td>0</td>
      <td>String</td>
      <td></td>
      <td>SN de l’appareil</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Informations de version du firmware</td>
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
      <td>1119</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series PCS</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1120</td>
      <td>String</td>
      <td></td>
      <td>PG2000Series DCDC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1136</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC1 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1137</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS1 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1138</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1139</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS2 </td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1140</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1141</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1142</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1143</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1098</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA DCDC5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1099</td>
      <td>String</td>
      <td></td>
      <td>SFA/PFA BMS5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Informations de fonctionnement du système</td>
    </tr>
    <tr>
      <td>7101</td>
      <td>Enum</td>
      <td></td>
      <td>Mode de fonctionnement</td>
      <td>1 : Autoconsommation<br />4 : Contrôle en temps réel<br />5 : Plan de charge/décharge</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>142</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Capacité nominale</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2618</td>
      <td>Num</td>
      <td></td>
      <td>Charge réseau</td>
      <td>1000 : Désactivé<br />1001 : Activé</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>11009</td>
      <td>Num</td>
      <td>W</td>
      <td>Limite d’entrée de l’onduleur</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2101</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance totale d’entrée AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2108</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance totale de sortie AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
  <tr>
    <td>11010</td>
    <td>Num</td>
    <td>W</td>
    <td>Limite de puissance d’injection réseau</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>11011</td>
    <td>Num</td>
    <td>W</td>
    <td>Puissance maximale de sortie AC</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>680</td>
    <td>Num</td>
    <td></td>
    <td>Bypass</td>
    <td>0 : Désactivé<br />1 : Activé</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>11039</td>
    <td>Num</td>
    <td></td>
    <td>Mode bypass</td>
    <td>0 : EPS<br />1 : M-Inv</td>
    <td>`Indevolt.GetData`</td>
    <td>Basculement automatique selon le courant direct et inverse</td>
  </tr>
  <tr>
    <td>6105</td>
    <td>Num</td>
    <td>%</td>
    <td>SOC de secours</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>7171</td>
    <td>Num</td>
    <td></td>
    <td>Lumière</td>
    <td>0 : Désactivé<br />1 : Activé</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>8646</td>
    <td>Num</td>
    <td>Jour</td>
    <td>Calibration batterie : cycle</td>
    <td>0–60<br />0 : OFF</td>
    <td>`Indevolt.GetData`</td>
    <td>Durée de fonctionnement sans charge complète</td>
  </tr>
  <tr>
    <td>8647</td>
    <td>Num</td>
    <td>Heure</td>
    <td>Calibration batterie : heure de démarrage</td>
    <td>DEC → HEX<br />H : heure<br />L : minute</td>
    <td>`Indevolt.GetData`</td>
    <td>ex. : 256 → 0100<br /><br />01 (HEX-H) → 01 h<br />00 (HEX-L) → >    00 min</td>
  </tr>
  <tr>
    <td>2802</td>
    <td>Num</td>
    <td>W</td>
    <td>Calibration batterie : puissance de charge (AC)</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Informations de cluster</td>
  </tr>
  <tr>
    <td>606</td>
    <td>Enum</td>
    <td></td>
    <td>Identification maître/esclave</td>
    <td>1000 : Maître<br />1001 : Esclave<br />1002 : Aucun</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Puissance bypass</td>
  </tr>
  <tr>
    <td>667</td>
    <td>Float</td>
    <td>W</td>
    <td>Puissance bypass</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Puissance en temps réel transitant par le chemin bypass.<br/>- mode connecté au réseau : l’énergie peut provenir du micro-onduleur ou être fournie directement aux charges<br/>- Mode hors réseau : l’énergie est directement fournie aux charges</td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Informations d’énergie électrique</td>
  </tr>
  <tr>
    <td>2107</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie AC totale d’entrée</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie totale importée du réseau. Elle peut être utilisée pour charger la batterie ou alimenter directement les charges via le bypass.</td>
  </tr>
  <tr>
    <td>2104</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie AC totale de sortie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie électrique globale, incluant (DC + AC + Bypass)</td>
  </tr>
  <tr>
    <td>11035</td>
    <td>Num</td>
    <td>Wh</td>
    <td>Énergie journalière d’entrée micro-onduleur (bypass)</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie quotidienne provenant du micro-onduleur. Disponible uniquement en mode connecté au réseau, lorsque le système est relié à un micro-onduleur.</td>
  </tr>
  <tr>
    <td>11034</td>
    <td>Num</td>
    <td>Wh</td>
    <td>Énergie totale d’entrée micro-onduleur (bypass)</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie totale provenant du micro-onduleur. Disponible uniquement en mode connecté au réseau, lorsque le système est relié à un micro-onduleur.</td>
  </tr>
  <tr>
    <td>11037</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie journalière de sortie bypass hors réseau</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie quotidienne de décharge via bypass hors réseau</td>
  </tr>
  <tr>
    <td>2105</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie totale de sortie bypass hors réseau</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie totale de décharge via bypass hors réseau</td>
  </tr>
  <tr>
    <td>9285</td>
    <td>Num</td>
    <td>Wh</td>
    <td>Énergie journalière de sortie bypass</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie quotidienne de décharge via bypass (réseau + hors réseau) </td>
  </tr>
  <tr>
    <td>9284</td>
    <td>Num</td>
    <td>Wh</td>
    <td>Énergie totale de sortie bypass</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td>Énergie totale de décharge via bypass (réseau + hors réseau)</td>
  </tr>
  <tr>
    <td>1502</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Production PV quotidienne</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>1505</td>
    <td>Num</td>
    <td>Wh</td>
    <td>Production cumulée</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6004</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie de charge batterie journalière</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6005</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie de décharge batterie journalière</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6006</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie totale de charge batterie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6007</td>
    <td>Num</td>
    <td>kWh</td>
    <td>Énergie totale de décharge batterie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>État du compteur électrique</td>
  </tr>
  <tr>
    <td>7120</td>
    <td>Enum</td>
    <td></td>
    <td>État de connexion du compteur</td>
    <td>1000 : Activé<br />1001 : Désactivé</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>11016</td>
    <td>Float</td>
    <td>W</td>
    <td>Puissance du compteur</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Informations réseau</td>
  </tr>
  <tr>
    <td>2600</td>
    <td>Num</td>
    <td>V</td>
    <td>Tension du réseau</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>2612</td>
    <td>Num</td>
    <td>Hz</td>
    <td>Fréquence du réseau</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td colspan="7" style={{ textAlign: 'center' }}>Paramètres de fonctionnement du pack batterie</td>
  </tr>
  <tr>
    <td>6001</td>
    <td>Enum</td>
    <td></td>
    <td>État charge/décharge batterie</td>
    <td>1000 : Veille<br />1001 : Charge<br />1002 : Décharge</td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6000</td>
    <td>Num</td>
    <td>W</td>
    <td>Puissance batterie</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>6002</td>
    <td>Num</td>
    <td>%</td>
    <td>SOC batterie total</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9008</td>
    <td>String</td>
    <td></td>
    <td>Numéro de série batterie - MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9000</td>
    <td>Num</td>
    <td>%</td>
    <td>SOC batterie - MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
  <tr>
    <td>9004</td>
    <td>Num</td>
    <td>V</td>
    <td>Tension batterie - MB</td>
    <td></td>
    <td>`Indevolt.GetData`</td>
    <td></td>
  </tr>
    <tr>
      <td>9013</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant batterie I-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9012</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9009</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1 batterie-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9011</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2 batterie-MB</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9032</td>
      <td>String</td>
      <td></td>
      <td>Numéro de série batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9016</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9020</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19173</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9030</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9021</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1 batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9023</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2 batterie-Pack1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9051</td>
      <td>String</td>
      <td></td>
      <td>Numéro de série batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9035</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9039</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19174</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9049</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9040</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1 batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9042</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2 batterie-Pack2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9070</td>
      <td>String</td>
      <td></td>
      <td>Numéro de série batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9054</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9058</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19175</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9068</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9059</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1 batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9061</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2 batterie-Pack3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9165</td>
      <td>Num</td>
      <td></td>
      <td>Numéro de série batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9149</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9153</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19176</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9163</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9154</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1 batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9156</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2 batterie-Pack4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9218</td>
      <td>String</td>
      <td></td>
      <td>Numéro de série batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9202</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9206</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>19177</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9216</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9219</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1 batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>9222</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2 batterie-Pack5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Paramètres de fonctionnement PV</td>
    </tr>
    <tr>
      <td>1501</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance totale de sortie DC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1632</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant d’entrée DC 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1600</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension d’entrée DC 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1664</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance d’entrée DC 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1633</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant d’entrée DC 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1601</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension d’entrée DC 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1665</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance d’entrée DC 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1634</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant d’entrée DC 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1602</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension d’entrée DC 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1666</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance d’entrée DC 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1635</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant d’entrée DC 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1603</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension d’entrée DC 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1667</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance d’entrée DC 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
  </tbody>
  </table>

 </TabItem>
<TabItem value="bk1600" label="BK1600 / BK1600 Ultra">

<table>
  <thead>
    <tr>
      <th>Point cJSON</th>
      <th>Type de valeur cJSON</th>
      <th>Unité</th>
      <th>Description</th>
      <th>Définition Enum</th>
      <th>API</th>
      <th>Remarques</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>SN</td>
    </tr>
    <tr>
      <td>0</td>
      <td>String</td>
      <td></td>
      <td>Numéro de série de l’appareil</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Informations de version du firmware</td>
    </tr>
    <tr>
      <td>1118</td>
      <td>String</td>
      <td></td>
      <td>EMS de la série BK1600</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1107</td>
      <td>String</td>
      <td></td>
      <td>BMS de la série BK1600</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1119</td>
      <td>String</td>
      <td></td>
      <td>PCS de la série BK1600</td>
      <td>H_HEX-->DEC + L_HEX-->DEC</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>311</td>
      <td>String</td>
      <td></td>
      <td>MPPT de la série BK1600</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Informations de fonctionnement du système</td>
    </tr>
    <tr>
      <td>142</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Capacité nominale</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2618</td>
      <td>Num</td>
      <td></td>
      <td>Charge réseau</td>
      <td>1000 : Désactivé<br />1001 : Activé</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2617</td>
      <td>Num</td>
      <td>W</td>
      <td>Limite de puissance injectée</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance maximale de sortie AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2619</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance maximale d’entrée AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2101</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance totale d’entrée AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2107</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Énergie totale d’entrée AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>2108</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance totale de sortie AC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>680</td>
      <td>Enum</td>
      <td></td>
      <td>Bypass</td>
      <td>0 : Désactivé<br />1 : Activé</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>7170</td>
      <td>Enum</td>
      <td></td>
      <td>Mode bypass</td>
      <td>0 : EPS<br />1 : M-Inv</td>
      <td>`Indevolt.GetData`</td>
      <td>Permutation automatique selon le courant direct et inverse.</td>
    </tr>
    <tr>
      <td>7101</td>
      <td>Enum</td>
      <td></td>
      <td>Mode de fonctionnement</td>
      <td>0 : Portable extérieur<br />1 : Priorité autoconsommation<br />4 : Contrôle en temps réel<br />5 : Plan de charge/décharge</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1502</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Production journalière</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1505</td>
      <td>Num</td>
      <td>0,001 kWh</td>
      <td>Production cumulée</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6105</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC de secours</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6004</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Énergie de charge quotidienne de la batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6005</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Énergie de décharge quotidienne de la batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6006</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Énergie totale de charge de la batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6007</td>
      <td>Num</td>
      <td>kWh</td>
      <td>Énergie totale de décharge de la batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>7120</td>
      <td>Enum</td>
      <td></td>
      <td>État de connexion du compteur</td>
      <td>1000 : Connecté<br />1001 : Déconnecté</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>21028</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance du compteur</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Puissance bypass (Non applicable au BK1600)</td>
    </tr>
    <tr>
      <td>667</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance bypass</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Paramètres de fonctionnement du pack batterie</td>
    </tr>
    <tr>
      <td>6001</td>
      <td>Enum</td>
      <td></td>
      <td>État de charge/décharge de la batterie</td>
      <td>1000 : Statique<br />1001 : Charge<br />1002 : Décharge</td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6000</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance de la batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>6002</td>
      <td>Num</td>
      <td>%</td>
      <td>SOC total de la batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>7620</td>
      <td>Num</td>
      <td>℃</td>
      <td>Température batterie</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10112</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10113</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10114</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 3</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10115</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 4</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10116</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 5</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10117</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 6</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10118</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 7</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10119</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 8</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10120</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 9</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10121</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 10</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>10122</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension cellule 11</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="7" style={{ textAlign: 'center' }}>Paramètres de fonctionnement PV</td>
    </tr>
    <tr>
      <td>1501</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance totale de sortie DC</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1632</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant d’entrée DC 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1600</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension d’entrée DC 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1664</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance d’entrée DC 1</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1633</td>
      <td>Num</td>
      <td>A</td>
      <td>Courant d’entrée DC 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1601</td>
      <td>Num</td>
      <td>V</td>
      <td>Tension d’entrée DC 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>
    <tr>
      <td>1665</td>
      <td>Num</td>
      <td>W</td>
      <td>Puissance d’entrée DC 2</td>
      <td></td>
      <td>`Indevolt.GetData`</td>
      <td></td>
    </tr>

  </tbody>
</table>

</TabItem>
</Tabs>


### `Indevolt.SetData`

Modifie les paramètres de configuration de l’appareil ou envoie des commandes de contrôle à l’appareil.

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

#### Paramètres de requête

| Paramètre | Type   | Obligatoire | Description                           |
| --------- | ------ | ----------- | ------------------------------------- |
| `config`  | Object | Oui         | Configuration d’écriture des données. |

Objet `config`

| Paramètre | Type   | Obligatoire | Description                                                                            |
| --------- | ------ | ----------- | -------------------------------------------------------------------------------------- |
| `f`       | Number | Oui         | Code de fonction. La valeur est fixée à `16`.                                          |
| `t`       | Number | Oui         | [Point cJSON](#points-cjson-1) à écrire.                                                                  |
| `v`       | Array  | Oui         | Valeurs à écrire. Voir la définition du champ `Valeur` correspondant au point concerné. |

#### Réponse

| Paramètre | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| `result`  | Boolean | `true` : succès ; `false` : échec. |

#### Exemples

1. Définir le mode “contrôle en temps réel”

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47005,\"v\":[4]}"
   ```

2. Définir l’état de décharge, la puissance et le SOC en mode contrôle en temps réel

   ```bash
   curl -g -X POST -H "Content-Type: application/json" "http://192.168.31.213:8080/rpc/Indevolt.SetData?config={\"f\":16,\"t\":47015,\"v\":[2,700,5]}"
   ```

#### Points cJSON

Les points cJSON pris en charge (`t`) varient selon le modèle de l’appareil. La signification et le format des valeurs `v` associées peuvent également différer selon les points. Consultez la liste des points de données du modèle correspondant pour plus de détails.

<Tabs>
  <TabItem value="sf2000" label="SolidFlex 2000 / PowerFlex 2000" default>
    | Point cJSON | Type de valeur cJSON | Unité | Description | Valeur | API |
    | ----------- | --------------------- | ----- | ----------- | ------ | --- |
    | 47005       | Enum                  |       | Paramétrage du mode | 1: Autoconsommation<br />4: Contrôle en temps réel<br />5: Plan de charge/décharge |`Indevolt.SetData`|
    | 47015       | UINT                  |       | Paramétrage de l’état (disponible uniquement en mode contrôle en temps réel) | 0: Veille<br />1: Charge<br />2: Décharge |`Indevolt.SetData`|
    | 47016       | INT                   | W     | Paramétrage de la puissance (disponible uniquement en mode contrôle en temps réel) | Charge max : 50–2400<br />Décharge max : 50–2400 |`Indevolt.SetData`|
    | 47017       | UINT                  | %     | Paramétrage du SOC (disponible uniquement en mode contrôle en temps réel) | 5-100 |`Indevolt.SetData`|
    | 1147        | INT                   | W     | Paramétrage de la puissance de sortie AC max | 50-2400 |`Indevolt.SetData`|
    | 1146        | INT                   | W     | Paramétrage de la limite d’injection réseau | 50-2400 |`Indevolt.SetData`|
    | 1143        | UINT                  |       | Paramétrage de la charge réseau | 0: Désactivé<br />1: Activé |`Indevolt.SetData`|
    | 1138        | INT                   | W     | Paramétrage de la limite d’entrée de l’onduleur | 100-2400 |`Indevolt.SetData`|
    | 1           | Enum                  |       | Paramétrage de la charge | 1: Prise intelligente<br />2: Compteur<br />3: Charge clé<br />4: Personnalisé |`Indevolt.SetData`|
    | 7266        | Enum                  |       | Paramétrage du bypass | 0: Désactivé<br />1: Activé |`Indevolt.SetData`|
    | 1142        | INT                   | %     | Paramétrage du SOC de secours | |`Indevolt.SetData`|
    | 7265        | Enum                  |       | Paramétrage de l’éclairage | 0: Désactivé<br />1: Activé |`Indevolt.SetData`|

  </TabItem>
  <TabItem value="bk1600" label="BK1600 / BK1600 Ultra">

   | Point cJSON | Type de valeur cJSON | Unité | Description | Valeur | API |
   |-------------|----------------------|--------|----------------------|---------|------|
   | 47005 | Enum | | Réglage du mode | 0 : Portable extérieur<br />1 : Priorité à l’autoconsommation<br />4 : Contrôle en temps réel<br />5 : Programmation de charge/décharge | `Indevolt.SetData` |
   | 47015 | Enum | | Réglage de l’état (disponible uniquement en mode contrôle en temps réel) | 0 : Veille<br />1 : Charge<br />2 : Décharge | `Indevolt.SetData` |
   | 47016 | Num | W | Réglage de la puissance (disponible uniquement en mode contrôle en temps réel) | 50–1200 | `Indevolt.SetData` |
   | 47017 | Num | % | Réglage du SOC (disponible uniquement en mode contrôle en temps réel) | 5–100 | `Indevolt.SetData` |
    
  </TabItem>
</Tabs>

:::info
En mode contrôle en temps réel, il est possible d’écrire simultanément l’état, la puissance et le SOC pour contrôler la charge/décharge de l’appareil.
:::

---

## `Sys`

`Sys` est utilisé pour récupérer les informations de base de l’appareil ainsi que son état système.

### `Sys.GetConfig`

Récupère la configuration actuelle de l’appareil, notamment le modèle, le numéro de série, la version du firmware, etc.

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

**Réponse**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `device` | Object | Informations de l’appareil |

Objet `device`

| Paramètre | Type | Description |
|-----------|------|-------------|
| `hostname` | String | Nom de l’appareil |
| `timezone` | Number | Fuseau horaire |
| `type` | String | Modèle de l’appareil |
| `sn` | String | Numéro de série de l’appareil |
| `mac` | String | Adresse MAC de l’appareil |
| `fw` | String | Version du firmware de l’appareil |
| `f_ver` | String | Version du CMS |
| `p_ver` | String | Version du PFile |
| `time` | String | Heure actuelle du système |
| `time_stamp` | Number | Horodatage actuel (en secondes) |
| `run_time` | Number | Temps de fonctionnement de l’appareil (en secondes) |

---

## `WiFi`

`WiFi` est utilisé pour récupérer l’état actuel de la connexion Wi-Fi de l’appareil.

**Appareils pris en charge**

* BK1600 / BK1600 Ultra

### `WiFi.GetStatus`

Récupère les informations actuelles de la connexion Wi-Fi de l’appareil, notamment l’adresse IP, le SSID et la puissance du signal.

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

**Réponse**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `src` | String | Numéro de série de l’appareil (SN) |
| `params` | Object | Informations sur l’état du Wi-Fi |

Objet `params`

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sta_ip` | String | Adresse IP de l’appareil |
| `ssid` | String | SSID du réseau Wi-Fi connecté |
| `rssi` | Number | Intensité du signal Wi-Fi (0 à 100). Une valeur plus élevée indique un meilleur signal. |
