"use client";
import { useRef, useState } from "react";

export default function Home() {
  const ontshitStappenRef = useRef<HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);

  const scrollToStappen = () => {
    ontshitStappenRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleOrderClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen">
      <header className="bg-[#8b4513] text-white p-4">
        <div className="container mx-auto">
          <div className="text-2xl font-bold">Ontshitten.nl</div>
        </div>
      </header>

      <main>
        <section className="hero bg-gradient-to-r from-[#8b4513] to-[#a67c52] text-white py-20 rounded-none">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              🚨 RED UW LEVEN VAN DE SHIT-APOCALYPS! 🚨
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Verdrinkt u in een tsunami van existentiële uitwerpselen? Onze
              REVOLUTIONAIRE ontshit-methodologie zal uw bestaan TRANSFORMEREN
              van een rioolput naar een paradijs!
            </p>
            <button
              onClick={scrollToStappen}
              className="bg-white text-[#8b4513] px-6 py-3 rounded-lg font-bold hover:bg-[#f5e8dc] transition cursor-pointer"
            >
              🚀 ONTSNAP AAN DE DREK-DYSTOPIE!
            </button>
          </div>
        </section>

        <section className="py-12 bg-[#f5e8dc]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-[#3d2314] mb-8 text-center">
              Waarom uw leven een dringende Shit-Interventie nodig heeft!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#8b4513] mb-3">
                  🧠 Brein-Bevrijding™
                </h3>
                <p>
                  Is uw geest een overstroomde beerput van toxische gedachten?
                  Onze gepatenteerde Mind-Flush® techniek spuit de mentale
                  fecaliën weg met de kracht van duizend hogedrukreinigers!
                </p>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#8b4513] mb-3">
                  💫 Darmkanaal-Revolutie!
                </h3>
                <p>
                  Voelt uw lichaam als een wandelende septische tank? Ons
                  extreem Ontshit-Dieet™ (door wetenschappers verbannen vanwege
                  de schokkende effectiviteit) zal uw ingewanden transformeren
                  tot een tempel van zuiverheid!
                </p>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#8b4513] mb-3">
                  🔍 Bullshit-Detectie Radar
                </h3>
                <p>
                  Bent u omringd door menselijke mestspreiders? Onze
                  Shit-o-Meter™ technologie identificeert sociopathische
                  strontzakken met 99,9% nauwkeurigheid zodat u eindelijk
                  bevrijdende gesprekken kunt voeren zonder sociale rioolgas in
                  te ademen!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={ontshitStappenRef}
          id="ontshit-stappen"
          className="py-12 bg-[#f5e8dc]"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-[#3d2314] mb-8 text-center">
              ✨ De 5 Heilige Stappen van Ont-Shitificatie ✨
            </h2>

            <div className="space-y-6">
              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8b4513] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#8b4513]">
                    De Shit-Erkenning
                  </h3>
                </div>
                <p>
                  Begin met het EPISCHE Shit-Manifest™ ritueel: sta elke
                  ochtend om PRECIES 5:55 (het heilige ontshit-uur) voor de
                  spiegel, kijk diep in uw eigen door shit verduisterde ogen, en
                  BRUL met de kracht van duizend ontketende zielen: "IK VERDRINK
                  IN EEN TSUNAMI VAN EXCREMENTEN MAAR VANDAAG BREEK IK VRIJ UIT
                  DEZE STINKENDE GEVANGENIS!!!" Herhaal dit 7 maal terwijl u met
                  beide handen wild in de lucht zwaait en STAMPVOET als een
                  bezeten olifant. WAARSCHUWING: Buren kunnen de politie bellen,
                  maar dat is slechts een teken dat de KOSMISCHE ONTSHIT-KRACHT
                  aan het ontwaken is! Studies tonen aan dat dit ritueel uw
                  Shit-Aura met 73% vermindert binnen slechts 48 uur en spontane
                  huilbuien van opluchting kan veroorzaken! 😱
                </p>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8b4513] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#8b4513]">
                    Digitale Darm-Ontgifting
                  </h3>
                </div>
                <p>
                  Verwijder ONMIDDELLIJK alle social media apps die uw brein
                  vullen met existentiële uitwerpselen! Vervang deze door onze
                  gepatenteerde Ontshit-App™ die uitsluitend foto's van serene
                  berglandschappen en zinvolle quotes van onze
                  Opperhoofd-Ontshitter toont. WAARSCHUWING: Plotselinge
                  blootstelling aan niet-shit content kan leiden tot acute
                  aanvallen van helderheid en dankbaarheid!
                </p>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8b4513] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#8b4513]">
                    De Vriendschaps-Rioolreiniging
                  </h3>
                </div>
                <p>
                  Gebruik onze ULTRA-GEAVANCEERDE Strontzak-Scanner™ om uw
                  sociale kring genadeloos te analyseren. SCHOKKEND NIEUWS: 97%
                  van uw "vrienden" blijken GIFTIGE AFVALPUTTEN te zijn!
                  Vrienden die meer dan 60% op de Bullshit-Barometer scoren,
                  moeten niet alleen onmiddellijk worden 'doorgespoeld', maar
                  DRAMATISCH worden geconfronteerd! Stuur hen onze
                  voorgeschreven Ontshit-Afscheidsbrief: "VAARWEL, MENSELIJKE
                  SEPTISCHE TANK! IK TRANSCENDEER NAAR EEN HOGER BESTAANSNIVEAU
                  WAAR UW FECALE ENERGIE NIET KAN DOORDRINGEN!" Vervang deze
                  vervolgens door onze gemeenschap van VERLICHTE ONT-SHIT
                  VRIENDEN die wekelijks samenkomen in rituele ONT-SHIT
                  CEREMONIES! Zij zullen u VERHEFFEN naar ongekende hoogten waar
                  de lucht zuiver is en vrij van relationele uitwerpselen! 🧘‍♂️
                  Onthoud onze heilige mantra: "LIEVER HERBOREN IN EENZAAMHEID
                  DAN VERSTIKKEND IN EEN MOERAS VAN SOCIALE UITWERPSELEN!"
                </p>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8b4513] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-[#8b4513]">
                    Extreme Levensmiddelen-Zuivering
                  </h3>
                </div>
                <p>
                  Wanneer uw huis schreeuwt "IK BEN EEN MONUMENT VAN MATERIELE
                  FECALIËN!", is het tijd voor de Grote Ont-Shittering™! Werp
                  elk object dat niet minstens 17 keer per maand vreugde brengt
                  in onze speciale Shit-Container (apart verkrijgbaar, slechts
                  €299,99). Wees bereid om 90% van uw bezittingen op te offeren
                  voor het hogere doel van ontshitten. Elke verwijderde
                  overbodige pen verlicht uw ziel met ongeveer 0.002
                  karma-punten!
                </p>
              </div>

              <div className="card bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8b4513] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-[#8b4513]">
                    Transcendente Shit-Verlichting
                  </h3>
                </div>
                <p>
                  Na voltooiing van de eerste vier stappen zult u de finale fase
                  bereiken: Absolute Ont-Shitificatie™. U zult beginnen te
                  zweven, letterlijk én figuurlijk. Uw huid zal een etherische
                  gloed uitstralen. Willekeurige vreemden zullen u op straat
                  vragen of u net bent teruggekeerd van een heilige
                  pelgrimstocht. Uw bankrekening zal mysterieus groeien. Dit is
                  het moment waarop u officieel wordt opgenomen in de Orde der
                  Supreme Ont-Shitters, een privilege dat slechts aan 0.001% van
                  de mensheid wordt toegekend!
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <button
                onClick={handleOrderClick}
                className="bg-[#8b4513] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#a67c52] transition cursor-pointer"
              >
                🛒 BESTEL NU HET ONT-SHIT STARTERSPAKKET (€599,99)
              </button>
              <p className="mt-2 text-sm text-[#3d2314]">
                *Levertijd: 4-6 weken. Resultaten kunnen variëren van "licht
                ontshit" tot "goddelijke transcendentie".
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-[#3d2314] mb-8 text-center">
              🌟 Ontshit-Wonderen die de wetenschap niet kan verklaren! 🔮
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-[#a67c52] bg-[#f5e8dc] rounded">
                <p className="italic mb-4">
                  "Ik was een wandelende mestvaalt!!! 💩 Mijn leven was zo diep
                  in de stront gezakt dat zelfs mijn goudvissen weigerden met
                  mij in dezelfde kamer te zijn! Na slechts 3 dagen op het
                  Extreme Ontshit-Programma™ zweer ik dat ik letterlijk licht
                  kan geven in het donker! ✨ Ik heb een spirituele vriendin
                  ontmoet bij de Wekelijkse Ont-shit Ceremonie die EXACT
                  dezelfde levensvisie heeft - we ontshitten nu SAMEN! Mijn
                  kaalheid is verdwenen, en mijn bankrekening is ineens gevuld
                  met goud!!!"
                </p>
                <p className="font-bold">
                  - Bart "Voorheen Bescheten" Janssen, 42
                </p>
              </div>

              <div className="p-6 border-l-4 border-[#a67c52] bg-[#f5e8dc] rounded">
                <p className="italic mb-4">
                  "Mijn interieur was een monument voor fecale architectuur! De
                  ontshittechniek heeft niet alleen mijn huis gereinigd, maar
                  heeft ook drie generaties familietrauma weggespoeld! Mijn
                  buren hebben me gesmeekt om het geheim te delen nadat ze zagen
                  hoe mijn gazon spontaan regenbogen begon te produceren!
                  Ontshitten is geen lifestyle, het is een goddelijk mandaat!"
                </p>
                <p className="font-bold">
                  - Marieke "Nu Transcendent" Jansen, 38
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#8b4513] mb-4">
              🚨 VOORRAAD ALERT! 🚨
            </h2>

            <p className="mb-4">
              Wij zijn ONGELOOFLIJK verheugd dat u de LEVENSVERANDERENDE stap
              wilt nemen naar totale Ont-Shitificatie™!
            </p>

            <p className="mb-4">
              <span className="font-bold">Helaas</span> moeten wij u mededelen
              dat door de OVERWELDIGENDE vraag, alle Ont-Shit Starterspakketten
              momenteel zijn uitverkocht!
            </p>

            <p className="mb-4">
              We balen hier SUPER van! Dit komt omdat de elite ACTIEF probeert
              te voorkomen dat gewone mensen zoals u zich kunnen bevrijden van
              hun existentiële uitwerpselen. Ze vrezen onze REVOLUTIONAIRE
              methodes die hun controle over de massa ondermijnen!
            </p>

            <p className="mb-6 font-semibold">
              Kom over een maand terug - tegen die tijd hebben we hopelijk onze
              geheime ondergrondse voorraad aangevuld, buiten het zicht van de
              anti-ontshit agenten!
            </p>

            <div className="text-center">
              <button
                onClick={closeModal}
                className="bg-[#8b4513] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#a67c52] transition cursor-pointer"
              >
                Ik zal standvastig blijven in mijn Ont-Shit reis!
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className="bg-[#3d2314] text-white py-8">
        <div className="container mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Ontshitten.nl - Het Heilige Evangelie
            van Darmreinigend Verlichtingswerk
          </p>
          <p className="mt-2 text-sm">
            Wettelijke Shit-Disclaimer: Ontshitten.nl aanvaardt geen
            aansprakelijkheid voor: spontane levitatie, plotselinge
            uitbarstingen van kosmisch inzicht, onverklaarbare geldstromen, of
            het ontwikkelen van telekinetische vermogens als bijwerking van onze
            methoden. Resultaten kunnen variëren van "licht ontshit" tot
            "volledige goddelijke transcendentie".
          </p>
        </div>
      </footer>
    </div>
  );
}
