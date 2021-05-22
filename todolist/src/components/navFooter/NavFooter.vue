<template>
<div class="container">
  <div class="text">已完成{{isComplete}}/全部{{all}}</div>
  <div v-if="isComplete>0">
    <el-button size = "mini" @click="clear">清除已完成</el-button>
  </div>
</div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navFooter",
  setup() {
    let isComplete = ref(1);
    let all = ref(3)
    let clear = ()=>{
      console.log('22')
    }
    return {
      isComplete,
      all,
      clear
    };
  },
});
</script>

<style scoped lang = 'scss'>
.text{
  font-size: 16px;
  margin-right: 10px;
}
.container{
  display: flex;
  align-items: center;
}
</style>