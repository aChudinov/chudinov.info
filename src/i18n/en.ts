// English — the source dictionary. Every translatable string on the site lives here
// under a flat dotted key. Code, identifiers, commit hashes, shell commands, note
// names and musical terms deliberately stay in the templates (they are not prose).
// ru.ts / cs.ts must mirror these keys exactly (enforced with `satisfies` there).
export const en = {
  // ---- document / meta ----
  'meta.title.builder': 'Alexey Chudinov — full-stack AI architect',
  'meta.title.music': 'Alexey Chudinov — banjo, relearning left-handed',
  'meta.description':
    'Alexey Chudinov — full-stack AI architect in Prague, and a 5-string bluegrass banjo player relearning the instrument left-handed.',

  // ---- topbar ----
  'topbar.soul.builder': '/ soul.01',
  'topbar.soul.music': '/ soul.02',
  'topbar.side.it': 'IT',
  'topbar.side.music': 'Music',
  'flip.aria.toMusic': 'Flip to the music side',
  'flip.aria.toIt': 'Flip to the IT side',
  'lang.aria': 'Language',

  // ---- builder · hero ----
  'hero.h1.main': 'AI architect.',
  'hero.h1.q': ' The whole machine — from the browser to the model.',
  'hero.lede':
    '<b>Alexey Chudinov</b>, based in Prague. Years leading front-end and growing into architecture; now I build with AI at the center — agents, retrieval and pipelines, and the guardrails that keep them honest. I care about the whole system, not one layer.',
  'hero.cta.sayHello': 'Say hello',
  'hero.cta.linkedin': 'LinkedIn',

  // ---- builder · terminal ----
  'term.aria': 'Interactive terminal',
  'term.title': 'alexey@chudinov — zsh',
  'term.whoami.out': 'alexey chudinov — ai architect',
  'term.uptime.out': 'up since 2002 — building for the web',
  'term.stack.out': 'front-end, node.js → full-stack → architect → ai systems',
  'term.why': 'why are you here?',
  'term.menu.aria': 'Why are you here? Pick one.',
  'term.menu.hire': 'hire',
  'term.menu.collab': 'collab',
  'term.menu.curious': 'curious',
  'term.menu.banjo': 'banjo',
  'term.resp.hire': 'not job-hunting right now — but always up for a good conversation ↓',
  'term.resp.collab': 'love a good problem — the form is just below ↓',
  'term.resp.curious': 'make yourself at home. scroll on ↓',
  'term.resp.banjo': 'wrong soul — hit MUSIC, top-right ♪',

  // ---- builder · the arc ----
  'arc.label': 'The arc',
  'arc.h': 'One career, committed since 2002.',
  'arc.lede':
    'Not a straight line — it branches and merges. The web, a detour through materials engineering and research, back to the web, and now AI. Every step still compiles into what I build today.',
  'arc.c1.msg': 'first contact — html & javascript',
  'arc.c1.body':
    'Taught myself the web as it existed then — view-source, tables, inline scripts. The spark that never went out.',
  'arc.c2.msg': 'materials engineering at BMSTU',
  'arc.c2.body':
    'Branched off into materials engineering at Bauman Moscow State Technical University — a full detour away from code.',
  'arc.c3.msg': 'senior research engineer · a patent',
  'arc.c3.body':
    'Worked as a senior research engineer and earned a patent. Years of thinking in systems, proofs and tolerances.',
  'arc.c4.msg': 'merge: back to the web',
  'arc.c4.body':
    'Merged the detour back in and returned to web development for good — the research years made me a sharper engineer.',
  'arc.c5.msg': 'second degree — computer science',
  'arc.c5.body':
    "Earned a second degree in computer science at Lomonosov Moscow State University — the country's leading university.",
  'arc.c6.msg': 'engineering at scale',
  'arc.c6.body':
    'Front-end at leading companies, Yandex among them. Learned how interfaces behave under real users and real traffic.',
  'arc.c7.msg': 'new country, higher stakes',
  'arc.c7.body':
    'Moved to the Czech Republic and built in fintech — where correctness, latency and trust are not optional.',
  'arc.c8.msg': 'leading ai development',
  'arc.c8.body':
    'Now I lead AI development at Zenoo — agents, retrieval, pipelines and the guardrails around them.',
  'arc.c9.msg': 'projects of my own',
  'arc.c9.body':
    'A branch that never merges: several side projects I keep running in my own time — always something building.',

  // ---- builder · the machine ----
  'machine.label': 'The machine',
  'machine.h': 'A request has to survive the whole path.',
  'machine.lede':
    'A production AI system is a pipeline, not a prompt. I design every stage of it — and the guardrails between them.',
  'machine.code.aria':
    'A typed AI request pipeline: take a request, then retrieve grounding data, reason with tools, guard with validation and evals, and respond — grounded, traceable and in budget. A comment notes: I design the whole machine, not one layer; where it breaks is usually between the stages.',
  'machine.code.c1': 'grounding data, ranked & scoped',
  'machine.code.c2': 'tools, planning, orchestration',
  'machine.code.c3': 'validation, evals, safe fallbacks',
  'machine.code.c4': 'grounded, traceable, in budget',
  'machine.code.c5': 'I design the whole machine, not one layer —',
  'machine.code.c6': 'where it breaks is usually between the stages.',

  // ---- builder · contact ----
  'contact.label': 'Say hello',
  'contact.h': 'Always glad to talk systems, AI — or banjo.',
  'contact.lede':
    'This is my corner of the web, not a sales pitch. If something here resonates, drop a line — or turn the card over.',
  'contact.form.head': 'compose message',
  'contact.form.headNote': 'all three fields, please',
  'contact.form.send': 'Send message',
  'status.incomplete': 'Please complete the fields above.',
  'status.mailto': 'Opening your email app with the message ready to send…',
  'status.sending': 'Sending…',
  'status.sent': 'Thanks — your message is on its way.',
  'status.errGeneric': 'Something went wrong. Please try again, or email me via LinkedIn.',
  'status.errNetwork': 'Could not reach the server. Please try again in a moment.',
  'contact.mailto.subject': 'chudinov.info — message from ',

  // ---- footers ----
  'footer.site': 'chudinov.info',
  'footer.builder': 'soul.01 — IT',
  'footer.music': 'soul.02 — music',

  // ---- music · header / intro ----
  'music.title.main': 'The musician',
  'music.menuHint': '// pluck a string',
  'music.instr.aria':
    'A stylized close-up of a five-string banjo: steel strings running over a wooden bridge and down to a flat-gray tailpiece on a cream drum head. Pluck a string to pull up a fact.',
  'music.intro':
    'Alongside the code, there has always been music — a big part of my life for as long as I can remember. Bluegrass, and the <span class="mf-hl">5-string banjo</span>.',
  'music.intro.hint': 'pluck a string to pull up a fact →',
  'music.intro.caption': 'on stage — the 5-string, out in front',

  // ---- music · facts ----
  'music.fact0.h': 'history',
  'music.hist.w1': 'age 6',
  'music.hist.t1': 'Classical piano — eight years at the keys.',
  'music.hist.w2': 'then',
  'music.hist.t2': 'A break from music through my teens.',
  'music.hist.w3': 'age 18',
  'music.hist.t3': 'Picked up the 5-string banjo — and never put it down.',
  'music.hist.w4': '2016',
  'music.hist.t4': 'Moved to Czechia for the bluegrass scene — a Czech band, a real community, a stage.',
  'music.hist.w5': '2024',
  'music.hist.t5': 'Focal dystonia turned me left-handed. New hand, same tunes.',
  'music.hist.hint': 'pluck the 5th string to learn more →',
  'music.fact1.h': 'the scene',
  'music.family.body': 'Music runs in the family — my mother on the fiddle, my father on classical guitar. The house was never quiet.',
  'music.family.v1': 'me · at the piano',
  'music.family.v2': 'my father · classical guitar',
  'music.family.soon': 'clip coming soon',
  'music.fact2.h': 'media',
  'music.media.body': 'Videos and pictures that mean something to me — a space I keep filling.',
  'music.media.v1': 'a performance',
  'music.media.v2': 'moments',
  'music.media.soon': 'coming soon',
  'music.scene.body': 'Years in the bluegrass community, kept like a memory box — the bands, the stages, the camps.',
  'music.scene.c1t': 'bands',
  'music.scene.c1b': "the groups I've shared a stage with",
  'music.scene.c2t': 'festivals',
  'music.scene.c2b': 'stages and crowds, summer to summer',
  'music.scene.c3t': 'camps',
  'music.scene.c3b': 'jam camps and workshops',
  'music.scene.c4t': 'projects',
  'music.scene.c4b': 'side projects and collaborations',
  'music.scene.soon': 'full entries coming soon',
  'music.lh.intro': 'So I turned the banjo over and started again — picking with the left hand, fretting with the right. Slower, truer, still the music.',
  'music.lh.chord': 'F major',
  'music.fact2.fb.label': 'fretboard',
  'music.fact2.fb.hand.aria': 'Playing hand',
  'music.fact2.fb.right': 'Right',
  'music.fact2.fb.left': 'Left',
  'music.fact2.fb.aria':
    'A five-string banjo neck diagram showing an F major chord: first string third fret, second string first fret, third string second fret, fourth string third fret; the short fifth string begins at the fifth fret and rings open. The diagram mirrors between right- and left-handed.',
  'music.fact2.caption.left':
    '<b>Left-handed</b> — how I play now. Flip it to see where I started.',
  'music.fact2.caption.right':
    '<b>Right-handed</b> — where I started, before focal dystonia. Flip it back to now.',
  'music.fact3.h': 'dystonia',
  'music.dystonia.body': 'In 2024, focal dystonia quietly closed my right hand on the strings — a task-specific cramp that no amount of practice undoes.',
  'music.dystonia.link': 'how I kept playing → the 5th string',
  'music.fact4.h': 'left-handed',

  // ---- music · da capo + string menu ----
  'music.dacapo.main': 'da capo',
  'music.dacapo.sub': 'D.C. — back to the top',
  'music.dacapo.aria': 'Da capo — scroll back to the top',
  'music.string.aria': 'Pluck string {n} — {title}',
} as const;

export type TranslationKey = keyof typeof en;
