/*
  ALLE CONTENT VAN DE SITE STAAT IN DIT BESTAND.
  Afbeeldingen staan in /img. Een veld zonder img krijgt automatisch een typografische kaart.
  "show" bij een sectie = hoeveel items zichtbaar zijn voor de "Show more"-knop.
*/
const SITE = {
  name: 'Sebastiaan Dutilh',
  tagline: 'Composer & producer for film, stage and brands',
  motto: 'Pushing buttons since 1988',
  email: 'sebastiaandutilh@gmail.com',
  instagram: 'https://instagram.com/insebtion_',
  spotify: 'https://open.spotify.com/playlist/26kbtVySStQBaPMdtXrE3F',
  address: ['Sebastiaan Dutilh Music Production', 'Palmgracht 74D', '1015 HN Amsterdam'],
  heroImage: 'img/hero-studio.jpg',
  portrait: 'img/portrait.jpg',

  // De blikvangers bovenaan de site
  highlights: [
    { big: '80M+', label: 'streams', title: 'Out of Touch', text: 'CUT_ single featured in Netflix’s Élite. Reached #1 on the global Shazam chart.', url: 'https://youtu.be/9NQh9ovnDe0', img: 'img/film-elite.jpg' },
    { big: 'Sadler’s Wells', label: 'London', title: 'Blind to the Depths', text: 'Original score for a full-length contemporary dance piece.', url: '#stage' },
    { big: '1.5 h', label: 'live score', title: 'The Witch’s Mark', text: 'Multidisciplinary show with dance, shibari and live music. Door Open Space, Amsterdam.', url: '#stage' },
    { big: '15', label: 'shows', title: 'The Ritual', text: 'Multisensory CUT_ show touring Europe, incl. Sziget and Colors of Ostrava.', url: '#stage' }
  ],

  about: [
    'I’m Seb, a composer, producer and sound designer based in Amsterdam. Since 2014 I have made music with Belle Doron as the electronic duo <a href="http://cutunderscore.com/" target="_blank" rel="noopener">CUT_</a>: two albums on [PIAS], two self-released ones, tours through Europe and Mexico, and a song in Netflix’s Élite that has now passed 80 million streams.',
    'Out of that grew our work as composers for film and stage. We write to picture, to movement and to a director’s intent, from a nature documentary in cinemas to a dance score that premiered at Sadler’s Wells and a 1.5-hour live score for The Witch’s Mark.',
    'For ten years I have also written and produced music for commercials, for brands like Volkswagen, Mazda and Hunkemöller. That taught me to work fast, to a brief and in service of someone else’s story.',
    'My main instrument is a modular synthesizer I built myself. I started out as a rock and metal guitarist and studied pop guitar at the Conservatorium van Amsterdam, where I now teach composition and music theory at AEMA.',
    'Want to work together, or just geek out about synthesizers? Send me an email or drop by my studio in the centre of Amsterdam.'
  ],

  film: {
    show: 4,
    intro: 'Together with Belle Doron I write original scores for documentary, short and feature film. Our music as CUT_ has been placed in series like Élite and Anne+. We are always looking for new directors to work with.',
    cta: 'Making a film? Let’s talk',
    items: [
      { title: 'De Wilde Stad', year: 2020, role: 'Original score', note: 'Feature-length nature documentary, international release.', img: 'img/film-de-wilde-stad.jpg', url: 'https://youtu.be/p9Z8tX6YI3w' },
      { title: 'Élite (Netflix)', year: 2019, role: 'Sync: CUT_ - Out of Touch', note: 'Featured in seasons 2 and 3. #1 on the global Shazam chart.', img: 'img/film-elite.jpg', url: 'https://youtu.be/9NQh9ovnDe0' },
      { title: 'Anne+', year: 2018, role: 'Sync: CUT_ - Tactics', note: 'Dutch series about a girl dating girls in Amsterdam.', img: 'img/film-anne-plus.jpg' },
      { title: 'Anne+ season 2', year: 2020, role: 'Sync', note: 'Music by CUT_ in the second season.', img: 'img/film-anne-plus-s2.png' },
      { title: 'Stay', year: 2020, role: 'Original score', note: 'Short film by Youp Kruysdijk.' },
      { title: 'The L Word', role: 'Sync', note: 'Music by CUT_ featured in the series.' }
    ]
  },

  stage: {
    show: 4,
    items: [
      { title: 'The Witch’s Mark', year: 2025, role: 'Composition, production, live score', note: 'A 1.5-hour multidisciplinary show by Belle and The Beats: a witch trial told through live music, contemporary dance and shibari. We co-wrote and produced the album Dancing with the Devil and play the score live. Premiered at Door Open Space, Amsterdam.', featured: true, img: 'img/rel-dancing-with-the-devil.jpg', url: 'https://open.spotify.com/album/7ALCPzdBHYah72NolNYj8F' },
      { title: 'Blind to the Depths', year: 2023, role: 'Original score', note: 'Full-length contemporary dance piece, choreography by Paxton Ricketts and Madoka Kariya. Premiered at Sadler’s Wells, London.', img: 'img/stage-blind-to-the-depths.jpg', credit: 'Photo via Paxton Ricketts' },
      { title: 'The Ritual', year: 2024, role: 'Concept, music, live', note: 'Multisensory CUT_ show using scent, taste and touch to make live music accessible to audiences with a disability. 15 shows across Europe, incl. Sziget and Colors of Ostrava.' },
      { title: 'RE:HUMANIZE', year: 2020, role: 'Composition, live', note: 'Immersive dance show with choreography by Guido Dutilh, music and dancers reacting to each other live.', img: 'img/dance-rehumanize.jpg', yt: 'ydkhITuYsYo' },
      { title: '1/OFF at Amsterdam Fashion Week', year: 2024, role: 'Composition', note: 'Music for the 1/OFF SS’25 show, the opening show of Amsterdam Fashion Week 2024.', img: 'img/stage-fashion-week-1off.jpg', credit: 'Photo: Merel Daantje' },
      { title: 'Switch (NDT)', year: 2019, role: 'Composition', note: 'Music for new work by dancers of Nederlands Dans Theater. Zuiderstrandtheater, Den Haag.', img: 'img/dance-switch-2019.png' },
      { title: 'Switch: On the Move (NDT)', role: 'Composition', note: 'Lucent Danstheater, Den Haag.', img: 'img/dance-switch-on-the-move.png' },
      { title: 'Switch (NDT)', year: 2021, role: 'Composition', note: 'Nederlands Dans Theater.', img: 'img/dance-switch-2021.jpg' },
      { title: 'Momentum: Lost & Found', role: 'Composition', note: 'Contemporary dance.', img: 'img/dance-momentum.jpg' }
    ]
  },

  commercials: {
    show: 6,
    clients: 'Sparkasse · Bupa · UBS · Philips · Volkswagen · Mazda · T-Mobile · Eni · Hunkemöller · Swisscom · TK Maxx · Karwei · Pattex',
    // Werk zonder video. Video erbij? Zet het item met yt: 'videoID' in items hieronder.
    credits: [
      { client: 'Sparkasse', region: 'DE', work: 'Sonic branding & brand music' },
      { client: 'Bupa', region: 'AU', work: 'Sonic branding' },
      { client: 'UBS', region: '', work: 'Ad music, UBS Platform' },
      { client: 'Philips', region: '', work: 'Ad music, Philips Steam' },
      { client: 'T-Mobile', region: 'CZ', work: 'Ad music' }
    ],
    items: [
      { title: 'Eni', yt: 'Cehr2FDxos0' },
      { title: 'Volkswagen ID.3', yt: 'y-o_vdX8XnA' },
      { title: 'Mazda CX-5 #DriveTogether', yt: 'QTVu8Lx4eVw' },
      { title: 'Hunkemöller Sport', yt: 'mrHyotB5eXg' },
      { title: "TK Maxx Xmas 2020: The Lil' Goat", yt: 'MgIigoL1Lro' },
      { title: 'Swisscom Calling', yt: 'kS9fcpjsAWM' },
      { title: 'Karwei: Ontdek jouw diepste woonwensen', yt: 'kT-Kw5S2Lu4' },
      { title: '70 Jahre Grundgesetz', yt: 'XMdO5vbEZDs' },
      { title: 'Pattex One for All Click&Fix', yt: 'rvf2QGQmd88' }
    ]
  },

  // Bovenaan = nieuwste. featured: true = groot bovenaan.
  discography: {
    show: 12,
    items: [
      { title: 'CUT_ - FEMINONE (Album)', year: 2026, featured: true, img: 'img/rel-feminone.jpg', url: 'https://open.spotify.com/album/61LrLjkMhsASNnqVBgwVIO' },
      { title: 'Belle and The Beats - Dancing with The Devil (Album)', year: 2025, featured: true, img: 'img/rel-dancing-with-the-devil.jpg', url: 'https://open.spotify.com/album/7ALCPzdBHYah72NolNYj8F', note: 'Co-written, produced & mixed. The music of The Witch’s Mark.' },
      { title: 'CUT_ - Flip The Switch (Album)', year: 2024, featured: true, img: 'img/rel-flip-the-switch.jpg', url: 'https://open.spotify.com/album/2rOTzM0jRcR5OzJ8dtAFrM' },
      { title: 'CUT_ - Egolove (Album)', img: 'img/rel-egolove.jpg', url: 'https://open.spotify.com/album/5Txm8EeujDX4mcaBtA4ZLJ' },
      { title: 'Belako - Sirene (CUT_ Remix)', img: 'img/rel-belako-sirene.jpg', url: 'https://open.spotify.com/track/0wPCRE762KtctiDsE3CdgO' },
      { title: 'CUT_ - Shostakovich', img: 'img/rel-shostakovich.jpg', url: 'https://www.youtube.com/watch?v=RaZOrgGnDfg' },
      { title: 'CUT_ - The Edge', img: 'img/rel-the-edge.jpg', url: 'https://www.youtube.com/watch?v=uZEA3EQqFDU' },
      { title: 'CUT_ - No Princess', img: 'img/rel-no-princess.jpg', url: 'https://www.youtube.com/watch?v=2GWYZIFrI7w' },
      { title: 'CUT_ - Secret', img: 'img/rel-secret.jpg', url: 'https://www.youtube.com/watch?v=6OM4__gI4io' },
      { title: 'CUT_ - Breathe (The Policy Remix)', img: 'img/rel-the-policy.jpg', url: 'https://open.spotify.com/track/1CcudNqbdSAj5HbpXooL2c' },
      { title: 'CUT_ - Cry', img: 'img/rel-cry.jpg', url: 'https://open.spotify.com/track/2FKmnn5Q9Q8JU9MqtsvF5d' },
      { title: 'CUT_ - Last Night', img: 'img/rel-last-night.jpg', url: 'https://open.spotify.com/track/2ItISvdmueiDlRLlLUC3Mz' },
      { title: 'CUT_ - Out of Touch', year: 2019, img: 'img/rel-small-group-of-individuals.jpg', url: 'https://open.spotify.com/track/3DgjbN7e2gppallutVbat6', note: '80M+ streams · Netflix’s Élite' },
      { title: 'CUT_ - A Small Group of Individuals (Album)', year: 2019, img: 'img/rel-small-group-of-individuals.jpg', url: 'https://open.spotify.com/album/5QQRlQ7JnXy6c7HNDWVibk' },
      { title: 'Ciaran Lavery - Count to Ten (CUT_ Remix)', img: 'img/rel-ciaran-lavery.jpg', url: 'https://open.spotify.com/track/5BsIrgVz9luIhJffCLkXfc' },
      { title: 'Rina Mushonga - Cassiopeia', img: 'img/rel-cassiopeia.jpg', url: 'https://open.spotify.com/track/50MJKQk7ysuXS4HWsSxJZk' },
      { title: 'CUT_ - Blind = Bliss EP', img: 'img/rel-blind-bliss.jpg', url: 'https://open.spotify.com/album/1TtLXuYCUTwrfvi9t4KmJg' },
      { title: 'CUT_ - Electrify', img: 'img/rel-electrify.jpg', url: 'https://open.spotify.com/track/2xo9qUS6eVIwOEssGvm4DJ' },
      { title: 'CUT_ - Undertow', img: 'img/rel-undertow.jpg', url: 'https://open.spotify.com/track/7bCHztWRqcJbz4KbpRjOwb' },
      { title: 'CUT_ - Tune In Tune Out', img: 'img/rel-tune-in-tune-out.jpg', url: 'https://open.spotify.com/track/2jo0lt1pFPWzVpYR3hLSeD' },
      { title: 'Mottron - Lighter (CUT_ Remix)', img: 'img/rel-mottron-lighter.jpg', url: 'https://open.spotify.com/track/1ya1BicSyHG19QTST4wTPC' },
      { title: 'Rina Mushonga - Atalanta (CUT_ Remix)', img: 'img/rel-atalanta.jpg', url: 'https://open.spotify.com/track/130JCfvKpeUw75XymqED5d' },
      { title: 'OIJ - Blinded', img: 'img/rel-oij.jpg', url: 'https://open.spotify.com/track/7wM8fbVSEjWOiUuyZnK4wl' },
      { title: 'OIJ - Believe', img: 'img/rel-oij.jpg', url: 'https://open.spotify.com/track/6hFfkcapHhZsAEYtQTLg1o' },
      { title: 'PYN - The Water EP', img: 'img/rel-pyn-the-water.jpg' },
      { title: 'CUT_ - Chapter I EP', img: 'img/rel-chapter-i.jpg' },
      { title: 'CUT_ - Patterns EP', img: 'img/rel-patterns.jpg' }
    ]
  }
};
