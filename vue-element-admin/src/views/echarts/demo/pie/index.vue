<template>
  <v-chart :option="option" />
</template>
<script>
import { option } from './config'
import { THEME_KEY } from 'vue-echarts'
export default {
  provide: {
    [THEME_KEY]: 'light'
  },
  data() {
    return {
      option: option
    }
  }
}
</script>