/*
* VUEX 状态管理
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        // 数据源
        todosState: "",
        todoInputText:"",
        todoData: [
            {
                text: "好好学习，天天向上",
                done: false
            }
        ],
        todoCompletedData: [
            {
                text: "早上九点签到",
                done: true
            }
        ],
    },
    getters:{
        // Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
        totalSize(state) {
            return state.todoData.length;
        },
        remainingSize(state){
            var cnt = 0;
            for(var i = 0;i < state.todoData.length;i ++){
                if(!state.todoData[i].done){
                   cnt ++;
                }
            }
            return cnt;
        },
        completeSize(state) {
            return state.todoCompletedData.length;
        },
        todoDataList(state) {
            return state.todoData;
        },
        todoCompletedDataList(state) {
            return state.todoCompletedData;
        },
        checkAllDone(getters){
            if(getters.totalSize == getters.remainingSize && getters.totalSize > 0){
                return true;
            }
            return false;
        }
    },
    mutations:{
        // 如果需要修改store中的值唯一的方法就是提交mutation来修改
        addTodo(state,{data}){
            state.todoData.unshift(data);
        },
        clearTodo(state){
            state.todoData = [];
        },
        archiveTodo(state){
            for(var i=0;i<state.todoData.length;i++){
                if(state.todoData[i].done){
                    state.todoCompletedData.unshift(state.todoData[i]);
                    state.todoData.splice(i,1);
                    i --;
                }
            }
        },
        deleteTodo(state,{index}){
            state.todoData.splice(index,1);
        },
        deleteMoreTodo(state){
            for(var i=0;i<state.todoData.length;i++){
                if(state.todoData[i].done){
                    state.todoData.splice(i,1);
                    i --;
                }
            }
        },
        checkAll(state,{checkAll}){
            for(var i=0;i<state.todoData.length;i++){
                state.todoData[i].done = checkAll;
            }
        },
        updateTodo(state,{data}){
            const todo = state.todoData[data.index];
            todo.text = data.text;
            state.todoData[data.index] = todo;
        }
    },
    actions:{
        // 官方并不建议我们这样直接用mutations去修改store里面的值，而是让我们去提交一个actions，在actions中提交mutation再去修改状态值
        addTodo({commit},data){
            commit("addTodo",{data});
        },
        clearTodo({commit}){
            commit("clearTodo");
        },
        archiveTodo({commit}){
            commit("archiveTodo");
        },
        deleteTodo({commit},index){
            commit("deleteTodo",{index});
        },
        deleteMoreTodo({commit}){
            commit("deleteMoreTodo");
        },
        checkAll({commit},checkAll){
            commit("checkAll",{checkAll});
        },
        updateTodo({commit},data){
            commit("updateTodo",{data});
        }
    }
})
