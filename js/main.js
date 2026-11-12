(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const icons = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 9.6c3-1 6.6-.7 9.2.8M8 12.6c2.5-.7 5.2-.4 7.4.8M8.6 15.4c1.9-.5 3.9-.3 5.6.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  };

  // Teksten
  $$('[data-bind]').forEach(el => { el.textContent = SITE[el.dataset.bind]; });
  $$('[data-bind-href]').forEach(el => { el.href = SITE[el.dataset.bindHref]; });
  $('.hero-bg').style.backgroundImage = `url("${SITE.heroImage}")`;
  $('[data-year]').textContent = new Date().getFullYear();

  const socials = `
    <a href="mailto:${SITE.email}" aria-label="Email">${icons.mail}</a>
    <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>
    <a href="${SITE.spotify}" target="_blank" rel="noopener" aria-label="Spotify">${icons.spotify}</a>`;
  $$('[data-socials]').forEach(el => { el.innerHTML = socials; });

  // About
  $('[data-portrait]').src = SITE.portrait;
  $('[data-about]').innerHTML = SITE.about.map(p => `<p>${p}</p>`).join('');

  // Film & TV
  $('[data-film]').innerHTML = SITE.film.map(f => {
    const inner = `<img src="${f.img}" alt="${esc(f.title)} poster" loading="lazy"><figcaption><strong>${esc(f.title)}</strong><span>${esc(f.note)}</span></figcaption>`;
    return f.url
      ? `<figure class="poster"><a href="${f.url}" target="_blank" rel="noopener">${inner}</a></figure>`
      : `<figure class="poster">${inner}</figure>`;
  }).join('');

  // YouTube: eerst alleen een thumbnail, de echte player (youtube-nocookie) laadt pas na een klik.
  // Scheelt veel laadtijd en er worden geen YouTube-cookies gezet zolang niemand klikt.
  const ytCard = (v, big) => `
    <button class="yt${big ? ' yt-big' : ''}" data-yt="${v.yt}" aria-label="Play: ${esc(v.title)}">
      <img src="https://i.ytimg.com/vi/${v.yt}/${big ? 'maxresdefault' : 'hqdefault'}.jpg" alt="" loading="lazy">
      <span class="play" aria-hidden="true"></span>
      <span class="yt-title">${esc(v.title)}</span>
    </button>`;
  $('[data-commercials]').innerHTML = SITE.commercials.map(v => ytCard(v)).join('');
  $('[data-dance-video]').innerHTML = ytCard(SITE.dance.video, true);
  document.addEventListener('click', e => {
    const b = e.target.closest('.yt');
    if (!b) return;
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0`;
    f.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
    f.allowFullscreen = true;
    f.title = b.getAttribute('aria-label');
    const wrap = document.createElement('div');
    wrap.className = b.className + ' playing';
    wrap.appendChild(f);
    b.replaceWith(wrap);
  });
  // Fallback als maxresdefault niet bestaat (YouTube geeft dan een grijs plaatje van 120px)
  $$('.yt img').forEach(i => i.addEventListener('load', () => {
    if (i.naturalWidth <= 120) i.src = i.src.replace('maxresdefault', 'hqdefault');
  }));

  // Dans-posters met lightbox
  $('[data-dance-posters]').innerHTML = SITE.dance.posters.map(p =>
    `<button class="dposter" data-full="${p.img}" aria-label="Enlarge: ${esc(p.title)}"><img src="${p.img}" alt="${esc(p.title)}" loading="lazy"></button>`).join('');
  const lb = $('.lightbox');
  document.addEventListener('click', e => {
    const p = e.target.closest('.dposter');
    if (p) { $('img', lb).src = p.dataset.full; $('img', lb).alt = p.getAttribute('aria-label'); lb.showModal(); }
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'BUTTON') lb.close(); });

  // Discografie
  const cover = (r, cls) => {
    const inner = `<img src="${r.img}" alt="${esc(r.title)}" loading="lazy"><figcaption>${esc(r.title)}</figcaption>`;
    return r.url
      ? `<figure class="${cls}"><a href="${r.url}" target="_blank" rel="noopener">${inner}</a></figure>`
      : `<figure class="${cls}">${inner}</figure>`;
  };
  $('[data-featured]').innerHTML = SITE.discography.filter(r => r.featured).map(r => cover(r, 'release big')).join('');
  $('[data-covers]').innerHTML = SITE.discography.filter(r => !r.featured).map(r => cover(r, 'release')).join('');

  // Contact
  const mail = $('[data-mail]');
  mail.href = 'mailto:' + SITE.email; mail.textContent = SITE.email;
  $('[data-address]').innerHTML = SITE.address.map(esc).join('<br>');

  // Mobiel menu
  const toggle = $('.menu-toggle'), nav = $('#nav');
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  $$('a', nav).forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', false);
  }));

  // Actief menu-item volgt de sectie in beeld
  const links = new Map($$('a', nav).map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const a = links.get(en.target.id); if (a) a.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section').forEach(s => spy.observe(s));

  // Topbar krijgt achtergrond zodra je van de hero af scrolt
  const bar = $('.topbar');
  const onScroll = () => bar.classList.toggle('solid', window.scrollY > window.innerHeight * 0.6);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
