webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("vGjf")},null,null).exports,o=n("/ocq"),l=n("KHPB"),a=n.n(l),p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},e._l(e.lists,function(t,s){return n("div",{key:s},[n("drop",{staticClass:"drop list",on:{drop:function(n){for(var s=arguments.length,i=Array(s);s--;)i[s]=arguments[s];e.handleDrop.apply(void 0,[t].concat(i))}}},e._l(t,function(s){return n("drag",{key:s,staticClass:"drag",class:(i={},i[s]=!0,i),attrs:{"transfer-data":{item:s,list:t,example:"lists"}}},[e._v("\n\t\t\t\t\t\t"+e._s(s)+"\n\t\t\t\t")]);var i}))],1)}))},staticRenderFns:[]};var d=n("VU/8")({name:"HelloWorld",data:function(){return{lists:[["A","B","C"],["D","E","F"]]}},methods:{handleDrop:function(e,t){var n=t.list;n&&(e.push(t.item),n.splice(n.indexOf(t.item),1))}}},p,!1,function(e){n("Rpt1")},"data-v-875a0e6c",null).exports,u=function(e){e.preventDefault?e.preventDefault():e.returnValue=null};function c(e){var t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.scrollLeft||document.body.scrollLeft;return{x:e.clientX+n-200,y:e.clientY+t-32}}var f={name:"Gjf",data:function(){return{oldTop:null,newTop:null,isDown:!1,dropArea:null,downTarget:null,newTarget:null,oBox:null,initX:0,initY:0,indexs:null,lists:["内容1","内容2","内容3","内容4","内容5"],newLists:[]}},mounted:function(){this.dropArea=document.getElementById("dropArea")},methods:{down:function(e){u(e),this.isDown=!0;var t=c(e);this.downTarget=e.target,this.initX=e.clientX,this.initY=e.clientY,this.oldTop=this.downTarget.offsetTop,this.newTarget=this.dropArea.removeChild(this.downTarget),document.body.appendChild(this.newTarget),this.newTarget.style.position="absolute",this.newTarget.style.left=t.x+"px",this.newTarget.style.top=t.y+"px",function(e){for(var t=e.$refs.itemList,n=0;n<t.length;n++)t[n].style.length>0&&(e.indexs=n,e.indexTxts=t[n],t.splice(n,1))}(this)},move:function(e){if(u(e),this.isDown){var t=c(e);this.downTarget.style.left=t.x+"px",this.downTarget.style.top=t.y+"px"}},up:function(){function e(e,t){var n=null,s=e.$refs.itemList;if(1===t){for(var i=0;i<s.length;i++)s[i].offsetTop<e.newTop&&(n=i,e.newLists.push(s[i].innerText));e.newTarget.style.position="static",n<=0?(e.lists.splice(e.indexs,1),e.lists.splice(s[0],0,e.indexTxts.innerText),e.dropArea.insertBefore(e.newTarget,s[0])):n>=s.length?(e.lists.splice(e.indexs,1),e.lists.splice(s[s.length-1],0,e.indexTxts.innerText),e.dropArea.insertBefore(e.newTarget,s[s.length-1])):(e.lists.splice(e.indexs,1),e.lists.splice(s[n+1],0,e.indexTxts.innerText),e.dropArea.insertBefore(e.newTarget,s[n].nextSibling))}else if(2===t){for(var r=s.length-1;r>=0;r--)s[r].offsetTop<e.newTop&&(n=r,e.newLists.push(s[r].innerText));e.newTarget.style.position="static",n<=0?(e.lists.splice(e.indexs,1),e.lists.splice(s[0],0,e.indexTxts.innerText),e.dropArea.insertBefore(e.newTarget,s[0])):n>=s.length?(e.lists.splice(e.indexs,1),e.lists.splice(s[s.length-1],0,e.indexTxts.innerText),e.dropArea.insertBefore(e.newTarget,s[s.length-1])):(e.lists.splice(e.indexs,1),e.lists.splice(s[n+1],0,e.indexTxts.innerText),e.dropArea.insertBefore(e.newTarget,s[n].nextSibling))}else e.dropArea.insertBefore(e.newTarget,e.indexs);e.oldTop=null,e.newTop=null,e.isDown=!1,e.downTarget=null,e.newTarget=null,e.oBox=null,e.initX=0,e.initY=0,e.indexs=null}this.isDown=!1,this.newTop=this.newTarget.offsetTop,this.oldTop<this.newTop?e(this,1):this.oldTop>this.newTop?e(this,2):e(this,3),this.newLists=[];for(var t=this.$refs.itemList,n=0;n<t.length;n++)this.newLists.push(t[n].innerText)}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"item-box",attrs:{id:"dropArea"},on:{mousemove:function(t){e.move(t)}}},e._l(e.lists,function(t,s){return n("div",{key:s,ref:"itemList",refInFor:!0,staticClass:"item",class:"item"+(s+1),on:{mousedown:function(t){e.down(t)},mouseup:function(t){e.up(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])})),e._v(" "),n("div",{staticClass:"result"},[e._v("数组："+e._s(e.lists))]),e._v(" "),n("div",{staticClass:"result"},[e._v("数组new："+e._s(e.newLists))])])},staticRenderFns:[]};var T=n("VU/8")(f,h,!1,function(e){n("ey+Y")},"data-v-350bc382",null).exports;s.a.use(o.a);var w=new o.a({routes:[{path:"/",name:"Gjf",component:T},{path:"/hello",name:"HelloWorld",component:d}]});s.a.use(a.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:w,components:{App:r},template:"<App/>"})},Rpt1:function(e,t){},"ey+Y":function(e,t){},vGjf:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4248201f6016cf60f6c8.js.map