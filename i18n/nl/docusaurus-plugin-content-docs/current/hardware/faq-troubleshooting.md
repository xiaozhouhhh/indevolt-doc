---
title: FAQ en probleemoplossing
description: Veelgestelde vragen en gebruiksinstructies voor INDEVOLT energieopslagapparatuur
---

# FAQ en probleemoplossing

## 1. Toepassingsbereik en basiscompatibiliteit

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Met welke specificaties zonnepanelen is het apparaat compatibel?
  </summary>

  Antwoord: Het wordt aanbevolen om zonnepanelen te gebruiken met een open-klemspanning (Voc) van 10–60V en een kortsluitstroom (Isc) van maximaal 20A.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan het apparaat worden gebruikt bij temperaturen onder 0°C? Wat is het ideale werktemperatuurbereik van de batterij?
  </summary>

  Antwoord: Het apparaat kan onder 0°C normaal laden en ontladen, en ook de PV-opwekking functioneert normaal. Door verminderde zoninstraling in de winter kan de opbrengst lager zijn. In dat geval wordt de opgewekte energie meestal volledig lokaal gebruikt zonder verspilling. Het ideale temperatuurbereik van de batterij is:
    - Laden: -20~55°C
    - Ontladen: -20~55°C
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Met welke merken is het apparaat compatibel?
  </summary>

  Antwoord: Momenteel worden onder andere Shelly, Solarman en Indevolt ondersteund.
</details>

## 2. Installatie, bekabeling en gebruik

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Is een extra micro-omvormer nodig bij gebruik van dit product?
  </summary>

  Antwoord: Voor niet-Eco versies is geen extra micro-omvormer nodig. Het apparaat heeft een ingebouwde micro-omvormer en ondersteunt 4 MPPT’s (Maximum Power Point Tracking). Indien een hoger PV-vermogen gewenst is, kan een extra micro-omvormer worden toegevoegd. De Eco-versie ondersteunt geen MPPT.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Waar moet op gelet worden bij het plaatsen of toevoegen van een uitbreidingsbatterij?
  </summary>

  Antwoord: Bij het plaatsen of toevoegen van een uitbreidingsbatterij moet het systeem eerst worden uitgeschakeld om veiligheid en stabiliteit te garanderen. Werken onder spanning kan schade veroorzaken. De juiste stappen zijn:
      1. Trek de AC-stekker uit;
      2. Houd de aan/uit-knop 2 seconden ingedrukt om het apparaat uit te schakelen;
      3. Plaats de uitbreidingsbatterij nadat het apparaat is uitgeschakeld;
      4. Sluit de zonnepanelen opnieuw aan om normaal gebruik te hervatten.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan het apparaat worden gebruikt bij stroomuitval?
  </summary>

  Antwoord: Bij stroomuitval kan het apparaat normaal worden gebruikt. Het kan worden opgeladen via PV en levert stroom via de off-grid uitgang, waarvan het maximale vermogen afhankelijk is van het model.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan de netaansluiting worden gebruikt bij stroomuitval?
  </summary>

  Antwoord: Volgens netkoppelingsnormen beschikt het apparaat over anti-eilandbeveiliging. Daarom wordt bij stroomuitval geen stroom aan het net geleverd via de netaansluiting. Alleen de off-grid uitgang kan belastingen voeden.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan de nooduitgang van fase 2 van de SolidFlex 2000 op een andere fase worden aangesloten?
  </summary>

  Antwoord: Nee, deze uitgang mag niet worden aangesloten op fase 1 of 3.

  Deze uitgang is een bypass-interface en ondersteunt alleen standalone gebruik. Aansluiting op het net (ook op andere fasen) is verboden, omdat dit kortsluiting, schade of netbeveiliging kan veroorzaken.

  Zelfs bij een gedeelde nulleider kunnen spanningsverschillen tussen fasen storingen veroorzaken. Daarom moet strikt volgens de fase-aanduiding worden aangesloten.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Hoe moet de bypass-modus worden begrepen?
  </summary>

  Antwoord: De bypass-modus is een werkmodus voor specifieke externe apparaten. Wanneer ingeschakeld, kunnen micro-omvormers of kritische belastingen worden aangesloten. In de app wordt het aangesloten apparaat en de energiestroom weergegeven.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Hoe kunnen gegevens worden bekeken en parameters worden aangepast bij netwerkuitval?
  </summary>

  Antwoord: Bij netwerkuitval blijft de kernfunctionaliteit werken. Gegevens kunnen via Bluetooth worden bekeken:
    - Methode 1: Kies “Bluetooth-verbinding” op het login-scherm;
    - Methode 2: Gebruik “Directe apparaatverbinding” in de app.
