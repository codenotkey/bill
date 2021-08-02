import Vue from 'vue'
// <script src="http://echarts.baidu.com/resource/echarts-liquidfill-1.0.4/dist/echarts-liquidfill.js" type="text/javascript" charset="utf-8"></script>

// @ts-ignore
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

import { Button,Cell,Calendar,Field,CellGroup,Overlay    } from 'vant';


Vue.use(Button );
Vue.use(Calendar );
Vue.use(Cell );Vue.use(CellGroup );Vue.use(Overlay );
Vue.use(Field );

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
