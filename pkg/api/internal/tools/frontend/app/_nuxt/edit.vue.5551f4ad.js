var Jt=Object.defineProperty;var Xt=(e,t,n)=>t in e?Jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var K=(e,t,n)=>(Xt(e,typeof t!="symbol"?t+"":t,n),n);import{h as Zt,i as Yt,j as ot,_ as en,a as tn,k as rt}from "./QSelect.575720fa.js";import{a as z,B as N,M as Q,j as d,E as c,P as G,b2 as nn,W as Y,L as Be,O as Re,x as E,$ as j,br as it,a0 as st,aq as ln,ap as an,ae as ut,aK as on,b3 as Qe,F as ct,ah as rn,ai as sn,bs as un,bt as He,ag as $e,bu as Ie,al as cn,ac as dt,bm as dn,K as Pe,aZ as J,v as A,aP as fn,k as w,a2 as vn,bv as mn,bw as gn,ax as bn,bx as ft,J as vt,z as W,by as _n,r as hn,bz as yn,o as mt,c as gt,w as fe,f as Ue,s as pn,u as $,t as bt,bA as Ke,bB as ke,m as Sn,bC as wn,bD as _t,bE as qn,bF as Cn,bf as Pn,b as kn,bG as xn,bH as We,bI as Ge,bJ as X,bK as Je,bL as ue,bM as $n,I as V,Q as Bn}from "./entry.fdfc6421.js";import{b as ht,a as Rn,_ as Xe}from "./selection.b86261a8.js";import{u as Dn}from "./use-quasar.8a292df1.js";const Tn=z({props:["node"],setup(e){return()=>e.node}}),On=N({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e, {slots:t}){const n=Q(),o=d(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return c("td",{class:o.value},G(t.default));const l=n.vnode.key,s=(e.props.colsMap!==void 0?e.props.colsMap[l]:null)||e.props.col;if(s===void 0)return;const{row:i}=e.props;return c("td",{class:o.value+s.__tdClass(i),style:s.__tdStyle(i)},G(t.default))}}}),Fn=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e, {slots:t,emit:n}){const o=Q(),{proxy:{$q:l}}=o,s= i=>{n("click",i)};return()=>{if(e.props===void 0)return c("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:s},G(t.default));let i,u;const v=o.vnode.key;if(v){if(i=e.props.colsMap[v],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const r=i.align==="right"?"unshift":"push";u=nn(t.default,[]),u[r](c(Y,{class:i.__iconClass,name:l.iconSet.table.arrowUp}))}else u=G(t.default);const b={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick: r=>{i.sortable===!0&&e.props.sort(i),s(r)}};return c("th",b,u)}}}),Mn=["horizontal","vertical","cell","none"],jn=N({name:"QMarkupTable",props:{...Be,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator: e=>Mn.includes(e)}},setup(e, {slots:t}){const n=Q(),o=Re(e,n.proxy.$q),l=d(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(o.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>c("div",{class:l.value},[c("table",{class:"q-table"},G(t.default))])}});function yt(e, t){return c("div",e,[c("table",{class:"q-table"},t)])}const Ln={list:ht,table:jn},Vn=["list","table","__qtable"],An=N({name:"QVirtualScroll",props:{...Zt,type:{type:String,default:"list",validator: e=>Vn.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e, {slots:t,attrs:n}){let o;const l=E(null),s=d(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:u,padVirtualScroll:v,onVirtualScrollEvt:b}=Yt({virtualScrollLength:s,getVirtualScrollTarget:C,getVirtualScrollEl:h}),r=d(()=>{if(s.value===0)return[];const T=(O, x)=>({index:i.value.from+x,item:O});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(T):e.itemsFn(i.value.from,i.value.to-i.value.from).map(T)}),m=d(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=d(()=>e.scrollTarget!==void 0?{}:{tabindex:0});j(s,()=>{u()}),j(()=>e.scrollTarget,()=>{p(),y()});function h(){return l.value.$el||l.value}function C(){return o}function y(){o=on(h(),e.scrollTarget),o.addEventListener("scroll",b,Qe.passive)}function p(){o!==void 0&&(o.removeEventListener("scroll",b,Qe.passive),o=void 0)}function B(){let T=v(e.type==="list"?"div":"tbody",r.value.map(t.default));return t.before!==void 0&&(T=t.before().concat(T)),ct(t.after,T)}return it(()=>{u()}),st(()=>{y()}),ln(()=>{y()}),an(()=>{p()}),ut(()=>{p()}),()=>{if(t.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?yt({ref:l,class:"q-table__middle "+m.value},B()):c(Ln[e.type],{...n,ref:l,class:[n.class,m.value],..._.value},B)}}}),En={xs:2,sm:4,md:6,lg:10,xl:14};function Ze(e, t, n){return{transform:t===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const zn=N({name:"QLinearProgress",props:{...Be,...rn,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e, {slots:t}){const{proxy:n}=Q(),o=Re(e,n.$q),l=sn(e,En),s=d(()=>e.indeterminate===!0||e.query===!0),i=d(()=>e.reverse!==e.query),u=d(()=>({...l.value!==null?l.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=d(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),b=d(()=>Ze(e.buffer!==void 0?e.buffer:1,i.value,n.$q)),r=d(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=d(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${o.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),_=d(()=>Ze(s.value===!0?1:e.value,i.value,n.$q)),h=d(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${s.value===!0?"in":""}determinate`),C=d(()=>({width:`${e.value*100}%`})),y=d(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const p=[c("div",{class:m.value,style:b.value}),c("div",{class:h.value,style:_.value})];return e.stripe===!0&&s.value===!1&&p.push(c("div",{class:y.value,style:C.value})),c("div",{class:v.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},ct(t.default,p))}}});let Z=0;const Nn={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Qn=["update:fullscreen","fullscreen"];function Hn(){const e=Q(),{props:t,emit:n,proxy:o}=e;let l,s,i;const u=E(!1);un(e)===!0&&j(()=>o.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&r()}),j(()=>t.fullscreen, m=>{u.value!==m&&v()}),j(u, m=>{n("update:fullscreen",m),n("fullscreen",m)});function v(){u.value===!0?r():b()}function b(){u.value!==!0&&(u.value=!0,i=o.$el.parentNode,i.replaceChild(s,o.$el),document.body.appendChild(o.$el),Z++,Z===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:r},He.add(l))}function r(){u.value===!0&&(l!==void 0&&(He.remove(l),l=void 0),i.replaceChild(o.$el,s),u.value=!1,Z=Math.max(0,Z-1),Z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),o.$el.scrollIntoView!==void 0&&setTimeout(()=>{o.$el.scrollIntoView()})))}return it(()=>{s=document.createElement("span")}),st(()=>{t.fullscreen===!0&&b()}),ut(r),Object.assign(o,{toggleFullscreen:v,setFullscreen:b,exitFullscreen:r}),{inFullscreen:u,toggleFullscreen:v}}function In(e, t){return new Date(e)-new Date(t)}const Un={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator: e=>e==="ad"||e==="da",default:"ad"}};function Kn(e, t, n, o){const l=d(()=>{const{sortBy:u}=t.value;return u&&n.value.find(v=>v.name===u)||null}),s=d(()=>e.sortMethod!==void 0?e.sortMethod:(u, v, b)=>{const r=n.value.find(h=>h.name===v);if(r===void 0||r.field===void 0)return u;const m=b===!0?-1:1,_=typeof r.field=="function"? h=>r.field(h): h=>h[r.field];return u.sort((h, C)=>{let y=_(h),p=_(C);return y==null?-1*m:p==null?1*m:r.sort!==void 0?r.sort(y,p,h,C)*m:$e(y)===!0&&$e(p)===!0?(y-p)*m:Ie(y)===!0&&Ie(p)===!0?In(y,p)*m:typeof y=="boolean"&&typeof p=="boolean"?(y-p)*m:([y,p]=[y,p].map(B=>(B+"").toLocaleString().toLowerCase()),y<p?-1*m:y===p?0:m)})});function i(u){let v=e.columnSortOrder;if(cn(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const m=n.value.find(_=>_.name===u);m!==void 0&&m.sortOrder&&(v=m.sortOrder)}let{sortBy:b,descending:r}=t.value;b!==u?(b=u,r=v==="da"):e.binaryStateSort===!0?r=!r:r===!0?v==="ad"?b=null:r=!1:v==="ad"?r=!0:b=null,o({sortBy:b,descending:r,page:1})}return{columnToSort:l,computedSortMethod:s,sort:i}}const Wn={filter:[String,Object],filterMethod:Function};function Gn(e, t){const n=d(()=>e.filterMethod!==void 0?e.filterMethod:(o, l, s, i)=>{const u=l?l.toLowerCase():"";return o.filter(v=>s.some(b=>{const r=i(b,v)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(u)!==-1}))});return j(()=>e.filter,()=>{dt(()=>{t({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Jn(e, t){for(const n in t)if(t[n]!==e[n])return!1;return!0}function Ye(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Xn={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Zn(e, t){const{props:n,emit:o}=e,l=E(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length>0?n.rowsPerPageOptions[0]:5},n.pagination)),s=d(()=>{const r=n["onUpdate:pagination"]!==void 0?{...l.value,...n.pagination}:l.value;return Ye(r)}),i=d(()=>s.value.rowsNumber!==void 0);function u(r){v({pagination:r,filter:n.filter})}function v(r={}){dt(()=>{o("request",{pagination:r.pagination||s.value,filter:r.filter||n.filter,getCellValue:t})})}function b(r, m){const _=Ye({...s.value,...r});if(Jn(s.value,_)===!0){i.value===!0&&m===!0&&u(_);return}if(i.value===!0){u(_);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?o("update:pagination",_):l.value=_}return{innerPagination:l,computedPagination:s,isServerSide:i,requestServerInteraction:v,setPagination:b}}function Yn(e, t, n, o, l, s){const{props:i,emit:u,proxy:{$q:v}}=e,b=d(()=>o.value===!0?n.value.rowsNumber||0:s.value),r=d(()=>{const{page:x,rowsPerPage:R}=n.value;return(x-1)*R}),m=d(()=>{const{page:x,rowsPerPage:R}=n.value;return x*R}),_=d(()=>n.value.page===1),h=d(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(b.value/n.value.rowsPerPage))),C=d(()=>m.value===0?!0:n.value.page>=h.value),y=d(()=>(i.rowsPerPageOptions.includes(t.value.rowsPerPage)?i.rowsPerPageOptions:[t.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(R=>({label:R===0?v.lang.table.allRows:""+R,value:R})));j(h,(x, R)=>{if(x===R)return;const ee=n.value.page;x&&!ee?l({page:1}):x<ee&&l({page:x})});function p(){l({page:1})}function B(){const{page:x}=n.value;x>1&&l({page:x-1})}function T(){const{page:x,rowsPerPage:R}=n.value;m.value>0&&x*R<b.value&&l({page:x+1})}function O(){l({page:h.value})}return i["onUpdate:pagination"]!==void 0&&u("update:pagination",{...n.value}),{firstRowIndex:r,lastRowIndex:m,isFirstPage:_,isLastPage:C,pagesNumber:h,computedRowsPerPageOptions:y,computedRowsNumber:b,firstPage:p,prevPage:B,nextPage:T,lastPage:O}}const el={selection:{type:String,default:"none",validator: e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},tl=["update:selected","selection"];function nl(e, t, n, o){const l=d(()=>{const C={};return e.selected.map(o.value).forEach(y=>{C[y]=!0}),C}),s=d(()=>e.selection!=="none"),i=d(()=>e.selection==="single"),u=d(()=>e.selection==="multiple"),v=d(()=>n.value.length>0&&n.value.every(C=>l.value[o.value(C)]===!0)),b=d(()=>v.value!==!0&&n.value.some(C=>l.value[o.value(C)]===!0)),r=d(()=>e.selected.length);function m(C){return l.value[C]===!0}function _(){t("update:selected",[])}function h(C, y, p, B){t("selection",{rows:y,added:p,keys:C,evt:B});const T=i.value===!0?p===!0?y:[]:p===!0?e.selected.concat(y):e.selected.filter(O=>C.includes(o.value(O))===!1);t("update:selected",T)}return{hasSelectionMode:s,singleSelection:i,multipleSelection:u,allRowsSelected:v,someRowsSelected:b,rowsSelectedNumber:r,isRowSelected:m,clearSelection:_,updateSelection:h}}function et(e){return Array.isArray(e)?e.slice():[]}const ll={expanded:Array},al=["update:expanded"];function ol(e, t){const n=E(et(e.expanded));j(()=>e.expanded, i=>{n.value=et(i)});function o(i){return n.value.includes(i)}function l(i){e.expanded!==void 0?t("update:expanded",i):n.value=i}function s(i, u){const v=n.value.slice(),b=v.indexOf(i);u===!0?b===-1&&(v.push(i),l(v)):b!==-1&&(v.splice(b,1),l(v))}return{isRowExpanded:o,setExpanded:l,updateExpanded:s}}const rl={visibleColumns:Array};function il(e, t, n){const o=d(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:$e(u[v])?"right":"left",sortable:!0})):[]}),l=d(()=>{const{sortBy:u,descending:v}=t.value;return(e.visibleColumns!==void 0?o.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):o.value).map(r=>{const m=r.align||"right",_=`text-${m}`;return{...r,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:_+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>_+" "+r.classes: h=>_+" "+r.classes(h):()=>_}})}),s=d(()=>{const u={};return l.value.forEach(v=>{u[v.name]=v}),u}),i=d(()=>e.tableColspan!==void 0?e.tableColspan:l.value.length+(n.value===!0?1:0));return{colList:o,computedCols:l,computedColsMap:s,computedColspan:i}}const ce="q-table__bottom row items-center",pt={};ot.forEach(e=>{pt[e]={}});const sl=N({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator: e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...pt,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Be,...Nn,...rl,...Wn,...Xn,...ll,...el,...Un},emits:["request","virtualScroll",...Qn,...al,...tl],setup(e, {slots:t,emit:n}){const o=Q(),{proxy:{$q:l}}=o,s=Re(e,l),{inFullscreen:i,toggleFullscreen:u}=Hn(),v=d(()=>typeof e.rowKey=="function"?e.rowKey: a=>a[e.rowKey]),b=E(null),r=E(null),m=d(()=>e.grid!==!0&&e.virtualScroll===!0),_=d(()=>" q-table__card"+(s.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),h=d(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(s.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),C=d(()=>h.value+(e.loading===!0?" q-table--loading":""));j(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+h.value,()=>{m.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:y,computedPagination:p,isServerSide:B,requestServerInteraction:T,setPagination:O}=Zn(o,I),{computedFilterMethod:x}=Gn(e,O),{isRowExpanded:R,setExpanded:ee,updateExpanded:Pt}=ol(e,n),ve=d(()=>{let a=e.rows;if(B.value===!0||a.length===0)return a;const{sortBy:f,descending:g}=p.value;return e.filter&&(a=x.value(a,e.filter,F.value,I)),Rt.value!==null&&(a=Dt.value(e.rows===a?a.slice():a,f,g)),a}),Te=d(()=>ve.value.length),L=d(()=>{let a=ve.value;if(B.value===!0)return a;const{rowsPerPage:f}=p.value;return f!==0&&(ne.value===0&&e.rows!==a?a.length>le.value&&(a=a.slice(0,le.value)):a=a.slice(ne.value,le.value)),a}),{hasSelectionMode:H,singleSelection:kt,multipleSelection:Oe,allRowsSelected:xt,someRowsSelected:Fe,rowsSelectedNumber:me,isRowSelected:ge,clearSelection:$t,updateSelection:te}=nl(e,n,L,v),{colList:Bt,computedCols:F,computedColsMap:Me,computedColspan:je}=il(e,p,H),{columnToSort:Rt,computedSortMethod:Dt,sort:be}=Kn(e,p,Bt,O),{firstRowIndex:ne,lastRowIndex:le,isFirstPage:_e,isLastPage:he,pagesNumber:ae,computedRowsPerPageOptions:Tt,computedRowsNumber:oe,firstPage:ye,prevPage:pe,nextPage:Se,lastPage:we}=Yn(o,y,p,B,O,Te),Ot=d(()=>L.value.length===0),Ft=d(()=>{const a={};return ot.forEach(f=>{a[f]=e[f]}),a.virtualScrollItemSize===void 0&&(a.virtualScrollItemSize=e.dense===!0?28:48),a});function Mt(){m.value===!0&&r.value.reset()}function jt(){if(e.grid===!0)return Wt();const a=e.hideHeader!==!0?ze:null;if(m.value===!0){const g=t["top-row"],S=t["bottom-row"],q={default: k=>Ve(k.item,t.body,k.index)};if(g!==void 0){const k=c("tbody",g({cols:F.value}));q.before=a===null?()=>k:()=>[a()].concat(k)}else a!==null&&(q.before=a);return S!==void 0&&(q.after=()=>c("tbody",S({cols:F.value}))),c(An,{ref:r,class:e.tableClass,style:e.tableStyle,...Ft.value,scrollTarget:e.virtualScrollTarget,items:L.value,type:"__qtable",tableColspan:je.value,onVirtualScroll:Vt},q)}const f=[At()];return a!==null&&f.unshift(a()),yt({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},f)}function Lt(a, f){if(r.value!==null){r.value.scrollTo(a,f);return}a=parseInt(a,10);const g=b.value.querySelector(`tbody tr:nth-of-type(${a+1})`);if(g!==null){const S=b.value.querySelector(".q-table__middle.scroll"),q=g.offsetTop-e.virtualScrollStickySizeStart,k=q<S.scrollTop?"decrease":"increase";S.scrollTop=q,n("virtualScroll",{index:a,from:0,to:y.value.rowsPerPage-1,direction:k})}}function Vt(a){n("virtualScroll",a)}function Le(){return[c(zn,{class:"q-table__linear-progress",color:e.color,dark:s.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(a, f, g){const S=v.value(a),q=ge(S);if(f!==void 0)return f(Ae({key:S,row:a,pageIndex:g,__trClass:q?"selected":""}));const k=t["body-cell"],P=F.value.map(D=>{const ie=t[`body-cell-${D.name}`],se=ie!==void 0?ie:k;return se!==void 0?se(Et({key:S,row:a,pageIndex:g,col:D})):c("td",{class:D.__tdClass(a),style:D.__tdStyle(a)},I(D,a))});if(H.value===!0){const D=t["body-selection"],ie=D!==void 0?D(zt({key:S,row:a,pageIndex:g})):[c(Pe,{modelValue:q,color:e.color,dark:s.value,dense:e.dense,"onUpdate:modelValue":(se, Gt)=>{te([S],[a],se,Gt)}})];P.unshift(c("td",{class:"q-table--col-auto-width"},ie))}const M={key:S,class:{selected:q}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick= D=>{n("RowClick",D,a,g)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick= D=>{n("RowDblclick",D,a,g)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu= D=>{n("RowContextmenu",D,a,g)}),c("tr",M,P)}function At(){const a=t.body,f=t["top-row"],g=t["bottom-row"];let S=L.value.map((q, k)=>Ve(q,a,k));return f!==void 0&&(S=f({cols:F.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:F.value}))),c("tbody",S)}function Ae(a){return qe(a),a.cols=a.cols.map(f=>J({...f},"value",()=>I(f,a.row))),a}function Et(a){return qe(a),J(a,"value",()=>I(a.col,a.row)),a}function zt(a){return qe(a),a}function qe(a){Object.assign(a,{cols:F.value,colsMap:Me.value,sort:be,rowIndex:ne.value+a.pageIndex,color:e.color,dark:s.value,dense:e.dense}),H.value===!0&&J(a,"selected",()=>ge(a.key),(f, g)=>{te([a.key],[a.row],f,g)}),J(a,"expand",()=>R(a.key), f=>{Pt(a.key,f)})}function I(a, f){const g=typeof a.field=="function"?a.field(f):f[a.field];return a.format!==void 0?a.format(g,f):g}const U=d(()=>({pagination:p.value,pagesNumber:ae.value,isFirstPage:_e.value,isLastPage:he.value,firstPage:ye,prevPage:pe,nextPage:Se,lastPage:we,inFullscreen:i.value,toggleFullscreen:u}));function Nt(){const a=t.top,f=t["top-left"],g=t["top-right"],S=t["top-selection"],q=H.value===!0&&S!==void 0&&me.value>0,k="q-table__top relative-position row items-center";if(a!==void 0)return c("div",{class:k},[a(U.value)]);let P;if(q===!0?P=S(U.value).slice():(P=[],f!==void 0?P.push(c("div",{class:"q-table__control"},[f(U.value)])):e.title&&P.push(c("div",{class:"q-table__control"},[c("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(c("div",{class:"q-table__separator col"})),P.push(c("div",{class:"q-table__control"},[g(U.value)]))),P.length!==0)return c("div",{class:k},P)}const Ee=d(()=>Fe.value===!0?null:xt.value);function ze(){const a=Qt();return e.loading===!0&&t.loading===void 0&&a.push(c("tr",{class:"q-table__progress"},[c("th",{class:"relative-position",colspan:je.value},Le())])),c("thead",a)}function Qt(){const a=t.header,f=t["header-cell"];if(a!==void 0)return a(Ce({header:!0})).slice();const g=F.value.map(S=>{const q=t[`header-cell-${S.name}`],k=q!==void 0?q:f,P=Ce({col:S});return k!==void 0?k(P):c(Fn,{key:S.name,props:P},()=>S.label)});if(kt.value===!0&&e.grid!==!0)g.unshift(c("th",{class:"q-table--col-auto-width"}," "));else if(Oe.value===!0){const S=t["header-selection"],q=S!==void 0?S(Ce({})):[c(Pe,{color:e.color,modelValue:Ee.value,dark:s.value,dense:e.dense,"onUpdate:modelValue":Ne})];g.unshift(c("th",{class:"q-table--col-auto-width"},q))}return[c("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function Ce(a){return Object.assign(a,{cols:F.value,sort:be,colsMap:Me.value,color:e.color,dark:s.value,dense:e.dense}),Oe.value===!0&&J(a,"selected",()=>Ee.value,Ne),a}function Ne(a){Fe.value===!0&&(a=!1),te(L.value.map(v.value),L.value,a)}const re=d(()=>{const a=[e.iconFirstPage||l.iconSet.table.firstPage,e.iconPrevPage||l.iconSet.table.prevPage,e.iconNextPage||l.iconSet.table.nextPage,e.iconLastPage||l.iconSet.table.lastPage];return l.lang.rtl===!0?a.reverse():a});function Ht(){if(e.hideBottom===!0)return;if(Ot.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||l.lang.table.loading:e.filter?e.noResultsLabel||l.lang.table.noResults:e.noDataLabel||l.lang.table.noData,S=t["no-data"],q=S!==void 0?[S({message:g,icon:l.iconSet.table.warning,filter:e.filter})]:[c(Y,{class:"q-table__bottom-nodata-icon",name:l.iconSet.table.warning}),g];return c("div",{class:ce+" q-table__bottom--nodata"},q)}const a=t.bottom;if(a!==void 0)return c("div",{class:ce},[a(U.value)]);const f=e.hideSelectedBanner!==!0&&H.value===!0&&me.value>0?[c("div",{class:"q-table__control"},[c("div",[(e.selectedRowsLabel||l.lang.table.selectedRecords)(me.value)])])]:[];if(e.hidePagination!==!0)return c("div",{class:ce+" justify-end"},Ut(f));if(f.length>0)return c("div",{class:ce},f)}function It(a){O({page:1,rowsPerPage:a.value})}function Ut(a){let f;const{rowsPerPage:g}=p.value,S=e.paginationLabel||l.lang.table.pagination,q=t.pagination,k=e.rowsPerPageOptions.length>1;if(a.push(c("div",{class:"q-table__separator col"})),k===!0&&a.push(c("div",{class:"q-table__control"},[c("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||l.lang.table.recordsPerPage]),c(en,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Tt.value,displayValue:g===0?l.lang.table.allRows:g,dark:s.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":It})])),q!==void 0)f=q(U.value);else if(f=[c("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(ne.value+1,Math.min(le.value,oe.value),oe.value):S(1,Te.value,oe.value)])],g!==0&&ae.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),ae.value>2&&f.push(c(A,{key:"pgFirst",...P,icon:re.value[0],disable:_e.value,onClick:ye})),f.push(c(A,{key:"pgPrev",...P,icon:re.value[1],disable:_e.value,onClick:pe}),c(A,{key:"pgNext",...P,icon:re.value[2],disable:he.value,onClick:Se})),ae.value>2&&f.push(c(A,{key:"pgLast",...P,icon:re.value[3],disable:he.value,onClick:we}))}return a.push(c("div",{class:"q-table__control"},f)),a}function Kt(){const a=e.gridHeader===!0?[c("table",{class:"q-table"},[ze()])]:e.loading===!0&&t.loading===void 0?Le():void 0;return c("div",{class:"q-table__middle"},a)}function Wt(){const a=t.item!==void 0?t.item: f=>{const g=f.cols.map(q=>c("div",{class:"q-table__grid-item-row"},[c("div",{class:"q-table__grid-item-title"},[q.label]),c("div",{class:"q-table__grid-item-value"},[q.value])]));if(H.value===!0){const q=t["body-selection"],k=q!==void 0?q(f):[c(Pe,{modelValue:f.selected,color:e.color,dark:s.value,dense:e.dense,"onUpdate:modelValue":(P, M)=>{te([f.key],[f.row],P,M)}})];g.unshift(c("div",{class:"q-table__grid-item-row"},k),c(fn,{dark:s.value}))}const S={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick= q=>{n("RowClick",q,f.row,f.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick= q=>{n("RowDblclick",q,f.row,f.pageIndex)})),c("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(f.selected===!0?" q-table__grid-item--selected":"")},[c("div",S,g)])};return c("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},L.value.map((f, g)=>a(Ae({key:v.value(f),row:f,pageIndex:g}))))}return Object.assign(o.proxy,{requestServerInteraction:T,setPagination:O,firstPage:ye,prevPage:pe,nextPage:Se,lastPage:we,isRowSelected:ge,clearSelection:$t,isRowExpanded:R,setExpanded:ee,sort:be,resetVirtualScroll:Mt,scrollTo:Lt,getCellValue:I}),dn(o.proxy,{filteredSortedRows:()=>ve.value,computedRows:()=>L.value,computedRowsNumber:()=>oe.value}),()=>{const a=[Nt()],f={ref:b,class:C.value};return e.grid===!0?a.push(Kt()):Object.assign(f,{class:[f.class,e.cardClass],style:e.cardStyle}),a.push(jt(),Ht()),e.loading===!0&&t.loading!==void 0&&a.push(t.loading()),c("div",f,a)}}}),ul=Intl.DateTimeFormat("en-GB",{year:"numeric",month:"short",day:"numeric"}),cl={email:[/email/, e=>e&&w("a",{class:"-text-primary  -no-underline -hover:underline",href:`mailto:${e}`},[e])],date:[/At$/, e=>ul.format(new Date(e))]};function dl(e){var t;return((t=Object.values(cl).find(([n])=>fl(n)(e)))==null?void 0:t[1])||vl}function fl(e){return typeof e=="function"?e:e.test.bind(e)}function vl(e){return typeof e=="boolean"?e?w(Y,{name:"check_circle",color:"positive"},null):w(Y,{name:"remove_circle",color:"negative"},null):e==null?void 0:e.toString()}const ml=N({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e, {slots:t}){const n=d(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${o.length>0?" "+o:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>c("div",{class:n.value},G(t.default))}});function tt(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const gl=vn({name:"close-popup",beforeMount(e, {value:t}){const n={depth:tt(t),handler(o){n.depth!==0&&setTimeout(()=>{const l=mn(e);l!==void 0&&gn(l,o,n.depth)})},handlerKey(o){bn(o,13)===!0&&n.handler(o)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e, {value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=tt(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function bl(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!vt(e)}const St=z({name:"SubActionMenu",directives:{ClosePopup:gl},props:{actions:{},scope:{},level:{type:Number,default:0}},setup(e){const t=d(()=>{const{level:n}=e;return n?{anchor:"top start",self:"top end"}:{offset:[0,10]}});return()=>{var n;return(n=e.actions)!=null&&n.length?w(tn,t.value,{default:()=>[w(ht,{dense:!0,style:"min-width: 100px"},{default:()=>{var o;return[(o=e.actions)==null?void 0:o.map(([l,s,i])=>{var u;return w(Rn,{...s,clickable:!!s.onClick||!!(i!=null&&i.length),onClick:(u=s.onClick)==null?void 0:u.bind(null,e.scope)},{default:()=>[w(Xe,null,{default:()=>[W(" "),l]}),(i==null?void 0:i.length)&&w(Xe,{side:!0},{default:()=>[w(Y,{name:"keyboard_arrow_right"},null)]}),w(St,{actions:i,scope:e.scope,level:e.level+1},null)]})})]}})]}):null}}});function _l(e){return e.map(t=>t&&Array.isArray(t[0])&&Array.isArray(t[0][0])?["more",{icon:"more_vert",color:"secondary",size:"xs",outline:!0,dense:!0},t[0]]:t)}function hl(e){return e.map(t=>{if(!t)return[t];const[n,o,l]=t;return o!=null&&o.onClick?l!=null&&l.length?[[n,o],["more",{..._n(o,["color","size","outline"]),dense:!0},l]]:[t]:[t]}).flat()}const nt=z({name:"AppActionBtns",props:{scope:{},actions:{type:Array,required:!0}},setup(e){const t=d(()=>hl(_l(e.actions))),n=d(()=>t.value.reduce((o, l)=>{var s;return l?(s=o.at(-1))==null||s.push(l):o.push([]),o},[[]]));return()=>w("div",{class:"-flex -gap-4 -items-center"},[n.value.map(o=>{const l=o.map(([s,i,u])=>{var v;return w(A,ft({size:"sm",outline:!0,...i,onClick:(v=i.onClick)==null?void 0:v.bind(null,e.scope)},!!(u!=null&&u.length)&&{iconRight:"expand_more"}),{default:()=>[i.label||"",w(St,{actions:u,scope:e.scope},null)]})});return l.length===1?l[0]:w(ml,null,bl(l)?l:{default:()=>[l]})})])}}),yl={class:"q-table__control"},pl={class:"q-table__title"};function lt(e){const t=typeof e=="string"?{name:e}:e,{name:n,field:o=n,label:l=bt(n)}=t;return{align:"left",format:dl(n),...t,field:o,label:l}}const Sl=z({inheritAttrs:!1}),Ol=z({...Sl,__name:"AppModelList",props:{model:null,columns:null,actions:null},setup(e){const t=e,n=d(()=>(t.columns||t.model.columns||[]).map(lt).concat(lt({name:"actions",classes:"-w-0",align:"center",format(r, m){const _=m.tableActions;return w(nt,{scope:m,actions:_},null)}}))),o=d(()=>t.model.title(1/0)),l=hn({grid:yn(`list-view-${t.model.slug}`,!1)}),{result:s,refetch:i,loading:u,error:v}=t.model.useList(),b=d(()=>[["grid",{icon:l.grid?"table_rows":"grid_view",color:"secondary",round:!0,size:"sm",outline:!0,dense:!0,onClick:()=>l.grid=!l.grid}],["refresh",{icon:"refresh",color:"secondary",round:!0,size:"sm",outline:!0,dense:!0,onClick:()=>i()}],void 0,["add",{icon:"add",color:"primary",size:"md",outline:!1,onClick:()=>t.model.new().edit(),round:!0}]]);return(r, m)=>{var p;const _=rt,h=Tn,C=On,y=sl;return mt(),gt(y,ft({...r.$attrs,columns:$(n),title:$(o),...$(l)},{rows:((p=$(s))==null?void 0:p.data)||[],loading:$(u)}),{top:fe(()=>[Ue("div",yl,[Ue("div",pl,pn($(o)),1)]),w(_),w(nt,{actions:$(b)},null,8,["actions"])]),"body-cell":fe(B=>[w(C,{props:B},{default:fe(()=>[w(h,{node:B.value},null,8,["node"])]),_:2},1032,["props"])]),_:1},16,["rows","loading"])}}});function wl(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!vt(e)}const ql={title:{},content:{default:""},onSubmit:{},actions:{},action:{},cardClasses:{}},Cl=z({props:ql,emits:[...Ke.emits],inheritAttrs:!1,setup(e, {attrs:t,slots:n}){const o=Dn(),l=Ke(),s=d(()=>!!e.onSubmit),{item:i,model:u,title:v}=Pl(e),b=d(()=>{var _;return((_=e.actions)==null?void 0:_.map(h=>typeof h!="object"?{label:h}:h))||[{label:i.value?i.value.exists()?"Update":"Create":"OK",color:"primary",type:s.value?"submit":"button",onClick:s.value?void 0:l.onDialogOK,...e.action}]}),r=d(()=>{const _=$(i);if(_!=null&&_.exists())return async()=>{var h;l.onDialogOK(await((h=i.value)==null?void 0:h.promptDel()))}});async function m(_){var C;const h=await((C=e.onSubmit)==null?void 0:C.call(e,_));l.onDialogOK(h)}return()=>{const _=w(_t,null,[w(ke,{class:["-sticky -top-0 -z-10 -relative",o.dark.isActive?"-bg-dark":"-bg-white"]},{default:()=>[w("div",{class:"text-h6"},[v.value])]}),s.value&&w(ke,{class:"-empty:hidden"},{default:()=>[w(Sn,null,null)]}),w(ke,null,{default:()=>{var y;return[((y=n.default)==null?void 0:y.call(n,{dialog:l}))||e.content||""]}}),w(wn,{class:["-p-16px --mt-16px -sticky -bottom-0",o.dark.isActive?"-bg-dark":"-bg-white"]},{default:()=>{var y,p;return[r.value&&w(A,{color:"negative",size:"xs",onClick:r.value,icon:"delete",round:!0},null),w(rt,null,null),w(A,{flat:!0,outline:!0,onClick:l.onDialogCancel},{default:()=>[W("cancel")]}),(y=n.secondaryActions)==null?void 0:y.call(n,{dialog:l}),((p=n.action)==null?void 0:p.call(n,{dialog:l}))||b.value.map(B=>w(A,B,null))]}})]),h={error(){return""},default(){return _}},C={...t,onSubmit:s.value?m:void 0};return w(Pn,{ref: y=>l.dialogRef.value=y,onHide:l.onDialogHide},{default:()=>[w(qn,{class:["q-dialog-plugin",e.cardClasses]},{default:()=>[s.value?w(Cn,C,wl(h)?h:{default:()=>[h]}):w("div",C,[_])]})]})}}});function Pl(e){const t=d(()=>{let l=Q();for(; l=l==null?void 0:l.parent;)if("item"in(l==null?void 0:l.props))return l.props.item}),n=d(()=>{var l;return(l=$(t))==null?void 0:l.$model}),o=d(()=>{var l,s;return e.title?e.title:$(t)&&$(n)?`${(l=$(t))!=null&&l.exists()?"Edit":"Create"} ${(s=$(n))==null?void 0:s.title(1)}`:"Dialog"});return{item:t,model:n,title:o}}const De=kn(Cl,[["__scopeId","data-v-5af30fc8"]]),xe={component:De,componentProps:{title:"Confirm"}};function at(e){const t=(e==null?void 0:e.component)||xe.component;return e={...xe,...e,componentProps:{...t==De?xe.componentProps:{},...e==null?void 0:e.componentProps}},new Promise(n=>xn.create(e||{}).onOk(n))}class wt{get $id(){return"id"in this?this.id:void 0}set $id(t){this.assign({id:t})}get $model(){return this.constructor}get $name(){return"name"in this?this.name:void 0}assign(t){return typeof t=="object"?Object.assign(this,t):this}clone(){return this.$model.new(this)}exists(){return!!this.$id}promptDel(){const t=this;return at({componentProps:{action:{color:"negative",label:"Delete"},content:w(_t,null,[W("Are you sure you want to")," ",w("span",{class:"-text-negative -uppercase -font-bold"},[W("DELETE")])," ",w("span",{class:!!this.$name&&"-text-primary -font-bold"},[this.$name||"this item"])," ",W("from")," ",w("span",{class:"-text-primary -font-bold"},[this.$model.title()]),W("?")]),async onSubmit(){return t.$model.del(t.$id)}}})}edit(t){return at({...t,componentProps:{...t==null?void 0:t.componentProps,item:this}})}static get slugOne(){return this.slug.slice(0,-1)}static get operations(){const t=We(this.slug),n=t.slice(0,-1);return[Ge.Query[`${t}`],Ge.Query[`${n}`]]}static get docs(){const t=We(this.slug),n=t.slice(0,-1);return{list:X[`${t}Document`],find:X[`${n}Document`],add:X[`Create${n}Document`],update:X[`Update${n}Document`],delete:X[`Delete${n}Document`]}}static title(t=1/0, n=!1){var l,s;return[kl(this.slug,t),(l=this.ref)==null?void 0:l.$name,n&&((s=this.ref)==null?void 0:s.$model.title(void 0,n))].filter(Boolean).reverse().join(" ")}get tableActions(){const t=this;return[["edit",{icon:"edit",color:"primary",size:"xs",outline:!0,onClick:()=>t.edit()}],["delete",{icon:"delete",color:"negative",size:"xs",outline:!0,onClick:()=>t.promptDel()}]]}static new(t){return new this().assign(t)}static get refs(){var t;return[this.ref,...((t=this.ref)==null?void 0:t.$model.refs)??[]].filter(Boolean)}static of(t){var n;return n=class extends this{},K(n,"ref",t),n}static useList(t, n={parse: o=>(o==null?void 0:o.data)||[]}){const o=Je(this.docs.list,t),l=d(()=>{let s=n.parse(o.result.value);return{...o.result.value,data:s==null?void 0:s.map(i=>this.new(i))}});return{...o,result:l}}static useFind(t){const n=Je(this.docs.find,{id:t});return{...n,result:d(()=>{var o;return((o=n.result.value)==null?void 0:o.data)&&this.new(n.result.value.data)})}}static async update(t, n){var o;return ue(this.docs.update,{input:{...((o=this.schemaUpdate)==null?void 0:o.parse(n))??n,id:t.$id}}).then(l=>{var s;return this.flush(),this.new((s=l==null?void 0:l.data)==null?void 0:s.mutation.data)})}static async add(t){var o;const n=Object.fromEntries(this.refs.map(l=>[`${l.$model.slugOne}Id`,l.$id]));return t={...((o=this.schemaAdd)==null?void 0:o.parse(t))??t,...n},ue(this.docs.add,{input:t}).then(l=>{var s;return this.flush(),this.new((s=l==null?void 0:l.data)==null?void 0:s.mutation.data)})}static async del(t){return ue(this.docs.delete,{input:{id:t}}).then(n=>(this.flush(),n))}static flush(){return $n.refetchQueries({include:this.operations})}static async mutate(...t){const[n,o]=t,l=await ue(n,{input:o});return this.flush(),l}}const Fl=wt;function kl(e, t=1/0){let n=bt(typeof e=="string"?e:e.slug);return t==1/0?n:n.replace(/ies$/,"y").replace(/s$/,"")}const qt=V.object({email:V.string().email(),password:V.string().min(4)}),Ct=V.object({email:V.string().email().or(V.string().max(0).optional()),password:V.string().min(4).or(V.string().max(0).optional())});class de extends wt{get $name(){return this.email}get $model(){return super.$model}edit(){return super.edit({component:xl})}}K(de,"slug","users"),K(de,"columns",["email","createdAt"]),K(de,"schemaAdd",qt),K(de,"schemaUpdate",Ct);const xl=z({__name:"edit",props:{item:null},setup(e){const t=e,n=t.item.$model,o=t.item.exists()?Ct:qt,l=E({...o.$default(t.item)});async function s(){return t.item.exists()?n.update(t.item,l.value):n.add(l.value)}return(i, u)=>{const v=Bn,b=De;return mt(),gt(b,{onSubmit:s},{default:fe(()=>[w(v,{modelValue:$(l).email,"onUpdate:modelValue":u[0]||(u[0]= r=>$(l).email=r),modelModifiers:{trim:!0},type:"text",label:"E-mail",autofocus:!t.item.exists(),rules:$(o).shape.email.$rules},null,8,["modelValue","autofocus","rules"]),w(v,{modelValue:$(l).password,"onUpdate:modelValue":u[1]||(u[1]= r=>$(l).password=r),modelModifiers:{trim:!0},label:"Password",rules:$(o).shape.password.$rules},null,8,["modelValue","rules"])]),_:1})}}});export{Fl as M,ml as Q,de as U,Ol as _,De as a,Tn as b,Qn as c,Hn as d,wt as e,at as o,Nn as u};