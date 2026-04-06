<template>
  <div class="row">
    <div class="col p-3">
      <router-link class="btn btn-primary" to="/todos/add">
        할일 추가
      </router-link>
      <button class="btn btn-primary ms-1" @click="fetchTodoList">
        새로 고침
      </button>
      <span> 완료된 할일 : {{ doneCount }}</span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todoItem="todoItem"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import TodoItem from '@/pages/TodoItem.vue';
import { useTodoListStore } from '@/stores/todoListStore.js';
import { computed } from 'vue';

// const todoList = inject('todoList'); //읽기 전용
// const { fetchTodoList } = inject('actions'); //할일 목록을 서버에서 새로고침하는 함수 받아오기

//inject 대신 Pinia의 useTodoListStore 함수를 사용하여 todoList와 fetchTodoList를 가져오기
const todoListStore = useTodoListStore();
const doneCount = computed(() => todoListStore.doneCount); //완료된 할일의 개수를 계산하는 computed 속성
const todoList = computed(() => todoListStore.todoList); //todoList를 computed 속성으로 정의
</script>
>
