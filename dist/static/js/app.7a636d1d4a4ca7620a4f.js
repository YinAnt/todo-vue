webpackJsonp([1],{"19Ah":function(t,e){},"6aDy":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),n=o("Dd8w"),i=o.n(n),s=o("NYxO"),d={data:function(){return{checkAllDone:this.$store.getters.checkAllDone}},computed:i()({},Object(s.b)(["totalSize","remainingSize"])),methods:{clearTodo:function(){this.$store.dispatch("clearTodo")},archiveTodo:function(){this.$store.dispatch("archiveTodo")},deleteMoreTodo:function(){this.$store.dispatch("deleteMoreTodo")},checkAll:function(){this.checkAllDone=!this.checkAllDone,this.$store.dispatch("checkAll",this.checkAllDone)}}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"todoapp"},[o("div",{staticClass:"col-sm-1 checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.checkAllDone,expression:"checkAllDone"}],staticClass:"todo-done-all",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checkAllDone)?t._i(t.checkAllDone,null)>-1:t.checkAllDone},on:{click:t.checkAll,change:function(e){var o=t.checkAllDone,a=e.target,n=!!a.checked;if(Array.isArray(o)){var i=t._i(o,null);a.checked?i<0&&(t.checkAllDone=o.concat([null])):i>-1&&(t.checkAllDone=o.slice(0,i).concat(o.slice(i+1)))}else t.checkAllDone=n}}})]),t._v(" "),o("div",{staticClass:"col-sm-7"},[o("h4",[t._v("\n        待完成\n        "),o("span",[t._v(t._s(t.remainingSize))]),t._v(" /\n        "),o("span",[t._v(t._s(t.totalSize))])])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("a",{staticClass:"pull-right btn btn-primary btn-sm",attrs:{href:"#"},on:{click:function(e){return t.clearTodo()}}},[t._v("清空")]),t._v(" "),o("a",{staticClass:"pull-right btn btn-primary btn-sm",attrs:{href:"#"},on:{click:function(e){return t.deleteMoreTodo()}}},[t._v("删除")]),t._v(" "),o("a",{staticClass:"pull-right btn btn-primary btn-sm",attrs:{href:"#"},on:{click:function(e){return t.archiveTodo()}}},[t._v("归档")])])])])},staticRenderFns:[]};var r=o("VU/8")(d,c,!1,function(t){o("6aDy")},"data-v-689cb698",null).exports,l={data:function(){return{isEditer:!1,editTodoText:""}},props:{data:Object,index:Number},methods:{deleteTodo:function(){this.$store.dispatch("deleteTodo",this.index)},archiveTodo:function(){this.$store.dispatch("archiveTodo")},deleteMoreTodo:function(){this.$store.dispatch("deleteMoreTodo")},editTodo:function(t){this.isEditer=!0,this.editTodoText=t},saveEditTodo:function(){if(""==this.editTodoText||null==this.editTodoText)this.$store.dispatch("deleteTodo",this.index);else{var t={index:this.index,text:this.editTodoText};this.$store.dispatch("updateTodo",t)}this.editTodoText="",this.isEditer=!1}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"list-group-item"},[o("label",{staticClass:"cr-styled"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.data.done,expression:"data.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.data.done)?t._i(t.data.done,null)>-1:t.data.done},on:{change:function(e){var o=t.data.done,a=e.target,n=!!a.checked;if(Array.isArray(o)){var i=t._i(o,null);a.checked?i<0&&t.$set(t.data,"done",o.concat([null])):i>-1&&t.$set(t.data,"done",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.data,"done",n)}}})]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.isEditer,expression:"!isEditer"}]},[o("span",{on:{dblclick:function(e){return t.editTodo(t.data.text)}}},[t._v(t._s(t.data.text))])]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditer,expression:"isEditer"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.editTodoText,expression:"editTodoText"},{name:"show",rawName:"v-show",value:t.editTodoText,expression:"editTodoText"}],attrs:{type:"text"},domProps:{value:t.editTodoText},on:{blur:function(e){return t.saveEditTodo()},input:function(e){e.target.composing||(t.editTodoText=e.target.value)}}})]),t._v(" "),o("span",{staticClass:"pull-right",staticStyle:{display:"show"},on:{click:t.deleteTodo}},[t._v("X")])])},staticRenderFns:[]};var h=o("VU/8")(l,u,!1,function(t){o("19Ah")},"data-v-5b5bc48f",null).exports,v={components:{TodosItem:h},computed:i()({},Object(s.b)(["todoDataList"]))},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row todoview"},[e("ul",{staticClass:"no-margn nicescroll todo-list"},this._l(this.todoDataList,function(t,o){return e("todos-item",{key:o,attrs:{data:t,index:o}})}),1)])},staticRenderFns:[]};var m=o("VU/8")(v,p,!1,function(t){o("u2lj")},"data-v-5a947ad6",null).exports,f={components:{TodosItem:h},computed:i()({},Object(s.b)(["todoCompletedDataList","completeSize"]))},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row todoview"},[e("div",{staticClass:"todoapp"},[this._v("\n      已归档\n      "),e("span",[this._v(this._s(this.completeSize))])]),this._v(" "),e("ul",{staticClass:"no-margn nicescroll todo-list"},this._l(this.todoCompletedDataList,function(t,o){return e("todos-item",{key:o,attrs:{data:t,index:o}})}),1)])},staticRenderFns:[]};var x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row todoapp"},[o("form",{staticClass:"m-t-20",attrs:{name:"todo-form",id:"todo-form",role:"form"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-9 todo-inputbar"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoInputText,expression:"todoInputText"}],staticClass:"form-control",attrs:{type:"text",name:"todo-input-text",placeholder:"请输入待办事项...."},domProps:{value:t.todoInputText},on:{input:function(e){e.target.composing||(t.todoInputText=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-sm-3 todo-send"},[o("button",{staticClass:"btn-primary btn-block btn",attrs:{type:"button"},on:{click:function(e){return t.addTodo()}}},[t._v("添加")])])])])])},staticRenderFns:[]};var _={name:"app",data:function(){return{showArchive:!1}},methods:{toggleTabs:function(){this.showArchive=!this.showArchive}},components:{TodosHeader:r,TodosList:m,TodosArchiveList:o("VU/8")(f,T,!1,function(t){o("sZ5m")},"data-v-4daa9880",null).exports,TodosFooter:o("VU/8")({data:function(){return{todoInputText:""}},methods:{addTodo:function(){var t=this.todoInputText.trim();if(t){var e={text:t,done:!1};this.$store.dispatch("addTodo",e),this.todoInputText=""}}}},x,!1,function(t){o("aUz4")},"data-v-ac283404",null).exports}},A={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row",attrs:{id:"app"}},[o("div",{staticClass:"col-lg-4 col-lg-offset-4"},[o("h1",{staticClass:"text-primary text-center"},[t._v("Todos")]),t._v(" "),o("div",{staticClass:"portlet panel-collapse collapse in"},[o("ul",{staticClass:"nav nav-tabs"},[o("li",[o("a",{class:{active:!t.showArchive},on:{click:function(e){return t.toggleTabs()}}},[t._v("待办")])]),t._v(" "),o("li",[o("a",{class:{active:t.showArchive},on:{click:function(e){return t.toggleTabs()}}},[t._v("已完成")])])]),t._v(" "),o("div",{staticClass:"tab-content"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.showArchive,expression:"!showArchive"}]},[o("todos-header"),t._v(" "),o("todos-list"),t._v(" "),o("todos-footer")],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showArchive,expression:"showArchive"}]},[o("todos-archive-list")],1)])]),t._v(" "),o("footer",{staticClass:"footer text-center"},[t._v("todos-vue ©2019 Created by HY.")])])])},staticRenderFns:[]};var D=o("VU/8")(_,A,!1,function(t){o("zrrN")},null,null).exports,k=o("/ocq"),w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h2",[this._v("Todos List")])])}]};var C=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},w,!1,function(t){o("gXCf")},"data-v-21768eff",null).exports;a.a.use(k.a);var b=new k.a({routes:[{path:"/",name:"HelloWorld",component:C}]});a.a.use(s.a);var g=new s.a.Store({state:{todosState:"",todoInputText:"",todoData:[{text:"好好学习，天天向上",done:!1}],todoCompletedData:[{text:"早上九点签到",done:!0}]},getters:{totalSize:function(t){return t.todoData.length},remainingSize:function(t){for(var e=0,o=0;o<t.todoData.length;o++)t.todoData[o].done||e++;return e},completeSize:function(t){return t.todoCompletedData.length},todoDataList:function(t){return t.todoData},todoCompletedDataList:function(t){return t.todoCompletedData},checkAllDone:function(t){return t.totalSize==t.remainingSize&&t.totalSize>0}},mutations:{addTodo:function(t,e){var o=e.data;t.todoData.unshift(o)},clearTodo:function(t){t.todoData=[]},archiveTodo:function(t){for(var e=0;e<t.todoData.length;e++)t.todoData[e].done&&(t.todoCompletedData.unshift(t.todoData[e]),t.todoData.splice(e,1),e--)},deleteTodo:function(t,e){var o=e.index;t.todoData.splice(o,1)},deleteMoreTodo:function(t){for(var e=0;e<t.todoData.length;e++)t.todoData[e].done&&(t.todoData.splice(e,1),e--)},checkAll:function(t,e){for(var o=e.checkAll,a=0;a<t.todoData.length;a++)t.todoData[a].done=o},updateTodo:function(t,e){var o=e.data,a=t.todoData[o.index];a.text=o.text,t.todoData[o.index]=a}},actions:{addTodo:function(t,e){(0,t.commit)("addTodo",{data:e})},clearTodo:function(t){(0,t.commit)("clearTodo")},archiveTodo:function(t){(0,t.commit)("archiveTodo")},deleteTodo:function(t,e){(0,t.commit)("deleteTodo",{index:e})},deleteMoreTodo:function(t){(0,t.commit)("deleteMoreTodo")},checkAll:function(t,e){(0,t.commit)("checkAll",{checkAll:e})},updateTodo:function(t,e){(0,t.commit)("updateTodo",{data:e})}}});o("OF5A"),o("a0pE"),o("lzA5");a.a.config.productionTip=!1,new a.a({el:"#app",router:b,store:g,components:{App:D},template:"<App/>"})},a0pE:function(t,e){},aUz4:function(t,e){},gXCf:function(t,e){},lzA5:function(t,e){},sZ5m:function(t,e){},u2lj:function(t,e){},zrrN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7a636d1d4a4ca7620a4f.js.map