<template>
  <div class="list">
    <section>
      <ul class="todo-list" v-show="list.length">
        <li class="todo-item" v-for="(item,index) in list " :key="index">
          <span>{{index+1}}.</span>
          <p>{{item}}</p>
          <button @click="removeItem(index)">完成</button>
        </li>
      </ul>
      <!-- 没有待办事项时显示 -->
      <div class="todo-nodata" v-show="!list.length">
        还没有待办事项，请及时添加
      </div>
    </section>
  </div>
</template>

<script>
// import Bus from '../Bus'
export default {
  name:'list',
  data() {
    return {
      // list:["吃饭","睡觉","运动","敲代码"],
      //调用store里的数据
      list:[]
    }
  },
  // beforeMount() {
  //   //组件通信方式一：使用事件总线$on来接收之前发送的文件，并作一定的处理
  //   Bus.$on("add-item-value",value => {
  //     this.list.push(value)
  //   })
  // },
  created() {
    this.$http.get("/").then(res =>{
      this.list = res.data
      this.$store.dispatch("itemList",this.list)
    })
  },
  methods: {
    //完成事项删除该事项
    removeItem(index){
      //组件通信方式二：vuex状态管理
      //将将要完成的item下标派遣到action里的removeItem
      this.$store.dispatch("removeItem",index)
    }
  },
}
</script>

<style scoped>
  .todo-list{
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #666;
    border-radius: 4px;
  }
  p{
    margin: 0;
  }
  .todo-item{
    display: flex;
    padding: 0 20px;
    margin: 20px auto;
  }
  .todo-item span{
    padding-right: 10px;
  }
  .todo-item p{
    flex: 1;
  }
  .todo-item button{
    width: 50px;
    height: 32px;
    border-radius: 6px;
    border: none;
    color: #666;
    background-color: #ffefe5;
  }
  .todo-nodata{
    text-align: center;
    color: skyblue;
    font-size: 20px;
  }
</style>