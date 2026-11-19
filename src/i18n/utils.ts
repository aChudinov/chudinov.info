import { en, type TranslationKey } from './en';
import { ru } from './ru';
import { cs } from './cs';

// the three dictionaries, keyed by locale
export const ui = { en, ru, cs } as const;
export type Lang = keyof typeof ui;

export const defaultLang: Lang = 'en';
// display codes for the language switcher (shown as-is, never translated)
export const languages: Record<Lang, string> = { en: 'EN', ru: 'RU', cs: 'CZ' };

export function isLang(value: string): value is Lang {
  return value in ui;
}

// t(key) for a locale; falls back to English, then to the raw key (never throws)
export function useTranslations(lang: Lang) {
  const dict = ui[lang] ?? ui[defaultLang];
  return function t(key: TranslationKey): string {
    return dict[key] ?? en[key] ?? key;
  };
}

// URL for a locale: English lives at the root, the others under /<lang>/
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return lang === defaultLang ? `/${clean}` : `/${lang}/${clean}`;
}

export type { TranslationKey };
