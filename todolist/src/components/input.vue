<template>
  <div class="input">
    <section class="todo-input">
      <input 
        type="text" 
        placeholder="请输入需要添加的事项" 
        @input="inputText" 
        v-model="inputValue"
      >
      <button @click="addItem">添加</button>
    </section>
  </div>
</template>

<script>
//引入Bus文件（事件总线）
// import Bus from '../Bus'
export default {
  name:'todoInput',
  data() {
    return {
      inputValue:""
    }
  },
  methods: {
    inputText(event){
      //将输入框的内容保存起来
      this.inputValue = event.target.value
    },
    //新增事项
    addItem(){
      // //将新增事项内容发送至事件总线Bus
      // Bus.$emit("add-item-value",this.inputValue)
      //将输入内容派遣到action里的addItem中
      if(this.inputValue){
        this.$store.dispatch("addItem",this.inputValue)
        this.inputValue =""
      }else{
        this.$message({
          message: '请输入内容~'
        });
      }
    },
  },
}
</script>

<style scoped>
  .todo-input{
  display: flex;
  margin-bottom: 20px;
}
.todo-input input{
  flex: 1;
  height: 34px;
  padding-left: 10px;
  margin-right: 20px;
  border-radius: 6px;
}
.todo-input button{
  width: 70px;
  /* height: 40px; */
  background-color:#d3e8e1;
  border-radius: 20px;
  border: none;
  color: #666;
}
</style>