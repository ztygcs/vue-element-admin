<template>
  <div class="top">
    <i
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      class="collapse-icon"
      @click="$emit('setCollapse')"
    ></i>
  </div>
</template>
<script>
export default {
  props: {
    isCollapse: { type: Boolean, default: true }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/var.scss';
.top {
  position: relative;
  display: flex;
  align-items: center;
  .collapse-icon {
    cursor: pointer;
  }
}
</style>
