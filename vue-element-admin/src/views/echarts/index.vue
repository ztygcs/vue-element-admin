<template>
  <div>
    <h1>Vue-ECharts</h1>
    <el-divider></el-divider>
    <el-link type="primary" target="_blank" href="https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md">
      <div class="subtitle">Apache ECharts 的 Vue.js 组件。</div>
    </el-link>
    <h1>💡 注意 💡</h1>
    <div>
      <ul>
        <li>
          若您准备从 vue-echarts ≤ 5 的版本迁移到新版本，请在升级 v6 前阅读
          <el-link
            type="primary"
            href="https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md#%E8%BF%81%E7%A7%BB%E5%88%B0-v6"
          >
            迁移到 v6
          </el-link>
        </li>
        <li>
          部分文档。 没准备好的话，可以继续阅读老版本的文档。
          <el-link type="primary" href="https://github.com/ecomfe/vue-echarts/blob/5.x/README.zh_CN.md">
            前往 →
          </el-link>
        </li>
      </ul>
    </div>
    <h1>安装 & 使用</h1>
    <el-card shadow="always">
      npm & ESM:
      <div class="code">
        <codemirror ref="installEchartsCodemirror" :value="installEcharts" :options="cmOptions"> </codemirror>
      </div>
      要在 Vue 2 下使用 vue-echarts，需要确保 @vue/composition-api 已经安装：<br />
      <div class="code">
        <codemirror ref="installVueCodemirror" :value="installVue" :options="cmOptions"> </codemirror>
      </div>

      如果你在使用基于 Vue 2 的 NuxtJS，那么还需要安装 @nuxtjs/composition-api：<br />
      <div class="code">
        <codemirror ref="installNuxtjsCodemirror" :value="installNuxtjs" :options="cmOptions"> </codemirror>
      </div>
      然后在 nuxt.config.js 的 buildModules 选项中添加 '@nuxtjs/composition-api/module'。
    </el-card>

    <h1>引入</h1>
    <el-card shadow="always">
      <el-collapse v-model="activeName" accordion @change="change">
        <el-collapse-item title="vue2" name="vue2">
          <codemirror ref="vue2Codemirror" :value="vue2" :options="{ ...cmOptions, lineNumbers: true }"> </codemirror>
        </el-collapse-item>
        <el-collapse-item title="vue3" name="vue3">
          <codemirror ref="vue3Codemirror" :value="vue3" :options="{ ...cmOptions, lineNumbers: true }"> </codemirror>
        </el-collapse-item>
      </el-collapse>
      <div>
        为了更小的打包体积，我们建议手动从 ECharts 引入单个图表和组件。请参考所有支持的渲染器/图表/组件。
        <el-link type="primary" href="https://github.com/apache/echarts/blob/master/src/echarts.all.ts">前往 →</el-link>
        <div>但如果你实在需要全量引入 ECharts 从而无需手动引入模块，只需要在代码中添加：</div>
        <div class="code">
          <codemirror :value="importEcharts" :options="cmOptions"> </codemirror>
        </div>
      </div>
    </el-card>

    <h1>单文件组件示例</h1>
    <el-card shadow="always">
      <el-collapse v-model="activeDemo" accordion @change="demoCollapseChange">
        <el-collapse-item title="vue2" name="vue2Demo">
          <codemirror ref="vue2DemoCodemirror" :value="vue2Demo" :options="{ ...cmOptions, lineNumbers: true }">
          </codemirror>
        </el-collapse-item>
        <el-collapse-item title="vue3" name="vue3Demo">
          <codemirror ref="vue3DemoCodemirror" :value="vue3Demo" :options="{ ...cmOptions, lineNumbers: true }">
          </codemirror>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { cmOptions, vue2, vue3, vue2Demo, vue3Demo } from './config'
import { codemirror } from 'vue-codemirror'
import 'codemirror/theme/mdn-like.css' // 这里引入的是主题样式，根据设置的theme的主题引入，一定要引入！！
require('codemirror/mode/javascript/javascript') // 这里引入的模式的js，根据设置的mode引入，一定要引入！！
export default {
  components: {
    codemirror
  },
  data() {
    return {
      cmOptions: cmOptions,
      vue2: vue2,
      vue3: vue3,
      vue2Demo: vue2Demo,
      vue3Demo: vue3Demo,
      activeName: '',
      activeDemo: '',
      installEcharts: `npm install echarts vue-echarts`,
      installVue: `npm i -D @vue/composition-api`,
      installNuxtjs: `npm i -D @nuxtjs/composition-api`,
      importEcharts: `import "echarts";`
    }
  },
  methods: {
    change(activeName) {
      this.$refs[activeName + 'Codemirror'] && this.$refs[activeName + 'Codemirror'].refresh()
    },
    demoCollapseChange() {}
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/var.scss';
.subtitle {
  font-size: 14px;
  color: $regularText;
}
.code {
  min-height: 40px;
  line-height: 40px;
  border-radius: 6px;
}
::v-deep .CodeMirror {
  height: auto;
}
.el-card {
  border: none;
  border-radius: 6px;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
}
</style>
