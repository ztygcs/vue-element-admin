<template>
  <div class="home">
    <HelloWorld msg="Welcome" />
    <el-button @click="$router.push('/about')">about</el-button>
    <el-button @click="$router.push('/404')">404</el-button>
    <el-button @click="$router.push('/test/test1')">test1</el-button>
    <el-button @click="$router.push('/test/test2')">test2</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
