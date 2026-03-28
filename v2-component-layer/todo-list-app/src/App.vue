<script>
import TodoList from '@/components/TodoList.vue';
import TodoListItem from '@/components/TodoListItem.vue';
import TodoInput from '@/components/TodoInput.vue';

let ts = new Date().getTime(); //timestamp 기법 위한 함수 사용
//new : 새 객체 생성
//Date() : 현재 시간 담는. getTime() : 숫자 형태로 담아줘
//현재 시간을 숫자형태로 담는 새 객체를 만들어서, ts 변수에 넣어라

export default {
  data() {
    return {
      todoList: [
        //리턴 받을 배열 데이터 지정
        //아래있는 건 임시 데이터
        //id : 배열값의 고유 번호(timestamp 기법),todo:할일 string타입으로 받기, compledted: 완료 상태(불린값)
        // 배열 값에 있는 객체의 속성은 아무렇게나 지정 가능 -> 다양하게 카테고리로 확장 가능!
        { id: ts, todo: 'Vue 컴포넌트 이해하기', completed: false },
        { id: ts + 1, todo: '부트스트랩 디자인 적용하기', completed: true },
        { id: ts + 2, todo: '디자인이나 하자....', completed: false },
      ],
    };
  },

  components: {
    TodoList,
    TodoInput,
    TodoListItem,
  },

  methods: {
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todoList.push({
          id: new Date().getTime(),
          todo: todo,
          completed: false,
        });
      }
    },
  },
};
</script>
<template>
  <div id="app" class="container">
    <!--    전체 컨테이너 영역-->
    <div class="card card-body bg-light">
      <!--      bootstrap5 패딩 주는 클래스-->
      <div class="title">
        <span class="material-symbols-outlined"> filter_vintage </span>
        다래의 TodoList
        <span class="material-symbols-outlined"> filter_vintage </span>
      </div>
    </div>
    <div class="card card=default card-borderless">
      <!--      할일 목록영역-->
      <div class="card-body">
        <!--      bootstrap5 패딩 주는 클래스-->
        <TodoInput @add-todo="addTodo" />
        <TodoList :todoList="todoList" />
        <!--        :todoList (데이터 받을 자식의 props명)-->
        <!--        ="todoList"(제공할 부모의 데이터 명)-->
      </div>
    </div>
  </div>
</template>
