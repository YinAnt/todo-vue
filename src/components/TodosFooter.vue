<template>
  <div class="row todoapp">
    <form name="todo-form" id="todo-form" role="form" class="m-t-20">
      <div class="row">
        <div class="col-sm-9 todo-inputbar">
          <input
            type="text"
            name="todo-input-text"
            class="form-control"
            placeholder="请输入待办事项...."
            v-model="todoInputText"
          />
        </div>
        <div class="col-sm-3 todo-send">
          <button class="btn-primary btn-block btn" type="button" @click="addTodo()">添加</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      todoInputText: ""
    };
  },
  methods: {
    addTodo() {
      const todoInputText = this.todoInputText.trim();
      if (todoInputText) {
        const todoData = {
          text: todoInputText,
          done: false
        };
        this.$store.dispatch("addTodo", todoData);
        this.todoInputText = ""; 
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoapp {
  padding: 10px 30px 20px 30px !important;
  text-align: left;
}
</style>
