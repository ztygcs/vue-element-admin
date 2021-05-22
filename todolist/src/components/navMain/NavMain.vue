<template>
  <div v-for="(item,index) in list" :key="index">
    <div class="item">
      <el-checkbox v-model="item.complete">{{item.title}}</el-checkbox>
      <el-button size="mini" class="del" @click="del(item,index)">删除</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navMain",
  setup() {
    let list = ref([]);
    let del = (item,index)=>{
      console.log(item) 
      console.log(index)
    }
    return {
      list,
      del
    };
  },

})
</script>

<style scoped lang = 'scss'>
.item{
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  cursor: pointer;
  button{
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover{
    button{
      display: block;
    }
  }
  
}
</style>