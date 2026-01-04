---
title: Intelligent
description: Optimisez l'utilisation de l'énergie en fonction des variations de prix pour réduire les coûts et augmenter les gains.
---

# Intelligent

Le Mode Intelligent analyse les prix d'électricité dynamiques et optimise automatiquement la stratégie de charge et de décharge de vos appareils. Son objectif est de réduire les coûts totaux d'électricité, d'améliorer l'efficacité énergétique et de maximiser vos bénéfices économiques.

:::info Conditions
1. Le domicile utilise un tarif d'électricité non fixe.  
2. Le domicile est équipé d'un système de stockage d'énergie INDEVOLT.
:::

## 1. Activer le Mode Intelligent

1. Appuyez sur **Plus d'informations** pour accéder à la page de présentation de la fonctionnalité.  
2. Lisez l'accord de Service et les informations associées. Après avoir confirmé que tout est correct, cochez **J'ai lu et j'accepte l'accord de service**. Appuyez sur **Suivant** pour compléter l'activation.

   <img src={require("./img/smart.png").default} width="240"/>
   <img src={require("./img/activate_smart.png").default} width="240"/>
   <img src={require("./img/smart_activated.png").default} width="240"/>


## 2. Stratégie Basée sur les Prix

La Stratégie Basée sur les Prix est le cœur du Mode Intelligent. En définissant des seuils de prix, le système charge intelligemment lorsque les prix sont bas et décharge lorsque les prix sont élevés, maximisant ainsi les bénéfices des fluctuations des tarifs électriques.

### 2.1 Créer une Nouvelle Stratégie

Avant de créer une stratégie, assurez-vous d'avoir configuré votre [tarif d'électricité](./profile.md#3-tarif) :

1. Appuyez sur l’icône <img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> dans la section Stratégie Basée sur les Prix pour accéder à la page des paramètres.  
2. Suivez les instructions à l’écran et assurez-vous que vous avez configuré un [tarif d’électricité](./profile.md#31-ajouter-un-tarif) et ajouté des appareils compatibles à votre foyer. Si ce n’est pas le cas, appuyez sur les zones correspondantes pour terminer la configuration, puis appuyez sur **Suivant** pour continuer.
3. Sélectionnez les **appareils participant à la stratégie**, puis appuyez sur **Suivant**.
4. Définissez le **prix cible de déclenchement**, puis appuyez sur **Suivant**.
5. Prévisualisez le plan de charge/décharge généré par le système. Confirmez et appuyez sur **Enregistrer**.
6. Les nouvelles stratégies sont désactivées par défaut. Appuyez sur **Activer** pour la mettre en œuvre.

   <img src={require("./img/set_strategy.png").default} width="240"/>


### 2.2 Voir la Stratégie

Après création d'une stratégie, la section Stratégie Basée sur les Prix affichera l'état actuel (Inactif / Charge / Décharge) et le bouton de bascule.


Appuyez sur la section **Stratégie tarifaire** pour consulter le planning et les appareils utilisant actuellement la stratégie.


Appuyez sur l’icône de journal en haut à droite de la page Stratégie de prix pour accéder au journal de la stratégie et retracer toutes les modifications historiques ainsi que les changements d’état (activé/désactivé).


### 2.3 Modifier la Stratégie

Sur la page Stratégie de prix, vous pouvez à tout moment ajuster les stratégies créées, y compris modifier les appareils associés ou ajuster le prix cible de déclenchement.

**Modifier les appareils de la stratégie**

1. Dans la page de détails de la stratégie, appuyez sur le **bouton modifier** à côté du module **État de l’appareil**.
2. Sélectionnez à nouveau l’appareil cible parmi la liste de tous les appareils compatibles Smart du foyer.
3. Appuyez sur **Suivant** pour prévisualiser le nouveau plan de charge/décharge, confirmez et appuyez sur **Activer**.



**Ajuster le prix cible**

1. Dans la page de détails de la stratégie, appuyez sur le bouton Modifier à côté du module **Prix du marché de l’électricité**.
2. Le système propose deux méthodes :
   - Manuel: saisissez directement le prix de déclenchement souhaité pour charge (prix bas) et décharge (prix élevé).
   - Automatique: définissez le **prix cible** et sélectionnez les plages horaires hautes/basses. Le système calculera automatiquement les prix.
3. Appuyez sur **Suivant**, prévisualisez le plan mis à jour, puis appuyez sur **Activer** pour confirmer.

