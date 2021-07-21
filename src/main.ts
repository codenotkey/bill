import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import router from './router'
// @ts-ignore
import store from './store'
// @ts-ignore
import ContentTemplate from '@/components/ContentTemplate'
// @ts-ignore
import NavTab from '@/components/NavTab'
import Icon from '@/components/Icon.vue'

Vue.config.productionTip = false
Vue.component('ContentTemplate', ContentTemplate)
Vue.component('NavTab', NavTab)
Vue.component('Icon', Icon)

// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
