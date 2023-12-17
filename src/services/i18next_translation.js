import globan_en from '../translations/en/global.json';
import globan_gr from '../translations/el/global.json';
import i18next from 'i18next';

i18next.init({
    interpolation: { escapeValue: false }, 
    lng: 'el',
    resources: {
        en: {
            global: globan_en
        },
        el: {
            global: globan_gr
        }
    },
});

export default i18next;