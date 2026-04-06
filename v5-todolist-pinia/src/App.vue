<script setup>
import { computed } from 'vue';
import { useTodoListStore } from './stores/todoList';
import Header from '@/components/Header.vue';
import Loading from '@/components/Loading.vue';

const todoListStore = useTodoListStore();
const isLoading = computed(() => todoListStore.isLoading);
const fetchTodoList = todoListStore.fetchTodoList;
fetchTodoList(); //앱이 시작될 때 할일 목록을 서버에서 조회하여 초기화
</script>

<template>
  <div class="container">
    <Header />
    <router-view />
    <Loading v-if="isLoading" />
  </div>
</template>
