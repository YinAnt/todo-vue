<template>
  <div class="row">
    <div class="todoapp">
      <div class="col-sm-1 checkbox">
        <input type="checkbox" class="todo-done-all" v-model="checkAllDone" @click="checkAll"/>
      </div>
      <div class="col-sm-7">
        <h4>
          待完成
          <span>{{remainingSize}}</span> /
          <span>{{totalSize}}</span>
        </h4>
      </div>
      <div class="col-sm-4">
        <a href="#" class="pull-right btn btn-primary btn-sm" @click="clearTodo()">清空</a>
        <a href="#" class="pull-right btn btn-primary btn-sm" @click="deleteMoreTodo()">删除</a>
        <a href="#" class="pull-right btn btn-primary btn-sm" @click="archiveTodo()">归档</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return {
      checkAllDone: this.$store.getters.checkAllDone
    }
  },
  computed: {
    ...mapGetters(["totalSize", "remainingSize"])
  },
  methods: {
    clearTodo() {
      this.$store.dispatch("clearTodo");
      // ANT 处理复选框是否选中
    },
    archiveTodo() {
      this.$store.dispatch("archiveTodo");
    },
    deleteMoreTodo() {
      this.$store.dispatch("deleteMoreTodo");
    },
    checkAll(){
      this.checkAllDone = !this.checkAllDone;
      this.$store.dispatch('checkAll',this.checkAllDone)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoapp {
  padding: 10px 40px 20px 60px !important;
  text-align: left;
}
</style>
