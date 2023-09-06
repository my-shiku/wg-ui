import{x as b,a$ as j,a0 as x,B as E,M as H,ae as C,a4 as D,ac as M,E as g,b3 as P,$,aK as B,b5 as A,c6 as K,bY as R,j as h,r as T,c7 as U,F as I,ar as Y,b0 as G}from "./entry.fdfc6421.js";function J(){const e=b(!j.value);return e.value===!1&&x(()=>{e.value=!0}),e}const N=typeof ResizeObserver<"u",Q=N===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},W=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e, {emit:p}){let i=null,n,r={width:-1,height:-1};function c(l){l===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),n){const{offsetWidth:l,offsetHeight:o}=n;(l!==r.width||o!==r.height)&&(r={width:l,height:o},p("resize",r))}}const{proxy:f}=H();if(N===!0){let l;const o= d=>{n=f.$el.parentNode,n?(l=new ResizeObserver(c),l.observe(n),s()):d!==!0&&M(()=>{o(!0)})};return x(()=>{o()}),C(()=>{i!==null&&clearTimeout(i),l!==void 0&&(l.disconnect!==void 0?l.disconnect():n&&l.unobserve(n))}),D}else{let d=function(){i!==null&&(clearTimeout(i),i=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",c,P.passive),o=void 0)},v=function(){d(),n&&n.contentDocument&&(o=n.contentDocument.defaultView,o.addEventListener("resize",c,P.passive),s())};const l=J();let o;return x(()=>{M(()=>{n=f.$el,n&&v()})}),C(d),f.trigger=c,()=>{if(l.value===!0)return g("object",{style:Q.style,tabindex:-1,type:"text/html",data:Q.url,"aria-hidden":"true",onLoad:v})}}}}),{passive:_}=P,X=["both","horizontal","vertical"],Z=E({name:"QScrollObserver",props:{axis:{type:String,validator: e=>X.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e, {emit:p}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,r,c;$(()=>e.scrollTarget,()=>{l(),f()});function s(){n!==null&&n();const v=Math.max(0,A(r)),y=K(r),u={top:v-i.position.top,left:y-i.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const z=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";i.position={top:v,left:y},i.directionChanged=i.direction!==z,i.delta=u,i.directionChanged===!0&&(i.direction=z,i.inflectionPoint=i.position),p("scroll",{...i})}function f(){r=B(c,e.scrollTarget),r.addEventListener("scroll",o,_),o(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",o,_),r=void 0)}function o(v){if(v===!0||e.debounce===0||e.debounce==="0")s();else if(n===null){const[y,u]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];n=()=>{u(y),n=null}}}const{proxy:d}=H();return $(()=>d.$q.lang.rtl,s),x(()=>{c=d.$el.parentNode,f()}),C(()=>{n!==null&&n(),l()}),Object.assign(d,{trigger:o,getPosition:()=>i}),D}}),te=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator: e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e, {slots:p,emit:i}){const{proxy:{$q:n}}=H(),r=b(null),c=b(n.screen.height),s=b(e.container===!0?0:n.screen.width),f=b({position:0,direction:"down",inflectionPoint:0}),l=b(0),o=b(j.value===!0?0:R()),d=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=h(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),y=h(()=>o.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),u=h(()=>o.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function z(t){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};f.value=a,e.onScroll!==void 0&&i("scroll",a)}}function V(t){const{height:a,width:m}=t;let w=!1;c.value!==a&&(w=!0,c.value=a,e.onScrollHeight!==void 0&&i("scrollHeight",a),O()),s.value!==m&&(w=!0,s.value=m),w===!0&&e.onResize!==void 0&&i("resize",t)}function k({height:t}){l.value!==t&&(l.value=t,O())}function O(){if(e.container===!0){const t=c.value>l.value?R():0;o.value!==t&&(o.value=t)}}let S=null;const q={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:r,height:c,containerHeight:l,scrollbarWidth:o,totalWidth:h(()=>s.value+o.value),rows:h(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:T({size:0,offset:0,space:!1}),right:T({size:300,offset:0,space:!1}),footer:T({size:0,offset:0,space:!1}),left:T({size:300,offset:0,space:!1}),scroll:f,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t, a, m){q[t][a]=m}};if(Y(G,q),R()>0){let m=function(){t=null,a.classList.remove("hide-scrollbar")},w=function(){if(t===null){if(a.scrollHeight>n.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(m,300)},L=function(F){t!==null&&F==="remove"&&(clearTimeout(t),m()),window[`${F}EventListener`]("resize",w)},t=null;const a=document.body;$(()=>e.container!==!0?"add":"remove",L),e.container!==!0&&L("add"),U(()=>{L("remove")})}return()=>{const t=I(p.default,[g(Z,{onScroll:z}),g(W,{onResize:V})]),a=g("div",{class:d.value,style:v.value,ref:e.container===!0?void 0:r,tabindex:-1},t);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(W,{onResize:k}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:u.value},[a])])]):a}}});export{W as Q,te as _,Z as a,J as u};
