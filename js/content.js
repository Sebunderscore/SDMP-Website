/*
  ALLE CONTENT VAN DE SITE STAAT IN DIT BESTAND.
  Iets toevoegen of aanpassen = hier een regel kopiëren en wijzigen. Geen database, geen CMS nodig.

  Afbeeldingen: img('...') wijst nu nog naar de Squarespace-CDN.
  Draai eenmalig ./download-images.sh, dan staan ze lokaal in /img en wordt USE_LOCAL automatisch true.
*/
const USE_LOCAL = false;
const CDN = 'https://images.squarespace-cdn.com/content/v1/5e6cfe4cba0df96243ce0859/';
function img(path, w = 1000) {
  if (USE_LOCAL) {
    const [id, file] = path.split('/');
    const ext = (file.match(/\.(jpe?g|png|webp)$/i) || ['.jpg'])[0].toLowerCase();
    return 'img/' + id + ext;
  }
  return CDN + path + '?format=' + w + 'w';
}

const SITE = {
  name: 'Sebastiaan Dutilh',
  tagline: 'Music Producer / Composer / Sound Designer',
  motto: 'Pushing buttons since 1988',
  email: 'sebastiaandutilh@gmail.com',
  instagram: 'https://instagram.com/insebtion_',
  spotify: 'https://open.spotify.com/playlist/26kbtVySStQBaPMdtXrE3F',
  address: ['Sebastiaan Dutilh Music Production', 'Palmgracht 74D', '1015 HN Amsterdam'],

  heroImage: img('1584202784630-DKFZZBMG8YCLZJRW8SSV/CUT_-19+Small.jpg', 2500),
  portrait: img('b4835af7-d080-4898-86cc-ff702451f1a3/Schermafbeelding+2022-01-09+om+20.26.31.jpg', 500),

  about: [
    'Sebastiaan Dutilh a.k.a. Seb, music producer, composer & sound designer, and founding member of the electro-pop duo <a href="http://cutunderscore.com/" target="_blank" rel="noopener">CUT_</a>.',
    'What drives me is the search for new sounds and textures, a constant experiment in conveying emotion through sound. Next to my main project, the touring electro-pop live act CUT_, I have been using these experiments in compositions for contemporary dance, in collaboration with various dancers and choreographers. My main instrument is my self-built modular synthesizer.',
    'My musical career started as a rock/metal guitarist playing in several bands. Without the budget to record in a professional studio, I took matters into my own hands and started recording and producing from home, with little recording knowledge but a mind full of curiosity and ideas. That sparked my interest in exploring and experimenting with sound, and that same drive still gets me out of bed and into the studio every morning.',
    'Since then I have seen many sides of the music business: making music for film, TV and commercials, touring through Europe with CUT_ and negotiating deals with music industry people.',
    'If you want to know more, or just want to geek out about synthesizers and other gear, send me an email or drop by my studio in the centre of Amsterdam.'
  ],

  film: [
    { title: 'De Wilde Stad', note: 'Custom music for the international version of “De Wilde Stad” (The Wild City).', img: img('1589275372080-K0O9ADLEGJETZY6DY8FX/productphoto-dws2.jpg', 750), url: 'https://youtu.be/p9Z8tX6YI3w' },
    { title: 'Élite (Netflix)', note: '“CUT_ - Out of Touch” featured in two episodes of the Netflix series Élite.', img: img('1589275882962-EW9HA475UMN3L13G4NDD/elite+poster.jpg', 750), url: 'https://youtu.be/9NQh9ovnDe0' },
    { title: 'Anne+', note: 'Music featured in the series Anne+.', img: img('0485a543-499d-483b-aed5-0e09f48ea681/feb2020anneposter2.jpg', 750), url: '' },
    { title: 'Anne+ season 2', note: 'Music featured in season 2 of Anne+.', img: img('92cf181e-44b6-4a13-b514-5ee73238562d/feb2020anneposter.png', 750), url: '' }
  ],

  commercials: [
    { title: 'Eni', yt: 'Cehr2FDxos0' },
    { title: 'Mazda CX-5 #DriveTogether', yt: 'QTVu8Lx4eVw' },
    { title: 'Hunkemöller Sport', yt: 'mrHyotB5eXg' },
    { title: "TK Maxx Xmas 2020: The Lil' Goat", yt: 'MgIigoL1Lro' },
    { title: 'Volkswagen ID.3', yt: 'y-o_vdX8XnA' },
    { title: 'Karwei: Ontdek jouw diepste woonwensen', yt: 'kT-Kw5S2Lu4' },
    { title: '70 Jahre Grundgesetz', yt: 'XMdO5vbEZDs' },
    { title: 'Pattex One for All Click&Fix', yt: 'rvf2QGQmd88' },
    { title: 'Swisscom Calling', yt: 'kS9fcpjsAWM' }
  ],

  dance: {
    video: { title: 'RE:HUMANIZE', yt: 'ydkhITuYsYo' },
    posters: [
      { title: 'Momentum: Lost & Found', img: img('1654179588853-R0DYR0ZAOAGBHWO8ZC7J/LogoFont-4-Stretched-3-2.jpg', 750) },
      { title: 'RE:HUMANIZE', img: img('1654179924038-WMR4K1ZGAM7CO6Y2CWRS/re-humanize+%5Bzonder+tijd%5D.jpg', 750) },
      { title: 'Switch: On the Move (NDT)', img: img('1654179605227-EKZQ5LDF133DNOEG2W0X/Screenshot+2022-06-02+at+12.02.33.png', 750) },
      { title: 'Switch (NDT, 2019)', img: img('1654179600291-8I6KIOAVLWY5DFU07A6R/Screenshot+2022-06-02+at+12.01.20.png', 750) },
      { title: 'Switch (NDT, 2021)', img: img('1654179593744-O34FK53NE312VHM2LOYZ/SWITCH-Poster-update2021-update-2021-810x1440.jpg', 750) }
    ]
  },

  // Bovenaan de lijst = nieuwste. featured: true = groot getoond bovenaan de sectie.
  discography: [
    { title: 'CUT_ - Egolove (Album)', img: img('69a245a2-ada6-44d6-b63e-5c30c6ba82a8/EGOLOVE+album+artwork+final+small.jpg', 1000), url: 'https://open.spotify.com/album/5Txm8EeujDX4mcaBtA4ZLJ', featured: true },
    { title: 'Belako - Sirene (CUT_ Remix)', img: img('6afc1b28-14d4-4d31-b673-3775006084e6/ab67616d0000b273b20f79de429759fb4ca6d1d7.jpg', 1000), url: 'https://open.spotify.com/track/0wPCRE762KtctiDsE3CdgO', featured: true },
    { title: 'CUT_ - Shostakovich', img: img('1654178508137-49PCDFBTYKP0MOCAE5BX/Shostakovich%2Bartwork%2B3kx3k.jpg', 600), url: 'https://www.youtube.com/watch?v=RaZOrgGnDfg' },
    { title: 'CUT_ - The Edge', img: img('1654178509571-GB5DJV7I9E532NGL4XC5/The%2BEdge%2Balternatief%2Bartwork%2B3kx3k.jpg', 600), url: 'https://www.youtube.com/watch?v=uZEA3EQqFDU' },
    { title: 'CUT_ - No Princess', img: img('1654178511487-123HGORRWO2PRKANML3S/No%2BPrincess%2BCover%2BArt%2B3000x3000.jpg', 600), url: 'https://www.youtube.com/watch?v=2GWYZIFrI7w' },
    { title: 'CUT_ - Secret', img: img('1654178506187-Z9B1OEIEQTNNEK1ER5DZ/FINAL%2Bartwork%2BSecret%2B3000x3000.jpg', 600), url: 'https://www.youtube.com/watch?v=6OM4__gI4io' },
    { title: 'The Policy', img: img('1654180928272-L9UMN8O2BALQDZMOGB1W/ab67616d0000b273b30e4f0e81c7c2a034d61f92.jpg', 600), url: 'https://open.spotify.com/track/1CcudNqbdSAj5HbpXooL2c' },
    { title: 'CUT_ - Last Night', img: img('1601473282404-TIVLIY8CN4CWQH2EHXDF/FINAL+Artwork+Last+Night+1000x1000.jpg', 600), url: 'https://open.spotify.com/track/2ItISvdmueiDlRLlLUC3Mz' },
    { title: 'CUT_ - Cry', img: img('1601473307896-HKYM9BM0R31A5PWAMJUJ/FINAL+Artwork+Cry+%26+Last+Night+3000x3000.jpg', 600), url: 'https://open.spotify.com/track/2FKmnn5Q9Q8JU9MqtsvF5d' },
    { title: 'Ciaran Lavery - Count to Ten (CUT_ Remix)', img: img('1601561442367-LDKON8G8TG34LLQCMZ4V/STXaKNsb.jpg', 600), url: 'https://open.spotify.com/track/5BsIrgVz9luIhJffCLkXfc' },
    { title: 'CUT_ - A Small Group of Individuals (Album)', img: img('1601561437616-RZ3SIOPOUGXU1OV1KTU8/BLANCO-3.jpg', 600), url: 'https://open.spotify.com/album/5QQRlQ7JnXy6c7HNDWVibk' },
    { title: 'Rina Mushonga - Cassiopeia', img: img('1589184136906-5XIYHTVS7V6WPVR15TPI/artworks-000609225115-m9dst6-t500x500.jpg', 500), url: 'https://open.spotify.com/track/50MJKQk7ysuXS4HWsSxJZk' },
    { title: 'CUT_ - Blind = Bliss EP', img: img('1589097955533-T0NIORVZ0TYTCBBIK0MH/SQ+BLIND+%3D+BLISS.jpg', 600), url: 'https://open.spotify.com/album/1TtLXuYCUTwrfvi9t4KmJg' },
    { title: 'CUT_ - Electrify', img: img('1589097922222-651PXT1M0I7U8F31JNI9/cut_Sebas-3000x3000.jpg', 600), url: 'https://open.spotify.com/track/2xo9qUS6eVIwOEssGvm4DJ' },
    { title: 'CUT_ - Undertow', img: img('1589097809412-7JVQHYDV8ZL626CPOZY7/cut_single-02-3000px.jpg', 600), url: 'https://open.spotify.com/track/7bCHztWRqcJbz4KbpRjOwb' },
    { title: 'CUT_ - Tune In Tune Out', img: img('1589097780704-YFJ5BNRBT1E0ITOL5BML/Cut_final_01-3000px.jpg', 600), url: 'https://open.spotify.com/track/2jo0lt1pFPWzVpYR3hLSeD' },
    { title: 'Mottron - Lighter (CUT_ Remix)', img: img('1601899119226-TUQHAPRVAQGY4IVJDDM3/Screen%2BShot%2B2020-05-11%2Bat%2B10.09.11.jpg', 600), url: 'https://open.spotify.com/track/1ya1BicSyHG19QTST4wTPC' },
    { title: 'Rina Mushonga - Atalanta (CUT_ Remix)', img: img('1589184210407-GZDY0OEG3PTVXILROV53/artworks-000214423624-lwdhha-t500x500.jpg', 500), url: 'https://open.spotify.com/track/130JCfvKpeUw75XymqED5d' },
    { title: 'OIJ - Blinded', img: img('1601561443061-ZTFWA5OHOQX7FR9PKZU5/OIJ+Artwork.jpg', 600), url: 'https://open.spotify.com/track/7wM8fbVSEjWOiUuyZnK4wl' },
    { title: 'OIJ - Believe', img: img('1601561443061-ZTFWA5OHOQX7FR9PKZU5/OIJ+Artwork.jpg', 600), url: 'https://open.spotify.com/track/6hFfkcapHhZsAEYtQTLg1o' },
    { title: 'PYN - The Water EP', img: img('1589184067364-QPFKP0VL7J7YCPM3QQSF/Screen%2BShot%2B2020-05-11%2Bat%2B09.57.48.jpg', 600), url: '' },
    { title: 'CUT_ - Chapter I EP', img: img('1589097672563-R53LDPFAKPNGX2T09JD1/3_CUT_I_COVER_FRONT_ORIGINAL.jpg', 600), url: '' },
    { title: 'CUT_ - Patterns EP', img: img('1589097664826-R0OPHQHOV3TMOMFR1U6V/CUT_+PATTERNS_COVER_FRONT_SQUARE.jpg', 600), url: '' }
  ]
};