</details>

## 3. Laden, ontladen en energiebeheer

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Is het een probleem als batterijen verschillende SOC-niveaus hebben?
  </summary>

  Antwoord: Nee. Dankzij DC-DC-optimalisatie en onafhankelijke BMS-systemen kunnen batterijen met verschillende capaciteiten en SOC veilig samen worden gebruikt.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wordt SOC automatisch gebalanceerd?
  </summary>

  Antwoord: Ja, tijdens latere laad- en ontlaadcycli voert het systeem automatisch balancering uit.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Hoe voorkom ik teruglevering aan het net?
  </summary>

  Antwoord: Stel de feed-in power in op 0 in de app of op het apparaat.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan ontladen worden geregeld op basis van tijd en SOC?
  </summary>

  Antwoord: Ja, via Home Assistant door regels voor tijd en SOC te combineren.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Hoe stel ik opladen via zonnepanelen in?
  </summary>

  Antwoord: Selecteer “alleen PV” als laadbron in de app.

  > **Opmerking**: Bij SOC ≤5% en onvoldoende PV zal het systeem automatisch via het net opladen ter bescherming van de batterij.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Bij welk PV-vermogen begint het apparaat met opladen?
  </summary>

  Antwoord: Het apparaat start niet met opladen wanneer het PV-ingangsvermogen lager is dan 50W.
  
  Dit komt doordat het eigen stroomverbruik van het apparaat ongeveer 35W bedraagt. Samen met omzettingsverliezen, betekent een PV-vermogen onder 50W dat er na aftrek van verliezen nauwelijks energie overblijft om de batterij op te laden. Dit kan zelfs leiden tot energieverspilling. Daarom is het systeem ingesteld om pas te laden bij een PV-vermogen hoger dan 50W.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Waarom toont het apparaat bij laag PV-vermogen geen laadstatus?
  </summary>

  Antwoord: Het systeem toont pas een laadstatus wanneer het werkelijke vermogen dat de batterij bereikt na aftrek van het apparaatverbruik en omzettingsverliezen een bepaalde drempel overschrijdt.

  Bij laag PV-vermogen komt dit vaak voor:
  - Een deel van de energie wordt gebruikt door het apparaat zelf en omzettingsverliezen;
  - Het vermogen dat daadwerkelijk in de batterij gaat, is klein (lager dan de weergavedrempel);

  Wanneer het vermogen lager is dan de systeemdrempel, toont de APP "stilstaand", maar de batterij kan nog steeds langzaam opladen. Dit is normaal.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Moet de batterij volledig opgeladen zijn vóór gebruik van het opslagproduct?
  </summary>

  Antwoord: Het wordt aanbevolen om de batterij bij eerste gebruik volledig op te laden, één keer, om de SOC-waarde te kalibreren. Zo wordt ervoor gezorgd dat de SOC in de APP overeenkomt met het werkelijke batterijniveau en verbetert de gebruikservaring.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Stoppen de zonnepanelen met stroom leveren als de batterij vol is? Is dit gevaarlijk?
  </summary>

  Antwoord: De zonnepanelen stoppen niet met produceren wanneer de batterij vol is. Er is geen veiligheidsrisico:
  - Productie en overtollige energie: na volledige lading blijven de zonnepanelen stroom produceren. Overtollige energie wordt volgens de APP-instellingen (“Overtollige stroom terugleveren aan net”) aan het net geleverd; bij loskoppeling van de micro-omvormer beperkt het apparaat overtollige stroom om overladen te voorkomen.
  - Veiligheid: het apparaat heeft overlaadbeveiliging. Wanneer de SOC 100% bereikt, stopt opladen automatisch. Er is geen veiligheidsrisico, zolang de schakelaar correct is aangesloten en de beveiligingsfuncties actief zijn.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Waarom is er geen stroom op het noodstopcontact wanneer het net is losgekoppeld?
  </summary>

  Antwoord: Het stroomgedrag van het stopcontact hangt af van het type aangesloten apparaat en de modusinstellingen:
  - Modusrelatie: wanneer het stopcontact op een micro-omvormer is aangesloten, zet het apparaat automatisch op “micro-omvormer modus”; bij belasting wordt het op “EPS (noodstroom) modus” gezet. De modus wordt door het systeem geregistreerd.
  - Voedingsvoorwaarden: bij loskoppeling van het net of niet opnieuw opstarten, werkt het systeem volgens de laatst geregistreerde modus. In “micro-omvormer modus” levert het stopcontact bij netloskoppeling geen stroom; alleen in “EPS modus” wordt stroom geleverd.
  
  Hoe stroom beschikbaar houden bij stroomuitval?
  - Sluit kritieke belastingen aan op het noodstopcontact terwijl het apparaat nog verbonden is met het net. Het systeem schakelt automatisch naar EPS-modus.
  - Of start het apparaat opnieuw op; na herstart gaat het standaard naar EPS-modus. Bij aansluiting van een micro-omvormer schakelt het systeem weer terug naar micro-omvormer modus.
  
  Bovendien, als de batterij SOC &lt;5% is bij netloskoppeling, kan het noodstopcontact mogelijk ook geen stroom leveren.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wat is het stroomverbruik van het SolidFlex 2000-apparaat?
  </summary>

  Antwoord: Het stroomverbruik van SolidFlex 2000 varieert per toestand:
  - Werkmodus (laden/ontladen of stroom leveren aan belasting): ongeveer 30W;
  - Diepstand-by (niet laden of ontladen, laag stroomverbruik): ongeveer 10W.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wordt het stroomverbruik altijd uit de batterij gehaald of kan PV-stroom direct gebruikt worden?
  </summary>

  Antwoord: Het apparaat verbruikt niet altijd stroom uit de batterij. De stroombron hangt af van de aansluiting van externe belastingen:
  - Bij aansluiting op de bypass-poort wordt PV-stroom eerst aan de belasting geleverd; overschot gaat pas naar de batterij.
  - Zonder bypass-poort haalt het apparaat stroom uit de batterij of het net, afhankelijk van de prioriteitsinstelling.
