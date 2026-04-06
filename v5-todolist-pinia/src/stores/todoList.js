import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
import axios from 'axios';

export const useTodoListStore = defineStore('todoList', () => {
  const BASEURI = '/api/todos';
  const state = reactive({
    todoList: [],
    isLoading: false,
  });
  //상태관리와 통신도 pinia store에서 처리하도록 변경
  // 단일 책임의 원칙에 어긋남? -> 좋은 설계는 아닐 수 있다.
  // pinia 에서 한가지만 수정하도록 변경 -> todoListStore는 상태관리만 담당하도록, 통신은 별도의 service로 분리하는 것이 좋음

  //TodoList 목록을 조회합니다.
  const fetchTodoList = async () => {
    try {
      const response = await axios.get(BASEURI);
      if (response.status === 200) {
        state.todoList = response.data;
      } else {
        alert('데이터 조회 실패');
      }
    } catch (error) {
      console.error('데이터 조회 중 오류 발생:', error);
      alert('데이터 조회 중 오류 발생');
    }
  };

  //새로운 TodoItem을 추가합니다.
  const addTodo = async ({ todo, desc }, succsessCallback) => {
    try {
      const payload = { todo, desc };
      const response = await axios.post(BASEURI, payload);
      if (response.status === 201) {
        state.todoList.push({ ...response.data, done: false });
        succsessCallback();
      } else {
        alert('Todo 추가 실패');
      }
    } catch (error) {
      console.error('Todo 추가 중 오류 발생:', error);
      alert('Todo 추가 중 오류 발생');
    }
  };

  //기존 TodoItem을 수정합니다.
  const updateTodo = async (id, { todo, desc, done }, successCallback) => {
    try {
      const payload = { todo, desc, done };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.status === 200) {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList[index] = payload;
        successCallback();
      } else {
        alert('Todo 수정 실패');
      }
    } catch (error) {
      console.error('Todo 수정 중 오류 발생:', error);
      alert('Todo 수정 중 오류 발생');
    }
  };
  // todoItem을 삭제합니다.
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(BASEURI + `/${id}`);
      if (response.status === 200) {
        let index = state.todoList.findIndex((todo) => todo.id === id);
        state.todoList.splice(index, 1);
      } else {
        alert('Todo 삭제 실패');
      }
    } catch (error) {
      console.error('Todo 삭제 중 오류 발생:', error);
      alert('Todo 삭제 중 오류 발생');
    }
  };

  //기존 TodoItem의 done 상태를 토글합니다.
  const toggleDone = async (id) => {
    try {
      let todo = state.todoList.find((todo) => todo.id === id);
      const payload = { ...todo, done: !todo.done };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.status === 200) {
        todo.done = payload.done;
      } else {
        alert('Todo 상태 변경 실패');
      }
    } catch (error) {
      console.error('Todo 상태 변경 중 오류 발생:', error);
      alert('Todo 상태 변경 중 오류 발생');
    }
  };

  //계산된 속성 추가
  const todoList = computed(() => state.todoList);
  const isLoading = computed(() => state.isLoading);
  const doneCount = computed(() => {
    const filetered = state.todoList.filter(
      (todoItem) => todoItem.done === true,
    );
    return filetered.length;
  });

  return {
    todoList,
    isLoading,
    doneCount,
    fetchTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleDone,
  };
});
