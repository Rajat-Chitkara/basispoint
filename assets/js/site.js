/* The Basis Point — mobile nav toggle. The only JavaScript on the site.
   Every link works without it; only the sub-820px panel needs this. */
(function () {
  var btn = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-links');
  if (!btn || !panel) return;

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.classList.toggle('open', open);
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });

  // Reset state when resizing back to desktop, so the panel can't stay stuck open.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) setOpen(false);
  });
})();
