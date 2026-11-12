(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ext = url => url && !url.startsWith('#') ? ' target="_blank" rel="noopener"' : '';

  const icons = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 9.6c3-1 6.6-.7 9.2.8M8 12.6c2.5-.7 5.2-.4 7.4.8M8.6 15.4c1.9-.5 3.9-.3 5.6.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  };

  // Basis
  $$('[data-bind]').forEach(el => { el.textContent = SITE[el.dataset.bind]; });
  $$('[data-bind-href]').forEach(el => { el.href = SITE[el.dataset.bindHref]; });
  $('.hero-bg').style.backgroundImage = `url("${SITE.heroImage}")`;
  $('[data-year]').textContent = new Date().getFullYear();
  $$('[data-socials]').forEach(el => {
    el.innerHTML = `
      <a href="#contact" data-mail-icon aria-label="Email">${icons.mail}</a>
      <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>
      <a href="${SITE.spotify}" target="_blank" rel="noopener" aria-label="Spotify">${icons.spotify}</a>`;
  });

  // Typografische plaat voor items zonder afbeelding
  const textArt = (title, year) => `<div class="text-art"><span>${esc(title)}</span>${year ? `<small>${year}</small>` : ''}</div>`;

  // YouTube: thumbnail eerst, player (youtube-nocookie) pas na een klik
  const ytCard = (v, big) => `
    <button class="yt${big ? ' yt-big' : ''}" data-yt="${v.yt}" aria-label="Play: ${esc(v.title)}">
      <img src="https://i.ytimg.com/vi/${v.yt}/${big ? 'maxresdefault' : 'hqdefault'}.jpg" alt="" loading="lazy">
      <span class="play" aria-hidden="true"></span>
      <span class="yt-title">${esc(v.title)}</span>
    </button>`;

  // Showreel bovenaan
  $('[data-reel]').innerHTML = ytCard(SITE.reel, true);
  // items mogen <em> bevatten voor de grijze toelichting
  $('[data-proof]').innerHTML = SITE.proof.map(c => `
    <a class="proof-col" href="${c.link}">
      <span class="proof-label">${esc(c.label)}</span>
      ${c.items.map(i => `<span class="proof-item">${i}</span>`).join('')}
    </a>`).join('');

  // Kaart voor film en podium
  const card = it => {
    const media = it.yt ? ytCard({ yt: it.yt, title: it.title })
      : it.img ? `<img src="${it.img}" alt="${esc(it.title)}" loading="lazy"${it.pos ? ` style="object-position:${it.pos}"` : ''}>`
      : textArt(it.title, it.year);
    const body = `
      <div class="card-media">${media}</div>
      <div class="card-body">
        <p class="meta">${[it.year, it.role].filter(Boolean).map(esc).join(' · ')}</p>
        <h3>${esc(it.title)}</h3>
        <p>${esc(it.note)}</p>
        ${it.credit ? `<p class="credit">${esc(it.credit)}</p>` : ''}
      </div>`;
    return it.url && !it.yt
      ? `<a class="card" href="${it.url}"${ext(it.url)}>${body}</a>`
      : `<article class="card">${body}</article>`;
  };

  const cover = (r, big) => {
    const media = r.img ? `<img src="${r.img}" alt="${esc(r.title)}" loading="lazy">` : textArt(r.title.replace(/^CUT_ - /, '').replace(/ \(Album\)$/, ''), r.year);
    const inner = `${media}<figcaption>${esc(r.title)}${r.year ? ` <span>${r.year}</span>` : ''}${r.note ? `<small>${esc(r.note)}</small>` : ''}</figcaption>`;
    return r.url ? `<figure class="release${big ? ' big' : ''}"><a href="${r.url}" target="_blank" rel="noopener">${inner}</a></figure>`
                 : `<figure class="release${big ? ' big' : ''}">${inner}</figure>`;
  };

  // Lijst met "Show more"
  function renderList(key, items, render, show) {
    const box = $(`[data-list="${key}"]`);
    box.innerHTML = items.map((it, i) => `<div class="li${i >= show ? ' extra' : ''}">${render(it)}</div>`).join('');
    if (items.length <= show) return;
    const btn = document.createElement('button');
    btn.className = 'more';
    const label = open => open ? 'Show less' : `Show all ${items.length}`;
    btn.textContent = label(false);
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const open = box.classList.toggle('open');
      btn.textContent = label(open);
      btn.setAttribute('aria-expanded', open);
      if (!open) box.closest('section').scrollIntoView({ behavior: 'smooth' });
    });
    box.after(btn);
  }

  $('[data-film-intro]').textContent = SITE.film.intro || '';
  $('[data-film-cta]').textContent = SITE.film.cta || 'Get in touch';
  renderList('film', SITE.film.items, card, SITE.film.show);

  const stageFeatured = SITE.stage.items.filter(i => i.featured);
  $('[data-stage-featured]').innerHTML = stageFeatured.map(it => `
    <article class="feature">
      <div class="feature-media">${it.img ? `<img src="${it.img}" alt="${esc(it.title)}">` : textArt(it.title, it.year)}</div>
      <div class="feature-body">
        <p class="meta">${[it.year, it.role].filter(Boolean).map(esc).join(' · ')}</p>
        <h3>${esc(it.title)}</h3>
        <p>${esc(it.note)}</p>
        ${it.url ? `<a class="button small" href="${it.url}" target="_blank" rel="noopener">Listen to the album</a>` : ''}
      </div>
    </article>`).join('');
  renderList('stage', SITE.stage.items.filter(i => !i.featured), card, SITE.stage.show);

  $('[data-clients]').textContent = SITE.commercials.clients;
  $('[data-credits]').innerHTML = (SITE.commercials.credits || []).map(c => `
    <li><strong>${esc(c.client)}${c.region ? ` <span>${esc(c.region)}</span>` : ''}</strong><em>${esc(c.work)}</em></li>`).join('');
  renderList('commercials', SITE.commercials.items, v => ytCard(v), SITE.commercials.show);

  const disc = SITE.discography.items;
  $('[data-featured]').innerHTML = disc.filter(r => r.featured).map(r => cover(r, true)).join('');
  renderList('discography', disc.filter(r => !r.featured), r => cover(r), SITE.discography.show);

  // YouTube activeren
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
  $$('.yt img').forEach(i => i.addEventListener('load', () => {
    if (i.naturalWidth <= 120) i.src = i.src.replace('maxresdefault', 'hqdefault');
  }));

  // Lightbox voor posters
  const lb = $('.lightbox');
  document.addEventListener('click', e => {
    const img = e.target.closest('article.card .card-media img');
    if (img) { $('img', lb).src = img.src; $('img', lb).alt = img.alt; lb.showModal(); }
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'BUTTON') lb.close(); });

  // About & contact
  $('[data-portrait]').src = SITE.portrait;
  $('[data-about]').innerHTML = SITE.about.map(p => `<p>${p}</p>`).join('');
  // E-mailadres staat nergens als tekst of link in de pagina; het wordt pas bij een klik samengesteld (minder spam).
  const openMail = e => { e.preventDefault(); location.href = 'mailto:' + SITE.email.join('@'); };
  $$('[data-mail], [data-mail-icon]').forEach(el => el.addEventListener('click', openMail));
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

  // Actief menu-item
  const links = new Map($$('a', nav).map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const a = links.get(en.target.id); if (a) a.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section').forEach(s => spy.observe(s));

  const bar = $('.topbar');
  const onScroll = () => bar.classList.toggle('solid', window.scrollY > 120);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
