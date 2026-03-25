<template></template>

<script setup>
//composition API
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);
const todo = ref('');

const addTodoHandler = () => {
  if (todo.value.lenth >= 3) {
    emit('add-todo', todo.value);
    todo.value = '';
  }
};
</script>
