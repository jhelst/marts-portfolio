import * as React from 'react';
import { lang } from '../lang/main'

export const LanguageContext = React.createContext({language:'es', setLanguage: (lang) => {}, translations: lang.find(lan => lan.lang === 'es')})