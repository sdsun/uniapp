import App from './App'
import Vue from 'vue'
import store from './store'
import i18n from './locales'
import mixins from './mixins/common'
import gtmUI from '@/uni_modules/gtm-mobile-ui'
import { httpInterceptor } from './utils/http'

Vue.use(gtmUI)
Vue.use(mixins)

httpInterceptor()

Vue.config.productionTip = false
Vue.prototype._i18n = i18n
App.mpType = 'app'
const app = new Vue({
    store,
    i18n,
    ...App
})

app.$mount()