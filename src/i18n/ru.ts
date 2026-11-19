// Russian. Prose is translated; code, identifiers, shell commands, commit hashes,
// note names and musical terms (forward roll, open G, da capo, Scruggs style…) stay
// as in English. In prose the name is Cyrillic («Алексей Чудинов»); the topbar
// wordmark stays Latin (it lives in the template, not here).
import type { TranslationKey } from './en';

export const ru = {
  // ---- document / meta ----
  'meta.title.builder': 'Алексей Чудинов — full-stack AI-архитектор',
  'meta.title.music': 'Алексей Чудинов — банджо, учусь заново левой рукой',
  'meta.description':
    'Алексей Чудинов — full-stack AI-архитектор из Праги и банджист-блюграссник на 5-струнном банджо, который заново осваивает инструмент левой рукой.',

  // ---- topbar ----
  'topbar.soul.builder': '/ soul.01',
  'topbar.soul.music': '/ soul.02',
  'topbar.side.it': 'IT',
  'topbar.side.music': 'Музыка',
  'flip.aria.toMusic': 'Перейти на музыкальную сторону',
  'flip.aria.toIt': 'Перейти на IT-сторону',
  'lang.aria': 'Язык',

  // ---- builder · hero ----
  'hero.h1.main': 'AI-архитектор.',
  'hero.h1.q': ' Вся машина — от браузера до модели.',
  'hero.lede':
    '<b>Алексей Чудинов</b>, живу в Праге. Годы вёл фронтенд и рос в сторону архитектуры; теперь строю системы с ИИ в центре — агенты, retrieval и пайплайны, и защитные механизмы, которые держат их честными. Мне важна вся система целиком, а не один слой.',
  'hero.cta.sayHello': 'Написать',
  'hero.cta.linkedin': 'LinkedIn',

  // ---- builder · terminal ----
  'term.aria': 'Интерактивный терминал',
  'term.title': 'alexey@chudinov — zsh',
  'term.whoami.out': 'алексей чудинов — ai-архитектор',
  'term.stack.out': 'front-end → node.js → ai-системы',
  'term.why': 'зачем ты здесь?',
  'term.menu.aria': 'Зачем ты здесь? Выбери один вариант.',
  'term.menu.hire': 'нанять',
  'term.menu.collab': 'вместе',
  'term.menu.curious': 'интересно',
  'term.menu.banjo': 'банджо',
  'term.resp.hire': 'открыт к правильной роли — напиши ниже ↓',
  'term.resp.collab': 'люблю хорошую задачу — форма сразу ниже ↓',
  'term.resp.curious': 'чувствуй себя как дома. листай дальше ↓',
  'term.resp.banjo': 'не та душа — жми МУЗЫКА справа вверху ♪',

  // ---- builder · the arc ----
  'arc.label': 'Траектория',
  'arc.h': 'Одна карьера, выстроенная вниз по стеку.',
  'arc.lede':
    'Каждый слой учил следующему. Я не пришёл в ИИ со стороны — я дорос до него сверху вниз, от интерфейса.',
  'arc.c1.msg': 'интерфейс',
  'arc.c1.body':
    'Годы доступного, быстрого продуктового UI — систему судят по краю, которого реально касается человек.',
  'arc.c2.msg': 'бэкенд',
  'arc.c2.body':
    'Дорос до Node и сервисов — API, очереди, потоки данных. Понял, как состояние, задержки и сбои ведут себя под нагрузкой.',
  'arc.c3.msg': 'вся машина',
  'arc.c3.body':
    'Теперь проектирую AI-системы целиком — агенты, retrieval, пайплайны и оценки, с ограничителями, вшитыми внутрь, а не прикрученными сверху.',

  // ---- builder · the machine ----
  'machine.label': 'Машина',
  'machine.h': 'Запрос должен пережить весь путь.',
  'machine.lede':
    'Боевая AI-система — это пайплайн, а не промпт. Я проектирую каждый его этап — и ограничители между ними.',
  'machine.code.aria':
    'Типизированный пайплайн AI-запроса: принять запрос, затем получить опорные данные, рассуждать с инструментами, проверить валидацией и оценками и ответить — обоснованно, прослеживаемо и в рамках бюджета. Комментарий отмечает: я проектирую всю машину, а не один слой; ломается обычно между этапами.',
  'machine.code.c1': 'опорные данные, ранжир и скоуп',
  'machine.code.c2': 'инструменты, планирование, оркестрация',
  'machine.code.c3': 'валидация, оценки, безопасные фолбэки',
  'machine.code.c4': 'обоснованно, прослеживаемо, в бюджете',
  'machine.code.c5': 'я проектирую всю машину, а не один слой —',
  'machine.code.c6': 'ломается обычно между этапами.',

  // ---- builder · contact ----
  'contact.label': 'Напиши',
  'contact.h': 'Всегда рад поговорить о системах, ИИ — или банджо.',
  'contact.lede':
    'Это мой уголок в сети, а не продающая страница. Если что-то откликнулось — напиши пару строк, или переверни карточку.',
  'contact.form.head': 'написать сообщение',
  'contact.form.headNote': 'все три поля, пожалуйста',
  'contact.form.send': 'Отправить',
  'status.incomplete': 'Пожалуйста, заполни поля выше.',
  'status.mailto': 'Открываю почтовое приложение с готовым сообщением…',
  'status.sending': 'Отправляю…',
  'status.sent': 'Спасибо — сообщение в пути.',
  'status.errGeneric': 'Что-то пошло не так. Попробуй ещё раз или напиши мне через LinkedIn.',
  'status.errNetwork': 'Не удалось связаться с сервером. Попробуй через мгновение.',
  'contact.mailto.subject': 'chudinov.info — сообщение от ',

  // ---- footers ----
  'footer.site': 'chudinov.info',
  'footer.builder': 'soul.01 — IT',
  'footer.music': 'soul.02 — музыка',

  // ---- music · header / intro ----
  'music.title.main': 'Музыкант',
  'music.menuHint': '// дёрни струну',
  'music.instr.aria':
    'Стилизованный крупный план пятиструнного банджо: стальные струны идут через деревянный бридж вниз к плоскому серому струнодержателю на кремовой мембране. Дёрни струну, чтобы открыть факт.',
  'music.intro':
    'Правой рукой — пока <span class="mf-hl">фокальная дистония</span> не свела эту руку на струнах. Тогда я перевернул банджо и начал заново, левой — новая рука, те же мелодии, медленнее и честнее. Переучивание — не сноска. Теперь это <span class="mf-hl">и есть</span> музыка.',
  'music.intro.hint': 'дёрни струну, чтобы открыть факт →',

  // ---- music · facts ----
  'music.fact0.h': 'счёт',
  'music.fact0.unit': 'левой рукой',
  'music.fact0.label': 'Всё, что я играю сейчас, я играю с другой стороны инструмента.',
  'music.fact1.h': 'прогресс',
  'music.fact1.sub': 'Собираю ролл заново, нота за нотой. Не закончено — в этом, пожалуй, и смысл.',
  'music.fact2.h': 'гриф',
  'music.fact2.tab.label': 'табулатура',
  'music.fact2.tab.tag': 'forward roll · open G',
  'music.fact2.tab.aria':
    'Табулатура для пятиструнного банджо: forward roll в строе open G на два такта. Струны сверху вниз — D, B, G, D и короткая пятая струна g. Пятая струна звучит открытой всё время; во втором такте добавляется хаммер-он с открытой на второй лад струны G.',
  'music.fact2.fb.label': 'накладка',
  'music.fact2.fb.hand.aria': 'Играющая рука',
  'music.fact2.fb.right': 'Правая',
  'music.fact2.fb.left': 'Левая',
  'music.fact2.fb.aria':
    'Схема грифа пятиструнного банджо. Четыре длинные струны идут по всей длине грифа; короткая пятая струна начинается с пятого лада. Один палец на втором ладу струны G; остальные струны звучат открыто. Схема зеркалится между правой и левой рукой.',
  'music.fact2.caption.left':
    '<b>Левой рукой</b> — как я играю сейчас. Переключи, чтобы увидеть, с чего я начинал.',
  'music.fact2.caption.right':
    '<b>Правой рукой</b> — с чего я начинал, до фокальной дистонии. Переключи обратно в настоящее.',
  'music.fact3.h': 'прямо сейчас',
  'music.fact3.line1': 'now-practicing',
  'music.fact3.line2': 'forward rolls · open G · медленно и чисто',
  'music.fact3.line3': 'почти каждое утро, до кода',
  'music.fact4.h': 'влияния',
  'music.fact4.chip1': 'Scruggs style',
  'music.fact4.chip2': 'forward roll',
  'music.fact4.chip3': 'open G',
  'music.fact4.chip4': 'bluegrass',
  'music.fact4.chip5': 'ещё одна мелодия',

  // ---- music · da capo + string menu ----
  'music.dacapo.main': 'da capo',
  'music.dacapo.sub': 'D.C. — наверх',
  'music.dacapo.aria': 'Da capo — прокрутить наверх',
  'music.string.aria': 'Дёрни струну {n} — {title}',
} satisfies Record<TranslationKey, string>;
