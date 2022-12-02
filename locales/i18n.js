import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from '../assets/i18n/en.json';
import plPL from '../assets/i18n/pl.json';

const translations = {
  en,
  'en-US': en,
  'en-GB': en,
  'pl-PL': plPL,
};
const i18n = new I18n(translations);
i18n.defaultLocale = 'en-US';
i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default i18n;
