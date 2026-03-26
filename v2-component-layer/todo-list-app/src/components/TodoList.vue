<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name:"TodoList", //컴포넌트 이름 지정. 안달아도 되지만 기본적으로 명시를 해주는게 좋다.
  props:{todoList:{
      type: Array,    // 배열로 받겠다고 꼭 명시
      required: true  // 데이터를 꼭 받아야 출력시킬 수 있게 동작하겠다.
      //required: false일 때 (기본값): 데이터를 안 줘도 에러는 안 나지만, 화면에 아무것도 안 나오거나 텅 빈 상태가 됨
    }},
  components:{TodoListItem}, //불러온 컴포넌트 등록
}
</script>
<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
            v-for="todoItem in todoList"
            :key="todoItem.id"
            :todoItem="todoItem"
        />
      </ul>
    </div>
  </div>
</template>