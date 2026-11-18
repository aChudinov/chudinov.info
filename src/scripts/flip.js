(function(){
  var KEY='chudinov-side';
  var EASE='cubic-bezier(.16,1,.3,1)';
  var DUR=600;
  var TITLES={
    builder:'Alexey Chudinov — full-stack AI architect',
    music:'Alexey Chudinov — banjo, relearning left-handed'
  };
  var stage=document.getElementById('stage');
  var topbar=document.getElementById('topbar');
  var slider=document.getElementById('slider');
  var soulLabel=topbar?topbar.querySelector('.soul'):null;
  var faces={
    builder:stage.querySelector('.face--builder'),
    music:stage.querySelector('.face--music')
  };
  var switches=[].slice.call(document.querySelectorAll('.flip'));
  var animating=false;

  function reduced(){ try{ return matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } }
  function other(side){ return side==='builder'?'music':'builder'; }

  function store(side){ try{ localStorage.setItem(KEY, side); }catch(e){} }
  function read(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }

  // URL reflects the side: #it / #music (internal side keys stay builder/music)
  function hashFor(side){ return side==='music' ? 'music' : 'it'; }
  function updateHash(side){ try{ history.replaceState(null, '', '#'+hashFor(side)); }catch(e){} }

  function syncSwitches(side){
    switches.forEach(function(b){
      b.dataset.side=side;                       // drives knob + label emphasis
      b.setAttribute('aria-pressed', side==='music' ? 'true':'false');
      b.setAttribute('aria-label', side==='builder'
        ? 'Flip to the music side'
        : 'Flip to the IT side');
    });
  }

  // header/brand/title/switches follow the active side (the header itself never moves)
  function updateChrome(side){
    stage.dataset.side=side;
    document.documentElement.dataset.side=side;   // stable backdrop color-morphs in place
    if(topbar) topbar.dataset.side=side;
    if(soulLabel) soulLabel.textContent = side==='music' ? '/ soul.02' : '/ soul.01';
    document.title=TITLES[side];
    syncSwitches(side);
  }

  function clearInline(el){
    ['transition','transform','position','inset','top','overflow','visibility','zIndex','display'].forEach(function(p){
      el.style[p]='';
    });
  }

  function setResting(side){
    Object.keys(faces).forEach(function(name){
      var el=faces[name];
      clearInline(el);
      if(name===side){
        el.classList.add('is-active'); el.classList.remove('is-hidden');
        el.removeAttribute('inert');
      }else{
        el.classList.add('is-hidden'); el.classList.remove('is-active');
        el.setAttribute('inert','');
      }
    });
    updateChrome(side);
  }

  function flip(){
    if(animating) return;
    var current=stage.dataset.side, next=other(current);
    store(next);
    updateHash(next);

    if(reduced()){
      setResting(next);
      window.scrollTo(0,0);
      focusActive(next);
      return;
    }

    animating=true;
    document.body.classList.add('is-flipping');
    var outEl=faces[current], inEl=faces[next];
    var y=window.scrollY||window.pageYOffset||0;

    // clip the slide to the region BELOW the persistent header, which stays put
    var H = topbar ? Math.round(topbar.getBoundingClientRect().height) : 0;
    slider.classList.add('is-flipping');
    slider.style.top = H + 'px';

    [outEl,inEl].forEach(function(el){
      el.classList.remove('is-active','is-hidden');
      el.removeAttribute('inert');
      el.style.position='absolute';
      el.style.inset='0';
      el.style.overflow='auto';
      el.style.visibility='visible';
      el.style.display='block';
    });
    outEl.style.zIndex='1';
    inEl.style.zIndex='2';
    outEl.scrollTop=y;
    inEl.scrollTop=0;
    outEl.style.transform='translateX(0)';
    inEl.style.transform = next==='music' ? 'translateX(100%)' : 'translateX(-100%)';

    // re-theme the header + flip labels/title immediately, toward the destination
    updateChrome(next);

    void inEl.offsetWidth; // reflow

    outEl.style.transition='transform '+DUR+'ms '+EASE;
    inEl.style.transition='transform '+DUR+'ms '+EASE;
    inEl.style.transform='translateX(0)';
    outEl.style.transform = current==='music' ? 'translateX(100%)' : 'translateX(-100%)';

    var done=false;
    function finish(){
      if(done) return; done=true;
      inEl.removeEventListener('transitionend', finish);
      slider.classList.remove('is-flipping');
      slider.style.top='';
      document.body.classList.remove('is-flipping');
      setResting(next);
      window.scrollTo(0,0);
      animating=false;
      focusActive(next);
    }
    inEl.addEventListener('transitionend', finish);
    setTimeout(finish, DUR+160);
  }

  function focusActive(side){
    // only move focus if it was inside the face that just became inert
    var ae=document.activeElement;
    if(ae && faces[other(side)].contains(ae)){
      var btn=faces[side].querySelector('.flip');
      if(btn){ try{ btn.focus({preventScroll:true}); }catch(e){ btn.focus(); } }
    }
  }

  switches.forEach(function(b){ b.addEventListener('click', flip); });

  // ---- initial side: hash wins over localStorage, no animation ----
  function hashSide(){
    var h=(location.hash||'').replace('#','').toLowerCase();
    if(h==='music') return 'music';
    if(h==='it'||h==='builder') return 'builder';
    return null;
  }
  // direct URL (#it/#music) wins; otherwise the last-visited side; otherwise IT
  var initial = hashSide() || read() || 'builder';
  setResting(initial);
  updateHash(initial);   // reflect the resolved side in the URL on load
  window.scrollTo(0,0);

  // react to hash changes (deep-link navigation) without animation
  window.addEventListener('hashchange', function(){
    var s=hashSide();
    if(s && s!==stage.dataset.side && !animating){
      setResting(s); window.scrollTo(0,0);
    }
  });

  // signal the screenshot tool (and trigger hero entrance)
  requestAnimationFrame(function(){
    document.body.classList.add('ready');
    document.documentElement.dataset.ready='1';
  });
})();
