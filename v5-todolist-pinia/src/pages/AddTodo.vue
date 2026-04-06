<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 추가</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일 :</label>
        <input type="text" class="form-control" id="todo" />
      </div>
      <div class="form-group">
        <label htmlFor="desc">설명 :</label>
        <textarea class="form-control" rows="3" id="desc"></textarea>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary m-1">추 가</button>
        <button type="button" class="btn btn-primary m-1">취 소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList.js';

// const { addTodo } = inject('actions');
const { addTodo } = useTodoListStore();
const router = useRouter();
const todoItem = reactive({ todo: '', desc: '' });

const addTodoItem = () => {
  let { todo } = todoItem;
  if (!todo || todo.trim() === '') {
    alert('할일을 입력하세요');
    return;
  }
  addTodo({ ...todoItem }, () => {
    router.push('/todos');
  });
};
</script>
