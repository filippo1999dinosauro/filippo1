// Cal Soci — minimal interactions
// Scroll-state nav, mobile drawer, scroll-reveal, active menu-tab, year.
(() => {
  const $  = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  // 1) Year stamp
  $$('#year').forEach(el => el.textContent = new Date().getFullYear());

  // 2) Nav shrink on scroll
  const nav = $('#nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 14);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 3) Mobile drawer
  const drawer = $('#drawer');
  const toggle = $('.nav__toggle');
  const closer = $('.drawer__close');
  const openDrawer  = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  if (toggle && drawer) toggle.addEventListener('click', openDrawer);
  if (closer) closer.addEventListener('click', closeDrawer);
  if (drawer) $$('.drawer__nav a, .drawer__meta a', drawer).forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // 4) Scroll reveal
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  // 5) Active state for menu tabs (on menu page)
  const tabs = $$('.menu-tabs a');
  const sections = tabs
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const setActive = id => {
      tabs.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
    };
    const spy = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));

    // Smooth scroll with a little offset for sticky tabs + fixed nav
    tabs.forEach(a => {
      a.addEventListener('click', ev => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        ev.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  }
})();
