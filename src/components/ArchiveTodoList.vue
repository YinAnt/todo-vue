<template>
  <div class="row todoview">
    <div class="todoapp">
        已归档
        <span>{{completeSize}}</span>
    </div>

    <ul class="no-margn nicescroll todo-list">
      <todos-item
        v-for="(value, index) in todoCompletedDataList"
        :key="index"
        :data="value"
        :index="index"
      ></todos-item>
    </ul>
  </div>
</template>

<script>
import TodosItem from "../components/TodosItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TodosItem
  },
  computed: {
    ...mapGetters(["todoCompletedDataList","completeSize"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoapp {
  padding: 10px 40px 20px 60px !important;
  text-align: left;
}
.todoview {
  padding: 10px 50px 10px 10px !important;
}
.todo-list li {
  border: 0px;
  margin: 0px;
  border-radius: 0px;
  border-bottom: 1px solid #eee;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.todo-list li:last-of-type {
  border-bottom: none;
}
</style>
