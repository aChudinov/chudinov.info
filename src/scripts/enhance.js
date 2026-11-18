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
    var subject = encodeURIComponent('chudinov.info — message from ' + v.name);
    var body = encodeURIComponent(v.message + '\n\n— ' + v.name + '\n' + v.email);
    setStatus('Opening your email app with the message ready to send…');
    window.location.href = 'mailto:' + FALLBACK_TO + '?subject=' + subject + '&body=' + body;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('Please complete the fields above.', 'error');
      return;
    }
    var v = values();
    if (v.botcheck) return; // honeypot tripped — silently drop

    if (!ACCESS_KEY) { mailtoFallback(v); return; }

    if (button) button.disabled = true;
    setStatus('Sending…');
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: 'chudinov.info — message from ' + v.name,
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
          setStatus('Thanks — your message is on its way.');
        } else {
          setStatus('Something went wrong. Please try again, or email me via LinkedIn.', 'error');
        }
      })
      .catch(function () {
        setStatus('Could not reach the server. Please try again in a moment.', 'error');
      })
      .finally(function () { if (button) button.disabled = false; });
  });
})();
