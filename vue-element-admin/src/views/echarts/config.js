export const cmOptions = {
  mode: 'text/javascript',
  theme: 'mdn-like',
  readOnly: true,
  tabSize: 4, // 制表符
  indentUnit: 2 // 缩进位数
}

export const vue2 = `
import Vue from 'vue'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 手动引入 ECharts 各模块来减小打包体积
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
use([ CanvasRenderer, BarChart, GridComponent, TooltipComponent ]);
// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts)
new Vue(...)
`

export const vue3 = `
import { createApp } from 'vue'
import ECharts from 'vue-echarts'
import { use } from "echarts/core";
// 手动引入 ECharts 各模块来减小打包体积
import {
CanvasRenderer
} from 'echarts/renderers'
import {
BarChart
} from 'echarts/charts'
import {
GridComponent,
TooltipComponent
} from 'echarts/components'
use([
CanvasRenderer,
BarChart,
GridComponent,
TooltipComponent
]);
const app = createApp(...)
// 全局注册组件（也可以使用局部注册）
app.component('v-chart', ECharts)
app.mount(...)
`
export const vue2Demo = `
<template>
    <v-chart class="chart" :option="option" />
</template>
<script>
    import { use } from "echarts/core";
    import { CanvasRenderer } from "echarts/renderers";
    import { PieChart } from "echarts/charts";
    import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
    import VChart, { THEME_KEY } from "vue-echarts";
    use([ CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent ]);
    export default {
        name: "HelloWorld",
        components: {
            VChart
        },
        provide: {
            [THEME_KEY]: "dark"
        },
        data() {
            return {
                option: {
                    title: {
                        text: "Traffic Sources",
                        left: "center"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                        data: [
                            "Direct",
                            "Email",
                            "Ad Networks",
                            "Video Ads",
                            "Search Engines"
                        ]
                    },
                    series: 
                    [
                        {
                            name: "Traffic Sources",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: [
                                { value: 335, name: "Direct" },
                                { value: 310, name: "Email" },
                                { value: 234, name: "Ad Networks" },
                                { value: 135, name: "Video Ads" },
                                { value: 1548, name: "Search Engines" }
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                }
                            }
                        }
                    ]
                }
            };
        }
    };
<//script>
<style scoped>
    .chart {
        height: 400px;
    }
</style>
`

export const vue3Demo = `
<template>
    <v-chart class="chart" :option="option" />
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts"; 
import { TitleComponent, TooltipComponent, LegendComponent} from "echarts/components"; 
import VChart, { THEME_KEY } from "vue-echarts"; 
import { ref, defineComponent } from "vue"; 
use([ CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]); 
export default defineComponent({ 
    name: "HelloWorld", 
    components: { VChart },
    provide: {
        [THEME_KEY]: "dark"
    },
    setup: () => {    
        const option = ref({
            title: {
                text: "Traffic Sources",
                left: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
            },
            series: [
                {
                    name: "Traffic Sources",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 335, name: "Direct" },
                        { value: 310, name: "Email" },
                        { value: 234, name: "Ad Networks" },
                        { value: 135, name: "Video Ads" },
                        { value: 1548, name: "Search Engines" }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        });
        return { option };
    }
});
<//script>
<style scoped>
    .chart {  height: 400px;}
</style>
`
