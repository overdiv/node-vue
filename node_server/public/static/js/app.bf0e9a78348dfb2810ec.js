webpackJsonp([8],{0:function(t,n){},1:function(t,n){},KyOI:function(t,n){},LIoP:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},i,!1,function(t){e("vehL")},null,null).exports,a=e("/ocq"),s=e("lbHh"),l=e.n(s),c={data:function(){return{isLogin:l.a.get("token")}},methods:{logout:function(){l.a.remove("token"),location.reload()}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[e("el-menu-item",{staticClass:"welcome-wrapper",attrs:{index:"1"}}),t._v(" "),e("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[e("div",{staticClass:"avatar-wrapper"},[e("i",{staticClass:"el-icon-setting"}),t._v(" "),e("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-link",{staticClass:"inlineBlock",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t.isLogin?e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:t.logout}},[t._v("LogOut")])]):e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:function(n){t.$router.push("/login")}}},[t._v("Login")])]),t._v(" "),t.isLogin?t._e():e("el-dropdown-item",{attrs:{divided:""}},[e("span",{staticStyle:{display:"block"},on:{click:function(n){t.$router.push("/registration")}}},[t._v("Join")])])],1)],1)],1)},staticRenderFns:[]};var d={data:function(){return{}},methods:{roro:function(){console.log(this.$route)}},mounted:function(){console.log(this.$route)}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{attrs:{"show-timeout":200,"default-active":this.$route.path,mode:"vertical","background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#409EFF",router:!0}},[n("el-menu-item",{attrs:{index:"0",route:{name:"HelloWorld"}}},[this._v("HOME")]),this._v(" "),n("el-menu-item",{attrs:{index:"1",route:{name:"NoticeList"}}},[this._v("NOTICE")]),this._v(" "),n("el-menu-item",{attrs:{index:"2",route:{name:"PopupRegister"}}},[this._v("POPUP")])],1)],1)},staticRenderFns:[]},f={components:{Navbar:e("VU/8")(c,u,!1,function(t){e("LIoP")},"data-v-54df1b27",null).exports,Sidebar:e("VU/8")(d,p,!1,null,null,null).exports}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("Sidebar",{staticClass:"sidebar-container"}),this._v(" "),n("div",{staticClass:"main-container"},[n("Navbar"),this._v(" "),n("section",{staticClass:"app-main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var h=e("VU/8")(f,m,!1,function(t){e("KyOI")},null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  페이지를 찾을 수 없습니다\n")])},staticRenderFns:[]};var g=e("VU/8")({},v,!1,function(t){e("bFWL")},null,null).exports;o.default.use(a.a);var _=[{hidden:!0,path:"/login",component:function(){return e.e(3).then(e.bind(null,"T+/8"))}},{path:"/",component:h,children:[{path:"registration",name:"Registration",component:function(){return e.e(6).then(e.bind(null,"KwhX"))}}]},{path:"/",component:h,redirect:"/helloWorld",name:"HelloWorld",hidden:!0,children:[{path:"helloworld",component:function(){return e.e(5).then(e.bind(null,"q/3a"))}}]},{path:"/notice",component:h,children:[{path:"list",name:"NoticeList",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"gVpZ"))}},{hidden:!0,path:"register",name:"NoticeRegister",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"gZMs"))}},{hidden:!0,path:"detail",name:"NoticeDetail",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"uxEq"))}}]},{path:"*",component:g}],b=new a.a({routes:_}),w=e("zL8q"),L=e.n(w),y=(e("tvR6"),e("wUZ8")),k=e.n(y),x=(e("yh13"),e("NYxO")),I=(e("mtWM"),e("mof7"));o.default.use(x.a);var N={state:{id:"",loading:!1},mutations:{SET_ID:function(t,n){t.id=n},SET_LOADING:function(t,n){t.loading=n}},actions:{Login:function(t,n){var e=t.commit;Object(I.g)({userInfo:n}).then(function(t){console.log("==========  res  =========="),console.log(t),console.log("==========  res  =========="),e("SET_ID",t.data.body.LOGIN_ID),l.a.set("token",t.data.body.LOGIN_ID,{expires:1})}).catch(function(t){console.log(t),alert("로그인 정보가 일치하지 않습니다.")}).finally(function(t){e("SET_LOADING",!1)})}}},C=new x.a.Store({modules:{user:N}});o.default.use(L.a,{locale:k.a}),new o.default({el:"#app",router:b,store:C,render:function(t){return t(r)}})},bFWL:function(t,n){},mof7:function(t,n,e){"use strict";e.d(n,"g",function(){return s}),e.d(n,"c",function(){return l}),e.d(n,"b",function(){return c}),e.d(n,"a",function(){return u}),e.d(n,"e",function(){return d}),e.d(n,"d",function(){return p}),e.d(n,"f",function(){return f});var o=e("mtWM"),i=e.n(o),r=e("nFqq"),a=(e.n(r),i.a.create({baseURL:"http://localhost:3000",timeout:5e3})),s=function(t){return a.post("/login",t)},l=function(t){return a.get("/notice/list",{params:t})},c=function(t){return a.get("/notice/detail/"+t)},u=function(t){return a.post("/notice/delete",t)},d=function(t){return a.post("/notice/register",t)},p=function(t){return a.post("/notice/modify",t)},f=function(t){return a.post("/registration",t)}},tvR6:function(t,n){},vehL:function(t,n){},yh13:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.bf0e9a78348dfb2810ec.js.map