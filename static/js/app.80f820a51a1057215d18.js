webpackJsonp([1],{"7uvy":function(t,e){},FeoB:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("KQ6f"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("C7Lr")({name:"App"},s,!1,function(t){n("jX5A")},null,null).exports,a=n("KGCO"),r=n("4YfN"),l=n.n(r),u=n("HVJf"),c=(l()({},Object(u.b)({username:function(t){return t.user.name},landType:function(t){return t.landType}})),{data:function(){return{isShow:!0}},computed:l()({},Object(u.b)({username:function(t){return t.user.name},landType:function(t){return t.landType}})),methods:{showToggle:function(){this.isShow=!this.isShow},foundRole:function(){var t=document.getElementsByClassName("username")[0].value;this.$store.commit("newRole",{landType:1,role:t}),this.$store.commit("save"),console.log("创建角色后存档成功")}}}),p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0==t.landType?n("div",{staticClass:"startup-box"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[n("h1",[t._v("开心农场")]),t._v(" "),n("a",{staticClass:"gobtn",attrs:{href:"javascript:;"},on:{click:t.showToggle}},[t._v("开始游戏")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"new-user"},[n("input",{staticClass:"username",attrs:{type:"text",name:"username"},domProps:{value:t.username}}),t._v(" "),n("a",{staticClass:"gobtn",attrs:{href:"javascript:;"},on:{click:t.foundRole}},[t._v("创建角色")])])]):t._e()},staticRenderFns:[]};var d=n("C7Lr")(c,p,!1,function(t){n("ljr8")},"data-v-217539a5",null).exports,h=(l()({url:function(){return"static/images/user.jpeg"}},Object(u.b)({user:function(t){return t.user}})),{components:{},computed:l()({url:function(){return"static/images/user.jpeg"}},Object(u.b)({user:function(t){return t.user}}))}),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-box"},[n("div",{staticClass:"user"},[n("img",{attrs:{src:t.url}})]),t._v(" "),n("div",{staticClass:"user-text"},[n("p",[t._v(t._s(t.user.name))]),t._v(" "),n("p",{staticClass:"gold"},[n("span",[t._v("金币")]),t._v(t._s(t._f("money")(t.user.money)))])])])},staticRenderFns:[]},f=n("C7Lr")(h,m,!1,null,null,null).exports,v=function(t){if(t=parseFloat(t),(t=Math.floor(100*t)/100)<1e4)return t+"元";for(var e="";t>9999;)t/=1e4,t=Math.floor(100*t)/100,e="万"!==e.slice(0,1)?"万"+e:"亿"+(e=e.slice(1));return t+e},g=new o.a({data:function(){return{se:[{name:"grow",src:"static/audio/grow.wav"},{name:"break",src:"static/audio/break.ogg"},{name:"cant",src:"static/audio/cant.ogg"},{name:"coin",src:"static/audio/coin.ogg"},{name:"pot",src:"static/audio/pot.wav"}],bgm:[{name:"town",src:"static/audio/town.ogg"}],bgs:[{name:"rain",src:"static/audio/rain.wav"},{name:"wind",src:"static/audio/wind.ogg"}]}},created:function(){this.initSound(this.se)},methods:{initSound:function(t){t.forEach(function(t){t.$el=new Audio(t.src)})},playSe:function(t){0!==(arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1)&&this.se.forEach(function(e){e.name===t&&(e.$el.currentTime=0,e.$el.oncanplaythrough=function(){e.$el.play()})})}}}),w=(Number,{props:{value:{type:Number,default:0}}}),_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-content",style:"width:"+this.value+"%"})])},staticRenderFns:[]},y=n("C7Lr")(w,_,!1,null,null,null).exports,x=(Object,l()({},Object(u.b)(["user","seVolume","currPlant","effects"]),{postLevelGolden:function(){return{golden:2===this.pot.level}}}),{components:{ProgressBar:y},props:{pot:Object},data:function(){return{inGrowUp:!1,value:0}},methods:{onPlantpotMouseDown:function(){var t=this;if(!this.pot.plant){this.user.money-this.currPlant.cost>=0&&this.$store.commit("setPlant",this.pot);var e=this.pot.plant;this.inGrowUp=!0;var n=e.speed;g.playSe("grow",this.seVolume/100),this.value=0;var o=2;1===this.effects?o=5:2===this.effects?o=20:3===this.effects&&(o=100),this.timer=setInterval(function(){t.value+=100/o,t.value>=100&&(clearInterval(t.timer),t.inGrowUp=!1,t.popMoney(e.profit),t.$store.commit("getPlant",t.pot),t.value=0)},n/o)}},popMoney:function(t){var e=document.createElement("div");e.classList.add("pop-money"),this.effects>0&&e.classList.add("effects"),e.innerHTML=""+v(t),this.$refs.paper.appendChild(e),setTimeout(function(){e.remove()},500)}},computed:l()({},Object(u.b)(["user","seVolume","currPlant","effects"]),{postLevelGolden:function(){return{golden:2===this.pot.level}}})}),S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"paper",staticClass:"plantpot",class:t.postLevelGolden,on:{click:t.onPlantpotMouseDown}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.value>0,expression:"value > 0"}]},[n("ProgressBar",{attrs:{value:t.value}}),t._v(" "),t.pot.plant&&t.effects>0?n("PlantImage",{attrs:{src:t.pot.plant.image}}):t._e(),t._v(" "),t.pot.plant&&t.effects<=0?n("span",[t._v(t._s(t.pot.plant.name))]):t._e()],1)])},staticRenderFns:[]},b=n("C7Lr")(x,S,!1,null,null,null).exports,C=(Object(u.b)(["user","pots"]),{components:{Plantpot:b},data:function(){return{}},methods:{},computed:Object(u.b)(["user","pots"])}),P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"garden"},this._l(this.pots,function(t,n){return e("Plantpot",{key:n,attrs:{pot:t}})}),1)},staticRenderFns:[]},k=n("C7Lr")(C,P,!1,null,null,null).exports,$=(Object(u.b)(["plants","currPlant"]),{components:{},data:function(){return{}},methods:{onPlantChange:function(t){this.$store.commit("changePlant",t)}},computed:Object(u.b)(["plants","currPlant"])}),B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plant-picker"},[n("ul",{staticClass:"plant-list"},t._l(t.plants,function(e){return 0===e.state?n("li",{key:e.name},[n("div",{staticClass:"plant-item",class:{active:t.currPlant.name===e.name},on:{click:function(n){return t.onPlantChange(e.name)}}},[n("PlantImage",{attrs:{src:e.image}}),t._v(" "),n("p",[t._v(t._s(e.name))])],1)]):t._e()}),0)])},staticRenderFns:[]},O=n("C7Lr")($,B,!1,null,null,null).exports,T=(Object(u.b)(["plants","user"]),{data:function(){return{}},methods:{unlockPlant:function(t){1===t.state?(console.log("wo wei jie suo"),this.user.money-t.unlockPrice>=0?(this.$vux.toast.text("解锁成功","top"),this.$store.commit("unlockPlant",t)):this.$vux.toast.text("你都不够钱，嘿嘿","top")):this.$vux.toast.text("你已经解锁过了","top")}},components:{},computed:Object(u.b)(["plants","user"])}),L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"upgrades-list"},t._l(t.plants,function(e){return n("li",{key:e.name},[n("div",{staticClass:"plant-img",on:{click:function(n){return t.unlockPlant(e)}}},[n("PlantImage",{directives:[{name:"show",rawName:"v-show",value:e,expression:"plant"}],attrs:{src:e.image}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:1===e.state,expression:"plant.state === 1"}]},[t._v("未解锁")])],1),t._v(" "),n("div",{staticClass:"plant-text"},[n("p",[t._v("植物："+t._s(e.name))]),t._v(" "),n("p",[t._v("成本："+t._s(t._f("money")(e.cost)))]),t._v(" "),n("p",[t._v("收益："+t._s(t._f("money")(e.profit)))]),t._v(" "),n("p",[t._v("速度: "+t._s(e.speed/1e3)+"秒")]),t._v(" "),n("p",[t._v("解锁："+t._s(t._f("money")(e.unlockPrice)))])])])}),0)])},staticRenderFns:[]},I=n("C7Lr")(T,L,!1,null,null,null).exports,V=(Object(u.b)(["potsPrice","potsPriceGolden","user","pots"]),{data:function(){return{unlock:!1,inConfirm:!1,inLevel:!1}},methods:{showUnlock:function(){this.unlock=!this.unlock},showAddLand:function(){this.inConfirm=!this.inConfirm},showLandLevel:function(){if(this.pots.length<15)return this.$vux.toast.text("先购买15块土地","top"),!1;this.inLevel=!this.inLevel},addLand:function(){this.user.money-this.potsPrice>=0?this.$store.commit("addPlantPot"):this.$vux.toast.text("你不够钱增收土地","top")},landLevel:function(){console.log(this.pots.length),this.$store.commit("addLandLevel")}},components:{Upgrades:I},computed:Object(u.b)(["potsPrice","potsPriceGolden","user","pots"])}),N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"menus"},[n("ul",{staticClass:"menus-list"},[n("li",{on:{click:t.showUnlock}},[n("p",[t._v("解锁植物")])]),t._v(" "),n("li",{on:{click:t.showAddLand}},[n("p",[t._v("添加土地")])]),t._v(" "),n("li",{on:{click:t.showLandLevel}},[n("p",[t._v("升级土地")])])])]),t._v(" "),n("popup",{attrs:{position:"bottom","max-height":"60%"},model:{value:t.unlock,callback:function(e){t.unlock=e},expression:"unlock"}},[n("Upgrades")],1),t._v(" "),n("confirm",{attrs:{title:"确定解锁吗？"},on:{"on-confirm":t.addLand},model:{value:t.inConfirm,callback:function(e){t.inConfirm=e},expression:"inConfirm"}},[n("p",{staticStyle:{"text-align":"center"}},[t._v("需要"+t._s(t._f("money")(t.potsPrice)))])]),t._v(" "),n("confirm",{attrs:{title:"确定升级吗？"},on:{"on-confirm":t.landLevel},model:{value:t.inLevel,callback:function(e){t.inLevel=e},expression:"inLevel"}},[n("p",[t._v("农作物成长速度+20%")]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("需要"+t._s(t._f("money")(t.potsPriceGolden)))])])],1)},staticRenderFns:[]},j=n("C7Lr")(V,N,!1,null,null,null).exports,G={components:{Startup:d,User:f,Garden:k,PlantPicker:O,Menus:j},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit("changePlant","小麦"),this.$nextTick(function(){console.log("读取内存成功1"),t.$store.commit("load"),console.log("读取内存成功2")}),this.loopSeason()},loopSeason:function(){var t=this;this.saveTimer=setInterval(function(){t.$store.commit("save"),console.log("自动存档成功")},3e4)}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-wrap"},[e("Startup"),this._v(" "),e("User"),this._v(" "),e("Garden"),this._v(" "),e("PlantPicker"),this._v(" "),e("Menus")],1)},staticRenderFns:[]},F=n("C7Lr")(G,E,!1,null,null,null).exports;o.a.use(a.a);var M=new a.a({routes:[{path:"/",name:"Index",component:F}]}),R=n("3cXf"),A=n.n(R),X=[{id:1,name:"西红柿",speed:5e3,cost:10,profit:20,unlockPrice:100,state:1,grows:"spring",image:"xihongshi.png",totalGrown:0},{id:2,name:"小麦",speed:1e3,cost:0,profit:1,state:0,grows:"summer",image:"xiaomai.png",totalGrown:0},{id:3,name:"萝卜",speed:7e3,cost:50,profit:200,state:1,unlockPrice:200,grows:"autumn",image:"luobo.png",totalGrown:0},{id:4,name:"白菜",speed:9e3,cost:1e3,profit:3500,state:1,unlockPrice:5e5,grows:"winter",image:"baicai.png",totalGrown:0},{id:5,name:"土豆",speed:1e4,cost:1e4,profit:4e4,unlockPrice:75e5,state:1,grows:"autumn",image:"tudou.png",totalGrown:0},{id:6,name:"豌豆",speed:11e3,cost:1e5,profit:55e4,unlockPrice:9e7,state:1,grows:"spring",image:"wandou.png",totalGrown:0},{id:7,name:"甘蔗",speed:12e3,cost:2e6,profit:8e6,unlockPrice:13e8,state:1,grows:"summer",image:"ganzhe.png",totalGrown:0},{id:8,name:"青椒",speed:13e3,cost:3e7,profit:9e7,unlockPrice:1.8e21,state:1,grows:"winter",image:"qingjiao.png",totalGrown:0}],q={changePlant:function(t,e){t.plants.forEach(function(n){n.name===e&&(t.currPlant=n)})},setPlant:function(t,e){e.plant=t.currPlant,this.commit("costMoney",e.plant.cost)},getPlant:function(t,e){t.user.money+=e.plant.profit,console.log("qian"+this.state.user.money),delete e.plant},addPlantPot:function(t){t.user.money-t.potsPrice>=0&&t.pots.length<15&&(t.pots.push({type:"normal",level:1}),this.commit("costMoney",t.potsPrice),t.potsPrice*=2,t.potsPrice=parseInt(t.potsPrice))},addLandLevel:function(t){if(t.user.money-t.potsPriceGolden>=0)for(var e=0;e<t.pots.length;e++)if(1===t.pots[e].level)return t.pots[e].level=2,this.commit("costMoney",t.potsPriceGolden),t.potsPriceGolden*=2,t.potsPriceGolden=parseInt(t.potsPriceGolden),console.log(t.potsPriceGolden),console.log(t.pots),!1}};o.a.use(u.a);var U={landType:0,user:{name:"张三",money:2e3},plants:X,pots:[{type:"normal",level:1}],potsPrice:1,potsPriceGolden:2e3,seVolume:30,bgmVolume:50,bgsVolume:30,currPlant:{},effects:2},D={isShow:function(t){return t.showFooter},getChangNum:function(){return U.changNum}},H=l()({newRole:function(t,e){t.user.name=e.role,t.landType=e.landType},costMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.user.money-e>=0&&(t.user.money-=e)},unlockPlant:function(t,e){var n=this;t.plants.forEach(function(t){t.name===e.name&&(n.commit("costMoney",e.unlockPrice),t.state=0)})}},q,{save:function(t){var e=t.pots.map(function(t){return{type:t.type,level:t.level}}),n=t.plants.filter(function(t){return 2!==t.state}).map(function(t){return{id:t.id,speed:t.speed,cost:t.cost,profit:t.profit,state:t.state,totalGrown:t.totalGrown}}),o={user:JSON.parse(A()(t.user)),plants:n,pots:e,seVolume:t.seVolume,bgmVolume:t.bgmVolume,bgsVolume:t.bgsVolume,landType:t.landType,effects:t.effects};localStorage.setItem("farmData2",A()(o))},load:function(t){var e=JSON.parse(localStorage.getItem("farmData2"));e&&(t.plants.filter(function(t){return 2!==t.state}).forEach(function(t){e.plants.forEach(function(e){t.id===e.id&&(t.speed=e.speed,t.cost=e.cost,t.profit=e.profit,t.state=e.state,t.totalGrown=e.totalGrown)})}),t.pots=e.pots,t.user=e.user,t.seVolume=e.seVolume,t.bgmVolume=e.bgmVolume,t.bgsVolume=e.bgsVolume,t.landType=e.landType,t.effects=e.effects)}}),W=new u.a.Store({state:U,getters:D,mutations:H}),Z=(String,{name:"PlantImage",props:{src:String},computed:{url:function(){return"static/images/"}}}),z={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"plant",attrs:{src:this.url+this.src,alt:"",draggable:"false"}})},staticRenderFns:[]},J=n("C7Lr")(Z,z,!1,null,null,null).exports,Y=n("ZLEe"),K=n.n(Y),Q=n("5lwt"),tt=n("NlBL"),et=(Boolean,String,String,Boolean,Boolean,Boolean,String,String,Object,Boolean,Boolean,Boolean,{name:"popup",props:{value:Boolean,height:{type:String,default:"auto"},width:{type:String,default:"auto"},showMask:{type:Boolean,default:!0},isTransparent:Boolean,hideOnBlur:{type:Boolean,default:!0},position:{type:String,default:"bottom"},maxHeight:String,popupStyle:Object,hideOnDeactivated:{type:Boolean,default:!0},shouldRerenderOnShow:{type:Boolean,default:!1},shouldScrollTopOnShow:{type:Boolean,default:!1}},created:function(){this.$vux&&this.$vux.config&&"VIEW_BOX"===this.$vux.config.$layout&&(this.layout="VIEW_BOX")},mounted:function(){var t=this;this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling"),this.$nextTick(function(){var e=t;t.popup=new Q.a({showMask:e.showMask,container:e.$el,hideOnBlur:e.hideOnBlur,onOpen:function(){e.fixSafariOverflowScrolling("auto"),e.show=!0},onClose:function(){e.show=!1,window.__$vuxPopups&&K()(window.__$vuxPopups).length>1||document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled")||setTimeout(function(){e.fixSafariOverflowScrolling("touch")},300)}}),t.value&&t.popup.show(),t.initialShow=!1})},deactivated:function(){this.hideOnDeactivated&&(this.show=!1),this.removeModalClassName()},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var e=0;e<this.$overflowScrollingList.length;e++)this.$overflowScrollingList[e].style.webkitOverflowScrolling=t},removeModalClassName:function(){"VIEW_BOX"===this.layout&&tt.a.removeClass(document.body,"vux-modal-open")},doShow:function(){this.popup&&this.popup.show(),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),"VIEW_BOX"===this.layout&&tt.a.addClass(document.body,"vux-modal-open"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)},scrollTop:function(){var t=this;this.$nextTick(function(){t.$el.scrollTop=0;var e=t.$el.querySelectorAll(".vux-scrollable");if(e.length)for(var n=0;n<e.length;n++)e[n].scrollTop=0})}},data:function(){return{layout:"",initialShow:!0,hasFirstShow:!1,shouldRenderBody:!0,show:this.value}},computed:{styles:function(){var t={};if(this.position&&"bottom"!==this.position&&"top"!==this.position?t.width=this.width:t.height=this.height,this.maxHeight&&(t["max-height"]=this.maxHeight),this.isTransparent&&(t.background="transparent"),this.popupStyle)for(var e in this.popupStyle)t[e]=this.popupStyle[e];return t}},watch:{value:function(t){this.show=t},show:function(t){var e=this;this.$emit("input",t),t?this.shouldRerenderOnShow?(this.shouldRenderBody=!1,this.$nextTick(function(){e.scrollTop(),e.shouldRenderBody=!0,e.doShow()})):(this.shouldScrollTopOnShow&&this.scrollTop(),this.doShow()):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1),setTimeout(function(){document.querySelector(".vux-popup-dialog.vux-popup-show")||e.fixSafariOverflowScrolling("touch"),e.removeModalClassName()},200))}},beforeDestroy:function(){this.popup&&this.popup.destroy(),this.fixSafariOverflowScrolling("touch"),this.removeModalClassName()}}),nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-popup-animate-"+t.position}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&!t.initialShow,expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:["vux-popup-"+t.position,t.show?"vux-popup-show":""],style:t.styles},[t.shouldRenderBody?t._t("default"):t._e()],2)])},staticRenderFns:[]};var ot=n("C7Lr")(et,nt,!1,function(t){n("7uvy")},null,null).exports,st=n("9f8V"),it=n("uc2b"),at=(it.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[it.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var lt=n("C7Lr")(at,rt,!1,function(t){n("PY5z")},null,null).exports,ut=(Boolean,Boolean,String,String,Boolean,String,String,String,String,Number,String,String,String,Boolean,Object,Boolean,String,Boolean,Boolean,{name:"confirm",components:{XDialog:lt},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object,showContent:{type:Boolean,default:!0},confirmType:{type:String,default:"primary"},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0}},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{getInputAttrs:function(){return this.inputAttrs||{type:"text"}},setInputValue:function(t){this.msg=t},setInputFocus:function(t){t&&t.preventDefault(),this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}),ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{"dialog-class":"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd",class:{"with-no-content":!t.showContent}},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showContent?[t.showInput?n("div",{staticClass:"vux-prompt"},["checkbox"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.msg)?t._i(t.msg,null)>-1:t.msg},on:{touchend:t.setInputFocus,change:function(e){var n=t.msg,o=e.target,s=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&(t.msg=n.concat([null])):i>-1&&(t.msg=n.slice(0,i).concat(n.slice(i+1)))}else t.msg=s}}},"input",t.getInputAttrs(),!1)):"radio"===t.getInputAttrs().type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.msg,null)},on:{touchend:t.setInputFocus,change:function(e){t.msg=null}}},"input",t.getInputAttrs(),!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder,type:t.getInputAttrs().type},domProps:{value:t.msg},on:{touchend:t.setInputFocus,input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.getInputAttrs(),!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)]:t._e(),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[t.showCancelButton?n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]):t._e(),t._v(" "),t.showConfirmButton?n("a",{staticClass:"weui-dialog__btn",class:"weui-dialog__btn_"+t.confirmType,attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))]):t._e()])],2)],1)},staticRenderFns:[]};var pt=n("C7Lr")(ut,ct,!1,function(t){n("FeoB")},null,null).exports;o.a.component("popup",ot),o.a.component("confirm",pt),o.a.use(st.a),o.a.filter("money",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return v(t)}),o.a.config.productionTip=!1,o.a.component(J.name,J),new o.a({el:"#app",router:M,store:W,components:{App:i},template:"<App/>"})},PY5z:function(t,e){},f4gh:function(t,e,n){"use strict";var o=n("YKQd"),s=(o.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var a=n("C7Lr")(s,i,!1,function(t){n("memq")},null,null);e.a=a.exports},jX5A:function(t,e){},ljr8:function(t,e){},memq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.80f820a51a1057215d18.js.map