(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{612:function(e,t,n){"use strict";n.r(t);var l={name:"component-exhibition",components:{"firm-demo0":(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e})({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("p",{staticStyle:{margin:"20px 0"}},[n("el-button",{on:{click:e.allSelection}},[e._v("全选")]),e._v(" "),n("el-checkbox",{staticStyle:{"margin-left":"30px"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("解决全选||取消全选卡顿？？")])],1),e._v(" "),n("u-table",{ref:"plTable",attrs:{height:e.height,"use-virtual":"","big-data-checkbox":e.checked,showBodyOverflow:"title",showHeaderOverflow:"title","row-height":e.rowHeight,border:""}},[n("u-table-column",{attrs:{type:"selection",width:"55",selectable:e.selectable}}),e._v(" "),n("u-table-column",{attrs:{type:"index",width:"100",fixed:""}}),e._v(" "),e._l(e.columns,(function(e){return n("u-table-column",{key:e.id,attrs:{resizable:e.resizable,"show-overflow-tooltip":e.showOverflow,prop:e.prop,label:e.label,fixed:e.fixed,width:e.width}})}))],2),e._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{on:{click:function(t){return e.toggleSelection([e.datas[0],e.datas[2]])}}},[e._v("切换第一、第三行的选中状态")]),e._v(" "),n("el-button",{on:{click:function(t){return e.toggleSelection([e.datas[3]],"固定选中")}}},[e._v("选中第四行")]),e._v(" "),n("el-button",{on:{click:function(t){return e.toggleSelection()}}},[e._v("取消选择")])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{checked:!0,height:400,rowHeight:50,columns:Array.from({length:10},(function(e,t){return{prop:"address",id:t,label:"地址"+t,width:200}}))}},mounted:function(){var e=Array.from({length:8e3},(function(e,t){return{id:t+1,date:"2016-05-03",name:1,ab:"欢迎使用u-table",address:"北京市天安门"}}));this.datas=e,this.$refs.plTable.reloadData(e)},methods:{selectable:function(e,t){return 1!==t},allSelection:function(){this.$refs.plTable.toggleAllSelection()},clearSelection:function(){this.$refs.plTable.clearSelection()},toggleSelection:function(e,t){var n=this;e?e.forEach((function(e){"固定选中"===t?n.$refs.plTable.toggleRowSelection([{row:e,selected:!0}]):n.$refs.plTable.toggleRowSelection([{row:e}])})):this.$refs.plTable.clearSelection()}}})}},i=n(46),o=Object(i.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),t("p",[this._v("建议开启使用：show-body-overflow 和 show-header-overflow 。")]),t("p",[this._v("如果数据量大 且 表格存在 selection 复选框，那么全选时候 或者取消全选时候呢，就会卡。所以建议你开启big-data-checkbox属性 。")]),t("div",[this._m(1),t("template",{slot:"source"},[t("firm-demo0")],1),t("template",{slot:"highlight"},[this._m(2)])],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"xu-ni-gun-dong-duo-xuan-kuang-ji-chu-xu-ni-bu-jie-jue-lie-duo-qing-kuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xu-ni-gun-dong-duo-xuan-kuang-ji-chu-xu-ni-bu-jie-jue-lie-duo-qing-kuang"}},[this._v("¶")]),this._v(" 虚拟滚动多选框(基础虚拟，不解决列多情况)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("p",[t("code",[this._v("data")]),this._v("对象数组后，大量数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 reloadData 函数,请看表格方法")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[this._v('  <template>\n   <div>\n     <p style="margin: 20px 0;">\n        <el-button @click="allSelection">全选</el-button>\n        <el-checkbox style="margin-left:30px" v-model="checked">解决全选||取消全选卡顿？？</el-checkbox>\n     </p>\n     <u-table\n          ref="plTable"\n          :height="height"\n          use-virtual\n          :big-data-checkbox="checked"\n          showBodyOverflow="title"\n          showHeaderOverflow="title"\n          :row-height="rowHeight"\n          border>\n          <u-table-column type="selection" width="55" :selectable="selectable"/>\n          <u-table-column type="index" width="100" fixed/>\n          <u-table-column\n             v-for="item in columns"\n             :key="item.id"\n             :resizable="item.resizable"\n             :show-overflow-tooltip="item.showOverflow"\n             :prop="item.prop"\n             :label="item.label"\n             :fixed="item.fixed"\n             :width="item.width"/>\n        </u-table>\n         <div style="margin-top: 20px">\n             <el-button @click="toggleSelection([datas[0], datas[2]])">切换第一、第三行的选中状态</el-button>\n             <el-button @click="toggleSelection([datas[3]], \'固定选中\')">选中第四行</el-button>\n            <el-button @click="toggleSelection()">取消选择</el-button>\n         </div>\n    </div>\n </template>\n\n  <script>\n    export default {\n      data() {\n        return {\n          checked: true,\n          height: 400,\n          rowHeight: 50,\n          columns: Array.from({ length: 10 }, (_, idx) => ({\n              prop: \'address\', id: idx, label: \'地址\' + idx, width: 200\n          }))\n        }\n      },\n      mounted () {\n          const data = Array.from({ length: 8000 }, (_, idx) => ({\n               id: idx + 1,\n               date: \'2016-05-03\',\n               name: 1,\n               ab: \'欢迎使用u-table\',\n               address: \'北京市天安门\'\n          }))\n        this.datas = data\n        // 设置表格数据\n        this.$refs.plTable.reloadData(data)\n      },\n      methods: {\n          selectable (row, index) {\n              if (index === 1) {\n                  return false\n              } else {\n                  return true\n              }\n          },\n         allSelection () {\n             this.$refs.plTable.toggleAllSelection()\n         },\n         clearSelection () {\n             this.$refs.plTable.clearSelection()\n         },\n         toggleSelection(rows, type) {\n             if (rows) {\n               rows.forEach(row => {\n                 // 注意： 勾选方法与element不同哦\n                 // this.$refs.plTable.toggleRowSelection(row); // element表格是这样写的\n                 // 我们得这样写\n\n                 // 如果是固定选中\n                 if (type === \'固定选中\') {\n                 // toggleRowSelection方法参数不懂得去看文档api哦\n                   this.$refs.plTable.toggleRowSelection([\n                      {\n                        row: row,\n                        selected: true\n                      }\n                   ])\n                  // 下面这是切换选中\n                 } else {\n                   this.$refs.plTable.toggleRowSelection([\n                      {\n                        row: row\n                      }\n                   ])\n                 }\n               });\n             } else {\n               this.$refs.plTable.clearSelection();\n             }\n           },\n      }\n    }\n  <\/script>\n')])])}],!1,null,null,null);t.default=o.exports}}]);