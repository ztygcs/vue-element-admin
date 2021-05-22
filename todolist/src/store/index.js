import { createStore } from 'vuex'

export default createStore({
  //定义状态
  state: {
    list:[
      {
        title:'吃饭',
        complete:false
      },
      {
        title:'睡觉',
        complete:false
      },
      {
        title:'敲代码',
        complete:true
      }
    ]
  },
  //同步修改state 都是方法
  //第一个参数state，第二个参数是需要修改的值
  mutations: {
    addTodo(state,payload){
      state.list.push(payload)
    },
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    clear(state,payload){
      state.list = payload
    }
  },
  //异步提交mutation
  //第一个参数store，第二个参数是需要修改的值
  actions: {
  },
  //模块化
  modules: {
  }
})
