import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/app.scss'
import './plugins/element.js'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 手动引入 ECharts 各模块来减小打包体积
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, TitleComponent, LegendComponent, PieChart])
// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts)
Vue.use(VueCodemirror)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
