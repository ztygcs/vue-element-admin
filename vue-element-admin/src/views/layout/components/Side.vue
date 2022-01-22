<template>
  <div class="side">
    <!-- router:使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <template v-for="menu in menuList">
        <!-- 一级菜单且无children数组 -->
        <template v-if="!menu.children">
          <el-menu-item :key="menu.path" :index="menu.path">
            <i :class="menu.meta.icon"></i>
            <span slot="title">{{ menu.name }}</span>
          </el-menu-item>
        </template>
        <!-- 一级菜单且children仅有一个元素 -->
        <template v-else-if="menu.children.length === 1">
          <el-menu-item :key="menu.path" :index="menu.path">
            <i :class="menu.meta.icon"></i>
            <span slot="title">{{ menu.name }}</span>
          </el-menu-item>
        </template>
        <!-- 包含二级菜单 -->
        <template v-else>
          <el-submenu :index="menu.path" :key="menu.path">
            <template slot="title">
              <i :class="menu.meta.icon"></i>
              <span slot="title">{{ menu.name }}</span>
            </template>
            <template v-for="subItem in menu.children">
              <el-menu-item :key="subItem.path" :index="menu.path + '/' + subItem.path">
                <span slot="title" class="ml10">{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { menuRouters } from '../../../router'
export default {
  props: { isCollapse: { type: Boolean, default: true } },
  data() {
    return { menuList: [] }
  },
  computed: {
    onRoutes() {
      return this.$route.path
    }
  },
  mounted() {
    this.menuList = menuRouters
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/var.scss';
.side {
  min-height: calc(100vh - 20px);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $sideWidth;
  min-height: 400px;
}
::v-deep .el-submenu__title,
.el-menu-item {
  color: #999;
  font-weight: bold;
}
</style>