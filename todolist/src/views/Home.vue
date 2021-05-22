<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    {{list}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavHeader from "../components/navHeader/NavHeader.vue";
import NavMain from "../components/navMain/NavMain.vue";
import NavFooter from "../components/navFooter/NavFooter.vue";
import { ref,computed} from "vue";
import {useStore} from "vuex"

export default {
  name: "Home",
  components: {
    HelloWorld,
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    let store = useStore()
    let list  = computed(()=>{
      return store.state.list
    })
    return { list};
  },

  methods: {
    // add() {
    //   this.num++;
    // },
  },
};
</script>
