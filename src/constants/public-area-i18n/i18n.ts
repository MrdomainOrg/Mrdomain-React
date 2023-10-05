import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from './lang/en.json'
import fa from './lang/fa.json'


const resources = {
    fa,
    en
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;