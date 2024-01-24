import globan_en from '../translations/en/global.json';
import globan_gr from '../translations/el/global.json';

import home_en from '../translations/en/home.json';
import home_gr from '../translations/el/home.json';

import i18next from 'i18next';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'el',
    resources: {
        en: {
            global: globan_en,
            home: home_en
        },
        el: {
            global: globan_gr,
            home: home_gr
        }
    },
});

export default i18next;