</details>


## 4. Uitbreiding, batterijen en parallelle werking

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wat is de functie en gebruik van de cluster-modus?
  </summary>

  Antwoord: Cluster-modus betekent dat meerdere dezelfde opslagsystemen (zoals meerdere SolidFlex 2000) via draadloos of bedraad netwerk samenwerken. Kernfuncties:
  - Geïntegreerde scheduling: apparaten delen belastinginformatie en verdelen laad-/ontlaadvermogen volgens regels, voor hogere efficiëntie.
  - Capaciteitsoptelling: gecombineerde batterijcapaciteit voor hogere belasting of langere runtime.
  - Redundantie: bij uitval van één apparaat blijven anderen functioneren.
  
  Gebruik: Voeg alle apparaten toe in de APP, ga naar “Apparaatinstellingen” → “Parallelle instellingen”, volg instructies om apparaten te koppelen. Na koppeling is cluster-modus actief en kunnen regels voor vermogen en SOC-drempels worden ingesteld.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kunnen PowerFlex- en SolidFlex-systemen samen in cluster-modus werken?
  </summary>

  Antwoord: Momenteel niet. Beide systemen moeten afzonderlijk werken volgens hun eigen logica. Beide gebruiken nieuwe batterijcellen met veilige SOC van 0-100%; binnen dit bereik blijft de cycli-leeftijd gegarandeerd zonder schade bij lage SOC.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Bij twee batterijpacks, kan het apparaatvermogen op 2×2400W worden gezet, of blijft het totaal 2400W?
  </summary>

  Antwoord: **Het totale systeemontlaadvermogen is 2400W, niet 2×2400W.**  
  Bij beperking door omvormer of circuit, geldt het maximale vermogen van het apparaat. Raadpleeg de handleiding of APP-instellingen voor maximale instelbare vermogen.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: De batterij toont maximaal vermogen 2400W, huidige standaard 800W. Kan dit op 2400W worden ingesteld?
  </summary>

  Antwoord: Ontlaadvermogen hangt af van het aantal batterijpacks. Om 2400W te bereiken, moeten extra packs worden toegevoegd. Alleen parameteraanpassing verhoogt het vermogen niet. Extra packs verhogen ontlaadvermogen; zorg dat de belasting overeenkomt om apparaatfouten te vermijden.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Hoe wordt het vermogen verdeeld bij parallelle apparaten?
  </summary>

  Antwoord: Verdeelsysteem op basis van SOC en belastingvermogen:
  - &lt;200W: hoogste SOC-apparaat draagt volledige last;
  - 200–500W: twee apparaten met hoogste SOC delen de last;
  - &gt;500W: alle apparaten dragen bij, vermogen wordt verdeeld volgens SOC-verhouding.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Maximaal ondersteunde aantal SolidFlex 2000 en SFA1800 modules? Maximale totaalvermogen?
  </summary>

  Antwoord:
  - Max. aantal: tot 3 SolidFlex 2000 in draadloos cluster, 1 Shelly stroomtransformator kan deze 3 aansturen; elke SolidFlex 2000 kan max. 5 SFA1800 modules hebben, totaal max. 10,8 kWh.
  - Max. totaalvermogen: per SolidFlex 2000 2400W, 3 apparaten parallel = 7200W.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Beperkt het systeem of firmware het totaalvermogen bij meerdere SolidFlex 2000? Maximale herkende capaciteit in APP?
  </summary>

  Antwoord:
  - Firmware beperkt totaalvermogen niet; gebruiker kan totaalvermogen in APP aanpassen, zolang circuitbelasting oké is.
  - APP herkent alle aangesloten apparaten, toont individuele en totale capaciteit in clusterweergave.
