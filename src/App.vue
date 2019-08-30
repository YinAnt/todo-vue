<template>
  <div class="row" id="app">
    <div class="col-lg-4 col-lg-offset-4">
      <h1 class="text-primary text-center">Todos</h1>
      <div class="portlet panel-collapse collapse in">
        <ul class="nav nav-tabs">
          <li>
            <a @click="toggleTabs()" :class="{active:!showArchive}">待办</a>
          </li>
          <li>
            <a @click="toggleTabs()" :class="{active:showArchive}">已完成</a>
          </li>
        </ul>
        <div class="tab-content">
          <div v-show="!showArchive">
            <todos-header></todos-header>
            <todos-list></todos-list>
            <todos-footer></todos-footer>
          </div>
          <div v-show="showArchive">
            <todos-archive-list></todos-archive-list>
          </div>
        </div>
      </div>
      <footer class="footer text-center">todos-vue ©2019 Created by HY.</footer>
    </div>
  </div>
</template>

<script>
import TodosHeader from "./components/TodosHeader.vue";
import TodosList from "./components/TodosList.vue";
import TodosArchiveList from "./components/ArchiveTodoList.vue";
import TodosFooter from "./components/TodosFooter.vue";

export default {
  name: "app",
  data() {
    return {
      showArchive: false
    };
  },
  methods: {
    toggleTabs: function() {
      this.showArchive = !this.showArchive;
    }
  },
  components: {
    TodosHeader,
    TodosList,
    TodosArchiveList,
    TodosFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  color: #797979;
  background-color: #f1f4f5;
  font-family: "Roboto", sans-serif;
  padding: 0px !important;
  margin: 0px !important;
  font-size: 14px;
}
html {
  overflow-x: hidden;
  position: relative;
  min-height: 100%;
}
.portlet {
  margin-bottom: 20px;
  padding: 15px;
  background: #fff;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
}
</style>
