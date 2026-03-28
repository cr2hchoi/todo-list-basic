<script>
export default {
  name: "TodoListItem",
  props :{
    todoItem:{type:Object, required:true},  //객체 타입으로 받겠다, 꼭 대문자로 시작해야함
  }
}
</script>
<template>
  <li class="list-group-item" >
    <span class="pointer">
      <!--    데이터 바인딩할 영역-->
      할일 명, 완료
    </span>

    <span class="float-end badge bg-secondary pointer"> 삭제</span>
<!--    부트스트랩 요소 끝으로 밀어버리는 클래스-->
  </li>
</template>