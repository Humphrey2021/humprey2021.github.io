(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-536d41a3"],{"159b":function(t,n,e){var i=e("da84"),r=e("fdbc"),a=e("17c2"),o=e("9112");for(var c in r){var s=i[c],l=s&&s.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,n,e){"use strict";var i=e("b727").forEach,r=e("a640"),a=e("ae40"),o=r("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1a04":function(t,n,e){},"1cd8":function(t,n,e){"use strict";var i=e("94fc"),r=e.n(i);r.a},"3e21":function(t,n,e){"use strict";e.r(n);var i,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"actionLibrary"},[e("h3",[t._v("完整动作库--初级")]),e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.openAll}},[t._v("展开")]),e("van-button",{attrs:{type:"",size:"mini"},on:{click:function(n){t.activeNames=[]}}},[t._v("收起")])],1),e("van-collapse",{model:{value:t.activeNames,callback:function(n){t.activeNames=n},expression:"activeNames"}},t._l(t.arrData,(function(n,i){return e("van-collapse-item",{key:i,attrs:{title:n.title,name:i}},[e("ul",{class:"动作保护"==n.title?"baohu":""},t._l(n.content,(function(n,i){return e("li",{key:i},[t._v(" "+t._s(i+1)+". "+t._s(n)+" ")])})),0)])})),1)],1)},a=[],o=(e("4160"),e("b0c0"),e("159b"),e("ade3")),c=(e("66b9"),e("b650")),s=(e("68ef"),e("9d70"),e("3743"),e("1a04"),e("bff0"),e("c31d")),l=e("d282"),u=e("a142"),f=e("4598"),d=e("9884"),h=e("7744"),b=e("dfaf"),p=Object(l["a"])("collapse-item"),v=p[0],m=p[1],g=["title","icon","right-icon"],S=v({mixins:[Object(d["a"])("vanCollapse")],props:Object(s["a"])(Object(s["a"])({},b["a"]),{},{name:[Number,String],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){return Object(u["b"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var n=this.parent,e=n.value,i=n.accordion;return i?e===this.currentName:e.some((function(n){return n===t.currentName}))}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,n){var e=this;if(null!==n){t&&(this.show=!0,this.inited=!0);var i=t?this.$nextTick:f["b"];i((function(){var n=e.$refs,i=n.content,r=n.wrapper;if(i&&r){var a=i.offsetHeight;if(a){var o=a+"px";r.style.height=t?0:o,Object(f["a"])((function(){r.style.height=t?o:0}))}else e.onTransitionEnd()}}))}}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,n=this.currentName,e=t.accordion&&n===t.value,i=e?"":n;t.switch(i,!this.expanded)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height="":this.show=!1},genTitle:function(){var t=this,n=this.$createElement,e=this.border,i=this.disabled,r=this.expanded,a=g.reduce((function(n,e){return t.slots(e)&&(n[e]=function(){return t.slots(e)}),n}),{});return this.slots("value")&&(a.default=function(){return t.slots("value")}),n(h["a"],{attrs:{role:"button",tabindex:i?-1:0,"aria-expanded":String(r)},class:m("title",{disabled:i,expanded:r,borderless:!e}),on:{click:this.onClick},scopedSlots:a,props:Object(s["a"])({},this.$props)})},genContent:function(){var t=this.$createElement;if(this.inited)return t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:m("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:m("content")},[this.slots()])])}},render:function(){var t=arguments[0];return t("div",{class:[m({border:this.index&&this.border})]},[this.genTitle(),this.genContent()])}}),x=e("b1d2"),y=Object(l["a"])("collapse"),O=y[0],j=y[1],w=O({mixins:[Object(d["b"])("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,n){this.accordion||(t=n?this.value.concat(t):this.value.filter((function(n){return n!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(){var t,n=arguments[0];return n("div",{class:[j(),(t={},t[x["d"]]=this.border,t)]},[this.slots()])}}),L={components:(i={},Object(o["a"])(i,w.name,w),Object(o["a"])(i,S.name,S),Object(o["a"])(i,c["a"].name,c["a"]),i),data:function(){return{activeNames:[],arrData:[],primary:[{title:"器械训练动作",content:["器械坐姿胸前平推","史密斯机平板卧推","器械坐姿飞鸟","器械坐姿直臂划船","器械坐姿划船","器械高位下拉","器械坐姿推举","史密斯机坐姿推举","器械坐姿反飞鸟","器械仰卧卷腹","器械仰卧卷腹转体","史密斯机下蹲","器械坐姿腿推举","器械坐姿腿屈伸","器械腿弯举","器械腿内收","器械腿外展","史密斯机直立提踵"]},{title:"杠(哑)铃训练动作",content:["杠铃站姿弯举","哑铃锤式弯举","杠铃站姿弯举","单臂哑铃坐姿颈后臂屈伸","单臂哑铃俯身臂屈伸","曲杆杠铃仰卧臂屈伸","杠铃平板卧推","哑铃上斜仰卧飞鸟","杠铃站姿耸肩","杠铃俯身划船","单臂哑铃俯身划船","杠铃站姿推举","哑铃站姿推举","杠铃直立划船","哑铃站姿侧平举","哑铃俯身飞鸟","哑铃下蹲","杠铃下蹲","哑铃后剪蹲","杠铃屈腿硬拉","杠铃直膝硬拉","哑铃提踵"]},{title:"自重训练动作",content:["俯卧撑","半俯卧撑","俯卧挺身","引体向上","仰卧卷腹","仰卧卷腹转体","仰卧举腿","悬垂举腿","下蹲","前剪蹲","后剪蹲"]},{title:"动作保护",content:["单臂哑铃坐姿颈后臂屈伸（轻重量）","单臂哑铃坐姿颈后臂屈伸（大重量）","曲杆杠铃仰卧臂屈伸","杠铃平板卧推","哑铃上斜仰卧飞鸟（轻重量）","哑铃上斜仰卧飞鸟（大重量）","哑铃站姿推举（轻重量）","哑铃站姿推举（大重量）","杠铃下蹲（轻重量）","杠铃下蹲（大重量）"]},{title:"主动拉伸",content:["胸大肌","斜方肌上束","斜方肌中下束","背阔肌","竖脊肌","腹直肌","三角肌前束","三角肌后束","肱二头肌","肱三头肌","臀大肌","股二头肌","股四头肌","腓肠肌","髂腰肌"]},{title:"被动拉伸",content:["胸大肌","三角肌前束","肱二头肌","肱三头肌","臀大肌","股四头肌","股二头肌","腓肠肌","髂腰肌"]},{title:"有氧训练",content:["跑步机","椭圆机","台阶器","固定自行车","划船机"]}],intermediate:[{title:"A组-抗阻训练",content:["钢线拉力器站姿夹胸(高位)","钢线拉力器站姿夹胸(水平位)","钢线拉力器站姿夹胸(低位)","钢线拉力器单臂俯身划船","高位钢线拉力器直臂下压","单臂钢线低位拉力器侧平举","钢线拉力器俯身反飞鸟","钢线拉力器站姿弯举","高位钢线拉力器站姿胸前下压","钢线拉力器卷腹","钢线拉力器站姿转体","钢线拉力器直立直臂划船","弹力带下蹲","弹力带腿弯举","弹力带直膝硬拉","弹力带后摆腿","单腿弹力带站姿腿内收","弹力带胸部推举","弹力带坐姿划船","弹力带俯身划船","弹力带耸肩","弹力带直立推举","弹力带前平举","弹力带侧平举","弹力带俯身反飞鸟","弹力带站姿反飞鸟","弹力带弯举","弹力带单臂屈伸","弹力带转体","弹力带俯身直臂划船","弹力带坐姿直臂划船"]},{title:"B组-抗阻训练",content:["平板支撑","单腿弹力带站姿腿外展","钢线侧摆腿","哑铃侧卧肩外旋","钢线肩内旋","钢线肩外旋","弹力带肩内旋","弹力带肩外旋"]},{title:"C组-抗阻训练",content:["双脚健身球俯卧撑","双手悬吊后仰划船","双手悬吊后仰臂弯举","双手半球夹肘俯卧撑","双腿悬吊平板支撑","双腿悬吊侧支撑","半球俯卧挺身","单臂弹力带健身球坐姿颈后臂屈伸","半球仰卧卷腹转体","单腿悬吊下蹲"]},{title:"PNF伸展练习",content:["胸大肌","股后肌群"]},{title:"泡沫轴练习",content:["斜方肌","背阔肌","臀大肌、臀中肌、臀小肌、梨状肌","股四头肌","腘绳肌","髋内内收肌群(股薄肌、长收肌、大收肌等)","阔筋膜张肌","腓肠肌、比目鱼肌","胫骨前肌"]}],senior:[]}},mounted:function(){this.arrData=this[this.$route.query.id],console.log(this.$route.query.id,this)},methods:{openAll:function(){var t=this;this.primary.forEach((function(n,e){t.activeNames.push(e)}))}}},k=L,C=(e("1cd8"),e("2877")),T=Object(C["a"])(k,r,a,!1,null,"2fbe42f3",null);n["default"]=T.exports},4160:function(t,n,e){"use strict";var i=e("23e7"),r=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},4598:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return l}));var i=e("a142"),r=Date.now();function a(t){var n=Date.now(),e=Math.max(0,16-(n-r)),i=setTimeout(t,e);return r=n+e,i}var o=i["f"]?t:window,c=o.requestAnimationFrame||a;o.cancelAnimationFrame||o.clearTimeout;function s(t){return c.call(o,t)}function l(t){s((function(){s(t)}))}}).call(this,e("c8ba"))},"48f4":function(t,n,e){"use strict";function i(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function r(t,n){var e=n.to,r=n.url,a=n.replace;if(e&&t){var o=t[a?"replace":"push"](e);o&&o.catch&&o.catch((function(t){if(t&&!i(t))throw t}))}else r&&(a?location.replace(r):location.href=r)}function a(t){r(t.parent&&t.parent.$router,t.props)}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"c",(function(){return o}));var o={url:String,replace:Boolean,to:[String,Object]}},"543e":function(t,n,e){"use strict";var i=e("2638"),r=e.n(i),a=e("d282"),o=e("ea8e"),c=e("ba31"),s=Object(a["a"])("loading"),l=s[0],u=s[1];function f(t,n){if("spinner"===n.type){for(var e=[],i=0;i<12;i++)e.push(t("i"));return e}return t("svg",{class:u("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,n,e){if(e.default){var i=n.textSize&&{fontSize:Object(o["a"])(n.textSize)};return t("span",{class:u("text"),style:i},[e.default()])}}function h(t,n,e,i){var a=n.color,s=n.size,l=n.type,h={color:a};if(s){var b=Object(o["a"])(s);h.width=b,h.height=b}return t("div",r()([{class:u([l,{vertical:n.vertical}])},Object(c["b"])(i,!0)]),[t("span",{class:u("spinner",l),style:h},[f(t,n)]),d(t,n,e)])}h.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"}},n["a"]=l(h)},"65f0":function(t,n,e){var i=e("861d"),r=e("e8b5"),a=e("b622"),o=a("species");t.exports=function(t,n){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"66b9":function(t,n,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("e3b3"),e("bc1b")},7744:function(t,n,e){"use strict";var i=e("c31d"),r=e("2638"),a=e.n(r),o=e("d282"),c=e("a142"),s=e("ba31"),l=e("48f4"),u=e("dfaf"),f=e("ad06"),d=Object(o["a"])("cell"),h=d[0],b=d[1];function p(t,n,e,i){var r=n.icon,o=n.size,u=n.title,d=n.label,h=n.value,p=n.isLink,v=e.title||Object(c["b"])(u);function m(){var i=e.label||Object(c["b"])(d);if(i)return t("div",{class:[b("label"),n.labelClass]},[e.label?e.label():d])}function g(){if(v)return t("div",{class:[b("title"),n.titleClass],style:n.titleStyle},[e.title?e.title():t("span",[u]),m()])}function S(){var i=e.default||Object(c["b"])(h);if(i)return t("div",{class:[b("value",{alone:!v}),n.valueClass]},[e.default?e.default():t("span",[h])])}function x(){return e.icon?e.icon():r?t(f["a"],{class:b("left-icon"),attrs:{name:r,classPrefix:n.iconPrefix}}):void 0}function y(){var i=e["right-icon"];if(i)return i();if(p){var r=n.arrowDirection;return t(f["a"],{class:b("right-icon"),attrs:{name:r?"arrow-"+r:"arrow"}})}}function O(t){Object(s["a"])(i,"click",t),Object(l["a"])(i)}var j=p||n.clickable,w={clickable:j,center:n.center,required:n.required,borderless:!n.border};return o&&(w[o]=o),t("div",a()([{class:b(w),attrs:{role:j?"button":null,tabindex:j?0:null},on:{click:O}},Object(s["b"])(i)]),[x(),g(),S(),y(),null==e.extra?void 0:e.extra()])}p.props=Object(i["a"])(Object(i["a"])({},u["a"]),l["c"]),n["a"]=h(p)},"94fc":function(t,n,e){},9884:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}));var i=e("2b0e"),r=e("db85");function a(t,n){var e,a;void 0===n&&(n={});var o=n.indexKey||"index";return i["a"].extend({inject:(e={},e[t]={default:null},e),computed:(a={parent:function(){return this.disableBindRelation?null:this[t]}},a[o]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},a),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(n){return n!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);Object(r["a"])(t,this.parent),this.parent.children=t}}}})}function o(t){return{provide:function(){var n;return n={},n[t]=this,n},data:function(){return{children:[]}}}}},a640:function(t,n,e){"use strict";var i=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&i((function(){e.call(null,n||function(){throw 1},1)}))}},ae40:function(t,n,e){var i=e("83ab"),r=e("d039"),a=e("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,n){if(a(c,t))return c[t];n||(n={});var e=[][t],l=!!a(n,"ACCESSORS")&&n.ACCESSORS,u=a(n,0)?n[0]:s,f=a(n,1)?n[1]:void 0;return c[t]=!!e&&!r((function(){if(l&&!i)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,u,f)}))}},b1d2:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"d",(function(){return c}));var i="#fff",r="van-hairline",a=r+"--top",o=r+"--surround",c=r+"--top-bottom"},b650:function(t,n,e){"use strict";var i=e("c31d"),r=e("2638"),a=e.n(r),o=e("d282"),c=e("ba31"),s=e("b1d2"),l=e("48f4"),u=e("ad06"),f=e("543e"),d=Object(o["a"])("button"),h=d[0],b=d[1];function p(t,n,e,i){var r,o=n.tag,d=n.icon,h=n.type,p=n.color,v=n.plain,m=n.disabled,g=n.loading,S=n.hairline,x=n.loadingText,y={};function O(t){g||m||(Object(c["a"])(i,"click",t),Object(l["a"])(i))}function j(t){Object(c["a"])(i,"touchstart",t)}p&&(y.color=v?p:s["e"],v||(y.background=p),-1!==p.indexOf("gradient")?y.border=0:y.borderColor=p);var w=[b([h,n.size,{plain:v,loading:g,disabled:m,hairline:S,block:n.block,round:n.round,square:n.square}]),(r={},r[s["b"]]=S,r)];function L(){var i,r=[];return g?r.push(t(f["a"],{class:b("loading"),attrs:{size:n.loadingSize,type:n.loadingType,color:"currentColor"}})):d&&r.push(t(u["a"],{attrs:{name:d,classPrefix:n.iconPrefix},class:b("icon")})),i=g?x:e.default?e.default():n.text,i&&r.push(t("span",{class:b("text")},[i])),r}return t(o,a()([{style:y,class:w,attrs:{type:n.nativeType,disabled:m},on:{click:O,touchstart:j}},Object(c["b"])(i)]),[t("div",{class:b("content")},[L()])])}p.props=Object(i["a"])(Object(i["a"])({},l["c"]),{},{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),n["a"]=h(p)},b727:function(t,n,e){var i=e("0366"),r=e("44ad"),a=e("7b0b"),o=e("50c4"),c=e("65f0"),s=[].push,l=function(t){var n=1==t,e=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(h,b,p,v){for(var m,g,S=a(h),x=r(S),y=i(b,p,3),O=o(x.length),j=0,w=v||c,L=n?w(h,O):e?w(h,0):void 0;O>j;j++)if((d||j in x)&&(m=x[j],g=y(m,j,S),t))if(n)L[j]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:s.call(L,m)}else if(u)return!1;return f?-1:l||u?u:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bc1b:function(t,n,e){},bff0:function(t,n,e){},db85:function(t,n,e){"use strict";function i(t){var n=[];function e(t){t.forEach((function(t){n.push(t),t.componentInstance&&e(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&e(t.children)}))}return e(t),n}function r(t,n){var e=n.$vnode.componentOptions;if(e&&e.children){var r=i(e.children);t.sort((function(t,n){return r.indexOf(t.$vnode)-r.indexOf(n.$vnode)}))}}e.d(n,"a",(function(){return r}))},dfaf:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},e3b3:function(t,n,e){},e8b5:function(t,n,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-536d41a3.4741a6bc.js.map