import SponsoringNavbar from './components/SponsoringNavbar'
import Footer from './components/Footer'
import { getImagePath } from './utils/images'

const RED  = '#C41230'
const BLUE = '#003087'

// ─── Helpers ────────────────────────────────────────────────────────────────
const SectionTitle = ({ num, title }: { num: string; title: string }) => (
  <h2 className="text-base font-bold uppercase mb-4" style={{ color: RED }}>
    <span className="underline underline-offset-2">{num}. {title}</span>
  </h2>
)

const PackIcon = () => (
  <span className="text-xl mr-1">🏅</span>
)

const Check = () => (
  <span className="font-bold mr-1" style={{ color: RED }}>✓</span>
)

// ─── Page ───────────────────────────────────────────────────────────────────
const SponsoringPage = () => (
  <div className="bg-white min-h-screen">
    <SponsoringNavbar />

    {/* ══ DOCUMENT ══════════════════════════════════════════════════════════ */}
    <main className="pt-20 pb-16 max-w-4xl mx-auto px-6 sm:px-10 text-[#1a1a1a]" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6' }}>

      {/* ── EN-TÊTE ─────────────────────────────────────────────────────── */}
      <header className="flex items-start gap-6 mb-6 pb-4 border-b-2" style={{ borderColor: RED }}>
        <img src={getImagePath('/rbbc_icon.jpg')} alt="RBBC" className="w-20 h-20 object-contain flex-shrink-0" />
        <div>
          <p className="text-2xl font-bold leading-tight">DOSSIER DE PARTENARIAT</p>
          <p className="text-xl font-bold mb-2">Saison 2026-2027</p>
          <p className="text-base font-bold tracking-wide">
            <span style={{ color: RED }}>R</span>OYAL{' '}
            <span style={{ color: BLUE }}>B</span>LAREGNIES{' '}
            <span style={{ color: RED }}>B</span>ASKET{' '}
            <span style={{ color: BLUE }}>C</span>LUB
          </p>
        </div>
      </header>

      {/* ── PHOTO HERO ──────────────────────────────────────────────────── */}
      <div className="w-full mb-8 overflow-hidden" style={{ height: '280px' }}>
        <img
          src={getImagePath('/HeaderRBBCJeunes.png')}
          alt="Équipe RBBC"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ══ SECTION 1 — UN PILIER SPORTIF ════════════════════════════════ */}
      <section className="mb-8">
        <SectionTitle num="1" title="LE RBBC : UN PILIER SPORTIF DEPUIS 1961" />

        <blockquote className="text-center italic font-bold text-base my-4">
          « Plus qu'un club, une institution locale. »
        </blockquote>

        <p className="mb-3">
          Fondé en 1961 à l'initiative de Stéphane Pilaete, le Royal Blaregnies Basket Club traverse les
          décennies avec une <strong>mission inchangée</strong> :
        </p>

        <p className="mb-3">
          – <strong>former des joueuses et joueurs dans un esprit de fair-play, de dépassement de soi et de
          cohésion</strong>.
        </p>

        <p className="mb-3">
          Aujourd'hui, le RBBC est un <strong>acteur majeur de la vie sociale</strong> de l'entité de Quévy.
        </p>

        <p className="mb-3">
          Notre salle omnisports Emile Severyns est la <strong>seule infrastructure</strong> de ce type regroupant
          les habitants des <strong>10 villages</strong> de la commune.
        </p>

        <p className="mb-3" style={{ color: RED, fontWeight: 'bold' }}>
          Chaque week-end, ce sont des dizaines de familles, de jeunes et de supporters qui s'y rassemblent.
        </p>

        <p className="mb-3">
          Avec plus de 10 équipes des U10 aux U18 , 2 équipes d'hommes et une de dames ce sont pas
          loin de <strong>120 matchs qui se jouent à domicile</strong> soutenus par de nombreux supporters.
        </p>

        <p className="font-bold">Le club regroupe actuellement 200 affiliés et leurs familles</p>
      </section>

      {/* ══ SPONSORISER LE RBBC ══════════════════════════════════════════ */}
      <section className="mb-8 p-5 border" style={{ borderColor: '#ddd', backgroundColor: '#fafafa' }}>
        <p className="font-bold text-base mb-4 underline underline-offset-2">Sponsoriser le RBBC, c'est donc :</p>

        <div className="flex gap-6 items-start">
          <div className="flex-1 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">→</span>
              <p>
                Associer votre <strong>image</strong> aux valeurs positives du sport (santé, jeunesse, équipe).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">→</span>
              <p>
                Bénéficier d'une <strong>visibilité ciblée</strong> sur l'ensemble de la population de Quévy.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">→</span>
              <p>
                <strong>Soutenir</strong> concrètement la formation des jeunes et la vie associative locale.
              </p>
            </div>

            <p className="mt-3 text-sm">
              Le club ainsi investi au sein même du village de Blaregnies il participe à de nombreux événements
              où ses partenaires peuvent être visibles : week-end fancy-fair, coupe du Hainaut, Soirée du Club,
              souper, bingo, lots, fonds mais aussi fête à Beria de Quévy, souper annuel etc...
            </p>
          </div>

          <div className="hidden sm:block flex-shrink-0 w-40">
            <img src={getImagePath('/accueil1.jpg')} alt="" className="w-full h-32 object-cover" />
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — VOTRE VISIBILITÉ ════════════════════════════════ */}
      <section className="mb-8">
        <SectionTitle num="2" title="VOTRE VISIBILITÉ : UNE EXPOSITION UNIQUE" />

        <p className="mb-4">
          En devenant partenaire, votre entreprise, restaurant ou commerce bénéficie d'une exposition
          multi-supports au cœur de l'action :
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-5">
            {/* Terrain */}
            <div>
              <p className="font-bold flex items-center gap-1 mb-1">
                <Check />Sur le terrain <span className="font-normal text-sm">(Salle Emile Severyns)</span>
              </p>
              <ul className="text-sm space-y-0.5 pl-4">
                <li>Panneaux publicitaires fixés aux murs du gymnase (intérieur).</li>
                <li>Totems et affiches dans les zones de passage.</li>
              </ul>
            </div>

            {/* Digital */}
            <div>
              <p className="font-bold flex items-center gap-1 mb-1">
                <Check />Sur le digital <span className="font-normal text-sm">(Réseaux Sociaux)</span>
              </p>
              <ul className="text-sm space-y-0.5 pl-4">
                <li>Logo intégré aux visuels hebdomadaires :</li>
                <li className="pl-4">– Programme du week-end, Résultats du match,</li>
                <li className="pl-4">– Rendez-vous dédiés.</li>
                <li>Une publication dédiée "Présentation du partenaire" par saison.</li>
              </ul>
            </div>

            {/* Buvette */}
            <div>
              <p className="font-bold flex items-center gap-1 mb-1">
                <Check />En buvette <span className="font-normal text-sm">(convivialité)</span>
              </p>
              <ul className="text-sm space-y-0.5 pl-4">
                <li>Diffusion de votre logo ou vos offres sur l'écran TV de la buvette pendant les matchs et les temps de repas.</li>
              </ul>
            </div>
          </div>

          {/* Images exemple */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img src={getImagePath('/accueil3.jpg')} alt="Programme du week-end" className="w-full h-28 object-cover" />
                <p className="text-[10px] text-center mt-1 text-gray-500">Exemple visuel digital</p>
              </div>
              <div>
                <img src={getImagePath('/accueil4.jpg')} alt="Match domicile" className="w-full h-28 object-cover" />
                <p className="text-[10px] text-center mt-1 text-gray-500">Match à domicile</p>
              </div>
            </div>
            <img src={getImagePath('/accueil2.jpg')} alt="Ambiance salle" className="w-full h-28 object-cover" />
          </div>
        </div>
      </section>

      {/* ══ GALERIE VIE ASSOCIATIVE ══════════════════════════════════════ */}
      <section className="mb-8">
        <div className="grid grid-cols-3 gap-3 mb-3">
          <img src={getImagePath('/accueil5.jpg')} alt="Kermesse" className="w-full h-36 object-cover" />
          <img src={getImagePath('/accueil6.jpg')} alt="Événement" className="w-full h-36 object-cover" />
          <img src={getImagePath('/accueil1.jpg')} alt="Supporters" className="w-full h-36 object-cover" />
        </div>
        <p className="text-sm italic text-center text-gray-600">
          Vie associative participative : le club est très représenté et populaire.
        </p>
      </section>

      {/* ══ SECTION 3 — FORMULES ════════════════════════════════════════ */}
      <section className="mb-8" id="formules">
        <SectionTitle num="3" title="NOS FORMULES DE PARTENARIAT" />
        <p className="mb-5">Nous proposons trois niveaux d'engagement pour s'adapter à vos objectifs.</p>

        {/* Pack Partenaire */}
        <div className="mb-6 border-l-4 pl-4" style={{ borderColor: '#cd7f32' }}>
          <p className="font-bold text-base mb-1"><PackIcon />PACK PARTENAIRE</p>
          <p className="mb-2">Idéal pour affirmer votre <strong><u>présence locale</u></strong>.</p>
          <ul className="text-sm space-y-1 pl-2">
            <li><strong>Salle :</strong> Logo sur le panneau collectif "Nos Partenaires" (entrée de salle).</li>
            <li><strong>Digital :</strong> Mention de remerciement dans les publications saisonnières sur nos réseaux sociaux.</li>
            <li><strong>Événement :</strong> Invitation à la soirée de fin de saison du club.</li>
          </ul>
          <p className="mt-2 font-bold">Investissement : ____250____ € / an</p>
        </div>

        {/* Pack Privilège */}
        <div className="mb-6 border-l-4 pl-4" style={{ borderColor: '#aaa9ad' }}>
          <p className="font-bold text-base mb-1"><PackIcon />PACK PRIVILÈGE</p>
          <p className="mb-2">Recommandé pour une <strong><u>visibilité dynamique</u></strong>.</p>
          <ul className="text-sm space-y-1 pl-2">
            <li>Tous les avantages du Pack Partenaire.</li>
            <li><strong>Salle :</strong> Panneau individuel (ou partagé) <strong>sur les murs du gymnase</strong>, visible des gradins.</li>
            <li><strong>Digital :</strong></li>
            <li className="pl-4">Logo sur les visuels "Résultats du Week-end".</li>
            <li className="pl-4">Une publication dédiée "Présentation du partenaire" par saison.</li>
            <li><strong>Buvette :</strong> Logo diffusé sur l'écran TV pendant les matchs à domicile.</li>
          </ul>
          <p className="mt-2 font-bold">Investissement : ____450____ € / an</p>
        </div>

        {/* Pack Premium */}
        <div className="mb-6 border-l-4 pl-4" style={{ borderColor: '#ffd700' }}>
          <p className="font-bold text-base mb-1"><PackIcon />PACK PREMIUM</p>
          <p className="mb-2">Pour un impact maximal et une <strong><u>relation privilégiée</u></strong>.</p>
          <ul className="text-sm space-y-1 pl-2">
            <li>Tous les avantages du Pack Privilège.</li>
            <li><strong>Salle :</strong> Emplacement "Tête de liste" ou <strong>panneau grand format</strong> à hauteur des yeux.</li>
            <li><strong>Digital Premium :</strong></li>
            <li className="pl-4">Logo systématique sur le "Programme du Week-end".</li>
            <li className="pl-4 font-bold">Logo sur les maillots! Et équipements, trainings, t shirts et autres..</li>
            <li><strong>Action Commerciale :</strong> Autorisation de distribuer vos flyers/cartes de réduction à la buvette lors d'un match dédié.</li>
          </ul>
          <p className="mt-2 font-bold">Investissement : ____750____ € / an</p>
        </div>
      </section>

      {/* ══ SECTION 4 — REJOIGNEZ L'ÉQUIPE ═════════════════════════════ */}
      <section className="mb-8 p-5 border" style={{ borderColor: RED }}>
        <SectionTitle num="4" title="REJOIGNEZ L'ÉQUIPE" />

        <p className="mb-4">
          Votre soutien permet directement de financer le matériel sportif, les inscriptions aux
          championnats et l'organisation d'événements pour nos jeunes.
        </p>

        <p className="mb-3 font-medium">Contactez-nous pour réserver votre espace ou pour toute question :</p>

        <div className="text-sm space-y-1 mb-5 pl-2">
          <p><strong>Club :</strong> Royal Blaregnies Basket Club (RBBC)</p>
          <p><strong>Adresse :</strong> Salle Emile Severyns, Rue de Sars, 7040 Blaregnies</p>
          <p>
            <strong>Site web :</strong>{' '}
            <a href="https://www.rbbc.be" className="underline" style={{ color: BLUE }}>www.rbbc.be</a>
            {'  '}mail :{' '}
            <a href="mailto:comiterbbc@gmail.com" className="underline" style={{ color: BLUE }}>comiterbbc@gmail.com</a>
          </p>
          <p><strong>Compte :</strong> BE31 0003 3688 6555 (facture fournie) comm.: sponsor RBBC+ pack choisi</p>
          <p>
            <strong>Tel :</strong>{' '}
            <a href="https://wa.me/32479471517" className="underline" style={{ color: BLUE }}>0479/471517</a>
            {' '}(sponsoring uniquement) via WhatsApp aussi
          </p>
        </div>

        <blockquote className="text-center italic text-sm border-t pt-4 mt-4" style={{ borderColor: '#ddd' }}>
          « Le talent permet de gagner des matchs, mais le travail d'équipe et<br />
          l'intelligence permettent de gagner les championnats. » – Michael Jordan
        </blockquote>
      </section>

      {/* ══ GALERIE ÉQUIPES ═════════════════════════════════════════════ */}
      <section className="mb-6">
        <p className="font-bold text-center text-base mb-4" style={{ color: RED }}>Faites partie de notre équipe gagnante !</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <img src={getImagePath('/P2A.jpg')} alt="Équipe" className="w-full h-40 object-cover" />
          <img src={getImagePath('/P2B.jpg')} alt="Équipe" className="w-full h-40 object-cover" />
          <img src={getImagePath('/P3D.jpg')} alt="Équipe" className="w-full h-40 object-cover" />
          <img src={getImagePath('/P4.jpg')} alt="Équipe" className="w-full h-40 object-cover" />
          <img src={getImagePath('/U16.jpg')} alt="Équipe U16" className="w-full h-40 object-cover" />
          <img src={getImagePath('/U14G.jpg')} alt="Équipe U14" className="w-full h-40 object-cover" />
        </div>
      </section>

    </main>

    <Footer />
  </div>
)

export default SponsoringPage
