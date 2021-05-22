<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      @keydown.enter="enter"
      class="input"
    ></el-input>
  </div>
  {{ input }}
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navHeader",
  setup() {
    let input = ref("");
    let enter = ()=>{
      console.log(input.value)
    }
    return {
      input,
      enter
    };
  },
});
</script>

<style scoped lang = 'scss'>
.input{
  width:200px;
  top: 10px;
  margin-bottom: 10px;
}
</style>