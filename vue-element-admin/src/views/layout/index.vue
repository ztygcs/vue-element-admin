<template>
  <div class="app">
    <el-container>
      <el-aside><Side :isCollapse="isCollapse" /></el-aside>
      <el-container>
        <el-header>
          <Top @setCollapse="setCollapse" :isCollapse="isCollapse" />
        </el-header>
        <el-main>
          <router-view
            :key="$route.fullPath"
            class="animate__animated animate__faster"
            :class="transitionName"
          ></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Top from '../layout/components/Top.vue'
import Side from '../layout/components/Side.vue'
import 'animate.css'
export default {
  components: {
    Top,
    Side
  },
  data() {
    return {
      isCollapse: false,
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'animate__slideInRight'
      } else if (to.meta.index === from.meta.index) {
        this.transitionName = 'animate__zoomIn'
      } else {
        this.transitionName = 'animate__slideInLeft'
      }
    }
  },
  methods: {
    setCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/var.scss';
@import '../../style/mixin.scss';
.app {
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.el-container {
  height: 100vh;
}
.el-header {
  height: $topHeight !important;
  @include box-shadow();
  display: flex;
  align-items: center;
  z-index: 300;
}
.el-aside {
  width: auto !important;
  margin: 0;
  box-shadow: 6px 0 10px 0 rgba(95, 101, 105, 0.15);
  z-index: 200;
}
.el-main {
  padding: 20px;
  width: auto;
  overflow: auto;
  z-index: 100;
}
</style>


