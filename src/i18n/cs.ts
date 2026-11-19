// Czech. Prose is translated; code, identifiers, shell commands, commit hashes,
// note names and musical terms (forward roll, open G, da capo, Scruggs style…) stay
// as in English. The name stays Latin ("Alexey Chudinov"), as in Czech usage.
import type { TranslationKey } from './en';

export const cs = {
  // ---- document / meta ----
  'meta.title.builder': 'Alexey Chudinov — full-stack AI architekt',
  'meta.title.music': 'Alexey Chudinov — banjo, znovu se učím levou rukou',
  'meta.description':
    'Alexey Chudinov — full-stack AI architekt v Praze a hráč na pětistrunné bluegrassové banjo, který se nástroj učí znovu levou rukou.',

  // ---- topbar ----
  'topbar.soul.builder': '/ soul.01',
  'topbar.soul.music': '/ soul.02',
  'topbar.side.it': 'IT',
  'topbar.side.music': 'Hudba',
  'flip.aria.toMusic': 'Přepnout na hudební stranu',
  'flip.aria.toIt': 'Přepnout na IT stranu',
  'lang.aria': 'Jazyk',

  // ---- builder · hero ----
  'hero.h1.main': 'AI architekt.',
  'hero.h1.q': ' Celý stroj — od prohlížeče až po model.',
  'hero.lede':
    '<b>Alexey Chudinov</b>, žiju v Praze. Roky jsem vedl front-end a rostl směrem k architektuře; teď stavím systémy s AI v centru — agenti, retrieval a pipeliny a mantinely, které je drží poctivé. Zajímá mě celý systém, ne jedna vrstva.',
  'hero.cta.sayHello': 'Napsat',
  'hero.cta.linkedin': 'LinkedIn',

  // ---- builder · terminal ----
  'term.aria': 'Interaktivní terminál',
  'term.title': 'alexey@chudinov — zsh',
  'term.whoami.out': 'alexey chudinov — ai architekt',
  'term.uptime.out': 'běžím od roku 2002 — dělám web',
  'term.stack.out': 'front-end, node.js → full-stack → architekt → ai systémy',
  'term.why': 'proč jsi tady?',
  'term.menu.aria': 'Proč jsi tady? Vyber jednu možnost.',
  'term.menu.hire': 'najmout',
  'term.menu.collab': 'spolupráce',
  'term.menu.curious': 'zvědavost',
  'term.menu.banjo': 'banjo',
  'term.resp.hire': 'teď práci nehledám — ale dobré konverzaci se nebráním ↓',
  'term.resp.collab': 'mám rád dobrý problém — formulář je hned níž ↓',
  'term.resp.curious': 'udělej si pohodlí. scrolluj dál ↓',
  'term.resp.banjo': 'špatná duše — klikni na HUDBA vpravo nahoře ♪',

  // ---- builder · the arc ----
  'arc.label': 'Dráha',
  'arc.h': 'Jedna kariéra, commity od roku 2002.',
  'arc.lede':
    'Ne přímka — větví se a merguje. Web, oklika přes materiálové inženýrství a výzkum, zpátky k webu — a teď AI. Každý krok se pořád kompiluje do toho, co dělám dnes.',
  'arc.c1.msg': 'první kontakt — html a javascript',
  'arc.c1.body':
    'Web jsem se naučil sám, jaký tehdy byl — view-source, tabulky, inline skripty. Jiskra, která nikdy úplně nezhasla.',
  'arc.c2.msg': 'materiálové inženýrství na BMSTU',
  'arc.c2.body':
    'Odbočil jsem do vlastní větve — materiálové inženýrství na Baumanově moskevské státní technické univerzitě, úplná oklika od kódu.',
  'arc.c3.msg': 'seniorní výzkumný inženýr · patent',
  'arc.c3.body':
    'Pracoval jsem jako seniorní výzkumný inženýr a získal patent. Roky myšlení v systémech, důkazech a tolerancích.',
  'arc.c4.msg': 'merge: zpátky k webu',
  'arc.c4.body':
    'Zmergoval jsem tu okliku zpět a vrátil se k webovému vývoji natrvalo — roky výzkumu ze mě udělaly ostřejšího inženýra.',
  'arc.c5.msg': 'druhý titul — informatika',
  'arc.c5.body':
    'Získal jsem druhý titul z informatiky na Lomonosovově moskevské státní univerzitě — přední univerzitě země.',
  'arc.c6.msg': 'inženýrství ve velkém',
  'arc.c6.body':
    'Front-end v předních firmách, mezi nimi Yandex. Naučil jsem se, jak se rozhraní chovají při reálných uživatelích a reálném provozu.',
  'arc.c7.msg': 'nová země, vyšší sázky',
  'arc.c7.body':
    'Přestěhoval jsem se do Česka a stavěl ve fintechu — kde správnost, latence a důvěra nejsou volitelné.',
  'arc.c8.msg': 'v čele vývoje AI',
  'arc.c8.body':
    'Teď vedu vývoj AI v Zenoo — agenti, retrieval, pipeliny a mantinely kolem nich.',
  'arc.c9.msg': 'vlastní projekty',
  'arc.c9.body':
    'Větev, která se nikdy nemerguje: pár vlastních projektů, které si vedu ve volném čase — pořád se něco staví.',

  // ---- builder · the machine ----
  'machine.label': 'Stroj',
  'machine.h': 'Požadavek musí přežít celou cestu.',
  'machine.lede':
    'Produkční AI systém je pipeline, ne prompt. Navrhuji každou jeho fázi — a mantinely mezi nimi.',
  'machine.code.aria':
    'Typovaná pipeline AI požadavku: vezmi požadavek, pak načti opěrná data, uvažuj s nástroji, ohlídej validací a evaly a odpověz — podložené, dohledatelné a v rozpočtu. Komentář poznamenává: navrhuji celý stroj, ne jednu vrstvu; láme se to obvykle mezi fázemi.',
  'machine.code.c1': 'opěrná data, seřazená a ohraničená',
  'machine.code.c2': 'nástroje, plánování, orchestrace',
  'machine.code.c3': 'validace, evaly, bezpečné fallbacky',
  'machine.code.c4': 'podložené, dohledatelné, v rozpočtu',
  'machine.code.c5': 'navrhuji celý stroj, ne jednu vrstvu —',
  'machine.code.c6': 'láme se to obvykle mezi fázemi.',

  // ---- builder · contact ----
  'contact.label': 'Napiš',
  'contact.h': 'Vždy rád pokecám o systémech, AI — nebo banju.',
  'contact.lede':
    'Tohle je můj kout webu, ne prodejní stránka. Jestli tě tu něco oslovilo, napiš pár řádků — nebo otoč kartu.',
  'contact.form.head': 'napsat zprávu',
  'contact.form.headNote': 'všechna tři pole, prosím',
  'contact.form.send': 'Odeslat',
  'status.incomplete': 'Vyplň prosím pole výše.',
  'status.mailto': 'Otevírám tvůj e-mailový klient s připravenou zprávou…',
  'status.sending': 'Odesílám…',
  'status.sent': 'Díky — zpráva je na cestě.',
  'status.errGeneric': 'Něco se pokazilo. Zkus to prosím znovu, nebo mi napiš přes LinkedIn.',
  'status.errNetwork': 'Nepodařilo se spojit se serverem. Zkus to prosím za chvíli.',
  'contact.mailto.subject': 'chudinov.info — zpráva od ',

  // ---- footers ----
  'footer.site': 'chudinov.info',
  'footer.builder': 'soul.01 — IT',
  'footer.music': 'soul.02 — hudba',

  // ---- music · header / intro ----
  'music.title.main': 'Hudebník',
  'music.menuHint': '// drnkni do struny',
  'music.instr.aria':
    'Stylizovaný detail pětistrunného banja: ocelové struny vedou přes dřevěnou kobylku dolů k plochému šedému strunníku na krémové bláně. Drnkni do struny a vyvoláš fakt.',
  'music.intro':
    'Pravou rukou — dokud mi <span class="mf-hl">fokální dystonie</span> tu ruku na strunách nesevřela. Tak jsem banjo otočil a začal znovu, levou — nová ruka, stejné melodie, pomaleji a opravdověji. To přeučování není poznámka pod čarou. Teď <span class="mf-hl">je</span> tou hudbou.',
  'music.intro.hint': 'drnkni do struny a vyvoláš fakt →',

  // ---- music · facts ----
  'music.fact0.h': 'počet',
  'music.fact0.unit': 'levou rukou',
  'music.fact0.label': 'Všechno, co teď hraju, hraju z druhé strany nástroje.',
  'music.fact1.h': 'pokrok',
  'music.fact1.sub': 'Skládám roll znovu, nota po notě. Není hotovo — o to právě jde.',
  'music.fact2.h': 'krk',
  'music.fact2.tab.label': 'tabulatura',
  'music.fact2.tab.tag': 'forward roll · open G',
  'music.fact2.tab.aria':
    'Tabulatura pro pětistrunné banjo: forward roll v ladění open G přes dva takty. Struny shora dolů jsou D, B, G, D a krátká pátá struna g. Pátá struna zní celou dobu naprázdno; druhý takt přidává hammer-on z prázdné na druhý pražec struny G.',
  'music.fact2.fb.label': 'hmatník',
  'music.fact2.fb.hand.aria': 'Hrající ruka',
  'music.fact2.fb.right': 'Pravá',
  'music.fact2.fb.left': 'Levá',
  'music.fact2.fb.aria':
    'Schéma krku pětistrunného banja. Čtyři dlouhé struny vedou po celé délce krku; krátká pátá struna začíná na pátém pražci. Jeden prst je na druhém pražci struny G; ostatní struny zní naprázdno. Schéma se zrcadlí mezi pravou a levou rukou.',
  'music.fact2.caption.left':
    '<b>Levou rukou</b> — jak hraju teď. Přepni a uvidíš, kde jsem začínal.',
  'music.fact2.caption.right':
    '<b>Pravou rukou</b> — kde jsem začínal, před fokální dystonií. Přepni zpátky do teď.',
  'music.fact3.h': 'právě teď',
  'music.fact3.line1': 'now-practicing',
  'music.fact3.line2': 'forward rolls · open G · pomalu a čistě',
  'music.fact3.line3': 'skoro každé ráno, před kódem',
  'music.fact4.h': 'vlivy',
  'music.fact4.chip1': 'Scruggs style',
  'music.fact4.chip2': 'forward roll',
  'music.fact4.chip3': 'open G',
  'music.fact4.chip4': 'bluegrass',
  'music.fact4.chip5': 'ještě jedna melodie',

  // ---- music · da capo + string menu ----
  'music.dacapo.main': 'da capo',
  'music.dacapo.sub': 'D.C. — nahoru',
  'music.dacapo.aria': 'Da capo — posunout nahoru',
  'music.string.aria': 'Drnkni do struny {n} — {title}',
} satisfies Record<TranslationKey, string>;
