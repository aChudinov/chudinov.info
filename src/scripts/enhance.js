// Progressive enhancements for the IT side: reveal-on-scroll + the contact form.

// ---- reveal on scroll (restrained, once per block) ----
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
  els.forEach(function (el) { io.observe(el); });
})();

// ---- contact form ----
// Delivers via Web3Forms (free, no backend; the address lives only in the access
// key, never on the page). Paste the key below and it posts straight to the inbox.
// Until a key is set it falls back to composing an email in the visitor's mail app,
// so the form always works.
(function () {
  var ACCESS_KEY = ''; // <-- paste the Web3Forms access key (registered to the destination inbox)
  var FALLBACK_TO = ['choudalex', 'gmail.com'].join('@'); // interim mailto target; not rendered as text

  // localized copy (window.__I18N__, injected by Base.astro); English fallback
  var I18N = window.__I18N__ || {};
  var STATUS = I18N.status || {
    incomplete: 'Please complete the fields above.',
    mailto: 'Opening your email app with the message ready to send…',
    sending: 'Sending…',
    sent: 'Thanks — your message is on its way.',
    errGeneric: 'Something went wrong. Please try again, or email me via LinkedIn.',
    errNetwork: 'Could not reach the server. Please try again in a moment.'
  };
  var SUBJECT = I18N.mailtoSubject || 'chudinov.info — message from ';

  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var button = form.querySelector('button[type="submit"]');

  function setStatus(msg, state) {
    if (!status) return;
    status.textContent = msg || '';
    if (state) status.setAttribute('data-state', state);
    else status.removeAttribute('data-state');
  }

  function values() {
    return {
      name: form.elements['name'].value.trim(),
      email: form.elements['email'].value.trim(),
      message: form.elements['message'].value.trim(),
      botcheck: form.elements['botcheck'] && form.elements['botcheck'].checked
    };
  }

  function mailtoFallback(v) {
    var subject = encodeURIComponent(SUBJECT + v.name);
    var body = encodeURIComponent(v.message + '\n\n— ' + v.name + '\n' + v.email);
    setStatus(STATUS.mailto);
    window.location.href = 'mailto:' + FALLBACK_TO + '?subject=' + subject + '&body=' + body;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus(STATUS.incomplete, 'error');
      return;
    }
    var v = values();
    if (v.botcheck) return; // honeypot tripped — silently drop

    if (!ACCESS_KEY) { mailtoFallback(v); return; }

    if (button) button.disabled = true;
    setStatus(STATUS.sending);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: SUBJECT + v.name,
        from_name: v.name,
        name: v.name,
        email: v.email,
        message: v.message,
        botcheck: ''
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data && data.success) {
          form.reset();
          setStatus(STATUS.sent);
        } else {
          setStatus(STATUS.errGeneric, 'error');
        }
      })
      .catch(function () {
        setStatus(STATUS.errNetwork, 'error');
      })
      .finally(function () { if (button) button.disabled = false; });
  });
})();

// ---- hero terminal: "why are you here?" selector ----
(function () {
  var menu = document.querySelector('.term-menu');
  var out = document.querySelector('.term-out');
  if (!menu || !out) return;
  var items = [].slice.call(menu.querySelectorAll('.tmi'));
  var RESP = (window.__I18N__ && window.__I18N__.term) || {
    hire:    'open to the right role — say hello below ↓',
    collab:  'love a good problem — the form is just below ↓',
    curious: 'make yourself at home. scroll on ↓',
    banjo:   'wrong soul — hit MUSIC, top-right ♪'
  };

  function render(text) {
    out.textContent = '';
    var ok = document.createElement('span');
    ok.className = 'ok';
    ok.textContent = '→ ' + text;
    var caret = document.createElement('span');
    caret.className = 'caret';
    out.appendChild(ok);
    out.appendChild(document.createTextNode(' '));
    out.appendChild(caret);
  }

  function pick(btn) {
    var k = btn.getAttribute('data-k');
    items.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    btn.setAttribute('aria-pressed', 'true');
    render(RESP[k] || ''); // just prints — no scrolling or navigation
  }
  items.forEach(function (b) { b.addEventListener('click', function () { pick(b); }); });
})();

// ---- in-page anchors (e.g. "Say hello" → #contact) scroll smoothly and
//      do NOT overwrite the #it / #music side in the URL ----
(function () {
  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id || id === 'it' || id === 'music' || id === 'builder') return; // side links: leave alone
    var t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });
})();
