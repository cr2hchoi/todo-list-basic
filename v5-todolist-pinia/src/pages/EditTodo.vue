<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 수정</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일:</label>
        <input type="text" class="form-control" id="todo" />
      </div>
      <div class="form-group">
        <label htmlFor="desc">설명:</label>
        <textarea class="form-control" rows="3" id="desc"></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="done">완료여부 : </label>&nbsp;
        <input type="checkbox" />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary m-1">수 정</button>
        <button type="button" class="btn btn-primary m-1">취 소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { inject, reactive } from 'vue';
import { reactive } from 'vue';
import { useTodoListStore } from '../stores/todoList';
import { useRouter, useRoute } from 'vue-router';

// const todoList = inject('todoList');
// const { updateTodo } = inject('todoService');
const { todoList, updateTodo } = useTodoListStore();
//참조형 데이터 (reactive 객체)
const router = useRouter();
const currentRoute = useRoute();

const { todoList, updateTodo } = useTodoListStore();
const matchedTodoItem = todoList.find(
  (item) => item.id === currentRoute.params.id,
);

const todoItem = reactive({ ...matchedTodoItem }); //reactive 객체로 변환 (복제된 객체 전달)

// if (!matchedTodoItem) {
//   router.push('/todos');
//   //id에 해당하는 할일이 없는 경우 (undefined), 목록 페이지로 이동
// }

const updateTodoHandler = () => {
  let { todo } = todoItem;
  if (!todo || todo.trim() === '') {
    //할일 문자열에 아무것도 들어오지 않았을 경우 (trim() : 문자열 양쪽 공백 제거 메서드)
    //경고창 출력후 함수 종료
    alert('할일을 입력하세요');
    return;
  }
  //업데이트 함수 호출 및 clone된 객체 전달 (reactive 객체는 직접 수정 불가, 반드시 복제 후 수정된 객체 전달)
  updateTodo({ ...todoItem }, () => {
    //업데이트 함수 호출 후 목록 페이지로 이동
    router.push('/todos');
  });
};
</script>
