<script>
import { reactive, onMounted } from 'vue';
import TodoList from '@/components/TodoList.vue';
import TodoInput from '@/components/TodoInput.vue';
// import TodoListItem from '@/components/TodoListItem.vue'; 얘는 손자라 ㄴㄴ

export default {
  //vue2 방식 무슨 무슨 API라 함
  name: 'App',
  components: { TodoInput, TodoList }, //불러올 컴포넌트들
  setup() {
    const ts = new Date().getTime();
    const state = reactive({ todoList: [] });

    onMounted(() => {
      state.todoList.push({ id: ts, todo: '자전거 타기' });
      state.todoList.push({
        id: ts + 1,
        todo: '방정리 하기',
        completed: false,
      });
      state.todoList.push({
        id: ts + 2,
        todo: 'vue 공부하기',
        completed: false,
      });
      state.todoList.push({
        id: ts + 3,
        todo: '데이트 하기',
        completed: false,
      });
    });
  },

  const addTodo = (todo)=>{
    if (todo.length >= 2){
      state.todoList.push({id: new Date().getTime(),
        todo:todo, completed:false
      });
    }
  }

  const deleteTodo = (id) => {
    let index = state.todoList.findIndex((item)=> id === item.id);
    state.todoList.splice(index,1);
  }

  const toggleCompleted = (id) => {
    let index = state.todoList.findIndex((item)=>id === item.id);
    state.todoList.splic(index,1);
  }

  const toggleCompleted = (id) => {
    let index = state.todoList.findIndex((item)=> id === item.id);
    state.todoList[index].completed =!state.todoList[index].completed;
  }

  return {state, addTodo, deleteTodo, toggleCompleted}
};
</script>

<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">::Todolist App</div>
    </div>
    <div id="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo"></InputTodo>
        <TodoList
          :todoList="useTransitionState.todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        ></TodoList>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
