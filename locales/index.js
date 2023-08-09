import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/locales/messages/en.js'
import th from '@/locales/messages/th.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: 'en',
	messages: {
		'en': en,
		'th': th
	}
})

export default i18n
