import Vue from 'vue'
// <script src="http://echarts.baidu.com/resource/echarts-liquidfill-1.0.4/dist/echarts-liquidfill.js" type="text/javascript" charset="utf-8"></script>

import App from './App.vue'
// @ts-ignore
import router from './router'
// @ts-ignore
import store from './store'
// @ts-ignore
import ContentTemplate from '@/components/ContentTemplate'
// @ts-ignore
import NavTab from "@/components/NavTab"
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
