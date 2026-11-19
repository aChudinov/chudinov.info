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
  'term.stack.out': 'front-end → node.js → ai systems',
  'term.why': 'why are you here?',
  'term.menu.aria': 'Why are you here? Pick one.',
  'term.menu.hire': 'hire',
  'term.menu.collab': 'collab',
  'term.menu.curious': 'curious',
  'term.menu.banjo': 'banjo',
  'term.resp.hire': 'open to the right role — say hello below ↓',
  'term.resp.collab': 'love a good problem — the form is just below ↓',
  'term.resp.curious': 'make yourself at home. scroll on ↓',
  'term.resp.banjo': 'wrong soul — hit MUSIC, top-right ♪',

  // ---- builder · the arc ----
  'arc.label': 'The arc',
  'arc.h': 'One career, built downward through the stack.',
  'arc.lede':
    "Each layer taught the next. I didn't jump into AI from the outside — I grew into it from the interface down.",
  'arc.c1.msg': 'the interface',
  'arc.c1.body':
    'Years shipping accessible, fast product UI — systems get judged at the edge a person actually touches.',
  'arc.c2.msg': 'the backend',
  'arc.c2.body':
    'Grew into Node and services — APIs, queues, data flow. Learned how state, latency and failure really behave under load.',
  'arc.c3.msg': 'the whole machine',
  'arc.c3.body':
    'Now I design AI systems end to end — agents, retrieval, pipelines and evals, with guardrails wired in, not bolted on.',

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
    'Right-handed, until <span class="mf-hl">focal dystonia</span> closed that hand on the strings. So I turned the banjo over and started again, left-handed — new hand, same tunes, slower and truer. The relearning isn\'t a footnote. It <span class="mf-hl">is</span> the music now.',
  'music.intro.hint': 'pluck a string to pull up a fact →',

  // ---- music · facts ----
  'music.fact0.h': 'the count',
  'music.fact0.unit': 'left-handed',
  'music.fact0.label': 'Everything I play now, I play on the other side of the instrument.',
  'music.fact1.h': 'progress',
  'music.fact1.sub': "Rebuilding the roll, note by note. Not done — that's rather the point.",
  'music.fact2.h': 'the neck',
  'music.fact2.tab.label': 'tablature',
  'music.fact2.tab.tag': 'forward roll · open G',
  'music.fact2.tab.aria':
    'Five-string banjo tablature: a forward roll in open G over two measures. Strings top to bottom are D, B, G, D and the short fifth string g. The fifth string sounds open throughout; the second measure adds a hammer-on from open to the second fret on the G string.',
  'music.fact2.fb.label': 'fretboard',
  'music.fact2.fb.hand.aria': 'Playing hand',
  'music.fact2.fb.right': 'Right',
  'music.fact2.fb.left': 'Left',
  'music.fact2.fb.aria':
    'A five-string banjo neck diagram. Four long strings run the length of the neck; the short fifth string begins at the fifth fret. One finger is at the second fret of the G string; the other strings ring open. The diagram mirrors between right- and left-handed.',
  'music.fact2.caption.left':
    '<b>Left-handed</b> — how I play now. Flip it to see where I started.',
  'music.fact2.caption.right':
    '<b>Right-handed</b> — where I started, before focal dystonia. Flip it back to now.',
  'music.fact3.h': 'right now',
  'music.fact3.line1': 'now-practicing',
  'music.fact3.line2': 'forward rolls · open G · slow and clean',
  'music.fact3.line3': 'most mornings, before the code',
  'music.fact4.h': 'influences',
  'music.fact4.chip1': 'Scruggs style',
  'music.fact4.chip2': 'the forward roll',
  'music.fact4.chip3': 'open G',
  'music.fact4.chip4': 'bluegrass',
  'music.fact4.chip5': 'one more tune',

  // ---- music · da capo + string menu ----
  'music.dacapo.main': 'da capo',
  'music.dacapo.sub': 'D.C. — back to the top',
  'music.dacapo.aria': 'Da capo — scroll back to the top',
  'music.string.aria': 'Pluck string {n} — {title}',
} as const;

export type TranslationKey = keyof typeof en;
