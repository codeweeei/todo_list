import Vue from "vue"
import Vuex from "vuex"
import { Message } from "element-ui"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //添加list数据
    list: [],
  },
  mutations: {
    //获取list数据
    ITEM_LIST(state, list) {
      state.list = list
    },
    //新增待办事项的操作逻辑
    ADD_ITEM(state, inputValue) {
      //将传来的事项内容添加到list中
      state.list.push(inputValue)
      Message.success("添加成功~")
    },
    //完成待办事项的操作逻辑
    REMOVE_ITEM(state, index) {
      state.list.splice(index, 1)
      Message.success("真棒~")
    },
  },
  actions: {
    //简写形式{ commit }
    addItem({ commit }, inputValue) {
      setTimeout(() => {
        //提交给mutation
        commit("ADD_ITEM", inputValue)
      }, 200)
    },
    removeItem({ commit }, index) {
      setTimeout(() => {
        //提交给mutation
        commit("REMOVE_ITEM", index)
      }, 200)
    },
    itemList({ commit }, list) {
      //提交给mutation
      commit("ITEM_LIST", list)
    },
  },
  modules: {},
})
