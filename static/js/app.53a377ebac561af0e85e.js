webpackJsonp([1],{"22/n":function(t,e){},Amoz:function(t,e){},I6ZR:function(t,e){},J4PL:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("mtWM"),a=n.n(i),r={name:"top",data:function(){return{openIndex:0,topList:[{name:"首页",url:"#/index"},{name:"在线训练",url:"#/trainType"},{name:"历史记录",url:"#/historyRecord"}]}},computed:{curPath:function(){return"#/"+this.$route.path.split("/")[1]||""}},methods:{jump:function(t){this.openIndex=t,location.href=this.topList[t].url}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("ul",{staticClass:"nav"},t._l(t.topList,function(e,s){return n("li",{key:s,class:["nav_li",{open_code:e.url==t.curPath}],on:{click:function(e){return t.jump(s)}}},[t._v(t._s(e.name))])}),0)])},staticRenderFns:[]};var u=n("VU/8")(r,o,!1,function(t){n("Amoz")},null,null).exports;a.a.defaults.baseURL="http://10.210.225.124:145/";var l={name:"App",components:{top:u}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("top"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(l,c,!1,function(t){n("VVTp")},null,null).exports,h=n("/ocq"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[this._v("\n  系统首页，介绍该系统\n  "),e("div",{staticClass:"introduce"})])}]};var p={path:"/index",name:"index",component:n("VU/8")({name:"index",data:function(){return{}}},d,!1,function(t){n("J4PL")},null,null).exports,meta:{title:"训练系统"}},f={name:"now",data:function(){return{currentdate:""}},mounted:function(){this.getSystemDate()},methods:{getSystemDate:function(){var t=this;setInterval(function(){var e=new Date,n=e.getMonth()+1,s=e.getDate(),i=e.getHours(),a=e.getMinutes(),r=e.getSeconds(),o="";switch(e.getDay()){case 0:o="星期日";break;case 1:o="星期一";break;case 2:o="星期二";break;case 3:o="星期三";break;case 4:o="星期四";break;case 5:o="星期五";break;case 6:o="星期六"}n>=1&&n<=9&&(n="0"+n),s>=0&&s<=9&&(s="0"+s),i>=0&&i<=9&&(i="0"+i),a>=0&&a<=9&&(a="0"+a),r>=0&&r<=9&&(r="0"+r),t.currentdate=e.getFullYear()+"-"+n+"-"+s+" "+i+":"+a+":"+r+" "+o},100)}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"now"},[this._v("\n  "+this._s(this.currentdate)+"\n")])},staticRenderFns:[]};var w=n("VU/8")(f,v,!1,function(t){n("22/n")},null,null).exports,_={name:"trainIndex",components:{now:w},data:function(){return{}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"trainIndex"},[e("now"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var b=n("VU/8")(_,x,!1,function(t){n("p8wp")},null,null).exports,L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selectBox",on:{mouseover:function(e){t.showIdy=!0},mouseleave:function(e){t.showIdy=!1}}},[n("div",{staticClass:"sel_selected"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIdy,expression:"showIdy"}],staticClass:"sel_box"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideInput,expression:"!hideInput"}],staticClass:"sel_input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),t._v(" "),n("i",{staticClass:"search",on:{click:function(e){return t.selectParameter(t.inputData)}}})]),t._v(" "),n("ul",{staticClass:"sel_list"},t._l(t.selectList,function(e){return n("li",{on:{click:function(n){return t.selectParameter(e)}}},[t._v(t._s(e)+"\n      ")])}),0)])])},staticRenderFns:[]};var C={name:"home",components:{myselect:n("VU/8")({name:"index",props:["selectList","title","hideInput"],data:function(){return{showIdy:!1,inputData:""}},methods:{selectParameter:function(t){this.showIdy=!1,this.$emit("selectParameter",t)}}},L,!1,function(t){n("VsRw")},null,null).exports},data:function(){return{wrapShow:!1,ruleList:["加减法","乘法","除法"],rule:0,numberCountList:[2,3,4,5,6,7,8,9,10,15,20],numberCount:2,integerLabel:"整位数",integerBitList:[0,1,2,3,4,5],integerBit:1,floatLabel:"小位数",floatBitList:[0,1,2,3,4,5],floatBit:0,timeList:[.3,.5,1,1.5,2,2.5,3,4,5,6],time:1}},methods:{selectRule:function(t){this.rule=-1==this.ruleList.indexOf(t)?0:this.ruleList.indexOf(t),0==this.rule?(this.integerLabel="整数位",this.integerBit=1,this.floatLabel="小数位",this.floatBit=0):1==this.rule?(this.integerLabel="被乘数",this.integerBit=2,this.floatLabel="乘数位",this.floatBit=1):(this.integerLabel="被除数",this.integerBit=2,this.floatLabel="除数位",this.floatBit=1)},selectNumberCount:function(t){this.numberCount=t},selectIntegerBit:function(t){this.integerBit=t},selectFloatBit:function(t){this.floatBit=t},selectTime:function(t){this.time=t},jump:function(){this.wrapShow=!1,window.location.href="#/trainType/fastComputation?rule="+this.rule+"&numberCount="+this.numberCount+"&integerBit="+this.integerBit+"&floatBit="+this.floatBit+"&time="+this.time}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"butBox"},[n("button",{staticClass:"but",on:{click:function(e){t.wrapShow=!0}}},[t._v("闪算训练")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.wrapShow,expression:"wrapShow"}],staticClass:"wrap",on:{mouseleave:function(e){t.wrapShow=!1}}},[n("h1",[t._v("设置")]),t._v(" "),n("div",{staticClass:"text"},[n("span",[t._v("规   则:")]),t._v(" "),n("myselect",{attrs:{selectList:t.ruleList,title:t.ruleList[t.rule],hideInput:!0},on:{selectParameter:t.selectRule}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.rule,expression:"rule==0"}],staticClass:"text"},[n("span",[t._v("笔   数:")]),t._v(" "),n("myselect",{attrs:{selectList:t.numberCountList,title:t.numberCount+"笔"},on:{selectParameter:t.selectNumberCount}})],1),t._v(" "),n("div",{staticClass:"text"},[n("span",[t._v("时   间:")]),t._v(" "),n("myselect",{attrs:{selectList:t.timeList,title:t.time+"秒"},on:{selectParameter:t.selectTime}})],1),t._v(" "),n("div",{staticClass:"text"},[n("span",[t._v(t._s(t.integerLabel)+":")]),t._v(" "),n("myselect",{attrs:{selectList:t.integerBitList,title:t.integerBit+"位"},on:{selectParameter:t.selectIntegerBit}})],1),t._v(" "),n("div",{staticClass:"text"},[n("span",[t._v(t._s(t.floatLabel)+":")]),t._v(" "),n("myselect",{attrs:{selectList:t.floatBitList,title:t.floatBit+"位"},on:{selectParameter:t.selectFloatBit}})],1),t._v(" "),n("div",{staticClass:"text"},[n("button",{staticClass:"but",on:{click:t.jump}},[t._v("开始")])])])])},staticRenderFns:[]};var y={name:"fastComputation",data:function(){return{answerShow:!1,content:"",params:{},questionContent:"",questionAnswer:0,userAnswer:0,timeOut:null,arr:["准备…","加油!","开始!"],fastList:[]}},mounted:function(){this.params=this.$route.query,this.run()},methods:{run:function(){this.calculation();var t=0,e=this;this.timeOut=setInterval(function(){e.content=e.arr[t],++t>=e.arr.length&&(clearInterval(e.timeOut),e.startFast())},1e3)},startFast:function(){var t=document.getElementsByClassName("content")[0].style,e=null,n=0,s=this;this.timeOut=setInterval(function(){t.visibility="hidden",clearInterval(e),e=setTimeout(function(){t.visibility=""},500),s.content=s.fastList[n],n>=s.fastList.length&&(clearInterval(s.timeOut),s.content="答案?",s.userAnswer="",s.answerShow=!0),n++},1e3*s.params.time)},calculation:function(){switch(this.fastList=[],this.questionContent="",parseInt(this.params.rule)){case 0:var t;this.questionAnswer=0;for(var e=0;e<this.params.numberCount;e++)t=parseFloat((Math.random()*this.RandomNumbers(this.params.integerBit)).toFixed(this.params.floatBit)),Math.floor(2*Math.random()&&0!=e&&this.questionAnswer>t)&&(t=-t),this.fastList[e]=t,this.questionContent+=e?t<0?t:"+"+t:t,this.questionAnswer=parseFloat((this.questionAnswer+t).toFixed(this.params.floatBit));this.questionContent+="=";break;case 1:this.fastList[0]=parseInt(Math.random()*this.RandomNumbers(this.params.integerBit)),this.fastList[1]=parseInt(Math.random()*this.RandomNumbers(this.params.floatBit)),this.questionContent+=this.fastList[0]+"×"+this.fastList[1]+"=",this.questionAnswer=this.fastList[0]*this.fastList[1];break;case 2:this.fastList[0]=parseInt(Math.random()*this.RandomNumbers(this.params.integerBit)),this.fastList[1]=parseInt(Math.random()*this.RandomNumbers(this.params.floatBit)),this.fastList[0]=this.fastList[0]-this.fastList[0]%this.fastList[1],this.questionContent+=this.fastList[0]+"÷"+this.fastList[1]+"=",this.questionAnswer=this.fastList[0]/this.fastList[1]}},commitAnswer:function(){this.questionAnswer==this.userAnswer?confirm("恭喜，算对啦!"):Math.abs(this.questionAnswer-this.userAnswer)<=5?confirm("就差一点就算对了!!!\n你离正确答案只差"+Math.abs(this.questionAnswer-this.userAnswer)):confirm("失败了，再接再厉吧!\n只要功夫深，铁杵磨成针")},RandomNumbers:function(t){for(var e=1,n=1;n<=t;n++)e*=10;return e}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fastComputation"},[n("P",{staticClass:"theme"},[t._v("闪算训练")]),t._v(" "),n("p",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.answerShow,expression:"answerShow"}],staticClass:"answer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userAnswer,expression:"userAnswer"}],attrs:{type:"text",placeholder:"请输入答案"},domProps:{value:t.userAnswer},on:{input:function(e){e.target.composing||(t.userAnswer=e.target.value)}}}),t._v(" "),n("button",{staticClass:"but",on:{click:t.commitAnswer}},[t._v("提交")])])],1)},staticRenderFns:[]};var I={path:"/trainType",component:b,meta:{title:"训练类型选择"},children:[{path:"",redirect:"home"},{path:"home",name:"home",component:n("VU/8")(C,g,!1,function(t){n("T9Ry")},null,null).exports},{path:"fastComputation",name:"fastComputation",component:n("VU/8")(y,B,!1,function(t){n("R2BG")},null,null).exports}]},R={name:"historyIndex",components:{now:w},data:function(){return{}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"historyIndex"},[e("now"),this._v("\n  历史记录的公共页，历史记录的所有子页面都有此段\n  "),e("router-view")],1)},staticRenderFns:[]};var F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n  历史记录的首页\n")])},staticRenderFns:[]};var q={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"historyData"})},staticRenderFns:[]};var E={path:"/historyRecord",component:n("VU/8")(R,A,!1,function(t){n("XqPi")},null,null).exports,meta:{title:"历史记录选择"},children:[{path:"",redirect:"home"},{path:"home",name:"home",component:n("VU/8")({name:"home",data:function(){return{}}},F,!1,function(t){n("oysi")},null,null).exports},{path:"historyData",name:"historyData",component:n("VU/8")({name:"historyData",data:function(){return{}}},q,!1,function(t){n("I6ZR")},null,null).exports}]},N=n("NYxO");s.default.use(N.a);var P=new N.a.Store({state:{userInfo:{userName:""}},mutations:{},actions:{},modules:{questionBank:{state:{},mutations:{},actions:{}}}});s.default.use(h.a);var S=new h.a({routes:[{path:"/",redirect:"/index",meta:{title:"训练系统"}},p,I,E]}),V=n("Au9i"),k=n.n(V);n("zzYx");s.default.use(k.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:S,store:P,components:{App:m},template:"<App/>"})},R2BG:function(t,e){},T9Ry:function(t,e){},VVTp:function(t,e){},VsRw:function(t,e){},XqPi:function(t,e){},oysi:function(t,e){},p8wp:function(t,e){},zzYx:function(t,e){!function(t,e){var n,s=t.document,i=s.documentElement,a=s.querySelector('meta[name="viewport"]'),r=s.querySelector('meta[name="flexible"]'),o=0,u=0,l=e.flexible||(e.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var c=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);c&&(u=parseFloat(c[1]),o=parseInt(1/u))}else if(r){var m=r.getAttribute("content");if(m){var h=m.match(/initial\-dpr=([\d\.]+)/),d=m.match(/maximum\-dpr=([\d\.]+)/);h&&(o=parseFloat(h[1]),u=parseFloat((1/o).toFixed(2))),d&&(o=parseFloat(d[1]),u=parseFloat((1/o).toFixed(2)))}}if(!o&&!u){t.navigator.appVersion.match(/android/gi);var p=t.navigator.appVersion.match(/iphone/gi),f=t.devicePixelRatio;u=1/(o=p?f>=3&&(!o||o>=3)?3:f>=2&&(!o||o>=2)?2:1:1)}if(i.setAttribute("data-dpr",o),!a)if((a=s.createElement("meta")).setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(a);else{var v=s.createElement("div");v.appendChild(a),s.write(v.innerHTML)}function w(){var e=i.getBoundingClientRect().width;e/o>540&&(e=540*o);var n=e/10;i.style.fontSize=n+"px",l.rem=t.rem=n}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(w,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(w,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*o+"px":s.addEventListener("DOMContentLoaded",function(t){s.body.style.fontSize=12*o+"px"},!1),w(),l.dpr=t.dpr=o,l.refreshRem=w,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))}},["NHnr"]);
//# sourceMappingURL=app.53a377ebac561af0e85e.js.map