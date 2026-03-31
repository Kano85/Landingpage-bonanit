import { ca } from './ca';
import { de } from './de';
import { es } from './es';

export const translations = {
  es,
  de,
  ca,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
export type TranslationDictionary = typeof translations.es;
