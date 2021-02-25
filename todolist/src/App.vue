<template>
  <div id="app">
    <header>待办事项</header>
    <todo-input />
    <todo-list />
  </div>
</template>

<script>
import todoInput from '@/components/input.vue';
import todoList from '@/components/list.vue';
export default {
  name: 'app',
  components: {
    todoInput,
    todoList
  },
}
</script>

<style>
button{
  cursor: pointer;
}
#app {
  width: 400px;
  /* height: 500px; */
  margin: 80px auto;
  padding: 20px;
  border: 1px solid #666;
  border-radius: 4px;
}
header{
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 10px;
}


</style>