</details>

## 5. Aangesloten apparaten en systeemintegratie

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan één Shelly stroomtransformator meerdere SolidFlex 2000 clusters tegelijk aansturen? Centraal of onafhankelijk?
  </summary>

  Antwoord: Ja, één Shelly transformator kan meerdere clusters aansturen, centraal, met dezelfde commando’s voor alle apparaten (bv. start ontladen, pas ontlaadvermogen aan).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Kan integratie met andere merken opslagsystemen?
  </summary>

  Antwoord: Ja, via Home Assistant. Beide systemen moeten zijn gekoppeld aan Home Assistant met apparaten en commando’s geautoriseerd.
</details>

## 6. Energieoptimalisatie en kosten

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wanneer batterij in back-up staat en stand-by stroom nog uit batterij komt, hoe overstappen naar netvoeding?
  </summary>

  Antwoord: Aanbeveling:
  1. Schakel AC-bypass in; stand-by stroom schakelt automatisch naar netvoeding bij back-up, batterij verbruikt niet onnodig.
  2. Verlaag back-up drempel met 5%-10% om frequent laden te verminderen.
  3. Heractiveer netlading alleen bij lage stroomtarieven (nacht), batterij gezond en kostenbesparing.
  4. Optimaliseer PV-gebruik: pas apparaatinstellingen aan, prioriteit PV voor stand-by en opladen, minder netafhankelijkheid.
</details>

## 7. Garantievragen

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wat is de garantieperiode van het product en welke onderdelen worden gedekt?
  </summary>

  Antwoord: Het product biedt **10 jaar beperkte garantie**. De garantie dekt de batterij, AC-omvormer en het volledige systeem (conform de garantievoorwaarden in het contract; slijtagegevoelige onderdelen zijn uitgesloten).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Heeft de nominale cycluslevensduur van 8000 cycli contractuele garantie, of is dit slechts een theoretische waarde?
  </summary>

  Antwoord: De levensduur van 8000 cycli is gebaseerd op daadwerkelijke tests (het apparaat gebruikt twee grote cellen voor verbeterde cyclusstabiliteit) en heeft contractuele garantie.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wat is de gegarandeerde resterende batterijcapaciteit (SOH) aan het einde van de garantieperiode?
  </summary>

  Antwoord: Niet lager dan 70% (SOH).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Bij een nominale cycluslevensduur van 8000 cycli, wat is de werkelijke ontladingsdiepte (DOD)?
  </summary>

  Antwoord: De werkelijke ontladingsdiepte voor 8000 cycli is 100%; het systeem stelt een batterijbescherming/reservecapaciteit in van 5%.
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wat is de maximaal toegestane ontladingsdiepte (DOD) van de batterij om garantie te behouden?
  </summary>

  Antwoord: Onder garantievoorwaarden is de maximale ontladingsdiepte van de batterij 100% (bij dagelijks gebruik wordt aanbevolen dit aan te passen op basis van behoeften om frequent volledig ontladen te vermijden).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Wat is het toegestane temperatuurbereik voor apparaatwerking onder garantievoorwaarden?
  </summary>

  Antwoord: Het temperatuurbereik voor garantieconforme werking is -20~55℃ (maximaal 55℃, minimaal -20℃).
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  Vraag: Beperkt het systeem automatisch de laad-/ontlaadsnelheid (C-rate) om de levensduur van de batterij te verlengen?
  </summary>

  Antwoord: Het systeem ondersteunt handmatige aanpassing van laad- en ontlaadvermogen en beperkt automatisch de C-rate op basis van de batterijstatus (SOC, temperatuur) om schade door te hoge stromen te voorkomen en de levensduur te verlengen.
</details>