import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import En from './translationJSONs/translationEN.json';
import Ru from './translationJSONs/translationRU.json';

const resources = {
	en: {
		translation: En
	},

	ru: {
		translation: Ru
	}
};

i18n.use(detector).use(reactI18nextModule).init({
	resources,
	lng: 'en',
	fallbackLng: 'en', // use en if detected lng is not available
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
