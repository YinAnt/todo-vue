<template>
  <li class="list-group-item">
    <label class="cr-styled">
      <input type="checkbox" v-model="data.done" />
    </label>
    <!-- <span @dblclick="editTodo()">{{data.text}}</span> -->
    <!-- 双击失效 -->
    <span v-show="!isEditer">
      <span @dblclick="editTodo(data.text)">{{data.text}}</span>
    </span>
    <span v-show="isEditer">
      <input type="text" v-model="editTodoText" v-show="editTodoText" @blur="saveEditTodo()" />
    </span>
    <span class="pull-right" style="display: show;" @click="deleteTodo">X</span>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditer: false,
      editTodoText: ""
    };
  },
  props: {
    data: Object,
    index: Number
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.index);
    },
    archiveTodo() {
      this.$store.dispatch("archiveTodo");
    },
    deleteMoreTodo() {
      this.$store.dispatch("deleteMoreTodo");
    },
    editTodo(text) {
      this.isEditer = true;
      this.editTodoText = text;
    },
    saveEditTodo() {
      if (this.editTodoText == "" || this.editTodoText == null) {
        this.$store.dispatch("deleteTodo", this.index);
      } else {
        const todoData = {
          index: this.index,
          text: this.editTodoText
        };
        this.$store.dispatch("updateTodo", todoData);
      }
      this.editTodoText = "";
      this.isEditer = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list li {
  border: 0px;
  margin: 0px;
  border-radius: 0px;
  border-bottom: 1px solid #eee;
  padding-left: 0px !important;
  padding-right: 0px !important;
  text-align: left;
}
.todo-list li:last-of-type {
  border-bottom: none;
  text-align: left;
}
</style>

