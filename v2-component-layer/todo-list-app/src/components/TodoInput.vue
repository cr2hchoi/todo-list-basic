<script>
  export default {
    name: "TodoInput",
  }
</script>
<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
<!--        입력텍스트&버튼 그룹으로 묶어 제어-->
        <input id="msg" type="text" class="form-control" name="msg"
               placeholder="할 일 입력"/>
<!--        사용자에게 입력값 받는 영역 지정-->
        <span class="btn btn-primary input-group-addon">추가</span>
      </div>
    </div>
  </div>
</template>