<script>
export default {
  name: 'TodoInput',
  data() {
    return { todo: '' };
  },
  emit: ['add-todo'],
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        //입력받은 글자가 3글자 이상일때?
        this.$emit('add-todo', this.todo); //this.$emit('에밋명',전달할 데이터); this. 꼭 해줘야함
        this.todo = ''; //입력 문자열 초기화
      }
    },
  },
};
</script>
<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <!--        입력텍스트&버튼 그룹으로 묶어 제어-->
        <input
          id="msg"
          type="text"
          class="form-control"
          name="msg"
          placeholder="할 일 입력"
          v-model.trim="todo"
          @keydown.enter="addTodoHandler"
        />
        <!--        사용자에게 입력값 받는 영역 지정-->
        <span class="btn btn-primary input-group-addon" @click="addTooHandler"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>
